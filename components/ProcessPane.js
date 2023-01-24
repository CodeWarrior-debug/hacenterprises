import React from "react";
import Image from "next/image";

const ProcessPane = () => {
  return (
    <>
      <div className="background-reddish grid grid-cols-2">
        <div className="col-span-1 ">
          <div className="text-white">
            <h4 className="text-4xl font-extrabold text-center mt-5 mb-2 p-8">How do we deliver success for our customers?</h4>
            <p className="text-left text-2xl p-8 pl-16 pr-16 leading-relaxed">
            Techniques such as TOPS, PDCA, RMF, A3, 6S, and Kaizen breakthrough initiatives ensure a comprehensive understanding of your business goals contributing to delivering solutions that align with your stated requirements, expressed needs, and expectations.
            </p>
          </div>
          <div className="text-white text-center h-1/2 ">
                <a className="text-2xl bg-gray-300 pl-32 pr-32 rounded-3xl">Learn more about these processes</a>
          </div>
        </div>
        <div>
            <div className="col-span-1 text-center">
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
