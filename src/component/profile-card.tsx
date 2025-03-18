import { AppLink } from "@/component/app-link";
import type { SocialLinkJson } from "@/type/social-link-json";
import { cn } from "@/util/cn";
import Image from "next/image";
import { memo } from "react";

type Props = {
  className?: string;
  socialLinks: SocialLinkJson[];
};

export const ProfileCard = memo(({ className, socialLinks }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 text-center",
        "rounded-xl bg-grey-800 p-6 tb:p-10",
        className,
      )}
    >
      <Image
        className="mx-auto size-20 rounded-full"
        src="/asset/image/avatar.jpeg"
        width={176}
        height={176}
        priority
        alt=""
      />
      <hgroup>
        <h1 className="text-2xl/[1.5] font-semibold text-white">
          Jessica Randall
        </h1>
        <p className="mt-1 text-sm/[1.5] font-bold text-green">
          London, United Kingdom
        </p>
      </hgroup>
      <blockquote className="text-sm/[1.5] font-normal text-white">
        &#34;Front-end developer and avid reader.&#34;
      </blockquote>
      <ul className="flex flex-col gap-4">
        {socialLinks.map((link) => (
          <li key={link.text}>
            <AppLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
});

ProfileCard.displayName = "ProfileCard";
