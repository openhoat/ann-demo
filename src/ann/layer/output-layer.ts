import { Neurons } from '../neuron/neurons'

class OutputLayer extends Neurons {
  activate(): void {
    this.forEach((item) => {
      item.activate()
    })
  }
}

export { OutputLayer }
