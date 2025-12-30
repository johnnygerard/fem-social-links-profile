import Image from "next/image";
import type { FC } from "react";
import { AppLink } from "~/components/app-link";
import type { SocialLink } from "~/types/social-link";
import { tw } from "~/utils/tw";

type Props = {
  className?: string;
  socialLinks: SocialLink[];
};

export const ProfileCard: FC<Props> = ({ className, socialLinks }) => {
  return (
    <div
      className={tw(
        "flex flex-col gap-6 text-center",
        "bg-grey-800 tb:p-10 rounded-xl p-6",
        className,
      )}
    >
      <Image
        className="mx-auto size-22 rounded-full"
        src="/asset/image/avatar.jpeg"
        width={176}
        height={176}
        priority
        alt=""
      />
      <hgroup>
        <h1 className="text-2xl/normal font-semibold text-white">
          Jessica Randall
        </h1>
        <p className="text-green mt-1 text-sm/normal font-bold">
          London, United Kingdom
        </p>
      </hgroup>
      <blockquote className="text-sm/normal font-normal text-white">
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
};
