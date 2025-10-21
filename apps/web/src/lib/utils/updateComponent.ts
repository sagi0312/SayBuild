import { Component, COMPONENT_TYPE } from "@saybuild/shared";

export const updateComponent = (
  componentTree: Component,
  componentKey: string,
  propName: string,
  value: string | number
): Component => {
  const updateRecursive = (component: Component): Component => {
    // Found the target component
    if (component.key === componentKey) {
      if (component.type === COMPONENT_TYPE.Box) {
        return {
          ...component,
          props: {
            ...component.props,
            [propName]: value,
          },
        };
      } else if (component.type === COMPONENT_TYPE.Text) {
        return {
          ...component,
          props: {
            ...component.props,
            [propName]: value,
          },
        };
      } else if (component.type === COMPONENT_TYPE.Button) {
        return {
          ...component,
          props: {
            ...component.props,
            [propName]: value,
          },
        };
      }
      return component;
    }

    // Recursively update children if they exist
    if (component.type === COMPONENT_TYPE.Box && component.props.children) {
      return {
        ...component,
        props: {
          ...component.props,
          children: component.props.children.map(updateRecursive),
        },
      };
    }

    return component;
  };

  return updateRecursive(componentTree);
};
