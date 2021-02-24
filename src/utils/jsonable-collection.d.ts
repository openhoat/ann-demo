import { Jsonable, JsonMap, ToJsonOptions } from '../types/utils';
declare class JsonableCollection<T extends Jsonable> implements Jsonable {
    type: string;
    items: T[];
    constructor(...items: T[]);
    get first(): T | undefined;
    get last(): T | undefined;
    get length(): number;
    clear(): void;
    find(predicate: (this: void, value: T, index: number, obj: T[]) => unknown): T | undefined;
    forEach(iterator: (value: T, index: number, array: T[]) => void): void;
    get(index: number): T | undefined;
    isEmpty(): boolean;
    map<U>(iterator: (value: T, index: number, array: T[]) => U): U[];
    reduce(reducer: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
    pop(): T | undefined;
    push(...items: T[]): number;
    toJson(options?: ToJsonOptions): JsonMap;
}
export { JsonableCollection };
