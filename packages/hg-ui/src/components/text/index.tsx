import React, { PropsWithChildren } from "react";

type TextProps = PropsWithChildren<{
  color: string;
}>;

export default function Text({ color, children }: TextProps) {
  return <p style={{ color: color }}>{children}</p>;
}
