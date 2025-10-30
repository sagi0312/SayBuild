import { Component, COMPONENT_TYPE } from "@saybuild/shared";
export declare class TreeWriter {
    private supabase;
    private pageId;
    constructor();
    private generateAlias;
    private readTree;
    private writeTree;
    /**
     * CREATE: Add a new component to a parent
     */
    addComponent(parentKey: string, type: keyof typeof COMPONENT_TYPE, props?: Record<string, string | number>): Promise<Component>;
    /**
     * UPDATE: Modify component props by key
     */
    updateComponent(componentKey: string, props: Record<string, string | number>): Promise<Component>;
    /**
     * DELETE: Remove a component
     */
    deleteComponent(parentKey: string, componentKey: string): Promise<string>;
}
export declare const treeWriter: TreeWriter;
