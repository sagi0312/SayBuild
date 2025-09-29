export type TextProps = {
  alias?: string;
  componentKey: string;
  text?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
};

export function Text({
  alias,
  text,
  fontSize,
  fontWeight,
  color,
  componentKey,
}: TextProps) {
  return (
    <div
      data-component-key={componentKey}
      data-component-alias={alias}
      className={`
        font-sans leading-none
      `}
      style={{ color, fontWeight, fontSize }}
    >
      {text ?? "Insert a text"}
    </div>
  );
}
