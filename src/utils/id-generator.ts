import { isNil } from 'lodash'

import { IdGenerator } from '../types/id-generator'

const counts = new Map<string, number>()

const idGenerator: IdGenerator = {
  clearIds: (key = 'default') => {
    if (isNil(key)) {
      counts.delete(key)
    } else {
      counts.clear()
    }
  },
  getId: (key = 'default') => {
    const count = counts.get(key)
    const newCount = typeof count !== 'undefined' ? count + 1 : 1
    counts.set(key, newCount)
    return `${newCount}`
  },
}

export default idGenerator
