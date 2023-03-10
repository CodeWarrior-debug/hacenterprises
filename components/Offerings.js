import React, { useState } from "react";


import Image from "next/image";

const Offerings = () => {

  const [offering, setOffering] = useState(
    {
    title:'Our SMARTT Solutions',
      texts: "",
      imgSrc: "",
      imgAlt: "",
      color: ""
    }
  )


  const upperCase = (text) => {
     return text.toUpperCase();
  };

  const handleBox1Toggle = () => {

    setOffering({
      title:"Our SMARTT Solutions",
      texts: "are based on knowledge and understanding of our clients’ goals and objectives, state of business environment, and challenges. Our primary purpose is to effectively and efﬁciently create solutions that maximize clients’ ROI through coordination and collaboration.",
      imgSrc: "/smart_drill.png",
      imgAlt: "standards_drilldown",
      color: "#0000FF"
    })

  };
  const handleBox2Toggle = () => {
    setOffering({
      title:"Our System Development",
      texts: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate",
      imgSrc: "/smart_drill.png",
      imgAlt: "standards_drilldown",
      color: "#00FF00"
    })

  };
  const handleBox3Toggle = () => {
    setOffering({
      title:"Our Data Security",
      texts: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate",
      imgSrc: "/smart_drill.png",
      imgAlt: "standards_drilldown",
      color: "#00FF00"
  })};
  const handleBox4Toggle = () => {
    setOffering({
      title:"Our Expertise Areas",
      texts: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate",
      imgSrc: "/smart_drill.png",
      imgAlt: "standards_drilldown",
      color: "#00FF00"
  })};

  const defaultHandleLeave = () => {
    setOffering({
      title:"Our SMARTT Solutions",
      texts: "are based on knowledge and understanding of our clients’ goals and objectives, state of business environment, and challenges. Our primary purpose is to effectively and efﬁciently create solutions that maximize clients’ ROI through coordination and collaboration.",
      imgSrc: "/smart_drill.png",
      imgAlt: "standards_drilldown",
      color: "#0000FF"
  })};



  return (
    <>
      <div className="grid grid-cols-2 h-[45vh]">
        <div>


        <div
        
          className="h-1/4 col-start-1 col-span-1
           bg-gradient-to-b from-regal-blue to-oxfordBlue hover:from-tealish hover:to-medElecBlue 
            text-white font-extrabold text-lg flex flex-col justify-center pl-4"
          onMouseEnter={() => handleBox1Toggle() }
          >
          ARCHITECTING SMARRTT SOLUTIONS
        </div>
        <div
        
        className="h-1/4 col-start-1 col-span-1
        bg-gradient-to-b from-regal-blue to-oxfordBlue hover:from-tealish hover:to-medElecBlue 
        text-white font-extrabold text-lg flex flex-col justify-center pl-4"
        onMouseEnter={() => handleBox2Toggle()} onMouseLeave={() => defaultHandleLeave()}
        >
          SYSTEM DEVELOPMENT & INTEGRATION
          
        </div>
        <div
        
          className="h-1/4 col-start-1 col-span-1
          bg-gradient-to-b from-regal-blue to-oxfordBlue hover:from-tealish hover:to-medElecBlue 
          text-white font-extrabold text-lg flex flex-col justify-center pl-4"
          onMouseEnter={() => handleBox3Toggle()} onMouseLeave={() => defaultHandleLeave()}
        >
          
          DATA & INFORMATION SECURITY

        </div>

                      <div className="h-1/4 col-span-1 
           bg-gradient-to-b from-regal-blue to-oxfordBlue hover:from-tealish hover:to-medElecBlue 
                      m-0 grid grid-cols-3 items-center"
          onMouseEnter={() => handleBox4Toggle()} onMouseLeave={() => defaultHandleLeave()}
                      
                      >
                <div className="col-span-1 flex flex-col justify-center">
                  <h3 className="text-white  font-extrabold text-lg pl-4">
                    EXPERTISE IN
                  </h3>
                </div>
                <div className="col-span-2 md:block lg:pl-8 flex flex-col justify-start text-center">
                  <p className="text-white leading-tight md:text-xs lg:text-[.9rem] lg:leading-[1.25rem] text-start">
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
          // style={{ backgroundColor: offering.color  }}
          className=" col-start-2 col-span-1"
        >


          <h2 className="text-aqua font-extrabold text-lg lg:text-4xl pl-7 pt-3 text-start drop-shadow-[0_1.2px_1.2px_rgba(200,200,200,0.6)] ">
            {upperCase(offering.title)}
          </h2>
          <div className="flex flex-row ">
            <p className="w-2/3 p-0 pt-4 font-semibold text-xs pl-7 lsm:text-base lg:text-2xl ">
              {" "}
              {offering.texts}{" "}
            </p>
            <Image
              src={offering.imgSrc}
              alt={offering.imgAlt}
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
      
export default Offerings
