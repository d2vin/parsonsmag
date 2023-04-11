import React from "react";
import Image from "next/image";

const Carousel = ({ images, name }: { images: string[]; name: string }) => {
  return (
    <div className="no-scrollbar mx-auto max-w-md overflow-scroll rounded-md border-2 border-transparent border-neutral-200 shadow-inner">
      <div className="carousel flex items-center rounded-t-md pt-4">
        <div className="carousel-item flex h-[50vh] w-full items-center justify-center bg-white text-black">
          {name}
        </div>
        {images.map((image) => (
          <div
            key={image}
            id={image.toString()}
            className="carousel-item relative flex h-[50vh] w-full items-center justify-center rounded-t-md bg-white"
          >
            <Image
              src={image}
              fill
              alt="image"
              key={image}
              className="object-contain py-4"
            />
          </div>
        ))}
      </div>
      <div className="shadow-b-inner flex w-full justify-center gap-2 rounded-b-md pb-2 font-extralight text-neutral-200">
        {images.map((image, i) => (
          <a
            key={image}
            href={`#${image}`}
            className="btn-xs btn font-medium text-neutral-400 shadow-inner hover:opacity-50 hover:shadow-none"
          >
            {i}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
