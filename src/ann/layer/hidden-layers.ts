import { JsonableCollection } from '../../utils/jsonable-collection'
import { HiddenLayer } from './hidden-layer'

class HiddenLayers extends JsonableCollection<HiddenLayer> {
  activate(): void {
    this.forEach((item) => {
      item.activate()
    })
  }
}

export { HiddenLayers }
