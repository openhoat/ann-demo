import { JsonableCollection } from '../../utils/jsonable-collection'
import { Neuron } from '.'

class Neurons extends JsonableCollection<Neuron> {
  static all: Neurons = new Neurons()

  static get(id: string): Neuron | undefined {
    return Neurons.all.find((item) => item.id === id)
  }
}

export { Neurons }
