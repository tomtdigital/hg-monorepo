import Link from "next/link";
import React, { PropsWithChildren, ReactElement } from "react";

type PreviewLinkProps = PropsWithChildren<{
  href: string;
}>;

export const PreviewLink: React.FC<PreviewLinkProps> = ({
  href,
  children,
}: PreviewLinkProps): ReactElement => {
  return (
    <>
      <Link href={href}>{children}</Link>
    </>
  );
};
