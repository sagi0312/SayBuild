import {
  Component,
  COMPONENT_TYPE,
  ComponentProps,
  TextComponentProps,
  BoxComponentProps,
  ButtonComponentProps,
} from "@saybuild/shared";
import { TextInput } from "./TextInput";
import { NumberInput } from "./NumberInput";

interface PropertiesPanelProps {
  selectedComponent: Component | null;
  onBlur: (
    value: string | number,
    propName: ComponentProps,
    componentKeyToUpdate: string
  ) => void;
}

export const PropertiesPanel = ({
  selectedComponent,
  onBlur,
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
              onBlur={(value: string) => {
                onBlur(value, TextComponentProps.Text, selectedComponent.key);
              }}
            />
            <TextInput
              label="Color"
              value={selectedComponent.props.color ?? ""}
              onBlur={(value: string) => {
                onBlur(value, TextComponentProps.Color, selectedComponent.key);
              }}
            />
            <NumberInput
              label="Font size"
              value={selectedComponent.props.fontSize ?? 16}
              onBlur={(value: number) => {
                onBlur(
                  value,
                  TextComponentProps.FontSize,
                  selectedComponent.key
                );
              }}
            />
            <NumberInput
              label="Font weight"
              value={selectedComponent.props.fontWeight ?? 400}
              onBlur={(value: number) => {
                onBlur(
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
              onBlur={(value: string) => {
                onBlur(
                  value,
                  BoxComponentProps.BackgroundColor,
                  selectedComponent.key
                );
              }}
            />
            <NumberInput
              label="Padding"
              value={selectedComponent.props.padding ?? 16}
              onBlur={(value: number) => {
                onBlur(value, BoxComponentProps.Padding, selectedComponent.key);
              }}
            />
            <NumberInput
              label="Width"
              value={selectedComponent.props.width ?? 200}
              onBlur={(value: number) => {
                onBlur(value, BoxComponentProps.Width, selectedComponent.key);
              }}
            />
            <TextInput
              label="Height"
              value={
                selectedComponent.props.height
                  ? String(selectedComponent.props.height)
                  : ""
              }
              onBlur={(value: string) => {
                onBlur(
                  isNaN(Number(value)) ? value : Number(value),
                  BoxComponentProps.Height,
                  selectedComponent.key
                );
              }}
            />
          </>
        )}
        {selectedComponent?.type === COMPONENT_TYPE.Button && (
          <>
            <TextInput
              label="Color"
              value={selectedComponent.props.backgroundColor ?? ""}
              onBlur={(value: string) => {
                onBlur(
                  value,
                  ButtonComponentProps.BackgroundColor,
                  selectedComponent.key
                );
              }}
            />
            <TextInput
              label="Text"
              value={selectedComponent.props.text ?? ""}
              onBlur={(value: string) => {
                onBlur(value, ButtonComponentProps.Text, selectedComponent.key);
              }}
            />
          </>
        )}
      </div>
    </aside>
  );
};
