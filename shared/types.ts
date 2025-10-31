export const COMPONENT_TYPE = {
  Box: "Box",
  Text: "Text",
  Button: "Button",
} as const;

export enum TextComponentProps {
  Text = "text",
  Color = "color",
  FontSize = "fontSize",
  FontWeight = "fontWeight",
}

export enum BoxComponentProps {
  BackgroundColor = "backgroundColor",
  Padding = "padding",
  Width = "width",
  Height = "height",
}

export enum ButtonComponentProps {
  BackgroundColor = "backgroundColor",
  Text = "text",
}

export type Box = {
  key: string;
  alias?: string;
  type: typeof COMPONENT_TYPE.Box;
  props: {
    padding?: number;
    width?: number;
    height?: number | string;
    backgroundColor?: string;
    children?: Component[];
  };
};

export type Text = {
  key: string;
  alias?: string;
  type: typeof COMPONENT_TYPE.Text;
  props: {
    color?: string;
    fontSize?: number;
    fontWeight?: number;
    text?: string;
  };
};

export type Button = {
  key: string;
  alias?: string;
  type: typeof COMPONENT_TYPE.Button;
  props: {
    backgroundColor?: string;
    text?: string;
  };
};
export type Component = Box | Text | Button;
export type ComponentProps =
  | TextComponentProps
  | BoxComponentProps
  | ButtonComponentProps;

export const MESSAGE_TYPES = {
  HOST_READY: "HOST_READY",
  UPDATE_COMPONENTS: "UPDATE_COMPONENTS",
  COMPONENT_POSITIONS: "COMPONENT_POSITIONS",
};

export const DAILY_LIMIT = 10;
