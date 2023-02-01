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
        className="opacity-100  object-left-bottom -z-10"
        fill
      />
      {/* <Hero/> */}

      {/* HAC logo, posiitoned absolutely */}

      <div className="w-full h-24 header-overlay">
        

        <div className="grid grid-cols-3 h-full">
          <div className="col-span-1 mt-8 ml-8">
          <Image
              src="/hac_logo_white-offset.png"
              alt="HAC logo"
              width={200}
              height={95}
              className="absolute top-2 left-2 block w-[199px]"
              ></Image>
          </div>

        

          <Navbar />
              {/* </div> */}
          


        </div>
      </div>
      <div className="h-2 bg-gradient-to-r from-red-900 to-red-700 z-10"> </div>
      
    {/* Principles */}
    {/* sm: md: lg: xl: */}

    <div className="h-full flex flex-col justify-center z-10">
      <section className="grid grid-cols-2 ml-8 xs:mt-4 sm:mt-8 lsm:mt-12 md:mt-20 lg:mt-0 lg:mb-24">
            <p className="col-span-1 mr-auto ml-auto font-extrabold text-white text-xl xs:mb-16 sm:mb-4 sm:text-xl lsm:text-xl lsm:leading-relaxed lg:text-xl xl:mt-12 xl:text-5xl">
              A full service technology solutions company with a passion & purpose towards:
            </p>
            <div className="col-span-1">
              <ul className="col-span-1 pl-20">
                <li
                  className="bg-transparent bg-no-repeat text-[.5rem] h-8 mb-2 pt-0 text-white red_button hover:scale-125 xs:pl-0 xs:pt-1 sm:text-[.6rem] sm:h-16 sm:mb-2 sm:mt-2 sm:pt-2 sm:pl-2 lsm:text-[.75rem] lsm:pt-3 lsm:ht-12 md:text-lg
                   md:h-16 md:mb-5 md:pt-4 lg:text-[.9rem] lg:leading-4 lg:h-12 lg:mb-4 lg:ml-16 lg:pt-3.5 "
                >
                  Providing Effective Communication
                </li>
                <li
                  className="bg-transparent bg-no-repeat text-[.5rem] h-8 mb-2 pt-0 text-white red_button hover:scale-125 xs:pl-0 xs:pt-0 sm:text-[.6rem] sm:h-16 sm:mb-2 sm:mt-2 sm:pt-2 sm:pl-2 lsm:text-[.75rem] lsm:pt-3 lsm:ht-12 md:text-lg
                  md:h-16 md:mb-5 md:pt-4 lg:text-[.9rem] lg:leading-4 lg:h-12 lg:mb-4 lg:ml-16 lg:pt-3.5"
                >
                 Maximizing Return On Investment
                </li>
                <li
                  className="bg-transparent bg-no-repeat text-[.5rem] h-8 mb-2 pt-0 text-white red_button hover:scale-125 xs:pl-0 xs:pt-0 sm:text-[.6rem] sm:h-16 sm:mb-2 sm:mt-2 sm:pt-2 sm:pl-2 lsm:text-[.75rem] lsm:pt-3 lsm:ht-12 md:text-lg
                  md:h-16 md:mb-5 md:pt-4 lg:text-[.9rem] lg:leading-4 lg:h-12 lg:mb-4 lg:ml-16 lg:pt-3.5"
                >
                  Providing Timely Deliverables
                </li>
                <li
                  className="bg-transparent bg-no-repeat text-[.5rem] h-8 mb-2 pt-0 text-white red_button hover:scale-125 xs:pl-0 xs:pt-0 sm:text-[.6rem] sm:h-16 sm:mb-2 sm:mt-2 sm:pt-2 sm:pl-2 lsm:text-[.85rem] lsm:pt-3 lsm:ht-12 md:text-lg
                  md:h-16 md:mb-5 md:pt-4 lg:text-[.9rem] lg:leading-4 lg:h-12 lg:mb-4 lg:ml-16 lg:pt-3.5"
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
