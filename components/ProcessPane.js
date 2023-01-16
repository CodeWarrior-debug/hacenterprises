import React from "react";
import Image from "next/image";

const ProcessPane = () => {
  return (
    <>
      <div className="bg-slate m-4 grid grid-cols-2">
        <div className="col-span-1 ">
          <div className="text-white">
            <h4 className="text-xl font-extrabold text-center mb-2">How do we deliver success for our customers?</h4>
            <p className="text-left m-3">
              Processes such as TOPS, PDCA, RMF, A3, 6S, & Kaizen breakthrough
              initiatives ensures a comprehensive understanding of your business
              goals contributing in delivering solutions that align with your
              stated requirements, expressed needs & expectations
            </p>
          </div>
          <div className="text-white text-center h-1/2 mt-16">
                <a className="text-2xl bg-rylblue">Learn more about these processes</a>
          </div>
        </div>
        <div>
            <div className="col-span-1 ">
                <Image
                src="/sys_engineering_map.jpg"
                width={800}
                height={100}
                alt="systems_engineering_images"
                className="w-full"
                >

                </Image>
            </div>
        </div>

      </div>
    </>
  );
};

export default ProcessPane;
