import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Aside from "../components/Aside";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full bg-main-background">
        {/* header */}
        <Header />

        {/* main */}
        <main className="w-full h-full">
          <Aside />

          <div className="text-lg text-center text-red-700 font-bold pt-[67px] w-full h-auto bg-main-background">
            Let's get started...
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
