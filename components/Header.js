  import React, { useState } from "react";
import Image from "next/image";
import useDimensions from "react-cool-dimensions";
import arrayCeil from "../assets/arrayCeil";
import Navbar from "./Navbar";

export default function Header() {
  //
  const [heroImage, setHeroImage] = useState("/hero-1440.png");
  const imageSizes = [720, 1080,1440];

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      setHeroImage(`/hero-${arrayCeil(imageSizes, width)}.png`);

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  return (
    <>
    <div
      ref={observe}
      className=" overflow-hidden object-fill relative bg-black myHero z-0">

      {/* large Background GIF, has to be in parent of foreground text */}

      <Image
        src={heroImage}
        alt="Hero Image"
        className="opacity-100  object-left-bottom -z-10"
        fill
      />

      {/* HAC logo, posiitoned absolutely */}

      <div className="w-full border-b-4 border-red-400 h-24 z-10">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <Image
              src="/HACLogo.png"
              alt="HAC logo"
              width={200}
              height={95}
              className="absolute top-0 left-0 block w-[199px]  "
            ></Image>
              {/* <Image
              src="/hac_logo.png"
              alt="HAC logo"
              width={100}
              height={100}
              className="absolute top-0 left-0 block "
            ></Image> */}
          </div>

        {/* Navbar */}

          <Navbar />
          {/* TODO offset top, spread evenly across right */}


        </div>
      </div>
      
    {/* Principles */}
    {/* sm: md: lg: xl: */}

    <div className="h-full flex flex-col justify-center z-10">
      <section className="grid grid-cols-2 m-8 mt-20">
            <h2 className="col-span-1 mr-auto ml-auto font-extrabold  text-white text-lg sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              A full service technology
              <br />
              solutions company with a
              <br />
              passion & purpose towards:
            </h2>
            <div className="col-span-1">
              <ul className="col-span-1">
                <li
                  className="bg-transparent bg-no-repeat text-lg bg-auto h-16 mb-8 text-white pl-3 pt-4 red_button"
                >
                  Providing Effective Communications
                </li>
                <li
                  className="bg-transparent bg-no-repeat text-lg bg-auto h-16 mb-8 text-white pl-3 pt-4 red_button"
                >
                 Maximizing Return On Investment
                </li>
                <li
                  className="bg-transparent bg-no-repeat text-lg bg-auto h-16 mb-8 text-white pl-3 pt-4 red_button"
                >
                  Providing Timely Deliverables
                </li>
                <li
                  className="bg-transparent bg-no-repeat text-lg bg-auto h-16 mb-8 text-white pl-3 pt-4 red_button"
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
