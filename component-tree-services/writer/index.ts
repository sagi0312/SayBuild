// component-tree-services/writer/index.ts
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Component, COMPONENT_TYPE } from "@saybuild/shared";
import { randomUUID } from "crypto";
import { findComponentByKey } from "@saybuild/shared/utils/findComponentByKey";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class TreeWriter {
  private dataPath: string;

  constructor() {
    this.dataPath = path.join(__dirname, "../../../data/component-tree.json");
  }

  private generateAlias(key: string): string {
    return key.substring(0, 4);
  }

  private async readTree(): Promise<Component> {
    const fileContent = await fs.readFile(this.dataPath, "utf-8");
    return JSON.parse(fileContent);
  }

  private async writeTree(tree: Component): Promise<void> {
    await fs.writeFile(this.dataPath, JSON.stringify(tree, null, 2), "utf-8");
  }

  // ==================== PUBLIC API (exposed to LLM) ====================

  /**
   * CREATE: Add a new component to a parent
   */
  async addComponent(
    parentKey: string,
    type: keyof typeof COMPONENT_TYPE,
    props: Record<string, string | number> = {}
  ) {
    console.error("addComponent called with:", { parentKey, type, props });
    const newComponentKey = randomUUID();
    const newComponentAlias = this.generateAlias(newComponentKey);

    const newComponent: Component = {
      key: newComponentKey,
      alias: newComponentAlias,
      type: COMPONENT_TYPE[type],
      props: props,
    };

    const tree = await this.readTree();
    console.error("Tree root key:", tree.key);
    const parentComponent: Component | null = findComponentByKey(
      tree,
      parentKey
    );
    console.error("Found parent:", parentComponent ? "YES" : "NO");
    if (!parentComponent) {
      console.error("Available keys in tree:", JSON.stringify(tree, null, 2));
      throw new Error(`Parent component not found`);
    }
    if (parentComponent.type !== COMPONENT_TYPE.Box) {
      throw new Error(
        `Cannot add child to component of type ${parentComponent.type}. Only Box components can have children.`
      );
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
  async updateComponent(
    componentKey: string,
    props: Record<string, string | number>
  ) {
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
  async deleteComponent(parentKey: string, componentKey: string) {
    const tree = await this.readTree();
    const parent = findComponentByKey(tree, parentKey);

    if (
      !parent ||
      parent.type !== COMPONENT_TYPE.Box ||
      !parent.props.children
    ) {
      throw new Error(
        `Parent component with key ${parentKey} is not valid or has no children`
      );
    }

    parent.props.children = parent.props.children.filter(
      (child) => child.key !== componentKey
    );

    await this.writeTree(tree);
    return componentKey;
  }
}

export const treeWriter = new TreeWriter();
