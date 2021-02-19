export interface Log {
  enabled: boolean
  info: (...args: unknown[]) => void
}
