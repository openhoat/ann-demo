import { Strategyable } from '../../types/ann';
import { JsonEntry } from '../../types/utils';
import { IdentityStrategy } from './identity';
declare class LogisticStrategy extends IdentityStrategy implements Strategyable {
    constructor();
    activate(value: number): number;
    delta(error: number, output: number): number;
    toJson(): JsonEntry;
}
declare const logisticStrategy: LogisticStrategy;
export { LogisticStrategy, logisticStrategy };
