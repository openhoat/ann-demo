import 'vis-network/dist/dist/vis-network.min.css';
import { DataSet } from 'vis-data';
import { NeuronConnectionData, NeuronData, WorkerHandlable } from './types/worker';
declare const dom: {
    body: HTMLBodyElement;
    cancelBtn: HTMLButtonElement;
    container: HTMLDivElement;
    form: HTMLFormElement;
    inputs: HTMLInputElement;
    networkName: HTMLSpanElement;
    networkSelect: HTMLSelectElement;
    outputs: HTMLInputElement;
    progess: HTMLDivElement;
    runBtn: HTMLInputElement;
    trainBtn: HTMLButtonElement;
    usecases: HTMLDataListElement;
};
declare const networkTypeOptions: string[];
declare const initUi: ({ init, train, run, kill, reset, }: {
    init: WorkerHandlable['init'];
    train: WorkerHandlable['train'];
    run: WorkerHandlable['run'];
    kill: WorkerHandlable['kill'];
    reset: WorkerHandlable['reset'];
}) => void;
declare const refreshNeuron: (neuron: NeuronData) => void;
declare const refreshNeurons: (neurons: NeuronData[]) => void;
declare const refreshNeuronConnection: (neuronConnection: NeuronConnectionData) => void;
declare const refreshNeuronConnections: (neuronConnections: NeuronConnectionData[]) => void;
declare const nodeColors: string[], defaultNode: {
    borderWidth: number;
    color: string;
    font: {
        bold: boolean;
        color: number;
    };
    margin: number;
    shape: string;
}, defaultEdge: {
    arrows: string;
    color: string;
}, nodes: DataSet<Partial<Record<"id", import("vis-data/declarations/data-interface").OptId>>, "id">, edges: DataSet<Partial<Record<"id", import("vis-data/declarations/data-interface").OptId>>, "id">;
export { defaultEdge, defaultNode, dom, edges, initUi, networkTypeOptions, nodeColors, nodes, refreshNeuron, refreshNeuronConnection, refreshNeuronConnections, refreshNeurons, };
