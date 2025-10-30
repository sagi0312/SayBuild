import type { Component } from "@saybuild/shared";
export declare class TreeReader {
    private supabase;
    private pageId;
    constructor();
    /**
     * READ: Get the entire component tree from database
     */
    getTree(): Promise<Component>;
}
export declare const treeReader: TreeReader;
