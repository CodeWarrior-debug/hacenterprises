import Dropdown from './Dropdown';
import { useState } from 'react';
import Link from 'next/link';

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="menu-items" onMouseEnter={() => setDropdown((prev) => !prev)}
    onMouseLeave={() => setDropdown((prev) => !prev)}>
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu"
                aria-expanded={dropdown ? "true" : "false"}
              
          >
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />

        </>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;