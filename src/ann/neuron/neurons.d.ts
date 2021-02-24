import { JsonableCollection } from '../../utils/jsonable-collection';
import { Neuron } from '.';
declare class Neurons extends JsonableCollection<Neuron> {
    static all: Neurons;
    static get(id: string): Neuron | undefined;
}
export { Neurons };
