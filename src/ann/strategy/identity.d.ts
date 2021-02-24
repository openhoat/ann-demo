import { Strategyable } from '../../types/ann';
import { JsonEntry } from '../../types/utils';
declare class IdentityStrategy implements Strategyable {
    id: string;
    options: JsonEntry;
    constructor(options?: JsonEntry);
    activate(value: number): number;
    combine(inputs: number[], weights: number[]): number;
    delta(error: number, _output: number): number;
    toJson(): JsonEntry;
}
declare const identityStrategy: IdentityStrategy;
export { IdentityStrategy, identityStrategy };
