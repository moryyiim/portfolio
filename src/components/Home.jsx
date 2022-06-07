import { Fade } from 'react-reveal';
import resume from '../assets/morelen-yim-resume.pdf';

const Home = () => {
  return (
    <div name='home' className='glass-container flex flex-col justify-end px-4'>
      <div className='glass flex w-screen dark:bg-black/20 transition duration-1000 ease-in-out border-none border-transparent'>
        <div className='m-auto text-center'>
          <h1 className='h-glass title uppercase font-serif font-bold tracking-widest'>
            Morelen Yim
          </h1>
          <div className='sub-title font-bold uppercase tracking-widest text-white'>
            <Fade top cascade>
              <h2>Front-end Developer</h2>
            </Fade>
          </div>
          <Fade bottom>
            <div className='flex justify-center'>
              <div className='mt-4 md:mt-10'>
                <a href={resume} target='_blank' rel='noopener noreferrer'>
                  <button className='text-gray-700 hover:text-white dark:text-gray-400 dark:hover:text-white font-serif hover:scale-95 tracking-widest backdrop-filter backdrop-blur backdrop-brightness-20 uppercase shadow-md shadow-black text-center rounded-lg px-6 py-2 md:px-10 md:py-4 border-2 border-transparent hover:border-white hover:shadow-white font-bold text-md md:text-xl duration-500 ease-in-out'>
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
