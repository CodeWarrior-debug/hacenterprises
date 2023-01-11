import MenuItems from "./MenuItems";
import Link from "next/link";

const Dropdown = ({ submenus, dropdown  }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
          <MenuItems items={submenu} key={index} />

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
