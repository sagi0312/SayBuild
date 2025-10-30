import { fileURLToPath } from "url";
import { dirname } from "path";
import { COMPONENT_TYPE } from "@saybuild/shared";
import { randomUUID } from "crypto";
import { findComponentByKey } from "@saybuild/shared/utils/findComponentByKey";
import { createClient } from "@supabase/supabase-js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class TreeWriter {
    supabase;
    pageId;
    constructor() {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_ANON_KEY;
        const pageId = process.env.PAGE_ID;
        if (!supabaseUrl || !supabaseKey) {
            throw new Error("Missing Supabase environment variables");
        }
        if (!pageId) {
            throw new Error("Missing PAGE_ID environment variable");
        }
        this.supabase = createClient(supabaseUrl, supabaseKey);
        this.pageId = pageId;
    }
    generateAlias(key) {
        return key.substring(0, 4);
    }
    async readTree() {
        const { data, error } = await this.supabase
            .from("pages")
            .select("component_tree")
            .eq("id", this.pageId)
            .single();
        if (error) {
            throw new Error(`Failed to fetch tree: ${error.message}`);
        }
        return data.component_tree;
    }
    async writeTree(tree) {
        const { error } = await this.supabase
            .from("pages")
            .update({ component_tree: tree })
            .eq("id", this.pageId)
            .select();
        if (error) {
            throw new Error(`Failed to update tree: ${error.message}`);
        }
    }
    // ==================== PUBLIC API (exposed to LLM) ====================
    /**
     * CREATE: Add a new component to a parent
     */
    async addComponent(parentKey, type, props = {}) {
        const newComponentKey = randomUUID();
        const newComponentAlias = this.generateAlias(newComponentKey);
        const newComponent = {
            key: newComponentKey,
            alias: newComponentAlias,
            type: COMPONENT_TYPE[type],
            props: props,
        };
        const tree = await this.readTree();
        const parentComponent = findComponentByKey(tree, parentKey);
        if (!parentComponent) {
            console.error("Available keys in tree:", JSON.stringify(tree, null, 2));
            throw new Error(`Parent component not found`);
        }
        if (parentComponent.type !== COMPONENT_TYPE.Box) {
            throw new Error(`Cannot add child to component of type ${parentComponent.type}. Only Box components can have children.`);
        }
        if (!parentComponent.props.children) {
            parentComponent.props.children = [];
        }
        parentComponent.props.children.push(newComponent);
        await this.writeTree(tree);
        return newComponent;
    }
    /**
     * UPDATE: Modify component props by key
     */
    async updateComponent(componentKey, props) {
        const tree = await this.readTree();
        const component = findComponentByKey(tree, componentKey);
        if (!component) {
            throw new Error(`Component with key ${componentKey} not found`);
        }
        component.props = {
            ...component.props,
            ...props,
        };
        await this.writeTree(tree);
        return component;
    }
    /**
     * DELETE: Remove a component
     */
    async deleteComponent(parentKey, componentKey) {
        const tree = await this.readTree();
        const parent = findComponentByKey(tree, parentKey);
        if (!parent ||
            parent.type !== COMPONENT_TYPE.Box ||
            !parent.props.children) {
            throw new Error(`Parent component with key ${parentKey} is not valid or has no children`);
        }
        parent.props.children = parent.props.children.filter((child) => child.key !== componentKey);
        await this.writeTree(tree);
        return componentKey;
    }
}
export const treeWriter = new TreeWriter();
//# sourceMappingURL=index.js.map