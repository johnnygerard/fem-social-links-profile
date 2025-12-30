import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { FC, ReactNode } from "react";
import "~/styles/globals.css";
import { tw } from "~/utils/tw";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

const APP_NAME = "Social links profile";
const TITLE = APP_NAME;
const DESCRIPTION = `Frontend Mentor challenge: ${APP_NAME}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://fem-social-links-profile-jgerard.vercel.app"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html className={inter.variable} data-scroll-behavior="smooth" lang="en-US">
      <body
        className={tw(
          "min-h-screen min-w-min bg-grey-900 font-sans",
          "grid place-items-center px-6 py-10 tb:p-10",
        )}
      >
        <main className="w-full max-w-96">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
