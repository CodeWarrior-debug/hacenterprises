import React from "react";

import Image from "next/image";
const Offerings = () => {
  return (
    <>

    <section>
          <ul>
            <li className="grid grid-cols-2">
              <div>
                <div
                  className="bg-no-repeat bg-cover h-1/4 bg-regal-blue hover:bg-blue-400 m-0 grid items-center"
                >
                  {/* <!-- TODO, middle align h3, change text, fix tiny gap? --> */}
                  <h3 className="text-white font-extrabold text-2xl pl-16">ARCHITECTING SMARRTT SOLUTIONS</h3>
                </div>
                <div
                  className="bbg-no-repeat bg-cover h-1/4 blue_image hover:blue_button_hover m-0 grid items-center"
                >
                  <h3 className="font-extrabold text-2xl pl-16 text-white">
                    SYSTEM DEVELOPMENT, INTEGRATION, & ENHANCEMENT
                  </h3>
                </div>
                <div
                  className="bbg-no-repeat bg-cover h-1/4 blue_image hover:blue_button_hover m-0 grid items-center"
                >
                  <h3 className="font-extrabold text-2xl pl-16 text-white">
                  DATA & INFORMATION SECURITY
                  </h3>
                </div>
                <div
                  className="bbg-no-repeat bg-cover h-1/4 blue_image hover:blue_button_hover m-0 grid items-center"
                >
                  <h3 className="font-extrabold text-2xl pl-16 text-white">
                  EXPERTISE IN
                  </h3>
                </div>

              </div>
              <div className="col-span-1 m-8">
                <h2 className="text-blue-300 font-extrabold text-3xl text-center drop-shadow-sm">
                  OUR SMARRTT SOLUTIONS
                </h2>
                <div className="flex flex-row ">
                  <p className="w-2/3 p-8 pt-4 font-semibold text-xl">
                    are based on knowledge and understanding of our clients’
                    goals and objectives, state of business environment, and
                    challenges. Our primary purpose is to effectively and
                    efﬁciently create solutions that maximize clients’ ROI
                    through coordination and collaboration.
                  </p>
                  <Image
src="/smart_drill.png"
alt="standards_drilldown"
                    
className="m-4 mt-6"
width={100}
height={100}
                  />
                </div>
              </div>
            </li>
          </ul>
        </section>

    </>
  );
};

export default Offerings;
