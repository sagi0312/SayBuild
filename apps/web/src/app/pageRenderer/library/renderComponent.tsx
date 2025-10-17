import type { ReactNode } from "react";
import { COMPONENT_LIBRARY } from "./componentLibrary";
import { Component } from "@/lib/types";

export function renderComponent(component: Component): ReactNode {
  const entry = COMPONENT_LIBRARY.get(component.type);

  if (!entry) return null;

  const ComponentClass = entry.component;
  if (entry.hasChildren && "children" in component.props) {
    const { children, ...props } = component.props;

    return (
      <ComponentClass
        key={component.key}
        componentKey={component.key}
        alias={component.alias}
        {...props}
      >
        {children?.map(renderComponent)}
      </ComponentClass>
    );
  }

  return (
    <ComponentClass
      key={component.key}
      componentKey={component.key}
      alias={component.alias}
      {...component.props}
    />
  );
}
