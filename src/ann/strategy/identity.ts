import { isNil, omitBy, sum } from 'lodash'

import { Strategyable } from '../../types/ann'
import { JsonEntry } from '../../types/utils'

class IdentityStrategy implements Strategyable {
  id: string
  options: JsonEntry

  constructor(options?: JsonEntry) {
    this.id = 'identity'
    this.options = options
  }

  activate(value: number): number {
    return value
  }

  combine(inputs: number[], weights: number[]): number {
    return sum(inputs.map((input, index) => input * weights[index]))
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delta(error: number, _output: number): number {
    return error
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

const identityStrategy = new IdentityStrategy()

export { IdentityStrategy, identityStrategy }
