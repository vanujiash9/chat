import  { useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ['', 'FullStack Developer,', 'Frontend Developer,', 'Backend Developer,', 'Mobile Apps Developer.'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    // Ensure the Typed element is targeted correctly
    const typed = new Typed('.typing', options);

    // Clean up function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gray-200 dark:bg-gray-800">
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
        <div className="flex-1 flex justify-between items-center">
          <a href="#" className="text-3xl font-semibold font-serif text-green-500">$@(\/)(\/)Y</a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
          <svg className="fill-current text-gray-700 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
         
        </div>
      </header>

      <div className="w-full h-screen relative">
        <div className="w-full h-full xl:px-16 xs:px-8 flex gap-4 justify-center items-center">
          <div className="w-full">
            <h4 className="sm:text-2xl xs:text-md text-gray-600 dark:text-gray-300">
              Hello, My name is
              <span className="text-rose-400 sm:text-2xl xs:text-xl font-semibold font-serif">Samuel Abera</span>
            </h4>
            <h1 className="mt-4 sm:text-4xl xs:text-3xl dark:text-white">
              hello
              <span className="typing libre-baskerville-bold text-green-600"></span>
            </h1>
            <p className="mt-4 sm:text-lg xs:text-md capitalize dark:text-gray-200">
              Experienced full-stack developer with 4+ years of expertise in Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter experience.
            </p>
            <button className="p-2 px-6 mt-6 bg-rose-500 text-white rounded-full">Hire Me</button>
          </div>

          <div className="xl:max-w-[30%] md:max-w-[30%] h-fit hidden md:block">
            <img className="rounded-sm rounded-br-[5rem] rounded-tl-[5rem]" src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg" alt="My Pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
