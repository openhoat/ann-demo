import { NeuronConnections } from '../ann/connection/neuron-connections'
import { HiddenLayers } from '../ann/layer/hidden-layers'
import { InputLayer } from '../ann/layer/input-layer'
import { OutputLayer } from '../ann/layer/output-layer'
import { Neuron } from '../ann/neuron'
import { Idable, Jsonable, JsonEntry, Typable } from './utils'

export interface StaticNormalizable extends Typable {
  new (options: JsonEntry): Normalizable
}

export interface Normalizable extends Idable, Jsonable {
  options?: JsonEntry

  from(value: number): unknown

  to(value: unknown): number
}

export interface StaticStrategyable {
  build(options: unknown): Strategyable
}

export interface Strategyable extends Idable, Jsonable {
  activate(value: number): number

  combine(inputs: number[], weights: number[]): number

  delta(error: number, output: number): number
}

export interface NeuronOptions {
  id?: string
  index?: number
  depth?: number
  color?: string
  normalizer?: Normalizable
  bias?: number
  strategy?: Strategyable
  inputs?: boolean
  outputs?: boolean
}

export interface StaticNeuronable {
  build(opt: NeuronOptions): Neuronable
}

export interface Neuronable extends Idable, Typable, Jsonable {
  index: number
  depth: number
  color: string
  value: number
  normalizer: Normalizable | undefined
  bias: number
  delta: number | undefined
  inputs: NeuronConnections | undefined
  strategy: Strategyable | undefined
  outputs: NeuronConnections | undefined
  expectedValue: number | undefined

  activate(): void

  denormalizeValue(): unknown

  normalizeValue(value: number): void

  updateDelta(): void

  updateWeights(learningRate): void
}

export interface Neuronable extends Jsonable {
  type: string
  id: string
  index: number
  depth: number
  color: string
  value: number
  normalizer: Normalizable | undefined
  bias: number
  delta: number | undefined
  strategy: Strategyable | undefined
  inputs: NeuronConnections | undefined
  outputs: NeuronConnections | undefined
  expectedValue: number | undefined

  activate(): void
  denormalizeValue(): unknown

  normalizeValue(value: unknown): void

  updateDelta(): void

  updateWeights(learningRate): void
}

export interface NeuronConnectionOptions {
  id?: string
  source: Neuron | undefined
  target: Neuron | undefined
  weight: number | (() => number)
}

export interface StaticNeuronConnectionable {
  new (opt: NeuronConnectionOptions): NeuronConnectionable
}

export interface NeuronConnectionable extends Jsonable {
  updateWeight(delta: number, learningRate: number, minWeight?: number, maxWeight?: number): void
}

export interface NetworkOptions {
  id: string
  inputLayer?: InputLayer
  hiddenLayers?: HiddenLayers
  outputLayer?: OutputLayer
  strategy: Strategyable
}

export interface NetworkConfigNormalizer extends Idable {
  normalizerRef: string
  normalizerOptions?: JsonEntry
}

export interface NetworkConfigInput extends Idable, NetworkConfigNormalizer {
  bias: number
}

export interface NetworkConfigOutput extends Idable, NetworkConfigNormalizer {
  bias: number
}

export type NetworkConfigHiddenLayers = NeuronOptions[][]

export interface NetworkConfigConnection extends Idable {
  sourceRef: string
  targetRef: string
  weight: number
}

export interface NetworkConfigTraining {
  expectedMaxIterations: number
  learningRate: number
  usecases?: TrainingUsecase[]
}

export interface NetworkConfig {
  id: string
  strategy: { id: string; options: JsonEntry }
  inputs?: NetworkConfigInput[]
  hiddenLayers?: NetworkConfigHiddenLayers
  hiddenLayersCounts?: number[]
  outputs?: NetworkConfigOutput[]
  connections?: NetworkConfigConnection[]
  training: NetworkConfigTraining
}

export interface TrainingUsecase {
  inputs: number[]
  outputs: number[]
}

export interface TrainingOptions {
  expectedMaxIterations: number
  hook: (result: TrainingResult) => Promise<boolean | undefined>
  learningRate: number
  usecases: TrainingUsecase[]
}

export interface TrainingResult {
  averageDuration: number
  equalToExpected: boolean
  iterations: number
  totalDuration: number
}
