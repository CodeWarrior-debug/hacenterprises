import MenuItems from "./MenuItems";
import Link from "next/link";

const Dropdown = ({ submenus, dropdown, depthLevel  }) => {

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={` dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
          <MenuItems  items={submenu} key={index} depthLevel={depthLevel}  />

        ))}
        </ul>
  );
};

export default Dropdown;

{/*         <li key={index} className="menu-items">
<a href={submenu.url}>{submenu.title}</a>
           <Link href={submenu.url}>
           <p>{submenu.title}</p> 
            </Link> 
        // </li>*/}
