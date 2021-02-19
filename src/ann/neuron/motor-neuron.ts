import { NeuronOptions } from '../../types/ann'
import { Neuron } from './'

class MotorNeuron extends Neuron {
  constructor(opt: NeuronOptions) {
    super({ color: '#1d4efd', ...opt, inputs: true })
  }
}

export { MotorNeuron }
