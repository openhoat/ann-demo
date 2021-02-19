import { Helper } from '../types/helper'

const helper: Helper = {
  arrayCount: <T>(count) => Array.from(Array<T>(count)),
  buildArray: <T = number>(count, iterator = (index) => index) => {
    return helper.arrayCount<T>(count).map((__, index) => iterator(index))
  },
  clip: (value, min, max) => Math.min(Math.max(value, min), max),
  delay: async (ms = 0) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms)
    }),
  // eslint-disable-next-line no-compare-neg-zero
  fixZero: (x) => (x === -0 ? 0 : x),
  heEtAlWeightbuilder: (layerLength) => () => Math.random() * Math.sqrt(2 / layerLength),
  mapCount: (count, iterator) => helper.arrayCount(count).map((__, index) => iterator(index)),
  repeat: (count, iterator) => {
    helper.arrayCount(count).forEach((__, index) => {
      iterator(index)
    })
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  staticImplements: <T>() => (__: T) => {},
  toArray: (o) => (Array.isArray(o) ? o : [o]),
}

export = helper
