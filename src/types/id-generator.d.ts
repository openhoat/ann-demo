export interface IdGenerator {
  clearIds: (key?: string) => void
  getId: (key?: string) => string
}
