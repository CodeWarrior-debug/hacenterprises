import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
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

      className="menu-items  "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
      ref={ref}
    >
      {items.submenu && items.url ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            <Link href={items.url} className="text-center text-[15px] font-extrabold ">
              
              <span className="text-center text-[15px] font-extrabold tracking-[.2em]">{items.title}</span>{

             


            }</Link>

            {/* {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />} */}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button>
            {items.title} <Link href={items.url}>{items.title}</Link>
            {/* {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />} */}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;