import { dump } from 'js-yaml'
import { get } from 'lodash'

import { AnnNetwork } from './ann'
import { NeuronConnections } from './ann/connection/neuron-connections'
import { Neurons } from './ann/neuron/neurons'
import config from './config'
import { NetworkConfig, TrainingResult } from './types/ann'
import { JsonEntry } from './types/utils'
import { delay } from './utils/helper'
import idGenerator from './utils/id-generator'
import log from './utils/log'
import { Timer } from './utils/timer'

let networkConfig: NetworkConfig, network

const postJsonMessage = (o: JsonEntry): void => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  postMessage(JSON.stringify(o))
}

onmessage = async ({ data }) => {
  const { cmd } = data
  log.info(`worker received ${cmd} command`)
  switch (cmd) {
    case 'reset': {
      const { category, type } = data
      Neurons.all.clear()
      NeuronConnections.all.clear()
      idGenerator.clearIds()
      networkConfig = get(config.networks, [category, type])
      network = AnnNetwork.build(networkConfig)
      postJsonMessage(Neurons.all.toJson())
      postJsonMessage(NeuronConnections.all.toJson())
      break
    }
    case 'run': {
      const { inputs } = data
      const outputs = await network.run(
        inputs.map((item, index) => {
          const input = network.inputLayer.get(index)
          switch (input.normalizer.id) {
            case 'boolean':
              return item === 'true'
            case 'integer':
              return parseInt(item, 10)
            case 'string':
            default:
              return item
          }
        }),
      )
      postJsonMessage({ outputs, type: 'runResult' })
      postJsonMessage(Neurons.all.toJson())
      break
    }
    case 'train': {
      const { training } = networkConfig
      const { expectedMaxIterations, learningRate, usecases } = training
      const hook = async ({ iterations }: TrainingResult): Promise<boolean | void> => {
        postJsonMessage({ expectedMaxIterations, iterations, type: 'trainingIteration' })
        await delay(50)
      }
      const timer = new Timer({
        freq: 500,
        handle: () => {
          postJsonMessage(NeuronConnections.all.toJson())
        },
      })
      timer.start()
      const trainingResult = await network.train({
        expectedMaxIterations,
        hook,
        learningRate,
        usecases,
      })
      timer.stop()
      const networkExport = network.toJson({ withoutValues: true })
      if (trainingResult.equalToExpected) {
        console.log(dump({ ...networkExport, training }, { noRefs: true }))
      }
      postJsonMessage(NeuronConnections.all.toJson())
      postJsonMessage({ trainingResult, type: 'trainingResult' })
      break
    }
  }
}
