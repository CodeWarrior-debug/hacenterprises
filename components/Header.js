import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="p-1 dark:bg-gray-800 dark:text-gray-100 h-24 bg-slate-400">
        <Image
          src="/HACLogo.png"
          alt="HAC logo"
          width={200}
          height={200}
          className="absolute top-0 left-0"
        ></Image>
        <div className="container flex flex-row justify-end">

          <div className="flex-shrink-0 hidden lg:flex">
            <div className="nav-area">
              {/* <Link href="/" className="logo">
                Logo
              </Link> */}
              <Navbar />
            </div>


          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
