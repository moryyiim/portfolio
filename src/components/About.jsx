import { Fade, Slide } from 'react-reveal';
import profile from '../assets/profile.jpg';
import resume from '../assets/morelen-yim-resume.pdf';

const About = () => {
  return (
    <>
      <div
        name='about'
        className='glass-container border-none border-transparent'
      >
        <div className='glass dark:bg-black/20 transition duration-1000 ease-in-out'>
          <div className='max-w-[1240px] m-auto align-center mx-4'>
            <div className='w-full grid grid-cols-2 gap-8'>
              <div className='h-glass sm:text-right md:pb-8 md:mt-0'>
                <h1 className='uppercase font-serif text-4xl md:text-5xl font-bold inline border-b-2 tracking-widest'>
                  About
                </h1>
              </div>
            </div>
            <div className='max-w-[1240px] w-full grid sm:grid-cols-2 gap-8'>
              <div className='flex justify-end '>
                <Fade>
                  <div className='absolute backdrop-filter backdrop-blur backdrop-brightness-60 hidden md:block shadow-lg shadow-black  border-transparent rounded-3xl'>
                    <div>
                      <img
                        src={profile}
                        alt='Morelen'
                        className='h-[280px] w-[226px] object-contain border-transparent rounded-3xl grayscale hover:grayscale-0 duration-500 ease-in-out'
                      />
                    </div>
                  </div>
                </Fade>
              </div>
              <div className='text-white text-sm md:text-lg leading-5'>
                <div className='h-glass font-serif sm:text-left md:hidden text-2xl md:text-4xl font-bold mb-4'>
                  <h1 className='font-serif'>
                    Hi, I'm Morelen
                    <br />
                    Nice to meet you
                    <br />
                    Please feel free to look around
                  </h1>
                </div>
                <Slide right>
                  <div className='text-sm md:text-base'>
                    <p>
                      I am a front end developer based in Los Angeles. I worked
                      in the healthcare industry prior to pivoting into the tech
                      industry. I have always had an interest in technology and
                      computers, playing around with HTML and CSS. What I
                      thought was just a hobby quickly turned into a love for
                      programming. I attended and completed a frontend boot camp
                      called Scrimba.
                    </p>
                    <br />
                    <p>
                      Fascinated with how intricate programming can be and I was
                      quickly drawn to learn more. I started learning JavaScript
                      and was even more enthused with making websites
                      interactive. I am constantly trying to improve and expand
                      my skill-set and gain more experience. I am a fast learner
                      and will gladly learn whatever technologies are best
                      suited for your team.
                    </p>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
