import React from "react";
import Image from "next/image";

const Carousel = ({ images, name }: { images: string[]; name: string; }) => {
  return (
    <div className="no-scrollbar mx-auto max-w-md overflow-scroll rounded-md border-2 border-transparent shadow-inner border-neutral-200">
      <div className="carousel flex items-center rounded-md pt-4">
        <div className="carousel-item w-full flex justify-center">{name}</div>
        {images.map((image) => (
          <div
            key={image}
            id={image.toString()}
            className="carousel-item relative flex h-[50vh] w-full rounded-t-sm items-center justify-center bg-white"
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
      <div className="flex w-full justify-center gap-2 pb-2 font-extralight text-neutral-200">
        {images.map((image, i) => (
          <a key={image} href={`#${image}`} className="btn-xs btn text-neutral-400 hover:opacity-50 font-medium">
            {i}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
