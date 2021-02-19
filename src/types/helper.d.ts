export interface Helper {
  arrayCount: <T>(count: number) => T[]
  buildArray: <T>(count: number, iterator?: (index: number) => T) => T[]
  clip: (value: number, min: number, max: number) => number
  delay: (ms?: number) => Promise<void>
  fixZero: (x: number) => number
  heEtAlWeightbuilder: (layerLength: number) => () => number
  mapCount: <T>(count: number, iterator: (index) => T) => T[]
  repeat: (count: number, iterator: (index: number) => void) => void
  staticImplements: <T>() => (__: T) => void
  toArray: <T>(o: T) => T[]
}
