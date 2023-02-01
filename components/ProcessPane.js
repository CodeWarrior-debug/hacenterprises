import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProcessPane = () => {
  return (
    <>
      <div className="bg-gradient-to-b to-maroon from-veniceRed grid grid-cols-2 p-4">
        <div className="col-span-2 md:col-span-1">
          <div className="text-white">
            <h4 className="text-4xl font-extrabold text-start xl:mt-5 xl:mb-2 xl:p-8">How do we deliver success for our customers?</h4>
            <p className="text-left lg:text-xl xl:text-2xl p-8 pr-16 pb-16 leading-relaxed">
            Techniques such as TOPS, PDCA, RMF, A3, 6S, and Kaizen breakthrough initiatives ensure a comprehensive understanding of your business goals contributing to delivering solutions that align with your stated requirements, expressed needs, and expectations.
            </p>
          </div>
          <div className="text-white text-center h-8">
                <Link href="" className=" bg-gray-300 rounded-3xl text-black font-bold hover:bg-black pr-2 pl-2 hover:text-white xl:p-0 lg:text-xl xl:pl-1 xl:pr-2 2xl:pl-2 2xl:pr-8">LEARN MORE ABOUT THESE PROCESSES</Link>
          </div>
        </div>
        <div>
            <div className="col-span-1 text-center hidden md:block">
                <Image
                src="/sys_engineering_map.png"
                width={750}
                height={500}
                alt="systems_engineering_images"
                className="m-12 ml-0"
                >

                </Image>
            </div>
        </div>

      </div>
    </>
  );
};

export default ProcessPane;
