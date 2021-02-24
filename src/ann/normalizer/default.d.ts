import { Normalizable } from '../../types/ann';
import { JsonEntry } from '../../types/utils';
declare class DefaultNormalizer implements Normalizable {
    static type: string;
    id: string;
    constructor();
    from(value: number): unknown;
    to(value: unknown): number;
    toJson(): JsonEntry;
}
export default DefaultNormalizer;
