import { IdentityStrategy } from './identity';
declare class TanhStrategy extends IdentityStrategy {
    constructor();
    activate(value: number): number;
    delta(error: number, output: number): number;
}
declare const tanhStrategy: TanhStrategy;
export { TanhStrategy, tanhStrategy };
