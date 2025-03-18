"use client";
import type { SocialLinkJson } from "@/type/social-link-json";
import { cn } from "@/util/cn";
import Link from "next/link";
import { memo } from "react";

type Props = {
  className?: string;
  link: SocialLinkJson;
};

export const AppLink = memo(({ className, link: { text, url } }: Props) => {
  return (
    <Link
      className={cn(
        "tw_outline block rounded-lg bg-grey-700 p-3 hover:bg-green",
        "text-sm leading-tight font-bold text-white hover:text-grey-700",
        className,
      )}
      href={url}
    >
      {text}
    </Link>
  );
});

AppLink.displayName = "AppLink";
