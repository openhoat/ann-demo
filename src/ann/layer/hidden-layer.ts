import { heEtAlWeightbuilder } from '../../utils/helper'
import { NeuronConnection } from '../connection'
import { Neurons } from '../neuron/neurons'

class HiddenLayer extends Neurons {
  connectTo(targetLayer: Neurons): void {
    const weight = heEtAlWeightbuilder(this.length)
    this.forEach((source) => {
      targetLayer.forEach((target) => {
        new NeuronConnection({ source, target, weight })
      })
    })
  }

  activate(): void {
    this.forEach((item) => {
      item.activate()
    })
  }
}

export { HiddenLayer }
