import { useState } from 'react'
import { logo, menu, close } from '../assets/';
import { navLinks } from '../constants';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav id="home" className="navbar w-full flex justify-between items-center pt-[50px] sm:pl-[30px] pl-[10px]">
      <img src={logo} alt="Syed Ayman Quadri" className="sm:w-[160px] w-[120px]"/>
      <ul className="list-none sm:flex hidden justify-start items-center flex-1 ml-20">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-Montserrat font-normal cursor-pointer text-[14px] hover:text-bold tracking-[3px] text-white hover:text-three transition duration-0 hover:duration-300 ease-in-out ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-10">
        <img src={toggle ? close : menu} alt="Syed Ayman Quadri" className="w-[25px] h-[25px] object-contain cursor-pointer" onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} px-20 py-[50px] backdrop-blur-xl text-white absolute top-20 mr-10 mt-8 min-w-[140px] rounded-xl sidebar border`}>
          <ul className="list-none flex justify-start items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-Montserrat font-normal cursor-pointer text-[14px] hover:text-bold tracking-[3px] text-white hover:text-three transition duration-0 hover:duration-300 ease-in-out ${index === navLinks.length - 1 ? "mr-0" : "mb-10"}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar