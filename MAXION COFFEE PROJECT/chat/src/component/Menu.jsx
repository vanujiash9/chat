import { useState } from 'react';
import MenuCart from './menu/MenuCart'; // Adjust the path as needed
import Footer from './Footer'; // Adjust the path as needed
import imn1 from '../assets/website/2c96dab0ec3706fdf4d6b21090a104ac.jpg';
import imn2 from '../assets/website/27780fc651dff0eb419b06ecf93a3055.jpg';
import imn3 from '../assets/website/d191162bab13fb9f788a1dc3334eecf6.jpg';
import imn4 from '../assets/website/3c46922bbf6faa03c92f4b7fa29e233e.jpg';
import imn5 from '../assets/website/faddc7a59fc2cf3ba774a25821c951f9.jpg';
import imn6 from '../assets/website/e3615d551329c1343da0a052b4173ae6.jpg';
import imn7 from '../assets/website/3c46922bbf6faa03c92f4b7fa29e233e.jpg';
import imn8 from '../assets/website/166be34df841eff4d5a6303cb031d3b0.jpg';
import imn9 from '../assets/website/1bbf21967acbd14e429803d4dbe29d49.jpg';

const Menu = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-900'}`}>
      <div className="relative overflow-hidden group h-[500px] bg-primary card-hidden">
        <img 
          src="https://images.unsplash.com/photo-1595239244990-b609da3d95f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxkYXRhJTNBaW1hZ2UlMkZibXAlM0JiYXNlNjQlMkNRazMyQkFBQUFBQUFBRFlBQUFBb0FBQUFDQUFBQUFnQUFBQUJBQmdBQUFBQUFNQUFBQUFUQ3dBQUV3c0FBQUFBQUFBQUFBQUFvWnRhbnBaTm9aTTR0S05KeTd0dzBjV0Z1clYlMkZpcEJqcDZSMW41dGtsSTQlMkZvWmxLdkxWNXlNT1R0TFNLaFl0Z3I2Mk1vYUY1aUl0Tmk1RlRxN0NJdnNLa3I3T1dnSVpkdGJPYXBhYUhobzVnaEpKbnBMS1l1Y1N5ckxTZ2ZvVmZ0N1dkcXF1T2s1bDBrcDklMkZyTHFudk1pN3JiYW1nSWRtdDdPWHNLMlBwYWFGckxHV3ZzYTB4YzYlMkZzYm1vaG8xdXRiQ1BzNiUyQk50YkdSd0wlMkJsenRDOHp0TEJ0cnlwaTVKMXRLJTJCTHRhJTJCTXVyV1Z5TVdxMU5TJTJGMGRUQnVMMm9qcFIzfGVufDB8MHx8fDE3MjM0MDU0MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
          className="h-full transition-all delay-300 duration-400 ease-in w-full absolute group-hover:scale-105 object-center" 
          alt="Decorative background"
        />
        <div className="absolute p-8 z-50 gap-4 flex flex-col justify-end bg-opacity-45 h-full w-full bottom-0">
          <span className="text-[20px] sm:text-[24px] text-white md:text-[28px] font-canela">
            Hover Card to see Magic
          </span>
          <p className="group-hover:block text-white text-[14px] hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusantium dolores, in cumque labore non assumenda necessitatibus vel at voluptates deleniti minus nesciunt nobis repellendus dolorum blanditiis ex magni impedit?
          </p>
          <a href="contactus.html" className="flex items-center gap-2">
            <div className="flex group-hover:bg-secondary justify-center items-center rounded-full bg-primary min-h-10 min-w-10 max-h-10 max-w-10">
              <img 
                src="https://images.unsplash.com/photo-1595239244990-b609da3d95f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxkYXRhJTNBaW1hZ2UlMkZibXAlM0JiYXNlNjQlMkNRazMyQkFBQUFBQUFBRFlBQUFBb0FBQUFDQUFBQUFnQUFBQUJBQmdBQUFBQUFNQUFBQUFUQ3dBQUV3c0FBQUFBQUFBQUFBQUFvWnRhbnBaTm9aTTR0S05KeTd0dzBjV0Z1clYlMkZpcEJqcDZSMW41dGtsSTQlMkZvWmxLdkxWNXlNT1R0TFNLaFl0Z3I2Mk1vYUY1aUl0Tmk1RlRxN0NJdnNLa3I3T1dnSVpkdGJPYXBhYUhobzVnaEpKbnBMS1l1Y1N5ckxTZ2ZvVmZ0N1dkcXF1T2s1bDBrcDklMkZyTHFudk1pN3JiYW1nSWRtdDdPWHNLMlBwYWFGckxHV3ZzYTB4YzYlMkZzYm1vaG8xdXRiQ1BzNiUyQk50YkdSd0wlMkJsenRDOHp0TEJ0cnlwaTVKMXRLJTJCTHRhJTJCTXVyV1Z5TVdxMU5TJTJGMGRUQnVMMm9qcFIzfGVufDB8MHx8fDE3MjM0MDU0MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
                className="w-[28px] h-8 rounded-full overflow-hidden" 
                alt="Contact Us" 
              />
            </div>
            <h2 className="font-bold text-[16px] text-white">Maxion coffee</h2>
          </a>
        </div>
        <div className="absolute transition-all duration-400 ease-in bg-gradient-to-b from-transparent to-black min-h-[650px] text-white bottom-0 group-hover:bottom-0 group-hover:min-h-[900px] w-full z-30" />
      </div>

      <div className="p-5 flex flex-col items-center min-h-screen">
        <div className="flex flex-col justify-center items-center w-full mb-10">
          <h1 className="text-4xl font-semibold text-center">
            Our Menu
          </h1>
          <label className="inline-flex items-center cursor-pointer mt-5">
            <input
              type="checkbox"
              className="sr-only"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${darkMode ? 'bg-blue-900' : 'bg-gray-200'}`}
            >
              <span
                className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out ${darkMode ? 'translate-x-full' : ''}`}
              />
            </div>
            <span className="ml-3 text-gray-500">{darkMode ? 'Dark' : 'Light'}</span>
          </label>
        </div>
        <div className="flex flex-wrap gap-8 justify-center items-center lg:px px-5">
          <MenuCart img={imn7} title="Tasty Dish" price="210.000" />
          <MenuCart img={imn2} title="Tasty Dish" price="210.000" />
          <MenuCart img={imn3} title="Tasty Dish" price="210.000" />
          <MenuCart img={imn1} title="Tasty Dish" price="210.000" />
          <MenuCart img={imn5} title="Tasty Dish" price="210.000" />
          <MenuCart img={imn9} title="Tasty Dish" price="210.000" />
          <MenuCart img={imn6} title="Tasty Dish" price="210.000" />
          <MenuCart img={imn4} title="Tasty Dish" price="210.000" />
          <MenuCart img={imn8} title="Tasty Dish" price="210.000" />
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Menu;
