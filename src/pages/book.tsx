import React from "react";

const Book: React.FC = () => {
  return (
    <div className="div flex h-screen w-full items-center justify-center bg-black">
      <div className="div frame">
        <div className="cover back"></div>
        <div className="div page four"></div>
        <div className="div page three"></div>
        <div className="div page two"></div>
        <div className="div page one"></div>
        <div className="div cover front"></div>
      </div>

      <div className="div frame">
        <div className="cover back"></div>
        <div className="div page four"></div>
        <div className="div page three"></div>
        <div className="div page two"></div>
        <div className="div page one"></div>
        <div className="div cover front">
          <span className="title text-2xl font-bold text-white">PARSONS</span>
          <span className="title mt-48 flex items-end justify-end text-2xl font-bold text-white">
            <span className="pr-1">MAGAZINE</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Book;
