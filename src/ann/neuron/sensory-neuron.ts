import { NeuronOptions } from '../../types/ann'
import { NeuronConnections } from '../connection/neuron-connections'
import { Neuron } from './'

class SensoryNeuron extends Neuron {
  constructor(opt: NeuronOptions) {
    super({ color: '#ee651d', ...opt, outputs: true })
    this.outputs = new NeuronConnections()
  }
}

export { SensoryNeuron }
