import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Fade, Slide } from 'react-reveal';
import { useState } from 'react';

const Contact = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        name='contact'
        className='glass-container flex flex-col justify-end px-4'
      >
        <div className='glass flex w-screen dark:bg-black/20 transition duration-1000 ease-in-out border-none border-transparent'>
          <div className='m-auto text-center'>
            <div className='h-glass'>
              <h1 className='uppercase font-serif text-4xl md:text-5xl font-bold inline border-b-2 tracking-widest'>
                Get in Touch
              </h1>
            </div>
            <div className='py-8 text-white text-sm md:text-lg'>
              <Fade top cascade>
                <p>Want to work together or have any questions?</p>
                <p>Please send me an email.</p>
              </Fade>
            </div>
            <Fade bottom>
              <a href='mailto:morelenyim@gmail.com'>
                <button className='text-gray-700 hover:text-white dark:text-gray-400 dark:hover:text-white font-serif hover:scale-95 mb-12 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 uppercase shadow-md shadow-black text-center rounded-lg px-6 py-2 md:px-10 md:py-4 border-2 border-transparent hover:border-white hover:shadow-white font-bold text-md md:text-xl duration-500 ease-in-out'>
                  Contact
                </button>
              </a>
            </Fade>
          </div>
        </div>

        {/* Social Icons */}

        <div className='text-gray-400 dark:text-gray-400 list-none flex justify-center pb-4'>
          <Slide bottom>
            <div className='group flex flex-col text-center justify-center'>
              <div className='flex'>
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
                    <FaLinkedin size={30} className='mx-3' />
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
                    <FaGithub size={30} className='mx-3' />
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
                    <FaCodepen size={30} className='mx-3' />
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
                    <AiFillTwitterCircle size={32} className='mx-3' />
                  </a>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Contact;
