import React from "react";
import AltCard from "../components/AltCard";
import CardGlass from "../components/CardGlass";

const HtmlHomepage = () => {
  return (
    <>
      <div className="flex flex-row w-full">
        {/* <div className="w-1/2">  */}
        <div className="flex-shrink-0 w-1/2">
            <div className="chat bg-green-300 w-100">
              It is over Anakin, <br />I have the high ground.
            </div>
        </div>
      {/* </div> */}

      {/* <div className="w-1/2">  */}

        <div >
          <div className="chat chat-start">
            <div className="chat bg-green-300">
              It is over Anakin, <br />I have the high ground.
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <div className='h-full flex flex-row justify-end'>
      <div className='grid-options'>



      </div> */}
      <CardGlass />
      <AltCard />
      {/* </div> */}
    </>
  );
};

export default HtmlHomepage;
