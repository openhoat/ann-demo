import 'vis-network/dist/dist/vis-network.min.css'

import { compact, get, invert, round } from 'lodash'
import { DataSet } from 'vis-data'
import { Network } from 'vis-network'

import config from './config'
import { locales } from './locales'
import { NeuronConnectionData, NeuronData, WorkerHandlable } from './types/worker'
import log from './utils/log'

const getElementById = <K extends keyof HTMLElementTagNameMap>(id: string) => {
  const domElt = document.getElementById(id)
  if (!domElt) {
    throw new Error(`DOM element not found given id '${id}'`)
  }
  return domElt as HTMLElementTagNameMap[K]
}

const dom = {
  body: getElementById<'body'>('body'),
  cancelBtn: getElementById<'button'>('cancel'),
  container: getElementById<'div'>('graph-container'),
  form: getElementById<'form'>('form'),
  inputs: getElementById<'input'>('inputs'),
  networkName: getElementById<'span'>('networkName'),
  networkSelect: getElementById<'select'>('network'),
  outputs: getElementById<'input'>('outputs'),
  progess: getElementById<'div'>('progress'),
  runBtn: getElementById<'input'>('run'),
  trainBtn: getElementById<'button'>('train'),
  usecases: getElementById<'datalist'>('usecases'),
}

const networkTypeOptions = Object.keys(config.networks)
  .reduce<string[]>(
    (acc, category) => [
      ...acc,
      ...Object.keys(config.networks[category]).map((type) => `${category} / ${type}`),
    ],
    [],
  )
  .sort()

const initUi = ({
  init,
  train,
  run,
  kill,
  reset,
}: {
  init: WorkerHandlable['init']
  train: WorkerHandlable['train']
  run: WorkerHandlable['run']
  kill: WorkerHandlable['kill']
  reset: WorkerHandlable['reset']
}): void => {
  dom.form.onsubmit = () => false
  dom.trainBtn.onclick = () => {
    train()
  }
  dom.runBtn.onclick = () => {
    const inputs = dom.inputs.value.split(/[ ,;]+/)
    void run(inputs)
  }
  dom.cancelBtn.onclick = () => {
    kill()
    init()
    initNetworkConfig()
  }
  networkTypeOptions.forEach((networkType) => {
    const option = document.createElement('option')
    option.text = networkType
    dom.networkSelect.add(option)
  })
  const getNetworkType = () => {
    if (!dom.networkSelect.value) {
      return undefined
    }
    const [category, type] = dom.networkSelect.value.replace(' / ', '.').split('.')
    return { category, type }
  }
  const saveSelectedNetwork = () => {
    localStorage['lastSelectedNetwork'] = dom.networkSelect.value
  }
  const getSelectedNetwork = () => {
    return localStorage['lastSelectedNetwork']
  }
  const initNetworkConfig = () => {
    const networkType = getNetworkType()
    if (!networkType) {
      return
    }
    const { category, type } = networkType
    saveSelectedNetwork()
    const networkConfig = get(config.networks, [category, type])
    dom.networkName.innerText = networkConfig.id
    reset(category, type)
    nodes.clear()
    edges.clear()
    dom.usecases.innerHTML =
      networkConfig.training?.usecases
        ?.map((usecase) => {
          const usecaseInputString = usecase.inputs.join(' ')
          const option = document.createElement('option')
          option.value = usecaseInputString
          return option.outerHTML
        })
        .join('\n') || ''
  }
  dom.networkSelect.value = getSelectedNetwork()
  dom.networkSelect.onchange = initNetworkConfig
  initNetworkConfig()
  dom.body.style.display = 'block'
}

const refreshNeuron = (neuron: NeuronData): void => {
  const { bias, depth, id, index, type, value: neuronValue } = neuron
  log.info(`refresh neuron #${id} [${type}] : value=${neuronValue}, bias=${bias}`)
  const biasLine = typeof bias === 'number' ? `bias : ${round(bias, 2)}` : undefined
  const valueLine = `value : ${round(neuronValue, 3)}`
  const title = compact([biasLine, valueLine]).join('\n')
  const node = nodes.get(id)
  if (node) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    nodes.update({ id, title })
    return
  }
  const label = `#${id}`
  const color = nodeColors[get(invert(['SensoryNeuron', 'InterNeuron', 'MotorNeuron']), type, 0)]
  const data = {
    ...defaultNode,
    color,
    id,
    label,
    title,
    x: depth * 200 + 50,
    y: index * 50 + 50,
  }
  nodes.add(data)
}

const refreshNeurons = (neurons: NeuronData[]): void => {
  neurons.forEach((neuron) => {
    refreshNeuron(neuron)
  })
}

const refreshNeuronConnection = (neuronConnection: NeuronConnectionData): void => {
  const { id, sourceRef: from, targetRef: to, weight } = neuronConnection
  const existingEdge = edges.get(id)
  const label = `${round(weight, 2)}`
  if (!existingEdge) {
    const newEdge = {
      ...defaultEdge,
      from,
      id,
      label,
      to,
    }
    edges.add(newEdge)
  }
  const data = { id, label }
  edges.update(data)
}

const refreshNeuronConnections = (neuronConnections: NeuronConnectionData[]): void => {
  neuronConnections.forEach((neuronConnection) => {
    refreshNeuronConnection(neuronConnection)
  })
}

const nodeColors = ['#46c919', '#a8a8a8', '#4382f5'],
  defaultNode = {
    borderWidth: 0,
    color: nodeColors[0],
    font: { bold: true, color: 0 },
    margin: 10,
    shape: 'circle',
  },
  edgeColors = ['#fa893e'],
  defaultEdge = {
    arrows: 'to',
    color: edgeColors[0],
  },
  nodes = new DataSet(),
  edges = new DataSet(),
  options = {
    autoResize: true,
    edges: { smooth: false },
    height: '100%',
    locales,
    physics: false,
    width: '100%',
  },
  data = {
    edges,
    nodes,
  }

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
new Network(dom.container, data, options)

export {
  defaultEdge,
  defaultNode,
  dom,
  edges,
  initUi,
  networkTypeOptions,
  nodeColors,
  nodes,
  refreshNeuron,
  refreshNeuronConnection,
  refreshNeuronConnections,
  refreshNeurons,
}
