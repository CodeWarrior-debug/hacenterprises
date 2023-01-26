import React from "react";

import Image from "next/image";
const Offerings = () => {
  return (
    <>
      <section className="h-[50vh]">
        
          
              <div id="first-offer" className="h-1/4 w-1/2 bg-regal-blue hover:bg-aqua m-0 grid items-center ">
                {/* <!-- TODO, middle align h3, change text, fix tiny gap? --> */}
                <h3 className="text-white hover:text-black font-extrabold text-lg pl-2 lsm:text-2xl lsm:pl-8 md:text-2xl lg:pl-16">
                  ARCHITECTING SMARRTT SOLUTIONS
                </h3>
              </div>
              <div id="first-offer-deets" className="w-1/2 ">
              <h2 className="text-aqua font-extrabold text-3xl text-center drop-shadow-[0_1.2px_1.2px_rgba(200,200,200,0.6)]">
                OUR SMARRTT SOLUTIONS
              </h2>
              <div className="flex flex-row ">
                <p className="w-2/3 p-0 pt-4 font-semibold text-sm lsm:text-base">
                  are based on knowledge and understanding of our clients’ goals
                  and objectives, state of business environment, and challenges.
                  Our primary purpose is to effectively and efﬁciently create
                  solutions that maximize clients’ ROI through coordination and
                  collaboration.
                </p>
                <Image
                  src="/smart_drill.png"
                  alt="standards_drilldown"
                  className="m-4 mt-6 max-h-48"
                  width={100}
                  height={100}
                />
              </div>
              </div>
              <div id="second-offer" className="h-1/4 bg-regal-blue hover:bg-aqua m-0 grid items-center ">
                {/* <!-- TODO, middle align h3, change text, fix tiny gap? --> */}
                <h3 className="text-white hover:text-black font-extrabold text-lg pl-2 lsm:text-2xl lsm:pl-8 md:text-2xl lg:pl-16">
                SYSTEM DEVELOPMENT, INTEGRATION, & ENHANCEMENT
                </h3>
              </div>
              <div id="second-offer-deets" className=" m-2">
              <h2 className="text-red-400 font-extrabold text-3xl text-center drop-shadow-[0_1.2px_1.2px_rgba(200,200,200,0.6)]">
                Lorem ipsum dolor sit amet, qui minim
              </h2>
              <div className="flex flex-row ">
                <p className="w-2/3 p-0 pt-4 font-semibold text-sm lsm:text-base">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                </p>
                <Image
                  src="/smart_drill.png"
                  alt="standards_drilldown"
                  className="m-4 mt-6 max-h-48"
                  width={100}
                  height={100}
                />
              </div>

            </div>
              {/* <div className="h-1/4 bg-regal-blue hover:bg-aqua  m-0 grid items-center">
                <h3 className="text-white hover:text-black font-extrabold text-lg pl-2 lsm:text-2xl lsm:pl-8 md:text-2xl lg:pl-16">
                  SYSTEM DEVELOPMENT, INTEGRATION, & ENHANCEMENT
                </h3>
              </div> */}
              {/* <div className="h-1/4 bg-regal-blue hover:bg-aqua  m-0 grid items-center">
                <h3 className="text-white hover:text-black font-extrabold text-lg pl-2 lsm:text-2xl lsm:pl-8 md:text-2xl lg:pl-16">
                  DATA & INFORMATION SECURITY
                </h3>
              </div> */}
              {/* <div className="h-1/4 bg-regal-blue hover:bg-aqua  m-0 grid grid-cols-3 items-center">
                <div className="">
                  <h3 className="text-white hover:text-black font-extrabold text-lg pl-2 lsm:text-2xl lsm:pl-8 md:text-2xl lg:pl-16">
                    EXPERTISE IN
                  </h3>
                </div>
                <div className="col-span-2 hidden md:block lg:pl-8">
                  <p className="text-white leading-tight md:text-xs text-sm text-center">
                    ISO 9001, 20001, 27001, & OTHERS
                    <br />
                    CMMI V2, SVC & DEV MODELS
                    <br />
                    CMMC
                    <br />
                    NIST 800 SERIES
                    <br />
                  </p>
                </div>
              </div> */}
            {/* </div> */}
            {/* <div className=" m-2">
              <h2 className="text-aqua font-extrabold text-3xl text-center drop-shadow-[0_1.2px_1.2px_rgba(200,200,200,0.6)]">
                OUR SMARRTT SOLUTIONS
              </h2>
              <div className="flex flex-row ">
                <p className="w-2/3 p-0 pt-4 font-semibold text-sm lsm:text-base">
                  are based on knowledge and understanding of our clients’ goals
                  and objectives, state of business environment, and challenges.
                  Our primary purpose is to effectively and efﬁciently create
                  solutions that maximize clients’ ROI through coordination and
                  collaboration.
                </p>
                <Image
                  src="/smart_drill.png"
                  alt="standards_drilldown"
                  className="m-4 mt-6 max-h-48"
                  width={100}
                  height={100}
                />
              </div>
            </div> */}
            {/* <div id="second-offer-deets" className=" m-2 ">
              <h2 className="text-red-400 font-extrabold text-3xl text-center drop-shadow-[0_1.2px_1.2px_rgba(200,200,200,0.6)]">
                OUR SMARRTT SOLUTIONS
              </h2>
              <div className="flex flex-row ">
                <p className="w-2/3 p-0 pt-4 font-semibold text-sm lsm:text-base">
                  are based on knowledge and understanding of our clients’ goals
                  and objectives, state of business environment, and challenges.
                  Our primary purpose is to effectively and efﬁciently create
                  solutions that maximize clients’ ROI through coordination and
                  collaboration.
                </p>
                <Image
                  src="/smart_drill.png"
                  alt="standards_drilldown"
                  className="m-4 mt-6 max-h-48"
                  width={100}
                  height={100}
                />
              </div>
            </div> */}
          
      </section>
    </>
  );
};

export default Offerings;
