import React from "react";
import Link from "next/link";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from "@fortawesome/free-solid-svg-icons";
// TODO: fix font Awesome icon not coming in 
const Index = () => {
  const myArray = [
    { name: "Operations Research & Analysis", desc:"The ultra-important systems engineering principle of operations research and analytics.", url: "/systems_engineering/op_research_and_analytics"},
    { name: "Engineering Service 2", desc:"Brief words on nature of this systems engineering aspect.",url: "/systems_engineering/2"},
    { name: "Engineering Service 3",desc:"Brief words on nature of this systems engineering aspect.", url: "/systems_engineering/3" },
    { name: "Engineering Service 4" , desc:"Brief words on nature of this systems engineering aspect.",url: "/systems_engineering/4"},
    { name: "Engineering Service 5", desc:"Brief words on nature of this systems engineering aspect.",url: "/systems_engineering/5" },
    { name: "Engineering Service 6" , desc:"Brief words on nature of this systems engineering aspect.",url: "/systems_engineering/6"},
    { name: "Engineering Service 7" , desc:"Brief words on nature of this systems engineering aspect.",url: "/systems_engineering/7"},
  ];
  return (
    <>
      <div className="bg-white mb-16">
      <div className='bg-slate-200 min-h-[4rem]'>
    <h1 className='text-center text-aqua text-6xl p-8'>
        Systems Engineering
    </h1>



    </div>
        <ul className="mt-8 indent-4">
          {myArray.map((item, index) => {
            return (
              <>
              {/* <ListItem key={index} name= {item.name}/> */}
                <Link
                href={item.url}
                key={index} 
                >
              <li className="list-disc text-aqua text-4xl font-bold mb-8">
                {item.name}
              </li>
                </Link>
                <p className="indent-16 mb-8 font-semibold">
                  {item.desc}
                </p>
                </>
            );
          })}

          {/* <ListItem/> */}
        </ul>
      </div>
    </>
  );
};

export default Index;
