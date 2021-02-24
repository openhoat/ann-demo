import { Normalizable } from '../../types/ann';
import { JsonEntry } from '../../types/utils';
declare class BooleanNormalizer implements Normalizable {
    static type: string;
    id: string;
    options: JsonEntry;
    threshold: number;
    trueValue: number;
    constructor(options: JsonEntry);
    from(value: number): unknown;
    to(value: unknown): number;
    toJson(): JsonEntry;
}
export default BooleanNormalizer;
