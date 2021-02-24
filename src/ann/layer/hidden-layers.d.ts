import { JsonableCollection } from '../../utils/jsonable-collection';
import { HiddenLayer } from './hidden-layer';
declare class HiddenLayers extends JsonableCollection<HiddenLayer> {
    activate(): void;
}
export { HiddenLayers };
