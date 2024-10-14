import React, { PropsWithChildren, ReactElement } from "react";

type TextProps = PropsWithChildren<{
  color: string;
  fontWeight?: string;
}>;

export const Text: React.FC<TextProps> = ({
  color,
  fontWeight = "normal",
  children,
}: TextProps): ReactElement => {
  return (
    <>
      <p style={{ color: color, fontWeight }}>{children}</p>
    </>
  );
};
