import Head from "next/head";
// import { Noto_Sans_Display } from "@next/font/google";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Offerings from "../components/Offerings";
import ProcessPane from "../components/ProcessPane";

// const noto = Noto_Sans_Display();

export default function Home() {
  return (
    <>
      <Head>
        {" "}
        <title>HAC Enterprises</title>{" "}
        <meta
          name="description"
          content="Hoshang Anklesaria Consulting Enterprises, your trusted advisor for commercial security implementations."
        />{" "}
        <meta name="viewport" content="width=device-width, initial-scale=1" />{" "}
        <link rel="icon" href="/favicon.ico" />{" "}
        {/* TODO:resize the lock, re-color? */}{" "}
      </Head>

      <div className="bg-black">
        <Hero />
        {/* <Offerings/> */}
        <ProcessPane />
        {/* <Image className={"fill"} src={heroImg} alt="gradient-background"></Image> */}
        <Footer className="z-40 min-h-fit text-white" />
      </div>
    </>
  );
}
