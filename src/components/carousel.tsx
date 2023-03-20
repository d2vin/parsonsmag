import React from "react";
import Image from "next/image";

const Carousel = ({ images }: { images: string[] }) => {
  return (
    <div className="mx-auto max-w-md overflow-scroll rounded-md border-2 border-transparent shadow-sm">
      <div className="carousel flex items-center rounded-md pt-4">
        {images.map((image) => (
          <div
            key={image}
            id={image.toString()}
            className="carousel-item flex w-full items-center justify-center relative h-[50vh]"
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
          <a
            key={image}
            href={`#${image}`}
            className="btn-xs btn"
          >
            {i}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
