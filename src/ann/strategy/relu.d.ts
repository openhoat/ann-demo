import { IdentityStrategy } from './identity';
declare class ReluStrategy extends IdentityStrategy {
    constructor();
    activate(value: number): number;
    delta(error: number, output: number): number;
}
declare const reluStrategy: ReluStrategy;
export { ReluStrategy, reluStrategy };
