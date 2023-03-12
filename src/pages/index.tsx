import { type NextPage } from "next";
import Carousel from "~/components/carousel";
import Head from "next/head";
import Navbar from "~/components/navbar";
import Reggie from "~/components/reggie";

const Home: NextPage = () => {
  return (
    <div className="mx-4">
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="sticky top-0 z-10 h-[48px] bg-white" />
      <main className="mx-auto max-w-md">
        <div className="space-y-8">
          <div>
            <h1 className="ml-1 text-2xl font-semibold">Zach Cooke</h1>
            <Carousel />
          </div>
          <div>
            <h1 className="ml-1 text-2xl font-semibold">Nico Daniels</h1>
            <Carousel />
          </div>
          <div>
            <h1 className="ml-1 text-2xl font-semibold">Kimani Worghs</h1>
            <Carousel />
          </div>
          <div>
            <Reggie />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
