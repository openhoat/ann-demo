import { Strategyable } from '../../types/ann';
import { JsonEntry } from '../../types/utils';
declare class DivideStrategy implements Strategyable {
    id: string;
    options: JsonEntry;
    constructor(options?: JsonEntry);
    activate(value: number): number;
    combine(inputs: number[], weights: number[]): number;
    delta(error: number): number;
    toJson(): JsonEntry;
}
declare const divideStrategy: DivideStrategy;
export { DivideStrategy, divideStrategy };
