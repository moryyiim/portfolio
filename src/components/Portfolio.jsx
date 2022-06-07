import Netflix from '../assets/netflix.png';
import DiscountDepot from '../assets/discount-depot.png';
import CoinTrackerV2 from '../assets/coin-tracker-v2.jpg';
import SocialHub from '../assets/socialhub.jpg';
import BmiCalculator from '../assets/bmicalculator.jpg';
import Todo from '../assets/todo.jpg';
import { Fade } from 'react-reveal';

const Portfolio = () => {
  return (
    <div
      name='portfolio'
      className='glass-container-2 text-slate-300 dark:text-slate-400 bg-auto bg-fixed bg-center bg-no-repeat w-screen md:w-screen m-auto md:m-auto md:h-screen'
    >
      <div className='glass-2 dark:bg-black/20 transition duration-1000 ease-in-out border-none border-transparent'>
        <div className='max-w-[1240px] mx-4 flex flex-col justify-center w-full h-full text-center md:text-left'>
          <div className='h-glass my-6 md:mt-0'>
            <h1 className='uppercase font-serif text-4xl md:text-5xl font-bold inline border-b-2 tracking-widest'>
              Portfolio
            </h1>
          </div>
          <Fade top cascade>
            <p className='mb-6 text-white text-sm md:text-lg'>
              Check out some of my recent work
            </p>
          </Fade>

          {/* Container */}
          <div className='grayscale hover:grayscale-0 duration-500 ease-in-out grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Card Item 1 */}
            <Fade top left>
              <div
                style={{ backgroundImage: `url(${DiscountDepot})` }}
                className='backdrop-blur-2xl shadow-lg shadow-black group container border-transparent border-2 rounded-xl focus:border-white hover:border-white duration-500 ease-in-out flex justify-center items-center mx-auto cursor-pointer content-div'
              >
                {/* Hover Effects */}
                <div className='group opacity-0 text-center group-hover:opacity-100 transition duration-500 ease-in-out'>
                  <span className='font-serif text-2xl font-bold text-white tracking-wider'>
                    Discount Depot
                  </span>
                  <div className='pt-8 text-center'>
                    <a
                      href='https://discount-depot.vercel.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Demo
                      </button>
                    </a>
                    <a
                      href='https://github.com/moryyiim/discount-depot'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Card Item 2 */}
            <Fade top>
              <div
                style={{ backgroundImage: `url(${SocialHub})` }}
                className='backdrop-blur shadow-lg shadow-black group container border-transparent border-2 rounded-xl focus:border-white hover:border-white duration-500 ease-in-out flex justify-center items-center mx-auto cursor-pointer content-div'
              >
                {/* Hover Effects */}
                <div className='opacity-0 text-center group-hover:opacity-100 transition duration-500 ease-in-out'>
                  <span className='font-serif text-2xl font-bold text-white tracking-wider'>
                    Social Hub
                  </span>
                  <div className='pt-8 text-center'>
                    <a
                      href='https://social-hub.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Demo
                      </button>
                    </a>
                    <a
                      href='https://github.com/moryyiim/social-hub'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Card Item 3 */}
            <Fade top right>
              <div
                style={{ backgroundImage: `url(${CoinTrackerV2})` }}
                className='backdrop-blur shadow-lg shadow-black group container border-transparent border-2 rounded-xl focus:border-white hover:border-white duration-500 ease-in-out flex justify-center items-center mx-auto cursor-pointer content-div'
              >
                {/* Hover Effects */}
                <div className='opacity-0 text-center group-hover:opacity-100 transition duration-500 ease-in-out'>
                  <span className='font-serif text-2xl font-bold text-white tracking-wider'>
                    Coin Tracker V2
                  </span>
                  <div className='pt-8 text-center'>
                    <a
                      href='https://coin-tracker-v2.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Demo
                      </button>
                    </a>
                    <a
                      href='https://github.com/moryyiim/coin-tracker-v2'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Card Item 4 */}
            <Fade bottom left>
              <div
                style={{ backgroundImage: `url(${BmiCalculator})` }}
                className='backdrop-blur shadow-lg shadow-black group container border-transparent border-2 rounded-xl focus:border-white hover:border-white duration-500 ease-in-out flex justify-center items-center mx-auto cursor-pointer content-div'
              >
                {/* Hover Effects */}
                <div className='opacity-0 text-center group-hover:opacity-100 transition duration-500 ease-in-out'>
                  <span className='font-serif text-2xl font-bold text-white tracking-wider'>
                    BMI Calculator
                  </span>
                  <div className='pt-8 text-center'>
                    <a
                      href='https://calculate-your-bmi.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Demo
                      </button>
                    </a>
                    <a
                      href='https://github.com/moryyiim/bmicalculator'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Card Item 5 */}
            <Fade bottom>
              <div
                style={{ backgroundImage: `url(${Netflix})` }}
                className='backdrop-blur shadow-lg shadow-black group container border-transparent border-2 focus:border-white rounded-xl hover:border-white duration-500 ease-in-out flex justify-center items-center mx-auto cursor-pointer content-div'
              >
                {/* Hover Effects */}
                <div className='opacity-0 text-center group-hover:opacity-100 transition duration-500 ease-in-out'>
                  <span className='font-serif text-2xl font-bold text-white tracking-wider'>
                    Netflix clone
                  </span>
                  <div className='pt-8 text-center'>
                    <a
                      href='https://netflix-firebase-clone-app.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Demo
                      </button>
                    </a>
                    <a
                      href='https://github.com/moryyiim/netflix'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Card Item 6 */}
            <Fade bottom right>
              <div
                style={{ backgroundImage: `url(${Todo})` }}
                className='backdrop-blur shadow-lg shadow-black group container border-transparent border-2 rounded-xl focus:border-white hover:border-white duration-500 ease-in-out flex justify-center items-center mx-auto cursor-pointer content-div'
              >
                {/* Hover Effects */}
                <div className='opacity-0 text-center group-hover:opacity-100 transition duration-500 ease-in-out'>
                  <span className='font-serif text-2xl font-bold text-white tracking-wider'>
                    To-do List
                  </span>
                  <div className='pt-8 text-center'>
                    <a
                      href='https://todo-list-app-tracker.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Demo
                      </button>
                    </a>
                    <a
                      href='https://github.com/moryyiim/Todo-List'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <button className='dark:bg-black/20 text-center text-lg font-bold text-gray-700 px-8 py-2 m-2  hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 shadow-md shadow-black rounded-lg border-2 border-transparent hover:border-white hover:shadow-white hover:text-white dark:text-gray-400 dark:hover:text-white duration-500 ease-in-out'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
