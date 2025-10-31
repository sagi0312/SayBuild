export declare const COMPONENT_TYPE: {
    readonly Box: "Box";
    readonly Text: "Text";
    readonly Button: "Button";
};
export declare enum TextComponentProps {
    Text = "text",
    Color = "color",
    FontSize = "fontSize",
    FontWeight = "fontWeight"
}
export declare enum BoxComponentProps {
    BackgroundColor = "backgroundColor",
    Padding = "padding",
    Width = "width",
    Height = "height"
}
export declare enum ButtonComponentProps {
    BackgroundColor = "backgroundColor",
    Text = "text"
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
export type ComponentProps = TextComponentProps | BoxComponentProps | ButtonComponentProps;
export declare const MESSAGE_TYPES: {
    HOST_READY: string;
    UPDATE_COMPONENTS: string;
    COMPONENT_POSITIONS: string;
};
export declare const DAILY_LIMIT = 3;
