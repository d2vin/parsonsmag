import React from "react";
import Image from "next/image";

const Carousel = ({ images, name }: { images: string[]; name: string }) => {
  return (
    <div className="no-scrollbar mx-auto max-w-md overflow-scroll rounded-md shadow-lg">
      <div className="no-scrollbar carousel flex items-center rounded-t-md pt-4">
        <div className="carousel-item text-center flex h-[50vh] w-full items-center justify-center bg-white dark:bg-neutral-900 dark:text-white text-black">
          {name} ➡️
          <br/>
          Click and use the arrow keys
        </div>
        {images.map((image) => (
          <div
            key={image}
            id={image.toString()}
            className="carousel-item relative flex h-[50vh] w-full items-center justify-center bg-white"
          >
            <Image
              src={image}
              fill
              alt="image"
              key={image}
              className="object-contain py-4 dark:bg-neutral-900"
            />
          </div>
        ))}
      </div>
      {/* <div className="shadow-b-inner no-scrollbar flex w-full justify-center gap-2 overflow-x-scroll rounded-b-md py-2 font-extralight">
        {images.map((image, i) => (
          <a
            key={image}
            href={`#${image}`}
            className="btn-xs btn border-neutral-400 font-medium dark:text-white text-black shadow-inner hover:border-b-2 hover:text-white hover:bg-black hover:opacity-50 hover:shadow-none"
          >
            {i}
          </a>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
