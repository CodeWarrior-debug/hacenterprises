import Head from "next/head";
// import Image from 'next/image'
import { Noto_Sans_Display } from "@next/font/google";
import "../styles/Hero.module.css";
import Image from "next/image";
import heroImg from "../public/HeroSection.png";

const noto = Noto_Sans_Display();

export default function Home() {
  return (
    <>
      <Head>
        <title>HAC Enterprises</title>
        <meta
          name="description"
          content="Hoshang Anklesaria Consulting Enterprises, your trusted advisor for commercial security implementations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* TODO:resize the lock, re-color? */}
      </Head>
      <main className="wrapper">
        <Image className={"fill"} src={heroImg} alt="gradient-background" />
      </main>
    </>
  );
}
