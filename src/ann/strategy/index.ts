import { divideStrategy } from './divide'
import { identityStrategy } from './identity'
import { logisticStrategy } from './logistic'
import { multiplyStrategy } from './multiply'
import { reluStrategy } from './relu'
import { tanhStrategy } from './tanh'

const strategies = new Map(
  [
    divideStrategy,
    identityStrategy,
    logisticStrategy,
    multiplyStrategy,
    reluStrategy,
    tanhStrategy,
  ].map((strategy) => [strategy.id, strategy]),
)

export default strategies
