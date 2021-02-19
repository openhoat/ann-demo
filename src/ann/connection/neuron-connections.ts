import { JsonableCollection } from '../../utils/jsonable-collection'
import { NeuronConnection } from './index'

class NeuronConnections extends JsonableCollection<NeuronConnection> {
  static all: NeuronConnections = new NeuronConnections()

  static get(id: string): NeuronConnection | undefined {
    return NeuronConnections.all.find((item) => item.id === id)
  }

  updateWeights(delta: number, learningRate: number, minWeight?: number, maxWeight?: number): void {
    this.forEach((item) => {
      item.updateWeight(delta, learningRate, minWeight, maxWeight)
    })
  }
}

export { NeuronConnections }
