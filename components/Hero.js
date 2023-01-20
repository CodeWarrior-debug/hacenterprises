import React, { useState } from "react";
import Image from "next/image";
import useDimensions from "react-cool-dimensions";
import arrayCeil from "../assets/arrayCeil";
import Navbar from "./Navbar";

export default function Hero() {
  //
  const [heroImage, setHeroImage] = useState("hero-1920.jpg");
  const imageSizes = [600, 1280, 1920];

  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      setHeroImage(`hero-${arrayCeil(imageSizes, width)}.jpg`);

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  return (
    <div
      ref={observe}
      className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-black myHero"
    >
      <Image
        src="/homepage-header-background-V2.gif"
        alt="Hero Image"
        className="opacity-60 object-cover object-left-bottom"
        fill
      />
      <div className="">
        <Navbar className="z-10"></Navbar>
      </div>
    </div>
  );
}
