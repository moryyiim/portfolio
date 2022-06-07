import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import express from '../assets/express.png';
import { Fade } from 'react-reveal';

const Skills = () => {
  return (
    <div
      name='skills'
      className='glass-container font-libre text-white bg-auto bg-fixed bg-center bg-no-repeat w-screen md:w-screen m-auto md:m-auto h-screen md:h-screen'
    >
      {/* Container */}
      <div className='glass dark:bg-black/20 transition duration-1000 ease-in-out border-none border-transparent'>
        <div className='max-w-[1240px] mx-4 flex flex-col justify-center w-full h-full text-center md:text-left'>
          <div className='h-glass mb-6 md:mt-0'>
            <h1 className='uppercase font-serif text-4xl md:text-5xl font-bold inline border-b-2 tracking-widest'>
              Skills
            </h1>
          </div>
          <Fade top cascade>
            <p className='mb-6 text-sm md:text-lg'>
              Some of the technologies that I work with
            </p>
          </Fade>

          {/* Card Items */}
          <div className='w-full grid grid-cols-4 gap-3 md:gap-6 text-center font-bold font-serif text-xs md:text-base  text-gray-500 dark:text-gray-300 duration-500'>
            <Fade top cascade>
              <div className='group backdrop-filter backdrop-blur backdrop-brightness-60  shadow-md shadow-black border-transparent border-2 rounded-md focus:border-white hover:border-white hover:scale-110 duration-500 ease-in-out'>
                <img
                  className='grayscale group-hover:grayscale-0 duration-500 ease-in-out w-20 mx-auto'
                  src={HTML}
                  alt='CSS icon'
                />
                <p className='my-4 group-hover:text-white duration-500 ease-in-out'>
                  HTML
                </p>
              </div>
              <div className='group backdrop-filter backdrop-blur backdrop-brightness-60 shadow-md shadow-black border-transparent border-2 rounded-md focus:border-white hover:border-white hover:scale-110 duration-500 ease-in-out'>
                <img
                  className='grayscale group-hover:grayscale-0 duration-500 ease-in-out w-20 mx-auto'
                  src={CSS}
                  alt='CSS icon'
                />
                <p className='my-4 group-hover:text-white duration-500 ease-in-out'>
                  CSS
                </p>
              </div>
              <div className='group backdrop-filter backdrop-blur backdrop-brightness-60 shadow-md shadow-black border-transparent border-2 rounded-md focus:border-white hover:border-white hover:scale-110 duration-500 ease-in-out'>
                <img
                  className='grayscale group-hover:grayscale-0 duration-500 ease-in-out w-20 mx-auto'
                  src={Javascript}
                  alt='JavaScript icon'
                />
                <p className='my-4 group-hover:text-white duration-500 ease-in-out'>
                  JavaScript
                </p>
              </div>
              <div className='group backdrop-filter backdrop-blur backdrop-brightness-60 shadow-md shadow-black border-transparent border-2 rounded-md focus:border-white hover:border-white hover:scale-110 duration-500 ease-in-out'>
                <img
                  className='grayscale group-hover:grayscale-0 duration-500 ease-in-out w-20 mx-auto'
                  src={ReactImg}
                  alt='React icon'
                />
                <p className='my-4 group-hover:text-white duration-500 ease-in-out'>
                  React
                </p>
              </div>
              <div className='group backdrop-filter backdrop-blur backdrop-brightness-60 shadow-md shadow-black border-transparent border-2 rounded-md focus:border-white hover:border-white hover:scale-110 duration-500 ease-in-out'>
                <img
                  className='grayscale group-hover:grayscale-0 duration-500 ease-in-out w-20 mx-auto'
                  src={Tailwind}
                  alt='Tailwind icon'
                />
                <p className='my-4 group-hover:text-white duration-500 ease-in-out'>
                  Tailwind
                </p>
              </div>
              <div className='group backdrop-filter backdrop-blur backdrop-brightness-60 shadow-md shadow-black border-transparent border-2 rounded-md focus:border-white hover:border-white hover:scale-110 duration-500 ease-in-out'>
                <img
                  className='grayscale group-hover:grayscale-0 duration-500 ease-in-out w-20 mx-auto'
                  src={Mongo}
                  alt='MongoDB icon'
                />
                <p className='my-4 group-hover:text-white duration-500 ease-in-out'>
                  MongoDB
                </p>
              </div>
              <div className='group backdrop-filter backdrop-blur backdrop-brightness-60 shadow-md shadow-black border-transparent border-2 rounded-md focus:border-white hover:border-white hover:scale-110 duration-500 ease-in-out'>
                <img
                  className='grayscale group-hover:grayscale-0 duration-500 ease-in-out w-20 mx-auto'
                  src={express}
                  alt='Express icon'
                />
                <p className='my-4 group-hover:text-white duration-500 ease-in-out'>
                  Express
                </p>
              </div>
              <div className='group backdrop-filter backdrop-blur backdrop-brightness-60 shadow-md shadow-black border-transparent border-2 rounded-md focus:border-white hover:border-white hover:scale-110 duration-500 ease-in-out'>
                <img
                  className='grayscale group-hover:grayscale-0 duration-500 ease-in-out w-20 mx-auto'
                  src={Node}
                  alt='Node.js icon'
                />
                <p className='my-4 group-hover:text-white duration-500 ease-in-out'>
                  Node.js
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
