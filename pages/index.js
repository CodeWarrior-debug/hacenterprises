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




        <section className="grid grid-cols-2 m-8">
          <h2 className="col-span-1 m-auto font-extrabold text-4xl">
            A full service technology
            <br />
            solutions company with a
            <br />
            passion & purpose towards:
          </h2>
          <div className="col-span-1">
            <ul className="col-span-1">
              <li
                className="bg-transparent bg-no-repeat text-lg bg-auto h-16 mb-8 text-white indent-3 pt-4 red_button"
              >
                Providing Effective Communications
              </li>
              </ul>
</div>


              </section>
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
