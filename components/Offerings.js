import React, { useState } from "react";

import Image from "next/image";

const Offerings = () => {

  const [title, SetTitle] = useState("Our SMARTT Solutions");
  const [texts, SetTexts] = useState("are based on knowledge and understanding of our clients’ goals and objectives, state of business environment, and challenges. Our primary purpose is to effectively and efﬁciently create solutions that maximize clients’ ROI through coordination and collaboration.");
  const [imgSrc, SetImgSrc] = useState("/smart_drill.png");
  const [imgAlt, SetImgAlt] = useState("standards_drilldown");
  const [color, SetColor] = useState("#0000FF");

  const upperCase = (text) => {
    return text.toUpperCase();
  };

  const handleBox1Toggle = () => {
    SetTitle("Our SMARTT Solutions");
    SetTexts(
      "are based on knowledge and understanding of our clients’ goals and objectives, state of business environment, and challenges. Our primary purpose is to effectively and efﬁciently create solutions that maximize clients’ ROI through coordination and collaboration."
    );
    SetImgSrc("/smart_drill.png");
    SetImgAlt("standards_drilldown");
    SetColor("#00FF00");
  };
  const handleBox2Toggle = () => {
    SetTitle("Our System Development");
    SetTexts('Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate');
    SetImgSrc("/smart_drill.png");
    SetImgAlt("standards_drilldown");
    SetColor("#00FF00");
  };
  const handleBox3Toggle = () => {
    SetTitle("Our Data Security");
    SetTexts('Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate');
    SetImgSrc("/smart_drill.png");
    SetImgAlt("standards_drilldown");
    SetColor("#00FF00");
  };
  const handleBox4Toggle = () => {
    SetTitle("OUR EXPERTISE AREAS");
    SetTexts('Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate');
    SetImgSrc("/smart_drill.png");
    SetImgAlt("standards_drilldown");
    SetColor("#00FF00");
  };

  const defaultHandleLeave = () => {
    SetTitle("Our SMARTT Solutions");
    SetTexts(
      "are based on knowledge and understanding of our clients’ goals and objectives, state of business environment, and challenges. Our primary purpose is to effectively and efﬁciently create solutions that maximize clients’ ROI through coordination and collaboration."
    );
    SetImgSrc("/smart_drill.png");
    SetImgAlt("standards_drilldown");
    SetColor("#00FF00");
  };

  // onMouseLeave={()=>handleBox1Leave()}

  return (
    <>
      <div className="grid grid-cols-2">
        <div>

        <div
        
          className="h-1/4 col-start-1 col-span-1 bg-regal-blue hover:bg-aqua hover:text-black text-white font-extrabold text-lg flex flex-col justify-center"
          onMouseEnter={() => handleBox1Toggle() }
          >
          ARCHITECTING SMARRTT SOLUTIONS
        </div>
        <div
        
        className="h-1/4 col-start-1 col-span-1 bg-regal-blue hover:bg-aqua hover:text-black text-white font-extrabold text-lg flex flex-col justify-center"
        onMouseEnter={() => handleBox2Toggle()} onMouseLeave={() => defaultHandleLeave()}
        >
          SYSTEM DEVELOPMENT & INTEGRATION
          
        </div>
        <div
        
          className="h-1/4 col-start-1 col-span-1 bg-regal-blue hover:bg-aqua hover:text-black text-white font-extrabold text-lg flex flex-col justify-center"
          onMouseEnter={() => handleBox3Toggle()} onMouseLeave={() => defaultHandleLeave()}
        >
          
          DATA & INFORMATION SECURITY

        </div>
        {/* <div
        id="later-offer"
        className="h-1/4 col-start-1 col-span-1 bg-regal-blue hover:bg-aqua hover:text-black text-white font-extrabold text-lg"
        onMouseEnter={() => handleBox4Toggle()} onMouseLeave={() => defaultHandleLeave()}
        >
          
          EXPERTISE IN
        </div> */}
                      <div className="h-1/4 col-span-1 bg-regal-blue hover:bg-aqua  m-0 grid grid-cols-3 items-center"
          onMouseEnter={() => handleBox4Toggle()} onMouseLeave={() => defaultHandleLeave()}
                      
                      >
                <div className="col-span-1 flex flex-col justify-center">
                  <h3 className="text-white hover:text-black font-extrabold text-lg pl-2">
                    EXPERTISE IN
                  </h3>
                </div>
                <div className="col-span-2 hidden md:block lg:pl-8 flex flex-col justify-center">
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
              </div>
        </div>

        <div
          id="later-offer-deets"
          style={{ backgroundColor: { color } }}
          className=" col-start-2 col-span-1"
        >
          {/* // -translate-y-20 sm:translate-x-52 sm:-translate-y-12 lsm:translate-x-64 lsm:-translate-y-20 lmm:translate-x-full lg:-translate-y-8" > */}

          <h2 className="text-aqua font-extrabold text-lg text-center drop-shadow-[0_1.2px_1.2px_rgba(200,200,200,0.6)] ">
            {upperCase(title)}
          </h2>
          <div className="flex flex-row ">
            <p className="w-2/3 p-0 pt-4 font-semibold text-xs pl-3 lsm:text-base">
              {" "}
              {texts}{" "}
            </p>
            <Image
              src={imgSrc}
              alt={imgAlt}
              className="m-2 mt-6 max-h-48"
              width={100}
              height={100}
            />{" "}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Offerings;
