import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center">
      <div className="mt-10 w-full max-w-md items-center rounded-b-lg border-2 border-transparent p-2 text-white shadow-md backdrop-blur-sm">
        <h1 className="flex justify-end space-x-4 rounded-lg pt-2 px-2 text-right font-bold text-black hover:cursor-pointer">
          <>PARSONS MAGAZINE</>
        </h1>
        <div className="flex items-center justify-end pt-2">
          <div className="mr-2 flex space-x-2 text-black">
            <div className={`h-4 w-4 rounded-full bg-green-400`}></div>
            <div className={`h-4 w-4 rounded-full bg-yellow-400`}></div>
            <div className={`h-4 w-4 rounded-full bg-red-400`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
