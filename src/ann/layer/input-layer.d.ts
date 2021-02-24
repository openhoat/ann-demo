import { Neurons } from '../neuron/neurons';
declare class InputLayer extends Neurons {
    connectTo(targetLayer: Neurons): void;
}
export { InputLayer };
