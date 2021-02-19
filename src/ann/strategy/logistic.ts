import { isNil, omitBy } from 'lodash'

import { Strategyable } from '../../types/ann'
import { JsonEntry } from '../../types/utils'
import { IdentityStrategy } from './identity'

class LogisticStrategy extends IdentityStrategy implements Strategyable {
  constructor() {
    super()
    this.id = 'logistic'
  }

  activate(value: number): number {
    return 1 / (1 + Math.exp(-value))
  }

  delta(error: number, output: number): number {
    return error * (output * (1 - output))
  }

  toJson(): JsonEntry {
    return omitBy(
      {
        id: this.id,
        options: this.options,
      },
      isNil,
    )
  }
}

const logisticStrategy = new LogisticStrategy()

export { LogisticStrategy, logisticStrategy }
