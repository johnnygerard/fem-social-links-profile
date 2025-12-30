import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "src/image-loader.ts",
  },
  output: "export",
  reactCompiler: true,
};

export default nextConfig;
