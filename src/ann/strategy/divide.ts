import { isNil, omitBy } from 'lodash'

import { StaticStrategyable, Strategyable } from '../../types/ann'
import { JsonEntry } from '../../types/utils'
import { staticImplements } from '../../utils/helper'

@staticImplements<StaticStrategyable>()
class DivideStrategy implements Strategyable {
  id: string
  options: JsonEntry

  constructor(options?: JsonEntry) {
    this.id = 'divide'
    this.options = options
  }

  activate(value: number): number {
    return value
  }

  combine(inputs: number[], weights: number[]): number {
    return inputs.reduce((acc, input, index) => acc * input * weights[index], 1)
  }

  delta(error: number): number {
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

const divideStrategy = new DivideStrategy()

export { DivideStrategy, divideStrategy }
