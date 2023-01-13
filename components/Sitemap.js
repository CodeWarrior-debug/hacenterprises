import { HACofferings, what_we_do } from "../public/menuItemsSitemap";
import Link from "next/link";

import React from "react";

const Sitemap = () => {
  return (
    <>
      {/* <div className="flex"> */}
        <div className="flex justify-start">
          {HACofferings.map((topObject, index) => {
            return (
              <>
                <div className=" flex flex-col text-center  ml-12 mr-12">
                  <div className="min-h-[64px] flex flex-col justify-center">
                  <Link
                    href={topObject.url}
                    className="text-white hover:underline text-xl"
                    key={index}
                  >
                    {topObject.title}
                  </Link>
                  </div>

                  {topObject.submenu
                    ? topObject.submenu.map((item, index) => {
                        return (
                          <>
                            <div key={index} className="text-white font-normal flex flex-wrap justify-center">
                              <Link href={item.url} className="hover:underline">
                                <h3>{item.title}</h3>{" "}
                              </Link>
                            </div>
                          </>
                        );
                      })
                    : ""}
                </div>
              </>
            );
          })}

          {/* <div className="text-white ml-4 mr-4">
        <Link  href={what_we_do.url}><h3 className="font-semibold">{what_we_do.title}</h3> </Link>
        {what_we_do.submenu.map((item, index)=>{
        return(

        )
      })}
        
      </div> */}

          {/* <div className="text-white ml-4 mr-4">
        <Link  href={HACofferings[1].url}><h3 className="font-semibold">{HACofferings[1].title}</h3> </Link>
        { HACofferings[1].submenu ? HACofferings[1].submenu[0].title : ""}

        {HACofferings[1].submenu.map((item, index)=>{
            return (
                <div key={index}>I am one Object in the Array {item}</div>
            )
        })
    }
      </div> */}
        </div>
      {/* </div> */}
    </>
  );
};

export default Sitemap;
