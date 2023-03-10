import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Offerings from "../components/Offerings";
import ProcessPane from "../components/ProcessPane";


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
      <Offerings/>
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
