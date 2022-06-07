import React, { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { Slide } from 'react-reveal';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === 'dark' ? (
        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <Slide top>
            <HiSun className='h-8 w-8 md:mt-4 text-gray-300 cursor-pointer transition duration-500 ease-in-out hover:text-white' />
          </Slide>
        </div>
      ) : (
        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <Slide top>
            <HiMoon className='h-8 w-8 md:mt-4 text-gray-500 cursor-pointer transition duration-500 ease-in-out hover:text-white' />
          </Slide>
        </div>
      )}
    </>
  );
};

export default ThemeToggle;
