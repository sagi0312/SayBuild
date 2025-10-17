import {
  BoxComponentProps,
  ButtonComponentProps,
  Component,
  COMPONENT_TYPE,
  ComponentProps,
  TextComponentProps,
} from "@/lib/types";
import { TextInput } from "./TextInput";
import { NumberInput } from "./NumberInput";

interface PropertiesPanelProps {
  selectedComponent: Component | null;
  onChange: (
    value: string | number,
    propName: ComponentProps,
    componentKeyToUpdate: string
  ) => void;
}

export const PropertiesPanel = ({
  selectedComponent,
  onChange,
}: PropertiesPanelProps) => {
  return (
    <aside className="w-72 border-gray-300">
      <div className="bg-gray-100 p-3 border-b border-gray-300">
        <h2 className="text-md text-gray-500">{selectedComponent?.type}</h2>
      </div>

      <div className="flex flex-col gap-3 p-3">
        {selectedComponent?.type === COMPONENT_TYPE.Text && (
          <>
            <TextInput
              label="Text"
              value={selectedComponent.props.text ?? ""}
              onChange={(value) => {
                onChange(value, TextComponentProps.Text, selectedComponent.key);
              }}
            />
            <TextInput
              label="Color"
              value={selectedComponent.props.color ?? ""}
              onChange={(value) => {
                onChange(
                  value,
                  TextComponentProps.Color,
                  selectedComponent.key
                );
              }}
            />
            <NumberInput
              label="Font size"
              value={selectedComponent.props.fontSize ?? 16}
              onChange={(value) => {
                onChange(
                  value,
                  TextComponentProps.FontSize,
                  selectedComponent.key
                );
              }}
            />
            <NumberInput
              label="Font weight"
              value={selectedComponent.props.fontWeight ?? 400}
              onChange={(value) => {
                onChange(
                  value,
                  TextComponentProps.FontWeight,
                  selectedComponent.key
                );
              }}
            />
          </>
        )}
        {selectedComponent?.type === COMPONENT_TYPE.Box && (
          <>
            <TextInput
              label="Color"
              value={selectedComponent.props.backgroundColor ?? ""}
              onChange={(value) => {
                onChange(
                  value,
                  BoxComponentProps.BackgroundColor,
                  selectedComponent.key
                );
              }}
            />
            <NumberInput
              label="Padding"
              value={selectedComponent.props.padding ?? 16}
              onChange={(value) => {
                onChange(
                  value,
                  BoxComponentProps.Padding,
                  selectedComponent.key
                );
              }}
            />
            <NumberInput
              label="Width"
              value={selectedComponent.props.width ?? 200}
              onChange={(value) => {
                onChange(value, BoxComponentProps.Width, selectedComponent.key);
              }}
            />
          </>
        )}
        {selectedComponent?.type === COMPONENT_TYPE.Button && (
          <>
            <TextInput
              label="Color"
              value={selectedComponent.props.backgroundColor ?? ""}
              onChange={(value) => {
                onChange(
                  value,
                  ButtonComponentProps.BackgroundColor,
                  selectedComponent.key
                );
              }}
            />
            <TextInput
              label="Text"
              value={selectedComponent.props.text ?? ""}
              onChange={(value) => {
                onChange(
                  value,
                  ButtonComponentProps.Text,
                  selectedComponent.key
                );
              }}
            />
          </>
        )}
      </div>
    </aside>
  );
};
