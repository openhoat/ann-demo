import { NetworkConfig, NetworkOptions, Strategyable, TrainingOptions, TrainingResult, TrainingUsecase } from '../types/ann';
import { JsonEntry, ToJsonOptions } from '../types/utils';
import { HiddenLayers } from './layer/hidden-layers';
import { InputLayer } from './layer/input-layer';
import { OutputLayer } from './layer/output-layer';
declare class AnnNetwork {
    static build(config: NetworkConfig): AnnNetwork;
    id: string;
    inputLayer: InputLayer | undefined;
    hiddenLayers: HiddenLayers | undefined;
    outputLayer: OutputLayer | undefined;
    strategy: Strategyable;
    constructor(opt: NetworkOptions);
    connect(): void;
    setInputValue(index: number, value: unknown): void;
    setInputValues(values: number[]): void;
    getOutputValue(index: number): unknown;
    getOutputValues(): unknown[];
    run(inputs: number[]): unknown[];
    adjustFromUsecase(usecase: TrainingUsecase, learningRate?: number): boolean;
    trainUsecase(usecase: TrainingUsecase, learningRate: number): boolean;
    trainUsecases(usecases: TrainingUsecase[], learningRate: number): boolean;
    train(opt: TrainingOptions): Promise<TrainingResult>;
    toJson(options: ToJsonOptions): JsonEntry;
}
export { AnnNetwork };
