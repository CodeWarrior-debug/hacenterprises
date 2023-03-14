import React, { useState } from "react";
import Image from "next/image";
import useDimensions from "react-cool-dimensions";
import arrayCeil from "../assets/arrayCeil";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {

  const [heroImage, setHeroImage] = useState("/hero-1440.gif");
  const imageSizes = [720, 1080,1440];

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      setHeroImage(`/hero-${arrayCeil(imageSizes, width)}.gif`);

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  return (
    <>
    <div
      ref={observe}
      className=" overflow-hidden object-fill relative lg:h-[65vh] lg:max-h-[650px] z-0">

      {/* large Background GIF, has to be in parent of foreground text */}

      <Image
        src={heroImage}
        alt="Hero Image"
        className="object-left-bottom opacity-100 -z-10"
        fill
      />
      {/* <Hero/> */}

      {/* HAC logo, posiitoned absolutely */}

{/* 31  60%  */}


        <div className="grid grid-cols-3 md:h-[100px] grid-col items-center">
          <div className="grid col-span-1 ml-5 grid-col">

          <Image
              src="https://i.imgur.com/bFeXFtS.png"
              alt="HAC logo"
              width={156.35}
              height={63.5}
              // className="absolute block top-2 left-2"
              // className="block "
              ></Image>
          
          
          </div>

        

          <Navbar />
          


        </div>
            <div className="fixed left-0 top-0 -z-10 w-full h-[100px] bg-gradient-to-r from-[#005fa3] via-[#003258]  to-[#00000A] opacity-40"> {/* <div className="w-full h-24 header-overlay"> */} </div>
      <div className="z-10 h-2 bg-gradient-to-r from-[#5D0000] to-[#7E0000]"> </div>
      
    {/* Principles */}
    {/* sm: md: lg: xl: */}

    <div className="z-10 flex flex-col justify-center h-full">
      <section className="grid grid-cols-2 ml-8 xs:mt-4 sm:mt-8 lsm:mt-12 md:mt-20 lg:mt-0 lg:mb-24">
            <p className="col-span-1 ml-auto mr-auto text-xl font-extrabold text-white xs:mb-16 sm:mb-4 sm:text-xl lsm:text-xl lsm:leading-relaxed lg:text-xl xl:mt-12 xl:text-5xl">
              A full service technology solutions company with a passion & purpose towards:
            </p>
            <div className="col-span-1">
              <ul className="col-span-1 pl-20">
                <li
                  // className="bg-transparent w-[360px] h-[58px] bg-no-repeat text-[.5rem] grid grid-row items-center mb-2 pt-0 text-white red_button hover:scale-125 xs:pl-0 xs:pt-1 sm:text-[.6rem] sm:h-16 sm:mb-2 sm:mt-2 sm:pt-2 sm:pl-2 lsm:text-[.75rem] lsm:pt-3 lsm:ht-12 md:text-lg
                  //  md:h-16 md:mb-5 md:pt-4 lg:text-[.9rem] lg:leading-4 lg:h-12 lg:mb-4 lg:ml-16  "
                //   className="bg-transparent w-[360px] h-[58px] bg-no-repeat text-[.5rem] grid grid-row items-center mb-2 pt-0 text-white red_button hover:scale-125 xs:pl-0 xs:pt-1 sm:text-[.6rem] sm:h-16 sm:mb-2 sm:mt-2 sm:pt-2 sm:pl-2 lsm:text-[.75rem] lsm:pt-3 lsm:ht-12 md:text-lg
                //    md:h-16 md:mb-5 md:pt-4 lg:text-[.9rem] lg:leading-4 lg:h-12 lg:mb-4 lg:ml-16  "
                // >
                className="bg-transparent bg-no-repeat w-[480px] h-[78px] text-[1.2em] font-semibold red_button grid grid-row items-center text-white pl-[1em] mb-[1.06em]">
             
                  Providing Effective Communication
                </li>
                <li
                  className="bg-transparent bg-no-repeat w-[480px] h-[78px] text-[1.2em] font-semibold red_button grid grid-row items-center text-white pl-[1em] mb-[1.06em]"
                >
                 Maximizing Return On Investment
                </li>
                <li
                  className="bg-transparent bg-no-repeat w-[480px] h-[78px] text-[1.2em] font-semibold red_button grid grid-row items-center text-white pl-[1em] mb-[1.06em]"
                >
                  Providing Timely Deliverables
                </li>
                <li
                  className="bg-transparent bg-no-repeat w-[480px] h-[78px] text-[1.2em] font-semibold red_button grid grid-row items-center text-white pl-[1em] mb-[1.06em]"
                >
                  Architecting SMARRTT Solutions
                </li>
              </ul>
            </div>
        </section>




    </div>
  </div>
    </>
  );
}
