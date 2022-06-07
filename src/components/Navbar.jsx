import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Slide } from 'react-reveal';
import resume from '../assets/morelen-yim-resume.pdf';
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState(false);

  // Toggles navbar menu
  const handleClick = () => setNav(!nav);

  // Activates blurred navbar
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <>
      <div
        className={
          color
            ? 'tracking-widest transition duration-1000 ease-in-out nav z-50 shadow-2xl fixed w-full h-16 flex justify-between items-center mx-auto backdrop-blur dark:bg-black/10'
            : 'tracking-widest transition duration-1000 ease-in-out nav z-50 fixed w-full h-16 flex justify-between items-center mx-auto'
        }
      >
        <div className='relative bg-auto w-full mx-4'>
          <div className='text-gray-500 dark:text-white'>
            <div className='mx-auto max-w-[1240px]'>
              <div className='sm:flex justify-between '>
                <Slide top>
                  <ThemeToggle />
                </Slide>

                {/* Menu List */}

                <ul className='nav-menus hidden md:flex text-xs font-bold transition duration-500 ease-in-out'>
                  <Slide top>
                    <li className='uppercase py-6 hover:text-white dark:text-gray-300 dark:hover:text-white duration-500 ease-in-out mx-1'>
                      <Link to='home' smooth={true} duration={500}>
                        <span className='nav-link hover:border-b-2 hover:border-white dark:hover:border-white'>
                          Home
                        </span>
                      </Link>
                    </li>
                  </Slide>
                  <Slide top>
                    <li className='uppercase py-6 hover:text-white dark:text-gray-300 dark:hover:text-white duration-500 ease-in-out mx-1'>
                      <Link to='about' smooth={true} duration={500}>
                        <span className='nav-link hover:border-b-2 hover:border-white dark:hover:border-white'>
                          About
                        </span>
                      </Link>
                    </li>
                  </Slide>

                  <Slide top>
                    <li className='uppercase py-6 hover:text-white dark:text-gray-300 dark:hover:text-white duration-500 ease-in-out mx-1'>
                      <Link to='skills' smooth={true} duration={500}>
                        <span className='nav-link hover:border-b-2 hover:border-white dark:hover:border-white'>
                          Skills
                        </span>
                      </Link>
                    </li>
                  </Slide>

                  <Slide top>
                    <li className='uppercase py-6 hover:text-white dark:text-gray-300 dark:hover:text-white duration-500 ease-in-out mx-1'>
                      <Link to='portfolio' smooth={true} duration={500}>
                        <span className='nav-link hover:border-b-2 hover:border-white dark:hover:border-white'>
                          Portfolio
                        </span>
                      </Link>
                    </li>
                  </Slide>

                  <Slide top>
                    <li className='uppercase py-6 hover:text-white dark:text-gray-300 dark:hover:text-white duration-500 ease-in-out ml-1'>
                      <Link to='contact' smooth={true} duration={500}>
                        <span className='nav-link hover:border-b-2 hover:border-white dark:hover:border-white'>
                          Contact
                        </span>
                      </Link>
                    </li>
                  </Slide>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Hamburger */}

        <div
          onClick={handleClick}
          className='md:hidden z-90 hover:text-white duration-500 ease-in-out cursor-pointer mx-4'
        >
          <Slide top>
            {!nav ? (
              <FaBars className='h-6 w-6 hover:fill-white dark:hover:fill-white fill-gray-500 dark:fill-gray-300 transition duration-500 ease-in-out' />
            ) : (
              <FaBars className='hidden dark:fill-gray-300' />
            )}
          </Slide>
        </div>

        {/* Mobile menu */}
        <div className={nav ? 'fixed left-0 top-0 w-full h-screen' : ''}>
          <div className='glass-container'>
            <div
              className={
                nav
                  ? 'fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen bg-white/10 backdrop-filter-10 backdrop-blur-2xl dark:bg-black/20 p-10 ease-in-out duration-500'
                  : 'fixed left-[-100%] h-screen backdrop-filter-10 backdrop-blur-2xl dark:bg-black/20 top-0 p-10 ease-in-out duration-500'
              }
            >
              <div className='flex w-full items-center justify-between '>
                <ThemeToggle />

                <div>
                  <FaTimes
                    onClick={handleClick}
                    className='fill-gray-500 dark:fill-gray-300 cursor-pointer h-6 w-6 hover:fill-white dark:hover:fill-white duration-500 ease-in-out'
                  />
                </div>
              </div>

              <div className='text-white'>
                <h1 className='uppercase font-serif w-[85%%] py-4 text-xs border-b-2 font-bold border-gray-500 dark:border-gray-500 tracking-widest'>
                  Morelen Yim
                </h1>
              </div>

              <div>
                <div className='font-bold  uppercase text-xs text-gray-500 dark:text-gray-300 flex mt-4 pt-0 pb-0'>
                  <div className='group flex flex-col justify-center'>
                    <div className='py-4 hover:text-white dark:hover:text-white duration-500 ease-in-out cursor-pointer'>
                      <Link
                        onClick={handleClick}
                        to='home'
                        smooth={true}
                        duration={500}
                      >
                        <span className='hover:border-b-2 dark:hover:border-white'>
                          Home
                        </span>
                      </Link>
                    </div>
                    <div className='py-4 hover:text-white dark:hover:text-white duration-500 ease-in-out cursor-pointer'>
                      <Link
                        onClick={handleClick}
                        to='about'
                        smooth={true}
                        duration={500}
                      >
                        <span className='hover:border-b-2 dark:hover:border-white'>
                          About
                        </span>
                      </Link>
                    </div>
                    <div className='py-4 hover:text-white dark:hover:text-white duration-500 ease-in-out cursor-pointer'>
                      <Link
                        onClick={handleClick}
                        to='skills'
                        smooth={true}
                        duration={500}
                      >
                        <span className='hover:border-b-2 dark:hover:border-white'>
                          Skills
                        </span>
                      </Link>
                    </div>
                    <div className='py-4 hover:text-white dark:hover:text-white duration-500 ease-in-out cursor-pointer'>
                      <Link
                        onClick={handleClick}
                        to='portfolio'
                        smooth={true}
                        duration={500}
                      >
                        <span className='hover:border-b-2 dark:hover:border-white'>
                          Portfolio
                        </span>
                      </Link>
                    </div>
                    <div className='py-4 hover:text-white dark:hover:text-white duration-500 ease-in-out cursor-pointer'>
                      <a
                        className='hover:border-b-2 dark:hover:border-white'
                        href='mailto:morelenyim@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Contact
                      </a>
                    </div>
                    <div className='py-4 hover:text-white dark:hover:text-white duration-500 ease-in-out cursor-pointer'>
                      <a
                        className='hover:border-b-2 dark:hover:border-white'
                        href={resume}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Resume
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className='pt-40'>
                  <h1 className='uppercase font-serif text-xs border-b-2 py-4 font-bold tracking-widest text-white border-gray-500'>
                    Let's connect
                  </h1>
                  <div className='text-gray-500 dark:text-gray-400 list-none flex mt-8 pt-0 pb-0'>
                    <Slide bottom>
                      <div className='group flex justify-center'>
                        <div
                          className={
                            hovered
                              ? 'hover:text-white ease-in-out'
                              : 'group-hover:text-transparent dark:group-hover:text-transparent ease-in-out'
                          }
                        >
                          <a
                            className='hover:text-white dark:hover:text-white duration-500 ease-in-out cursor-pointer'
                            href='https://www.linkedin.com/in/morelenyim/'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <FaLinkedin size={30} className='mr-6' />
                          </a>
                        </div>
                        <div
                          className={
                            hovered
                              ? 'hover:text-white ease-in-out'
                              : 'group-hover:text-transparent dark:group-hover:text-transparent ease-in-out'
                          }
                        >
                          <a
                            className='hover:text-white dark:hover:text-white duration-500 ease-in-out cursor-pointer'
                            href='https://github.com/moryyiim'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <FaGithub size={30} className='mr-6' />
                          </a>
                        </div>
                        <div
                          className={
                            hovered
                              ? 'hover:text-white ease-in-out'
                              : 'group-hover:text-transparent dark:group-hover:text-transparent ease-in-out'
                          }
                        >
                          <a
                            className='hover:text-white dark:hover:text-white duration-500 ease-in-out cursor-pointer'
                            href='https://codepen.io/moryyiim'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <FaCodepen size={30} className='mr-6' />
                          </a>
                        </div>
                        <div
                          className={
                            hovered
                              ? 'hover:text-white'
                              : 'group-hover:text-transparent dark:group-hover:text-transparent ease-in-out'
                          }
                        >
                          <a
                            className='hover:text-white dark:hover:text-white duration-500 ease-in-out cursor-pointer'
                            href='https://twitter.com/moryyiim'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <AiFillTwitterCircle size={32} />
                          </a>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
