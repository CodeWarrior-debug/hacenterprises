import Head from "next/head";
import Header from "../components/Header";
// import { Noto_Sans_Display } from "@next/font/google";
// import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Offerings from "../components/Offerings";
import ProcessPane from "../components/ProcessPane";

// const noto = Noto_Sans_Display();

export default function Home() {
  return (
    <>
      <Head>
        {" "}
        <title>HAC Enterprise</title>{" "}
        <meta
          name="description"
          content="Hoshang Anklesaria Consulting Enterprise, your trusted advisor for commercial security implementations."
        />{" "}
        <meta name="viewport" content="width=device-width, initial-scale=1" />{" "}
        <link rel="icon" href="/favicon.ico" />{" "}
      </Head>
      <Header/>
                <nav className="grid grid-cols-8 border-b-4 border-red-400">
          <div className="w-16 col-start-1 col-span-2">
          {/* TODO bring in new logo image */}

          </div>
          <div className="col-span-6 grid grid-cols-1">
            <ul className="flex flex-row justify-evenly items-end">
              <li>HOME</li>
              <li>WHAT WE DO</li>
              <li>EXPERIENCE</li>
              <li>OUR COMPANY</li>
              <li>CONNECT</li>
            </ul>
          </div>
        </nav>
      <div>
        {/* <Hero /> */}
        {/* <Offerings/> */}
        <ProcessPane />
        {/* <Image className={"fill"} src={heroImg} alt="gradient-background"></Image> */}
        <Footer className="z-40 min-h-fit text-white" />
      </div>
    </>
  );
}
