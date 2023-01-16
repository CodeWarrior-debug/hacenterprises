import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="min-h-[95px] bg-slate">
        <div className="block">
          <Image
            src="/HACLogo.png"
            alt="HAC logo"
            width={200}
            height={95}
            className="absolute top-0 left-0  block"
          ></Image>
        </div>
        <div className="flex flex-row flex-wrap-reverse max-w-3/5 justify-end">
          <div className="hidden lg:flex">
            <div className="nav-area">
              <Navbar />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
