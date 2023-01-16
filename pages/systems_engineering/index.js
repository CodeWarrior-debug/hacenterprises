import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const myArray = [
    { name: "Operations Research & Analysis", url: "/systems_engineering/op_research_and_analytics"},
    { name: "Engineering Service 2", url: "/systems_engineering/2"},
    { name: "Engineering Service 3", url: "/systems_engineering/3" },
    { name: "Engineering Service 4" , url: "/systems_engineering/4"},
    { name: "Engineering Service 5", url: "/systems_engineering/5" },
    { name: "Engineering Service 6" , url: "/systems_engineering/6"},
    { name: "Engineering Service 7" , url: "/systems_engineering/7"},
  ];
  return (
    <>
      <div className="bg-white m-16">
        <ul>
          {myArray.map((item, index) => {
            return (
              // <ListItem key={index} name= {item.name}/>
                <Link
                href={item.url}
                key={index} 
                >
              <li className="text-aqua text-2xl font-bold">
                {item.name}
              </li>
                </Link>
            );
          })}

          {/* <ListItem/> */}
        </ul>
      </div>
    </>
  );
};

export default Index;
