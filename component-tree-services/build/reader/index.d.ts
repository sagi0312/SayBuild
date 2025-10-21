import type { Component } from "@saybuild/shared";
export declare class TreeReader {
    private dataPath;
    constructor();
    /**
     * READ: Get the entire component tree from disk
     * Reads fresh data every time (picks up changes from Writer)
     */
    getTree(): Promise<Component>;
}
export declare const treeReader: TreeReader;
