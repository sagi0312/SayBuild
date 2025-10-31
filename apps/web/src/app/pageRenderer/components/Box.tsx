import type { ReactNode } from "react";

export type BoxProps = {
  componentKey: string;
  alias?: string;
  backgroundColor?: string;
  padding?: number;
  width?: number;
  height?: number | string;
  children?: ReactNode;
};

export function Box({
  backgroundColor,
  alias,
  padding,
  width,
  children,
  height,
  componentKey,
}: BoxProps) {
  return (
    <div
      data-component-key={componentKey}
      data-component-alias={alias}
      className={`
        flex flex-col gap-4 
      `}
      style={{ backgroundColor, padding, width, height }}
    >
      {children}
    </div>
  );
}
