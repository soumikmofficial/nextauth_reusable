import React from "react";
import Link from "next/Link";
const redirect = () => {
  return (
    <div className="flex flex-col gap-6 h-[100vh] items-center justify-center">
      <h1 className="text-2xl text-yellow-500">
        You have been redirected here after logout
      </h1>{" "}
      <Link href="/">
        <a className="bg-gray-500 px-4 py-2 rounded-md text-white capitalize">
          go back
        </a>
      </Link>
    </div>
  );
};

export default redirect;
