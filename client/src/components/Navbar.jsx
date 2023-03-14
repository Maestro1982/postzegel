import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <nav className='w-full flex items-center py-1 fixed top-0 bg-[#5a464c]'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2'>
          <img src={logo} alt='logo' className='w-16 h-16 object-contain' />
          <p className='text-[#b5d6b2] text-[18px] font-bold cursor-pointer'>
            Michel Helsens
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li className='relative group'>
            <a href='/inloggen' className='link'>
              Inloggen
            </a>
            <span className='underline-animation'></span>
          </li>
          <li className='relative group'>
            <a href='/registeren' className='link'>
              Registreren
            </a>
            <span className='underline-animation'></span>
          </li>
        </ul>

        {/* Mobile Device Navar */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={isToggled ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setIsToggled(!isToggled)}
          />
          <div
            className={`${
              !isToggled ? 'hidden' : 'flex'
            } p-6 bg-[#5a464c] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              <li className='relative group'>
                <a href='/inloggen' className='link'>
                  Inloggen
                </a>
                <span className='underline-animation'></span>
              </li>
              <li className='relative group'>
                <a href='/registeren' className='link'>
                  Registreren
                </a>
                <span className='underline-animation'></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
