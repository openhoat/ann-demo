import { Normalizable } from '../../types/ann';
import { JsonEntry } from '../../types/utils';
declare class IntegerNormalizer implements Normalizable {
    static type: string;
    id: string;
    options: JsonEntry;
    min: number;
    length: number;
    constructor(options: JsonEntry);
    from(value: number): unknown;
    to(value: unknown): number;
    toJson(): JsonEntry;
}
export default IntegerNormalizer;
