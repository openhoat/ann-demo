import { IdentityStrategy } from './identity'

class ReluStrategy extends IdentityStrategy {
  constructor() {
    super()
    this.id = 'relu'
  }

  activate(value: number): number {
    return Math.max(0, value)
  }

  delta(error: number, output: number): number {
    return error * (output > 0 ? 1 : 0)
  }
}

const reluStrategy = new ReluStrategy()

export { ReluStrategy, reluStrategy }
