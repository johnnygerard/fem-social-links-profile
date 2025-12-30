import type { FC } from "react";
import { ProfileCard } from "~/components/profile-card";
import { socialLinks } from "~/data/social-links";

const HomePage: FC = () => <ProfileCard socialLinks={socialLinks} />;
export default HomePage;
