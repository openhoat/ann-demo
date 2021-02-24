import { Neurons } from '../neuron/neurons';
declare class HiddenLayer extends Neurons {
    connectTo(targetLayer: Neurons): void;
    activate(): void;
}
export { HiddenLayer };
