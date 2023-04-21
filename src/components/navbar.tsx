import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center">
      <div className="mt-10 w-full max-w-md items-center rounded-b-lg border-2 border-transparent p-2 text-white shadow-md backdrop-blur-sm">
        <div className="">A new box</div>
        <h1 className="flex justify-end space-x-4 rounded-lg px-2 pt-2 text-right font-bold text-black hover:cursor-pointer">
          <span className="dark:text-white">PARSONS MAGAZINE</span>
        </h1>
        <div className="flex items-center justify-end pt-2">
          <div className="mr-2 flex space-x-2 text-black">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`h-4 w-4 rounded-full bg-green-500`}
            ></button>
            <Link
              href="/book"
              className={`h-4 w-4 rounded-full bg-yellow-500`}
            ></Link>
            <div className={`h-4 w-4 rounded-full bg-red-500`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
