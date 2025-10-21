import { COMPONENT_TYPE, Component } from "@saybuild/shared";

export const findComponent = (
  current: Component,
  componentKey: string
): Component | null => {
  if (current.key === componentKey) return current;
  if (current.type === COMPONENT_TYPE.Box && current.props.children) {
    for (const child of current.props.children) {
      const found = findComponent(child, componentKey);
      if (found) return found;
    }
  }
  return null;
};
