import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const MenuItems = ({ items, depthLevel }) => {
  
  const [dropdown, setDropdown] = useState(false);
  

  let ref = useRef();

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true) ;
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false) ;
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (

    <li
      className="menu-items font-semibold font-xl text-white"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
      ref={ref}
    >
      {items.submenu && items.url ? (
        <>
        <Link>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            

        {
          depthLevel > 0 ? <Link className={"text-xl"} href={items.url}>{items.title}</Link> :
          <Link className={"text-xl text-slate-800"} href={items.url}>
            
          <span>
          {items.title}
          </span>
            </Link>
        }
            
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
             <span className="text-blue-500 font-extrabold font-xxl"> &emsp; /</span>


          </button>
          
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
          </Link>
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button>
            <Link href={items.url}>{items.title}</Link>
            {/* <span className="text-blue-500 font-extrabold font-xxl"> &emsp; / </span> */}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
            {/* <span className="text-blue-500 "> &emsp;  / </span> */}
          </button>
          <Dropdown
          
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <>
        <div className="flex">

        <Link href={items.url}>{items.title}</Link>
        {depthLevel === 0 ? <span className="text-blue-500 font-extrabold font-xxl"> &emsp; / </span> : "" }
        
        </div>
        
        
        </>
      
      )
      }
      
    </li>
  );
};

export default MenuItems;
