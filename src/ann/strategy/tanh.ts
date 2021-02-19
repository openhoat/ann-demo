import { IdentityStrategy } from './identity'

class TanhStrategy extends IdentityStrategy {
  constructor() {
    super()
    this.id = 'tanh'
  }

  activate(value: number): number {
    return 2 / (1 + Math.exp(-2 * value)) - 1
  }

  delta(error: number, output: number): number {
    return error * (1 - Math.pow(output, 2))
  }
}

const tanhStrategy = new TanhStrategy()

export { TanhStrategy, tanhStrategy }
