import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center">
      <div className="mt-10 w-full max-w-md items-center rounded-lg border-2 border-neutral-500 p-2 text-white shadow-sm backdrop-blur-sm">
        <h1 className="rounded-lg bg-neutral-900 p-1 px-2 font-bold hover:cursor-pointer hover:bg-red-700 hover:text-black">
          PM
        </h1>
        <div className="flex items-center justify-between pt-2">
          <h1 className="font-bold text-black">PARSONS MAGAZINE | Beta</h1>
          <div className="flex space-x-2 text-black">coming soon</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
