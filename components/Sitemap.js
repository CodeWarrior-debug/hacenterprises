import { HACofferings} from "../public/menuItemsSitemap";
import Link from "next/link";

import React from "react";

const Sitemap = () => {
  return (
    <>
        <div className="grid grid-cols-4">
          {HACofferings.map((topObject, index) => {
            return (
              <>
                <div className="col-span-1 flex flex-col text-center  ml-8 mr-8">
                  <div className="min-h-[64px] flex flex-col justify-center">
                  <Link
                    href={topObject.url}
                    className="text-white hover:underline font-semibold text-l"
                    key={index}
                  >
                    {topObject.title}
                  </Link>
                  </div>

                  {topObject.submenu
                    ? topObject.submenu.map((item, index) => {
                        return (
                          <>
                            <div key={index} className="text-white font-normal flex flex-wrap justify-center mb-2">
                              <Link href={item.url} className="hover:underline">
                                <h3 className="text-sm font-light">{item.title}</h3>{" "}
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

        </div>

    </>
  );
};

export default Sitemap;
