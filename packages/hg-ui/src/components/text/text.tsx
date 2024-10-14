import React, { PropsWithChildren, ReactElement } from "react";

type TextProps = PropsWithChildren<{
  color: string;
  duplicate: boolean;
}>;

export const Text: React.FC<TextProps> = ({
  color,
  duplicate = false,
  children,
}: TextProps): ReactElement => {
  return (
    <>
      <p style={{ color: color }}>{children}</p>
      {duplicate && <p style={{ color: color }}>{children}</p>}
    </>
  );
};
