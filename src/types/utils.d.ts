export type JsonArray = ArrayLike<JsonEntry>

export interface Mapable<T> {
  [key: string]: T
}

export declare type Primitive = string | number | boolean | undefined | null

export type JsonEntry = Primitive | JsonArray | JsonMap

export type JsonMap = Mapable<JsonEntry>

export interface ToJsonOptions {
  withoutValues?: boolean
}

export interface Jsonable {
  toJson(options?: ToJsonOptions): JsonEntry
}

export interface Idable {
  id: string
}

export interface Typable {
  type: string
}
