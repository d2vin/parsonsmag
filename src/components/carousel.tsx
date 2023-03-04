import React from "react";
import Image from "next/image";

const Carousel = () => {
  const images = [
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/0.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/1.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/2.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/3.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/4.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/5.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/6.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/7.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/8.jpg",
  ];
  return (
    <div className="mx-auto max-w-md overflow-scroll border-2 border-neutral-500">
      <div className="carousel rounded-md mt-8 flex items-center">
        {images.map((image) => (
          <Image
            className="carousel-item"
            src={image}
            height={600}
            width={400}
            alt="image"
            key={image}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
