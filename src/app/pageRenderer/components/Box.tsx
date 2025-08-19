import type { ReactNode } from "react";

export type BoxProps = {
  componentKey: string;
  backgroundColor?: string;
  padding?: number;
  width?: number;
  children?: ReactNode;
};

export function Box({
  backgroundColor,
  padding,
  width,
  children,
  componentKey,
}: BoxProps) {
  return (
    <div
      data-component-key={componentKey}
      className={`
        flex flex-col p-8 gap-4 
      `}
      style={{ backgroundColor, padding, width }}
    >
      {children}
    </div>
  );
}
