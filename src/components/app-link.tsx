"use client";
import Link from "next/link";
import { useState, type FC } from "react";
import type { SocialLink } from "~/types/social-link";
import { tw } from "~/utils/tw";

type Props = {
  className?: string;
  link: SocialLink;
};

export const AppLink: FC<Props> = ({ className, link: { text, url } }) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      className={tw(
        "tw_outline bg-grey-700 block rounded-lg p-3",
        "text-sm/normal font-bold text-white",
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
};
