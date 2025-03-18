import { ProfileCard } from "@/component/profile-card";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { memo } from "react";

const HomePage = async () => {
  const path = join(cwd(), "data/social-links.json");
  const json = await readFile(path, "utf8");

  return <ProfileCard socialLinks={JSON.parse(json)} />;
};

export default memo(HomePage);
