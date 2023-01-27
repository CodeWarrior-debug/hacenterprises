import React from "react";

import Image from "next/image";
const Offerings = () => {
  return (
    <>
      <section>
      {/* xs: '320px', sm: '401px', lsm: '560px', md: '768px',  '1024px', // '1280px', // => @media (min-width: 1280px) { ... } '2xl': '1536px', */}
            <div className="grid grid-cols-2 ">
              {/* OFFERING START */}
              <div className="h-1/4  align-middle grid col-span-1">
                <h3 id="first-offer" className= "bg-regal-blue hover:bg-aqua mr-2 text-white hover:text-black font-extrabold text-lg pl-2 lsm:text-2xl lsm:pl-8 md:text-2xl lg:pl-16 col-span-1">

                  ARCHITECTING SMARRTT SOLUTIONS
                </h3>

                <div id="first-offer-deets" className="translate-x-36 -translate-y-20 sm:translate-x-72 md:translate-x-72 ">
                  <h2 className="text-aqua font-extrabold text-lg text-center drop-shadow-[0_1.2px_1.2px_rgba(200,200,200,0.6)]">
                    OUR SMARRTT SOLUTIONS
                  </h2>
                  <div className="flex flex-row ">
                    <p className="w-2/3 p-0 pt-4 font-semibold text-xs pl-3 lsm:text-base">
                      are based on knowledge and understanding of our clients’
                      goals and objectives, state of business environment, and
                      challenges. Our primary purpose is to effectively and
                      efﬁciently create solutions that maximize clients’ ROI
                      through coordination and collaboration.
                    </p>
                    <Image
                      src="/smart_drill.png"
                      alt="standards_drilldown"
                      className="m-2 mt-6 max-h-48"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>

              </div>
              {/* OFFERING START */}





              
              {/* <div className="h-1/4 bg-regal-blue hover:bg-aqua  m-0 grid items-center">
                <h3 className="text-white hover:text-black font-extrabold text-lg pl-2 lsm:text-2xl lsm:pl-8 md:text-2xl lg:pl-16">
                  SYSTEM DEVELOPMENT, INTEGRATION, & ENHANCEMENT
                </h3>
              </div> */}

              {/* <div className="h-1/4 bg-regal-blue hover:bg-aqua  m-0 grid items-center">
                <h3 className="text-white hover:text-black font-extrabold text-lg pl-2 lsm:text-2xl lsm:pl-8 md:text-2xl lg:pl-16">
                  DATA & INFORMATION SECURITY
                </h3>
              </div>
              <div className="h-1/4 bg-regal-blue hover:bg-aqua  m-0 grid grid-cols-3 items-center">
                <div className="col-span-1">
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
            </div>

            {/* <div className="col-span-1 m-2 second-offer-deets">
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
          {/* </li>
        </ul> */}
      </section>
    </>
  );
};

export default Offerings;
