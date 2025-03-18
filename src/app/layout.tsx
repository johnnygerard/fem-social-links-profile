import { Noscript } from "@/component/noscript";
import { cn } from "@/util/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

const APP_NAME = "Social links profile";
const DESCRIPTION = `Frontend Mentor challenge: ${APP_NAME}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com/placeholder"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: DESCRIPTION,
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/asset/image/favicon.png",
    },
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: APP_NAME,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html className={cn(inter.variable, "font-sans antialiased")} lang="en-US">
      <body>
        {children}
        <Noscript />
      </body>
    </html>
  );
};

export default memo(RootLayout);
