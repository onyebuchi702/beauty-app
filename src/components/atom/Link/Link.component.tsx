import Link from "next/link";
import React from "react";

export type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export const LinkComponent = ({ href, children }: LinkProps) => {
  return <Link href={href}>{children}</Link>;
};
