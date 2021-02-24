import { JsonEntry } from '../../types/utils';
import IntegerNormalizer from './integer';
declare class PhraseNormalizer extends IntegerNormalizer {
    static phrases: string[];
    static type: string;
    id: string;
    options: JsonEntry;
    min: number;
    length: number;
    constructor(options: JsonEntry);
    from(value: number): unknown | undefined;
    to(value: unknown): number;
    toJson(): JsonEntry;
}
export default PhraseNormalizer;
