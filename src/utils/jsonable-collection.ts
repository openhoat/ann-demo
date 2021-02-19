import { StaticJsonableCollection } from '../types/jsonable-collection'
import { Jsonable, JsonMap, ToJsonOptions } from '../types/utils'
import { staticImplements } from './helper'

@staticImplements<StaticJsonableCollection<Jsonable>>()
class JsonableCollection<T extends Jsonable> implements Jsonable {
  type: string
  items: T[]

  constructor(...items: T[]) {
    this.type = this.constructor.name
    this.items = [...items]
  }

  get first(): T | undefined {
    return this.items[0]
  }

  get last(): T | undefined {
    return this.items[this.items.length - 1]
  }

  get length(): number {
    return this.items.length
  }

  clear(): void {
    while (this.length > 0) {
      this.pop()
    }
  }

  find(predicate: (this: void, value: T, index: number, obj: T[]) => unknown): T | undefined {
    return this.items.find(predicate)
  }

  forEach(iterator: (value: T, index: number, array: T[]) => void): void {
    this.items.forEach(iterator)
  }

  get(index: number): T | undefined {
    return this.items[index]
  }

  isEmpty(): boolean {
    return this.items.length < 1
  }

  map<U>(iterator: (value: T, index: number, array: T[]) => U): U[] {
    return this.items.map<U>(iterator)
  }

  reduce(
    reducer: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
    initialValue?: T,
  ): T {
    return typeof initialValue === 'undefined'
      ? this.items.reduce(reducer)
      : this.items.reduce(reducer, initialValue)
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  push(...items: T[]): number {
    return this.items.push(...items)
  }

  toJson(options?: ToJsonOptions): JsonMap {
    return {
      items: this.map((item) => {
        return item.toJson(options)
      }),
      type: this.type,
    }
  }
}

export { JsonableCollection }
