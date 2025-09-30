import { Component } from "../types";
import { v4 as uuid } from "uuid";
import { TreeNode } from "./callLLMToParseTranscript";

export const executeCommand = (
  componentTree: Component,
  node: TreeNode
): Component => {
  const { operation, componentType, location, propertyMap } = node;

  const key = uuid();
  const alias = key.substring(0, 4);

  if (operation === "create") {
  }
  return componentTree;
};
