import { COMPONENT_TYPE } from "@/lib/types";
import { Box, BoxProps } from "../components/Box";
import { Text } from "../components/Text";
import { Button, ButtonProps } from "../components/Button";
import { TextProps } from "../components/Text";
interface ComponentLibrary {
  component: React.ComponentType<BoxProps | ButtonProps | TextProps>;
  hasChildren: boolean;
}

export const COMPONENT_LIBRARY = new Map<string, ComponentLibrary>();

COMPONENT_LIBRARY.set(COMPONENT_TYPE.Box, {
  component: Box,
  hasChildren: true,
});
COMPONENT_LIBRARY.set(COMPONENT_TYPE.Text, {
  component: Text,
  hasChildren: false,
});
COMPONENT_LIBRARY.set(COMPONENT_TYPE.Button, {
  component: Button,
  hasChildren: false,
});
