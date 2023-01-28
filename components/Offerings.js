import React, { useState } from "react";

import Image from "next/image";
import Offering from "./Offering";

const Offerings = () => {
  const data3 =  <div id="later-offer-deets" className=" col-span-1 -translate-y-20 sm:translate-x-52 sm:-translate-y-12 lsm:translate-x-64 lsm:-translate-y-20 lmm:translate-x-full lg:-translate-y-8 " > {" "} <h2 className="text-aqua font-extrabold text-lg text-center drop-shadow-[0_1.2px_1.2px_rgba(200,200,200,0.6)]"> {" "} OUR BEST SOLUTIONS{" "} </h2>{" "} <div className="flex flex-row "> {" "} <p className="w-2/3 p-0 pt-4 font-semibold text-xs pl-3 lsm:text-base"> {" "} are based on knowledge and understanding of our clients’ goals and objectives, state of business environment, and challenges. Our primary purpose is to effectively and efﬁciently create solutions that maximize clients’ ROI through coordination and collaboration.{" "} </p>{" "} <Image src="/smart_drill.png" alt="standards_drilldown" className="m-2 mt-6 max-h-48" width={100} height={100} />{" "} </div>{" "} </div> ;
  const data2 = <div id="later-offer-deets" className=" col-span-1 -translate-y-20 sm:translate-x-52 sm:-translate-y-12 lsm:translate-x-64 lsm:-translate-y-20 lmm:translate-x-full lg:-translate-y-8 " > {" "} <h2 className="text-aqua font-extrabold text-lg text-center drop-shadow-[0_1.2px_1.2px_rgba(200,200,200,0.6)]"> {" "} OUR SMARRTT SOLUTIONS{" "} </h2>{" "} <div className="flex flex-row "> {" "} <p className="w-2/3 p-0 pt-4 font-semibold text-xs pl-3 lsm:text-base"> {" "} are based on knowledge and understanding of our clients’ goals and objectives, state of business environment, and challenges. Our primary purpose is to effectively and efﬁciently create solutions that maximize clients’ ROI through coordination and collaboration.{" "} </p>{" "} <Image src="/smart_drill.png" alt="standards_drilldown" className="m-2 mt-6 max-h-48" width={100} height={100} />{" "} </div>{" "} </div> ;
  const data1 = <h2>GREAT!!!!</h2> ;
  
  const [bgText, setBGText] = useState(data1);
  const [color, setColor] = useState('bg-purple-200');

  const upperCase = (text) => {
    return text.toUpperCase();
  };
 
  const handleBox1Toggle=()=>{
    // setBGText(data3)
    setColor('bg-red-400')
  }
  const handleBox1Leave=()=>{
    // setBGText(data2)
    setColor('bg-blue-200')
  }




  return (
    <>
      <div className="grid grid-cols-2">
        <div id="later-offer" className="col-span-1 bg-blue-700 text-white" onMouseEnter={()=>handleBox1Toggle()} onMouseLeave={()=>handleBox1Leave()}>
          <h3>Our SMARTEST SOLUTIONS</h3>
        </div>
        
        <Offering className="col-span-1 bg-slate-900" id="later-offer-deets" jsx={bgText} color={color}/>
          
      </div>
    </>
  );
};

export default Offerings;
