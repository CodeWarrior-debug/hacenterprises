import React from "react";

const Offerings = () => {
  return (
    <>
      <div className="offering_wrapper">
        <div className="grid grid-cols-2 w-full ">
          {/* Compnent Left - Banner */}
          <div className="col-span-1 bg-green ">
            <h4 className="font-bold text-2xl indent-4">ARCHITECTURE</h4>
          </div>

          <div className="col-span-1 bg-aqua">
            <h4 className="font-bold text-2xl indent-4">
              Offering X
            </h4>
          </div>
        </div>
        {/* Component Right = Detail */}
        <div className="col-span-1 bg-white h-full">
          <h4 className="text-center font-bold">ARCHITECTURE</h4>
          <p>
            {" "}
            Our end-to-end architectural solutions rely on through understanding
            of our client's goals and objectives, state of environment, and
            challenges. Our primary mission is to create solutions that maximize
            our client's ROI through effective coordination and collaboration
            with stakeholders.
          </p>
        </div>
      </div>
    </>
  );
};

export default Offerings;
