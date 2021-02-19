import { Log } from '../types/log'

const log: Log = {
  enabled: false,
  info: (...args) => {
    if (!log.enabled) {
      return
    }
    console.log(...args)
  },
}

export default log
