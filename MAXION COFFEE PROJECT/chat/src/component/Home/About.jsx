import { useState } from 'react';
import Hero from './Hero';

const About = () => {
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("We are always here to serve you.");
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {/* Hero Component */}
      <Hero />

      {/* Main Content */}
      <div className="min-h-screen relative flex flex-col bg-[url('https://www.tailwindtap.com/assets/components/hero/food-delivery/banner.jpg')] bg-no-repeat w-full bg-cover bg-left-bottom sm:bg-center">
        <div className="bg-black/60 h-full w-full absolute"></div>
        <div className="flex justify-between sm:justify-end gap-3.5 items-center pt-5 sm:pt-5 z-30">
          <div className="flex justify-between sm:justify-end sm:gap-5 items-center w-full px-8">
            <button
              className="w-12 h-12 relative focus:outline-none sm:hidden overscroll-none top-2.5"
              onClick={handleToggle}
            >
              <div className="block w-5 absolute left-5 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <span
                  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${toggle ? "rotate-45" : "-translate-y-2"}`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${toggle ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${toggle ? "-rotate-45" : "translate-y-2"}`}
                ></span>
              </div>
            </button>
            {/* Desktop Menu */}
            <div className="sm:flex gap-5 items-center hidden">
              {/* Removed Home, Menu, Pricing and Login button */}
            </div>
            {/* Menu Icon and Login Button */}
            <svg
              className="w-10 h-10 hover:text-orange-600 text-white cursor-pointer hidden sm:block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <button className="block sm:hidden bg-transparent border border-orange-600 py-1.5 px-5 rounded-md h-max text-white hover:bg-orange-600">Login</button>
          </div>
          {/* Mobile Menu */}
          <div className={`transition-all ease-in-out z-50 ${showMenu ? "flex flex-col min-h-screen h-max w-full left-0 top-0 fixed bg-[#2D4263]" : "flex flex-col h-screen w-full top-0 left-full fixed bg-[#2D4263]"}`}>
            <div className="flex pt-5 items-center justify-end text-xl font-bold px-[10%] w-full" onClick={() => setShowMenu(!showMenu)}>
              <img src="/assets/nft/infytoken/close.svg" alt="close" className="h-7 cursor-pointer" />
            </div>
            <div className="flex flex-col w-full items-center justify-center h-screen gap-[30px] sm:gap-[50px] sm:text-lg text-[20px] leading-[29px] font-normal md:gap-[60px]">
              {/* Removed Home, Menu, Pricing */}
            </div>
          </div>
        </div>
        {/* Title and Search */}
        <div className="min-h-[calc(100vh-69px)] sm:min-h-[calc(100vh-63px)] flex items-center justify-center px-1 z-10">
          <div className="flex flex-col gap-2.5 pb-3 sm:min-w-[448px] max-w-md">
            <h1 className="text-3xl sm:text-4xl text-orange-600 text-center font-semibold tracking-wider">Flavors Of India</h1>
            <h1 className="text-xl sm:text-2xl text-white text-center w-fit mx-auto transition-all ease-in-out duration-500 mt-1">{title}</h1>
            <div className="flex justify-center mt-2 flex-col gap-5 sm:gap-7 items-center">
              <div className="flex items-center gap-4 justify-center w-fit">
                <div
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow-md hover:shadow-orange-600 cursor-pointer group pt-2"
                  onMouseEnter={() => setTitle("Bringing Your Favorite Food to You")}
                  onMouseLeave={() => setTitle("We are always here to serve you.")}
                >
                  {/* SVG Icon */}
                </div>
                {/* More SVG Icons */}
              </div>
              <div className="flex justify-center min-w-[100px] sm:min-w-[360px] !max-w-[200px] sm:max-w-[360px]">
                <div className="flex bg-white py-2.5 pl-2 pr-1 rounded-l-lg items-center gap-1.5 w-full max-w-[280px] sm:max-w-xl">
                  {/* SVG Icon */}
                  <input
                    type="text"
                    className="py-1 outline-none max-w-[156px] sm:max-w-none placeholder:text-xs sm:placeholder:text-sm"
                    placeholder="Street Address, City, State"
                  />
                </div>
                <button className="bg-orange-600 px-6 py-1 text-base lg:text-lg font-semibold text-white rounded-r-lg shadow-md" type="submit">Search</button>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery Section */}
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex items-center">
          <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
            <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
              {/* Image Blocks */}
            </div>
          </div>
        </div>
      </div>
      {/* Additional Content */}
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        {/* Image Column */}
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
        </div>
        {/* Text Column */}
        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Winding Mountain Road</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                More</a>
            </div>
          </div>
        </div>
      </div>
      <div>
  <div className="bg-white dark:bg-gray-800 flex justify-center items-center w-screen h-screen p-5">
    <div className="border border-gray-200 p-2 rounded-md shadow-lg shadow-orange-300">
      <div className="flex items-end gap-1">
        <span className="text-6xl font-semibold dark:text-white">Max</span>
        <svg className="animate-spin" fill="#F97316" width="30px" height="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path id="Football" d="M66.091,75h-.434a24.926,24.926,0,0,1-8.332-1.544q-.532-.2-1.056-.418c-.229-.1-.456-.2-.682-.3l-.022-.01-.083-.039a25,25,0,0,1-6.2-4.1l-.069-.062-.011-.01q-.446-.405-.876-.835-.448-.448-.872-.916a25.022,25.022,0,0,1-4.1-6.173q-.2-.424-.382-.857-.139-.328-.268-.659a.307.307,0,0,0-.012-.031c-.012-.03-.023-.06-.034-.09a24.851,24.851,0,0,1-1.613-7.569c0-.008,0-.016,0-.024l0-.063c0-.038,0-.076-.006-.114v-.014c-.007-.143-.012-.286-.016-.43Q41,50.369,41,50a24.937,24.937,0,0,1,1.646-8.941.25.25,0,0,0,.009-.023c.008-.02.016-.04.023-.061s.022-.056.033-.084l.014-.035c.077-.2.157-.391.239-.587.037-.087.075-.175.113-.261l.024-.057.023-.052a25.041,25.041,0,0,1,4.434-6.78l.053-.058.018-.019q.337-.366.692-.72.423-.423.861-.822l.058-.053.007-.007a25.043,25.043,0,0,1,6.235-4.128l.069-.032.037-.016q.336-.154.678-.3.4-.167.8-.32A24.907,24.907,0,0,1,65.723,25h.552a24.915,24.915,0,0,1,9.288,1.893l.056.022.021.009.092.039.272.117.013.005.1.046.071.031.042.019a25.031,25.031,0,0,1,6.627,4.358l.01.009.057.051c.254.235.5.475.751.721s.459.468.68.707a25.024,25.024,0,0,1,4.514,6.862l.028.063c.007.016.015.034.022.05.018.04.035.079.052.119,0,0,0,0,0,0,.021.047.041.094.06.14l.045.107.01.023.036.086.025.061a.069.069,0,0,0,0,.01,25.09,25.09,0,0,1,.085,18.676c-.01.027-.021.054-.032.081,0,.01-.009.021-.013.031-.052.13-.106.258-.16.387q-.186.441-.389.873c0,.007-.007.016-.011.022-.014.028-.026.056-.04.083a25.059,25.059,0,0,1-4.089,6.1q-.4.443-.83.869c-.251.251-.506.5-.765.734l-.007.005-.075.069a25.023,25.023,0,0,1-6.594,4.328l-.051.023-.06.027-.114.05h0c-.092.04-.184.08-.276.119l-.1.041A24.911,24.911,0,0,1,66.337,75h-.247Zm-6.853-4.063a22.04,22.04,0,0,0,13.518,0l2.128-6.782L70.485,58H61.515l-4.4,6.156ZM75.169,70A22.1,22.1,0,0,0,82,65.087l-5.263-.078ZM50,65.08A22.093,22.093,0,0,0,56.828,70L55.267,65Zm33.651-1.957A21.886,21.886,0,0,0,88,50c0-.116,0-.232,0-.347l-6.344-4.361-6.836,3.418L72.11,56.833l4.417,6.184ZM44,49.655q0,.173,0,.346a21.881,21.881,0,0,0,4.345,13.112l7.136-.107,4.409-6.173-2.708-8.124L50.356,45.3Zm15.174-1.287L61.721,56h8.558l2.544-7.632L66,43.25ZM44.189,47.113l4.6-3.159-1.775-5.065A21.858,21.858,0,0,0,44.189,47.113Zm39.022-3.165,4.6,3.162a21.842,21.842,0,0,0-2.83-8.222ZM57.894,46.829,65,41.5v-8l-5.869-4.4a22.085,22.085,0,0,0-10.711,7.69l2.254,6.432Zm16.212,0,7.226-3.613,2.249-6.428A22.1,22.1,0,0,0,72.869,29.1L67,33.5v8ZM61.592,28.444,66,31.75l4.409-3.307a22.124,22.124,0,0,0-8.817,0Z" transform="translate(-41 -25)" />
        </svg>
        <svg className="animate-bounce" fill="#F97316" width="30px" height="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path id="Football" d="M66.091,75h-.434a24.926,24.926,0,0,1-8.332-1.544q-.532-.2-1.056-.418c-.229-.1-.456-.2-.682-.3l-.022-.01-.083-.039a25,25,0,0,1-6.2-4.1l-.069-.062-.011-.01q-.446-.405-.876-.835-.448-.448-.872-.916a25.022,25.022,0,0,1-4.1-6.173q-.2-.424-.382-.857-.139-.328-.268-.659a.307.307,0,0,0-.012-.031c-.012-.03-.023-.06-.034-.09a24.851,24.851,0,0,1-1.613-7.569c0-.008,0-.016,0-.024l0-.063c0-.038,0-.076-.006-.114v-.014c-.007-.143-.012-.286-.016-.43Q41,50.369,41,50a24.937,24.937,0,0,1,1.646-8.941.25.25,0,0,0,.009-.023c.008-.02.016-.04.023-.061s.022-.056.033-.084l.014-.035c.077-.2.157-.391.239-.587.037-.087.075-.175.113-.261l.024-.057.023-.052a25.041,25.041,0,0,1,4.434-6.78l.053-.058.018-.019q.337-.366.692-.72.423-.423.861-.822l.058-.053.007-.007a25.043,25.043,0,0,1,6.235-4.128l.069-.032.037-.016q.336-.154.678-.3.4-.167.8-.32A24.907,24.907,0,0,1,65.723,25h.552a24.915,24.915,0,0,1,9.288,1.893l.056.022.021.009.092.039.272.117.013.005.1.046.071.031.042.019a25.031,25.031,0,0,1,6.627,4.358l.01.009.057.051c.254.235.5.475.751.721s.459.468.68.707a25.024,25.024,0,0,1,4.514,6.862l.028.063c.007.016.015.034.022.05.018.04.035.079.052.119,0,0,0,0,0,0,.021.047.041.094.06.14l.045.107.01.023.036.086.025.061a.069.069,0,0,0,0,.01,25.09,25.09,0,0,1,.085,18.676c-.01.027-.021.054-.032.081,0,.01-.009.021-.013.031-.052.13-.106.258-.16.387q-.186.441-.389.873c0,.007-.007.016-.011.022-.014.028-.026.056-.04.083a25.059,25.059,0,0,1-4.089,6.1q-.4.443-.83.869c-.251.251-.506.5-.765.734l-.007.005-.075.069a25.023,25.023,0,0,1-6.594,4.328l-.051.023-.06.027-.114.05h0c-.092.04-.184.08-.276.119l-.1.041A24.911,24.911,0,0,1,66.337,75h-.247Zm-6.853-4.063a22.04,22.04,0,0,0,13.518,0l2.128-6.782L70.485,58H61.515l-4.4,6.156ZM75.169,70A22.1,22.1,0,0,0,82,65.087l-5.263-.078ZM50,65.08A22.093,22.093,0,0,0,56.828,70L55.267,65Zm33.651-1.957A21.886,21.886,0,0,0,88,50c0-.116,0-.232,0-.347l-6.344-4.361-6.836,3.418L72.11,56.833l4.417,6.184ZM44,49.655q0,.173,0,.346a21.881,21.881,0,0,0,4.345,13.112l7.136-.107,4.409-6.173-2.708-8.124L50.356,45.3Zm15.174-1.287L61.721,56h8.558l2.544-7.632L66,43.25ZM44.189,47.113l4.6-3.159-1.775-5.065A21.858,21.858,0,0,0,44.189,47.113Zm39.022-3.165,4.6,3.162a21.842,21.842,0,0,0-2.83-8.222ZM57.894,46.829,65,41.5v-8l-5.869-4.4a22.085,22.085,0,0,0-10.711,7.69l2.254,6.432Zm16.212,0,7.226-3.613,2.249-6.428A22.1,22.1,0,0,0,72.869,29.1L67,33.5v8ZM61.592,28.444,66,31.75l4.409-3.307a22.124,22.124,0,0,0-8.817,0Z" transform="translate(-41 -25)" />
        </svg>
        <span className="text-6xl font-semibold dark:text-white">i</span>
        <span className="text-6xl font-semibold text-orange-500">On</span>
      </div>
    </div>
  </div>;
</div>

    </div>
    



  );
};

export default About;
