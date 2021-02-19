import { round } from 'lodash'

import { WorkerHandlable } from './types/worker'
import { dom, refreshNeuronConnections, refreshNeurons } from './ui'
import log from './utils/log'

const workerHandler: WorkerHandlable = {
  handleMessage: ({ data: jsonData }) => {
    const data = JSON.parse(jsonData)
    const { type } = data
    log.info(`main thread received data of type : ${type}`)
    switch (type) {
      case 'Neurons': {
        refreshNeurons(data.items)
        break
      }
      case 'NeuronConnections': {
        refreshNeuronConnections(data.items)
        break
      }
      case 'runResult': {
        const { outputs } = data
        dom.outputs.value = outputs.join(' ')
        break
      }
      case 'trainingIteration': {
        const { expectedMaxIterations, iterations } = data
        log.info(`training iteration : ${iterations}`)
        dom.progess.style.width = `${Math.round((iterations * 100) / expectedMaxIterations)}%`
        break
      }
      case 'trainingResult': {
        const { trainingResult } = data
        const { averageDuration, equalToExpected, iterations, totalDuration } = trainingResult
        const stats = [
          `- iterations done : ${iterations}`,
          `- average duration : ${round(averageDuration / 1e3, 2)}s`,
          `- total duration : ${round(totalDuration / 1e3, 2)}s`,
        ]
        if (equalToExpected) {
          alert(
            [
              'Training success!',
              '',
              ...stats,
              '',
              'The network is now ready to evaluate inputs :-)',
            ].join('\n'),
          )
        } else {
          alert(['Training fail!', '', ...stats].join('\n'))
        }
        break
      }
    }
  },
  init: () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    workerHandler.worker = new Worker(new URL('./worker.ts', import.meta.url))
    workerHandler.worker.onmessage = workerHandler.handleMessage
  },
  kill: () => {
    if (!workerHandler.worker) {
      return
    }
    workerHandler.worker.terminate()
    workerHandler.worker = undefined
  },
  reset: (category, type) => {
    workerHandler.worker?.postMessage({ category, cmd: 'reset', type })
  },
  run: (inputs) => {
    workerHandler.worker?.postMessage({ cmd: 'run', inputs })
  },
  train: () => {
    workerHandler.worker?.postMessage({ cmd: 'train' })
  },
}

export default workerHandler
