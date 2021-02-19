export interface TimerOptions {
  freq?: number
  handle: () => void
}

export interface StaticTimerable {
  new (opt: TimerOptions): Timerable
}

export interface Timerable {
  freq: number
  handle: () => void
  id: NodeJS.Timeout | undefined

  start(): boolean
  stop(): boolean
}
