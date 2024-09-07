import { useState } from 'react';
import Hero from './Hero';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [title, setTitle] = useState("Khám Phá Hương Vị Cà Phê Đặc Biệt.");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMouseEnter = () => setTitle("Cà Phê Tươi Mới Mỗi Ngày");
  const handleMouseLeave = () => setTitle("Khám Phá Hương Vị Cà Phê Đặc Biệt.");
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-30">
        <button
          className="bg-gray-800 text-white py-2 px-4 rounded-md dark:bg-gray-300 dark:text-black hover:bg-gray-700 dark:hover:bg-gray-400"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Chế Độ Sáng' : 'Chế Độ Tối'}
        </button>
      </div>

      {/* Hero Component */}
      <Hero />

      {/* Main Content */}
      <div className="relative flex flex-col bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Header */}
        <header className="flex justify-between items-center p-5 z-30">
          <button
            className="w-12 h-12 relative sm:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="block w-5 absolute left-5 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <span
                className={`block h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-2"}`}
              ></span>
              <span
                className={`block h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-2"}`}
              ></span>
            </div>
          </button>
          <nav className="hidden sm:flex gap-5 items-center">
            {/* Placeholder for Desktop Menu Items */}
          </nav>
          <button className="block sm:hidden bg-transparent border border-orange-600 py-1.5 px-5 rounded-md text-white hover:bg-orange-600">
            Đăng Nhập
          </button>
        </header>
        
        {/* Mobile Menu */}
        <div className={`transition-transform ease-in-out z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 w-full bg-[#2D4263] h-full`}>
          <div className="flex pt-5 items-center justify-end text-xl font-bold px-[10%] w-full" onClick={toggleMenu}>
            <img src="/assets/nft/infytoken/close.svg" alt="Close Menu" className="h-7 cursor-pointer" />
          </div>
          <div className="flex flex-col w-full items-center justify-center h-screen gap-[30px] sm:gap-[50px] text-lg leading-7 font-normal md:gap-[60px]">
            {/* Placeholder for Mobile Menu Items */}
          </div>
        </div>
        
        {/* Title and Search */}
        <section className="min-h-[calc(100vh-69px)] flex items-center justify-center px-1 z-10">
          <div className="flex flex-col gap-4 pb-3 sm:min-w-[448px] max-w-md">
            <h1 className="text-4xl text-orange-600 text-center font-semibold tracking-wider">
              Khám Phá Hương Vị Cà Phê
            </h1>
            <h2 className="text-2xl transition-transform duration-500 mt-1">
              {title}
            </h2>
            <div className="flex flex-col gap-5 sm:gap-7 items-center mt-2">
              <div className="flex items-center gap-4">
                <div
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow-md hover:shadow-orange-600 cursor-pointer group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Placeholder for SVG Icon */}
                </div>
                {/* More SVG Icons */}
              </div>
              <div className="flex min-w-[100px] sm:min-w-[360px] max-w-[360px]">
                <div className="flex bg-white py-2.5 pl-2 pr-1 rounded-l-lg items-center gap-1.5 w-full">
                  {/* SVG Icon */}
                  <input
                    type="text"
                    className="py-1 outline-none placeholder:text-xs sm:placeholder:text-sm dark:placeholder-gray-400"
                    placeholder="Địa chỉ, Thành phố, Tỉnh"
                  />
                </div>
                <button className="bg-orange-600 px-6 py-1 text-base lg:text-lg font-semibold text-white rounded-r-lg shadow-md">
                  Tìm Kiếm
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex items-center">
          <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
            <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
              {/* Placeholder for Image Blocks */}
            </div>
          </div>
        </section>
        
        {/* Additional Content */}
        <section className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl mb-16">
          {/* Image Column */}
          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <img className="h-full w-full object-cover rounded-lg shadow-lg" src="https://picsum.photos/id/1018/2000" alt="Winding Mountain Road" />
          </div>
          {/* Text Column */}
          <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col p-12 md:px-16">
              <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl dark:text-green-300">
                Con Đường Núi Uốn Lượn
              </h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Tại quán cà phê của chúng tôi, chúng tôi cam kết mang đến cho bạn những trải nghiệm cà phê độc đáo nhất. Chúng tôi sử dụng hạt cà phê tươi mới được chọn lọc kỹ lưỡng từ các nông trại hàng đầu, cùng với kỹ thuật pha chế chuyên nghiệp để tạo ra những tách cà phê hoàn hảo.
              </p>
              <div className="mt-8">
                <a href="#" className="inline-block w-full text-center text-lg font-medium bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 text-gray-100 hover:bg-green-800 hover:shadow-md md:w-48 dark:bg-green-800 dark:border-gray-500 dark:hover:bg-green-700">
                  Xem Thêm
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-gray-100 pb-4">Giới Thiệu Về Chúng Tôi</h1>
              <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-300">
                Chúng tôi không chỉ là một quán cà phê; chúng tôi là một nơi để thư giãn, kết nối và thưởng thức những hương vị cà phê tuyệt vời nhất. Đội ngũ của chúng tôi là những người đam mê cà phê, và chúng tôi luôn nỗ lực để mang đến cho bạn trải nghiệm cà phê tốt nhất mỗi ngày.
              </p>
              <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-300 mt-4">
                Mỗi tách cà phê chúng tôi phục vụ đều được chế biến từ những hạt cà phê chất lượng cao nhất, đã được rang xay ngay tại quán để đảm bảo sự tươi mới và hương vị độc đáo.
              </p>
            </div>
            <div className="lg:w-7/12">
              <img
                src="https://images.unsplash.com/photo-1506748686214e9df14a01f2c58e21b57f4b4998e2e7e9a02e9c3de1d41c69d04"
                alt="About Us"
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
