import { AppLink } from "@/component/app-link";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <div className="w-full max-w-96 rounded-xl bg-grey-800 p-6 text-center">
      <h1 className="text-2xl font-semibold text-white">404 Not Found</h1>
      <p className="mt-2 text-base font-normal text-white">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="mt-4">
        <AppLink
          link={{
            text: "Back to Home",
            url: "/",
          }}
        />
      </div>
    </div>
  );
};

export default memo(NotFound);
