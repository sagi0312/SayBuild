export const COMPONENT_TYPE = {
    Box: "Box",
    Text: "Text",
    Button: "Button",
};
export var TextComponentProps;
(function (TextComponentProps) {
    TextComponentProps["Text"] = "text";
    TextComponentProps["Color"] = "color";
    TextComponentProps["FontSize"] = "fontSize";
    TextComponentProps["FontWeight"] = "fontWeight";
})(TextComponentProps || (TextComponentProps = {}));
export var BoxComponentProps;
(function (BoxComponentProps) {
    BoxComponentProps["BackgroundColor"] = "backgroundColor";
    BoxComponentProps["Padding"] = "padding";
    BoxComponentProps["Width"] = "width";
    BoxComponentProps["Height"] = "height";
})(BoxComponentProps || (BoxComponentProps = {}));
export var ButtonComponentProps;
(function (ButtonComponentProps) {
    ButtonComponentProps["BackgroundColor"] = "backgroundColor";
    ButtonComponentProps["Text"] = "text";
})(ButtonComponentProps || (ButtonComponentProps = {}));
export const MESSAGE_TYPES = {
    HOST_READY: "HOST_READY",
    UPDATE_COMPONENTS: "UPDATE_COMPONENTS",
    COMPONENT_POSITIONS: "COMPONENT_POSITIONS",
};
export const DAILY_LIMIT = 3;
//# sourceMappingURL=types.js.map