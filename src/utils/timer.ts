import { get } from 'lodash'

import { StaticTimerable, Timerable } from '../types/timer'
import { staticImplements } from './helper'

@staticImplements<StaticTimerable>()
class Timer implements Timerable {
  freq: number
  handle: () => void
  id: NodeJS.Timeout | undefined

  constructor(opt: { freq?: number; handle: (...args: unknown[]) => void }) {
    this.freq = Number(get(opt, 'freq', 1))
    this.handle = opt.handle
  }

  start(): boolean {
    if (this.id) {
      return false
    }
    this.id = global.setInterval(this.handle, this.freq)
    return true
  }

  stop(): boolean {
    if (!this.id) {
      return false
    }
    clearInterval(this.id)
    this.id = undefined
    return true
  }
}

export { Timer }
