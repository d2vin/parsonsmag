import React from "react";
import Image from "next/image";

const Carousel = ({ images }: { images: string[] }) => {
  return (
    <div className="mx-auto max-w-md overflow-scroll rounded-md border-2 border-transparent shadow-md">
      <div className="carousel carousel-center flex items-center rounded-md">
        {images.map((image) => (
          <div
            key={image}
            id={image.toString()}
            className="carousel-item flex w-full items-center justify-center"
          >
            <Image
              src={image}
              height={600}
              width={400}
              alt="image"
              key={image}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2 font-extralight text-neutral-200">
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
