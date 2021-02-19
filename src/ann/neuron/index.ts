import { get, isNil, omitBy, pick, random, sum } from 'lodash'

import { Neuronable, NeuronOptions, Normalizable, Strategyable } from '../../types/ann'
import { JsonEntry, ToJsonOptions } from '../../types/utils'
import idGenerator from '../../utils/id-generator'
import { NeuronConnections } from '../connection/neuron-connections'
import { Neurons } from './neurons'

class Neuron implements Neuronable {
  type: string
  id: string
  index: number
  depth: number
  color: string
  value: number
  normalizer: Normalizable | undefined
  bias: number
  delta: number | undefined
  inputs: NeuronConnections | undefined
  strategy: Strategyable | undefined
  outputs: NeuronConnections | undefined
  expectedValue: number | undefined

  constructor(opt: NeuronOptions) {
    this.type = this.constructor.name
    this.id = get(opt, 'id', idGenerator.getId())
    this.index = get(opt, 'index', 0)
    this.depth = get(opt, 'depth', 0)
    this.color = get(opt, 'color', '#909090')
    this.value = Math.random()
    this.normalizer = get(opt, 'normalizer')
    this.bias = get(opt, 'bias', random(-1, 1))
    if (opt.inputs) {
      this.delta = 0
      this.inputs = new NeuronConnections()
      this.strategy = get(opt, 'strategy')
    }
    if (opt.outputs) {
      this.outputs = new NeuronConnections()
    }
    Neurons.all.push(this)
  }

  activate(): void {
    const { bias, inputs, strategy } = this
    if (!strategy || !inputs) {
      return
    }
    const activation = strategy.combine(
      inputs.map((input) => input.source?.value || 0).concat(1),
      inputs.map((input) => input.weight).concat(bias),
    )
    this.value = strategy.activate(activation)
  }

  denormalizeValue(): unknown {
    return this.normalizer?.from(this.value)
  }

  normalizeValue(value: unknown): void {
    this.value = this.normalizer?.to ? this.normalizer.to(value) : 0
  }

  updateDelta(): void {
    const { expectedValue, outputs, strategy, value } = this
    if (typeof expectedValue === 'number') {
      this.delta = expectedValue - value
      return
    }
    if (!strategy || !outputs) {
      return
    }
    const error = sum(outputs.map((output) => output.weight * (output.target?.delta || 0)))
    this.delta = strategy.delta(error, value)
  }

  updateWeights(learningRate: number): void {
    const { bias, delta, inputs, strategy } = this
    if (!strategy || delta === undefined) {
      return
    }
    const minWeight = get(strategy, 'options.minWeight')
    const maxWeight = get(strategy, 'options.maxWeight')
    if (inputs && !inputs.isEmpty()) {
      inputs.updateWeights(delta, learningRate, minWeight, maxWeight)
    }
    this.bias = bias + delta * learningRate
  }

  toJson(options: ToJsonOptions): JsonEntry {
    const jsonableConfig = { withoutValues: false, ...options }
    const { withoutValues } = jsonableConfig
    return omitBy(
      {
        ...pick(this, 'bias', 'depth', 'id', 'index', 'type'),
        normalizerRef: this.normalizer && this.normalizer.id,
        // eslint-disable-next-line sort-keys
        normalizerOptions: this.normalizer ? this.normalizer.options : undefined,
        strategy: this.strategy && this.strategy.toJson(options),
        ...(!withoutValues && {
          delta: this.delta,
          value: this.value,
        }),
      },
      isNil,
    )
  }
}

export { Neuron }
