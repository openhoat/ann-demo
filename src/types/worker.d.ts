export interface WorkerHandlable {
  worker?: Worker
  init: () => void
  handleMessage: ({ data: JsonEntry }) => void
  kill: () => void
  reset: (category: string, type: string) => void
  run: (inputs: string[]) => void
  train: () => void
}

export interface NeuronData {
  bias?: number
  depth: number
  id: string
  index: number
  type: string
  value: number
}

export interface NeuronConnectionData {
  id: string
  sourceRef: string
  targetRef: string
  weight: number
}
