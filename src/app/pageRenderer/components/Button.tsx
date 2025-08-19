export type ButtonProps = {
  componentKey: string;
  text?: string;
  backgroundColor?: string;
};

export function Button({ componentKey, text, backgroundColor }: ButtonProps) {
  return (
    <button
      data-component-key={componentKey}
      style={{ backgroundColor }}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {text ?? "Click Me"}
    </button>
  );
}
