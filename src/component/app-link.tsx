"use client";
import type { SocialLinkJson } from "@/type/social-link-json";
import { cn } from "@/util/cn";
import Link from "next/link";
import { memo, useState } from "react";

type Props = {
  className?: string;
  link: SocialLinkJson;
};

export const AppLink = memo(({ className, link: { text, url } }: Props) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      className={cn(
        "tw_outline block rounded-lg bg-grey-700 p-3",
        "text-sm/[1.5] font-bold text-white",
        isHovering
          ? "animate-link-enter"
          : hasInteracted && "animate-link-leave",
        className,
      )}
      href={url}
      onMouseEnter={() => {
        setIsHovering(true);
        setHasInteracted(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      {text}
    </Link>
  );
});

AppLink.displayName = "AppLink";
