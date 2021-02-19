import { get, isEqual, reverse } from 'lodash'

import {
  NetworkConfig,
  NetworkOptions,
  Strategyable,
  TrainingOptions,
  TrainingResult,
  TrainingUsecase,
} from '../types/ann'
import { JsonEntry, JsonMap, ToJsonOptions } from '../types/utils'
import { mapCount, toArray } from '../utils/helper'
import log from '../utils/log'
import { NeuronConnection } from './connection'
import { NeuronConnections } from './connection/neuron-connections'
import { HiddenLayer } from './layer/hidden-layer'
import { HiddenLayers } from './layer/hidden-layers'
import { InputLayer } from './layer/input-layer'
import { OutputLayer } from './layer/output-layer'
import { InterNeuron } from './neuron/inter-neuron'
import { MotorNeuron } from './neuron/motor-neuron'
import { Neurons } from './neuron/neurons'
import { SensoryNeuron } from './neuron/sensory-neuron'
import normalizers from './normalizer'
import DefaultNormalizer from './normalizer/default'
import strategies from './strategy'
import { identityStrategy } from './strategy/identity'

class AnnNetwork {
  static build(config: NetworkConfig): AnnNetwork {
    const { id } = config
    const strategy = strategies.get(config.strategy.id) || identityStrategy
    strategy.options = config.strategy.options
    let inputLayer: InputLayer | undefined,
      hiddenLayers: HiddenLayers | undefined,
      outputLayer: OutputLayer | undefined
    if (config.inputs) {
      inputLayer = new InputLayer(
        ...config.inputs.map((item, index) => {
          const Normalizer = normalizers.get(item.normalizerRef) || DefaultNormalizer
          const normalizer = new Normalizer(item.normalizerOptions)
          return new SensoryNeuron({
            bias: item.bias,
            id: item.id,
            index,
            normalizer,
          })
        }),
      )
    }
    if (config.hiddenLayers) {
      hiddenLayers = new HiddenLayers(
        ...config.hiddenLayers.map(
          (hiddenLayer) =>
            new HiddenLayer(
              ...hiddenLayer.map((item) => {
                return new InterNeuron({ ...item, strategy })
              }),
            ),
        ),
      )
    } else if (config.hiddenLayersCounts) {
      hiddenLayers = new HiddenLayers(
        ...config.hiddenLayersCounts.map(
          (count, depth) =>
            new HiddenLayer(
              ...mapCount<InterNeuron>(
                count,
                (index) =>
                  new InterNeuron({
                    depth: depth + 1,
                    index,
                    strategy,
                  }),
              ),
            ),
        ),
      )
    }
    if (config.outputs) {
      outputLayer = new OutputLayer(
        ...config.outputs.map((item, index) => {
          const Normalizer = normalizers.get(item.normalizerRef) || DefaultNormalizer
          const normalizer = new Normalizer(item.normalizerOptions)
          return new MotorNeuron({
            bias: item.bias,
            depth: (hiddenLayers ? hiddenLayers.length : 0) + 1,
            id: item.id,
            index,
            normalizer,
            strategy,
          })
        }),
      )
    }
    const network = new AnnNetwork({
      hiddenLayers,
      id,
      inputLayer,
      outputLayer,
      strategy,
    })
    if (config.connections) {
      config.connections.map((item) => {
        return new NeuronConnection({
          id: item.id,
          source: Neurons.get(item.sourceRef),
          target: Neurons.get(item.targetRef),
          weight: item.weight,
        })
      })
    } else {
      network.connect()
    }
    return network
  }

  id: string
  inputLayer: InputLayer | undefined
  hiddenLayers: HiddenLayers | undefined
  outputLayer: OutputLayer | undefined
  strategy: Strategyable

  constructor(opt: NetworkOptions) {
    const { id, inputLayer, hiddenLayers, outputLayer, strategy } = opt
    this.id = id
    this.inputLayer = inputLayer
    this.hiddenLayers = hiddenLayers
    this.outputLayer = outputLayer
    this.strategy = strategy
  }

  connect(): void {
    const firstHiddenLayer = this.hiddenLayers?.first
    const lastHiddenLayer = this.hiddenLayers?.last
    if (this.inputLayer) {
      const inputTargetLayer = firstHiddenLayer ? firstHiddenLayer : this.outputLayer
      if (inputTargetLayer) {
        this.inputLayer?.connectTo(inputTargetLayer)
      }
    }
    if (lastHiddenLayer && this.hiddenLayers && this.outputLayer) {
      this.hiddenLayers.reduce((prevLayer, nextLayer) => {
        prevLayer.connectTo(nextLayer)
        return nextLayer
      })
      lastHiddenLayer.connectTo(this.outputLayer)
    }
  }

  setInputValue(index: number, value: unknown): void {
    const neuron = this.inputLayer?.get(index)
    neuron?.normalizeValue(value)
  }

  setInputValues(values: number[]): void {
    if (this.inputLayer) {
      this.inputLayer.forEach((__, index) => {
        this.setInputValue(index, values[index])
      })
    }
  }

  getOutputValue(index: number): unknown {
    const neuron = this.outputLayer?.get(index)
    return neuron && neuron.denormalizeValue()
  }

  getOutputValues(): unknown[] {
    return this.outputLayer?.map((__, index) => this.getOutputValue(index)) || []
  }

  run(inputs: number[]): unknown[] {
    this.setInputValues(inputs)
    this.hiddenLayers?.activate()
    this.outputLayer?.activate()
    return this.getOutputValues()
  }

  adjustFromUsecase(usecase: TrainingUsecase, learningRate = 0.2): boolean {
    const outputValues = this.getOutputValues()
    const isEqualToExpected = isEqual(outputValues, toArray(usecase.outputs))
    if (!isEqualToExpected) {
      const outputs = toArray(usecase.outputs)
      this.outputLayer?.forEach((neuron, index) => {
        if (!neuron.normalizer?.to) {
          return
        }
        neuron.expectedValue = neuron.normalizer.to(outputs[index])
        neuron.updateDelta()
        neuron.updateWeights(learningRate)
      })
      if (this.hiddenLayers?.items) {
        reverse(this.hiddenLayers.items).forEach((layer) => {
          layer.forEach((neuron) => {
            neuron.updateDelta()
            neuron.updateWeights(learningRate)
          })
        })
      }
    }
    return isEqualToExpected
  }

  trainUsecase(usecase: TrainingUsecase, learningRate: number): boolean {
    this.run(usecase.inputs)
    return this.adjustFromUsecase(usecase, learningRate)
  }

  trainUsecases(usecases: TrainingUsecase[], learningRate: number): boolean {
    return usecases.reduce<boolean>(
      (acc, usecase) => this.trainUsecase(usecase, learningRate) && acc,
      true,
    )
  }

  async train(opt: TrainingOptions): Promise<TrainingResult> {
    log.info('starting training...')
    const usecases = get(opt, 'usecases')
    log.info(
      'usecases :',
      usecases
        .slice(0, 10)
        .map(
          ({ inputs, outputs }) =>
            `${inputs.join(',')} : ${Array.isArray(outputs) ? outputs.join(',') : outputs}`,
        )
        .join('\n'),
    )
    const expectedMaxIterations = get(opt, 'expectedMaxIterations')
    const learningRate = get(opt, 'learningRate', 0.2)
    const hook = get(opt, 'hook')
    const startTime = performance.now()
    const result: TrainingResult = {
      averageDuration: 0,
      equalToExpected: true,
      iterations: 0,
      totalDuration: 0,
    }
    let hookResult: boolean | undefined = true
    do {
      result.iterations += 1
      result.equalToExpected = this.trainUsecases(usecases, learningRate)
      if (typeof hook === 'function') {
        hookResult = await hook(result)
      }
    } while (
      hookResult !== false &&
      !result.equalToExpected &&
      result.iterations < expectedMaxIterations
    )
    if (result.iterations) {
      const endTime = performance.now()
      result.totalDuration = endTime - startTime
      result.averageDuration = Math.round(result.totalDuration / result.iterations)
    }
    log.info('training result :', result)
    return result
  }

  toJson(options: ToJsonOptions): JsonEntry {
    const inputs = (this.inputLayer?.toJson(options).items as JsonMap[]).map((item) => {
      // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
      const { type, ...data } = item
      return data
    })
    const hiddenLayers = (this.hiddenLayers?.toJson(options).items as JsonMap[]).map(
      (hiddenLayer) => {
        return (hiddenLayer.items as JsonMap[]).map((item) => {
          // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
          const { strategy, type, ...data } = item
          return data
        })
      },
    )
    const outputs = (this.outputLayer?.toJson(options).items as JsonMap[]).map((item) => {
      // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
      const { strategy, type, ...data } = item
      return data
    })
    const connections = (NeuronConnections.all.toJson(options).items as JsonMap[]).map((item) => {
      // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
      const { type, ...data } = item
      return data
    })
    return {
      id: this.id,
      inputs,
      // eslint-disable-next-line sort-keys
      hiddenLayers,
      outputs,
      strategy: this.strategy.toJson(options),
      // eslint-disable-next-line sort-keys
      connections,
    }
  }
}

export { AnnNetwork }
