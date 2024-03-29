import { type NextPage } from "next";
import Carousel from "~/components/carousel";
import Head from "next/head";
import Navbar from "~/components/navbar";
import Layout from "~/components/layout";

const Home: NextPage = () => {
  const nicoDaniels = [
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

  const zachCooke = [
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/Untitled-3.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/Untitled-2.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/Untitled-4.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/untitled-105.jpg",
  ];

  const kimaniWorghs = [
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/1+(1).jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/2+(1).jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/3+(1).jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/4+(1).jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/5+(1).jpg",
  ];

  const pixelMouth = [
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/IMG_3024.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/IMG_3026.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/IMG_3035.jpg",
    "https://parsonsb741d8855a96471f846f18b00684243d170441-dev.s3.us-east-2.amazonaws.com/public/IMG_3037.jpg",
  ];

  return (
    <>
      <Head>
        <title>PARSONS MAGAZINE</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1">
        <div className="xs:mx-auto no-scrollbar z-0 col-span-2 mx-4 h-screen snap-y snap-mandatory overflow-scroll dark:bg-neutral-900 bg-white">
          <Navbar />
          <div className="sticky top-0 z-10 h-[48px] w-full dark:bg-neutral-900 bg-white" />
          <section className="snap-center">
            <div className="mx-auto my-24 max-w-md">
              <Carousel images={zachCooke} name={"Zach Cooke"} />
            </div>
          </section>
          <section className="snap-center">
            <div className="mx-auto my-28 max-w-md">
              <Carousel images={nicoDaniels} name={"Nico Daniels"} />
            </div>
          </section>
          <section className="snap-center">
            <div className="mx-auto my-28 max-w-md">
              <Carousel images={kimaniWorghs} name={"Kimani Worghs"} />
            </div>
          </section>
          <section className="snap-center">
            <div className="mx-auto my-28 max-w-md">
              <Carousel images={pixelMouth} name={"PixelMouth"} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
