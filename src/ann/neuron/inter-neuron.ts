import { NeuronOptions } from '../../types/ann'
import { Neuron } from './'

class InterNeuron extends Neuron {
  constructor(opt: NeuronOptions) {
    super({ color: '#909090', ...opt, inputs: true, outputs: true })
  }
}

export { InterNeuron }
