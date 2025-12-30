"use client";
import type { ImageLoader } from "next/image";

const BASE_URL = "https://ik.imagekit.io/jgerard/fem-social-links-profile/";

/**
 * Custom ImageKit loader for Next.js Image component.
 *
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/images
 * @see https://imagekit.io/docs/image-transformation
 */
const loader: ImageLoader = ({ src, width, quality }) => {
  const url = new URL(src, BASE_URL);

  const transformationParameters = [
    `w-${width}`,
    "c-at_max", // Prevent upscaling (https://imagekit.io/docs/image-resize-and-crop#max-size-cropping-strategy---c-at_max)
  ];

  if (quality != null) transformationParameters.push(`q-${quality}`);
  url.searchParams.append("tr", transformationParameters.join(","));
  return url.href;
};

export default loader;
