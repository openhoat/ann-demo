import { get, isNil, omitBy } from 'lodash'

import { Normalizable, StaticNormalizable } from '../../types/ann'
import { JsonEntry } from '../../types/utils'
import { staticImplements } from '../../utils/helper'

@staticImplements<StaticNormalizable>()
class BooleanNormalizer implements Normalizable {
  static type = 'boolean'

  id: string
  options: JsonEntry
  threshold: number
  trueValue: number

  constructor(options: JsonEntry) {
    this.id = BooleanNormalizer.type
    this.options = options
    this.threshold = get(options, 'threshold', 0.5)
    this.trueValue = get(options, 'trueValue', 1)
  }

  from(value: number): unknown {
    return value >= this.threshold
  }

  to(value: unknown): number {
    return value ? this.trueValue : 0
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

export default BooleanNormalizer
