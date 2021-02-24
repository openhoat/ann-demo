/// <reference types="node" />
import { Timerable } from '../types/timer';
declare class Timer implements Timerable {
    freq: number;
    handle: () => void;
    id: NodeJS.Timeout | undefined;
    constructor(opt: {
        freq?: number;
        handle: (...args: unknown[]) => void;
    });
    start(): boolean;
    stop(): boolean;
}
export { Timer };
