import { Jsonable } from './utils'

export interface StaticJsonableCollection<T extends Jsonable> {
  new (...items: T[]): JsonableCollection<T>
}

export interface JsonableCollection<T extends Jsonable> {
  type: string
  items: T[]
  readonly first: T | undefined
  readonly last: T | undefined
  readonly length: number

  clear(): void

  find<S extends T>(
    predicate: (this: void, value: T, index: number, obj: T[]) => value is S,
  ): T | undefined

  forEach(iterator: (value: T, index: number, array: T[]) => void): void

  get(index: number): T | undefined

  isEmpty(): boolean

  map<U>(iterator: (value: T, index: number, array: T[]) => U): U[]

  reduce(
    reducer: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
    initialValue: T,
  ): T

  pop(): T | undefined

  push(...items: T[]): number
}
