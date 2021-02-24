import { JsonableCollection } from '../../utils/jsonable-collection';
import { NeuronConnection } from './index';
declare class NeuronConnections extends JsonableCollection<NeuronConnection> {
    static all: NeuronConnections;
    static get(id: string): NeuronConnection | undefined;
    updateWeights(delta: number, learningRate: number, minWeight?: number, maxWeight?: number): void;
}
export { NeuronConnections };
