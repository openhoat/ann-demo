import { get, isNil, omitBy } from 'lodash'

import { Normalizable, StaticNormalizable } from '../../types/ann'
import { JsonEntry } from '../../types/utils'
import { staticImplements } from '../../utils/helper'
import { fixZero } from '../../utils/helper'

@staticImplements<StaticNormalizable>()
class IntegerNormalizer implements Normalizable {
  static type = 'integer'

  id: string
  options: JsonEntry
  min: number
  length: number

  constructor(options: JsonEntry) {
    this.id = IntegerNormalizer.type
    this.options = options
    this.min = get(options, 'min', Number.MIN_SAFE_INTEGER)
    const max = get(options, 'max', Number.MAX_SAFE_INTEGER)
    this.length = max - this.min
  }

  from(value: number): unknown {
    return fixZero(Math.round(value * this.length + this.min))
  }

  to(value: unknown): number {
    return (Number(value) - this.min) / this.length
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

export default IntegerNormalizer
