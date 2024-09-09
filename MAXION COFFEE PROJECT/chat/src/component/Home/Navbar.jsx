import HeroImg from "../assets/website/coffee2.png";
import Background from "../assets/website/y2mate.com - Cinematic Coffee B Roll  Sony A7S III  1635mm F4_1080p.mp4";

const Navbar = () => {
  return (
    <div className="relative min-h-[550px] sm:min-h-[600px] flex justify-center items-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={Background} type="video/mp4" />
      </video>
      <div className="container pb-8 sm:pb-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Text content section */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                We serve the richest{" "}
                <span className="text-primary ">Coffee</span> in the city
              </h1>
              <div className="relative flex  max-w-[24rem] mx-auto  ">
                <div className=" flex items-center mt-12  ">
                  <input
                    type="text"
                    id="input-9"
                    className="  w-80 h-12 px-4 text-sm text-gray-700 border border-r-0 rounded-l-md border-blue-900 focus:outline-none shadow-sm"
                    placeholder="Let search"
                  />
                  <button className="h-12 px-6 text-sm bg-blue-900 border border-l-0 border-blue-900 rounded-r-md shadow-sm text-white hover:bg-blue-400 focus:outline-none">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Image content section */}
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <div className="flex justify-center sm:justify-end">
              <img
                src={HeroImg}
                alt="Coffee cup"
                className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
