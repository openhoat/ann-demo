import { get } from 'lodash'

import {
  NeuronConnectionable,
  NeuronConnectionOptions,
  StaticNeuronConnectionable,
} from '../../types/ann'
import { JsonEntry } from '../../types/utils'
import { staticImplements } from '../../utils/helper'
import { clip } from '../../utils/helper'
import idGenerator from '../../utils/id-generator'
import { Neuron } from '../neuron'
import { NeuronConnections } from './neuron-connections'

@staticImplements<StaticNeuronConnectionable>()
class NeuronConnection implements NeuronConnectionable {
  static defaultWeight(): number {
    return Math.random() * 0.01
  }

  type: string
  source: Neuron | undefined
  target: Neuron | undefined
  weight: number
  id: string

  constructor(opt: NeuronConnectionOptions) {
    this.type = this.constructor.name
    this.source = opt.source
    this.target = opt.target
    switch (typeof opt.weight) {
      case 'function':
        this.weight = opt.weight()
        break
      case 'number':
        this.weight = opt.weight
        break
      case 'undefined':
      default:
        this.weight = NeuronConnection.defaultWeight()
    }
    this.id = get(opt, 'id', idGenerator.getId())
    if (this.source?.outputs) {
      this.source.outputs.push(this)
    }
    if (this.target?.inputs) {
      this.target.inputs.push(this)
    }
    NeuronConnections.all.push(this)
  }

  updateWeight(
    delta: number,
    learningRate: number,
    minWeight = Number.MIN_VALUE,
    maxWeight = Number.MAX_VALUE,
  ): void {
    const oldWeight = this.weight
    this.weight =
      oldWeight +
      clip(
        delta * (typeof this.source?.value === 'number' ? this.source?.value : 0) * learningRate,
        minWeight,
        maxWeight,
      )
  }

  toJson(): JsonEntry {
    return {
      id: this.id,
      sourceRef: this.source?.id,
      targetRef: this.target?.id,
      type: this.type,
      weight: this.weight,
    }
  }
}

export { NeuronConnection }
