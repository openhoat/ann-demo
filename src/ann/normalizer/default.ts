import { isNil, omitBy } from 'lodash'

import { Normalizable, StaticNormalizable } from '../../types/ann'
import { JsonEntry } from '../../types/utils'
import { staticImplements } from '../../utils/helper'

@staticImplements<StaticNormalizable>()
class DefaultNormalizer implements Normalizable {
  static type = 'default'

  id: string

  constructor() {
    this.id = DefaultNormalizer.type
  }

  from(value: number): unknown {
    return value
  }

  to(value: unknown): number {
    return Number(value)
  }

  toJson(): JsonEntry {
    return omitBy(
      {
        id: this.id,
      },
      isNil,
    )
  }
}

export default DefaultNormalizer
