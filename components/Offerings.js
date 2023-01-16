import React from "react";

const Offerings = () => {
  return (
    <>
      <div className="offering_wrapper ">
        <div className="grid grid-cols-2 w-full ">
          {/* Compnent Left - Banner */}
          <div className="col-span-1  ">
            <h4 className="font-bold text-2xl indent-4 h-1/3 bg-green">ARCHITECTURE &emsp;&emsp;&emsp;&emsp; &gt; </h4>
            <h4 className="font-bold text-2xl indent-4 h-1/3 bg-aqua">EXPERTISE</h4>
            <h4 className="font-bold text-2xl indent-4 h-1/3 bg-rylblue text-white">ETC</h4>
            
          </div>
    
        <div className="col-span-1 bg-white h-full">
          <h4 className="text-center font-bold text-xl text-green mb-2  ">ARCHITECTURE</h4>
          <p className="m-4">
            Our end-to-end architectural solutions rely on through understanding
            of our client's goals and objectives, state of environment, and
            challenges. Our primary mission is to create solutions that maximize
            our client's ROI through effective coordination and collaboration
            with stakeholders.
          </p>
        </div>

        </div>
       
      </div>
    </>
  );
};

export default Offerings;
