import { COMPONENT_TYPE } from "@saybuild/shared";
import { Box, BoxProps } from "../components/Box";
import { Text } from "../components/Text";
import { Button, ButtonProps } from "../components/Button";
import { TextProps } from "../components/Text";
interface ComponentLibrary {
  component: React.ComponentType<BoxProps | ButtonProps | TextProps>;
  previewProps?: Partial<BoxProps | ButtonProps | TextProps>;
  hasChildren: boolean;
}

export const COMPONENT_LIBRARY = new Map<string, ComponentLibrary>();

COMPONENT_LIBRARY.set(COMPONENT_TYPE.Box, {
  component: Box,
  hasChildren: true,
  previewProps: {
    width: 190,
    height: 80,
    backgroundColor: "lightblue",
    padding: 10,
  },
});
COMPONENT_LIBRARY.set(COMPONENT_TYPE.Text, {
  component: Text,
  hasChildren: false,
  previewProps: {
    text: "Sample Text",
    fontSize: 14,
    color: "green",
    fontWeight: 700,
  },
});
COMPONENT_LIBRARY.set(COMPONENT_TYPE.Button, {
  component: Button,
  hasChildren: false,
  previewProps: {
    text: "Hi! Click Me",
    backgroundColor: "blue",
  },
});
