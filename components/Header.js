// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Navbar from "./Navbar";

// const Header = () => {
//   return (
//     <>
//       <header className="min-h-[95px] bg-slate border-b-rose-400">
//         <div className="block">
//           <Image
//             src="/HACLogo.png"
//             alt="HAC logo"
//             width={200}
//             height={95}
//             className="absolute top-0 left-0  block"
//           ></Image>
//         </div>
//         <div className="flex flex-row flex-wrap-reverse max-w-4/5 justify-end">
//           <div className="hidden lg:flex">
//             <div className="nav-area">
//               <Navbar />
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import Image from "next/image";
import useDimensions from "react-cool-dimensions";
import arrayCeil from "../assets/arrayCeil";
import Navbar from "./Navbar";

export default function Header() {
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
      className="w-full h-screen flex justify-center overflow-hidden relative bg-black myHero"
    >
      <Image
        src="/homepage-header-background-V2.gif"
        alt="Hero Image"
        className="opacity-60 object-cover object-left-bottom"
        fill
      />

      <div>
        <Image
          src="/HACLogo.png"
          alt="HAC logo"
          width={200}
          height={95}
          className="absolute top-0 left-0 block"
        ></Image>
      </div>

      <div className="z-10 text-white">
        {/* <h2>Hello!</h2> */}
        <Navbar/>
        </div>
    </div>
  );
}
