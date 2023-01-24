import { menuItems } from '../public/menuItems';
import MenuItems from './MenuItems'



const Navbar = () => {
  const depthLevel=0;
  return (
    <nav className='w-full'>
      <ul className="flex flex-row justify-evenly flex-wrap w-full">

        {/* TODO why is flext not wrapping??? */}
        {menuItems.map((menu, index) => {
          
          return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
        })}
      </ul>
    </nav>
  );
};
export default Navbar