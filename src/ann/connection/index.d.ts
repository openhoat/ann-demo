import { NeuronConnectionable, NeuronConnectionOptions } from '../../types/ann';
import { JsonEntry } from '../../types/utils';
import { Neuron } from '../neuron';
declare class NeuronConnection implements NeuronConnectionable {
    static defaultWeight(): number;
    type: string;
    source: Neuron | undefined;
    target: Neuron | undefined;
    weight: number;
    id: string;
    constructor(opt: NeuronConnectionOptions);
    updateWeight(delta: number, learningRate: number, minWeight?: number, maxWeight?: number): void;
    toJson(): JsonEntry;
}
export { NeuronConnection };
