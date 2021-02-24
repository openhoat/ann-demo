import { Neuronable, NeuronOptions, Normalizable, Strategyable } from '../../types/ann';
import { JsonEntry, ToJsonOptions } from '../../types/utils';
import { NeuronConnections } from '../connection/neuron-connections';
declare class Neuron implements Neuronable {
    type: string;
    id: string;
    index: number;
    depth: number;
    color: string;
    value: number;
    normalizer: Normalizable | undefined;
    bias: number;
    delta: number | undefined;
    inputs: NeuronConnections | undefined;
    strategy: Strategyable | undefined;
    outputs: NeuronConnections | undefined;
    expectedValue: number | undefined;
    constructor(opt: NeuronOptions);
    activate(): void;
    denormalizeValue(): unknown;
    normalizeValue(value: unknown): void;
    updateDelta(): void;
    updateWeights(learningRate: number): void;
    toJson(options: ToJsonOptions): JsonEntry;
}
export { Neuron };
