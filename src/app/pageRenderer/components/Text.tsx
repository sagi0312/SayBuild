export type TextProps = {
  componentKey: string;
  text?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
};

export function Text({
  text,
  fontSize,
  fontWeight,
  color,
  componentKey,
}: TextProps) {
  return (
    <div
      data-component-key={componentKey}
      className={`
        font-sans leading-none
      `}
      style={{ color, fontWeight, fontSize }}
    >
      {text ?? "Insert a text"}
    </div>
  );
}
