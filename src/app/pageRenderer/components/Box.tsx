import type { ReactNode } from "react";

export type BoxProps = {
  componentKey: string;
  alias?: string;
  backgroundColor?: string;
  padding?: number;
  width?: number;
  children?: ReactNode;
};

export function Box({
  backgroundColor,
  alias,
  padding,
  width,
  children,
  componentKey,
}: BoxProps) {
  return (
    <div
      data-component-key={componentKey}
      data-component-alias={alias}
      className={`
        flex flex-col gap-4 
      `}
      style={{ backgroundColor, padding, width }}
    >
      {children}
    </div>
  );
}
