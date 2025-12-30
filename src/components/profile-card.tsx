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
        "rounded-xl bg-grey-800 p-6 tb:p-10",
        className,
      )}
    >
      <Image
        alt=""
        className="mx-auto size-22 rounded-full"
        preload={true}
        src="avatar.jpeg"
        width={176}
        height={176}
      />
      <hgroup>
        <h1 className="text-2xl/normal font-semibold text-white">
          Jessica Randall
        </h1>
        <p className="mt-1 text-sm/normal font-bold text-green">
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
