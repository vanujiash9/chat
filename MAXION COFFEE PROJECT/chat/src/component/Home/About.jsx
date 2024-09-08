import { useState } from 'react';
import Hero from './Hero';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-30">
      <button
  aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
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
  <div className="max-w-lg bg-gray-50 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 dark:bg-gray-700 dark:text-gray-100">
    <div className="flex flex-col p-12 md:px-16">
      <h2 className="text-2xl font-medium uppercase text-green-600 lg:text-4xl dark:text-green-200">
        Con Đường Núi Uốn Lượn
      </h2>
      <p className="mt-4 text-gray dark:text-gray-300">
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

       
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                            <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <section className="bg-gray-50 py-12">
  <div className="container mx-auto px-5">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Đội Ngũ Của Chúng Tôi</h2>
    <div className="flex flex-wrap gap-8 justify-center">
      <div className="w-full sm:w-1/3 lg:w-1/4 text-center">
        <img className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg" src="https://example.com/image1.jpg" alt="Nhân viên 1" />
        <h3 className="text-xl font-semibold mt-4">Nguyễn Văn A</h3>
        <p className="text-gray-600">Chuyên gia pha chế cà phê</p>
      </div>
      <div className="w-full sm:w-1/3 lg:w-1/4 text-center">
        <img className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg" src="https://example.com/image2.jpg" alt="Nhân viên 2" />
        <h3 className="text-xl font-semibold mt-4">Trần Thị B</h3>
        <p className="text-gray-600">Quản lý cửa hàng</p>
      </div>
      {/* Thêm nhiều nhân viên khác nếu cần */}
    </div>
  </div>
</section>
<section className="py-12">
  <div className="container mx-auto px-5">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Lịch Sử và Di Sản</h2>
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <p className="text-lg text-gray-600">Quán cà phê của chúng tôi đã có một hành trình dài từ những ngày đầu thành lập. Chúng tôi tự hào về sự phát triển không ngừng và cam kết cung cấp những sản phẩm cà phê chất lượng cao. Dưới đây là những mốc quan trọng trong lịch sử của chúng tôi:</p>
        <ul className="mt-4 list-disc pl-5">
          <li>Mở cửa lần đầu vào năm 2000.</li>
          <li>Giành giải thưởng "Quán cà phê tốt nhất" vào năm 2010.</li>
          <li>Đạt được chứng nhận cà phê hữu cơ vào năm 2015.</li>
          {/* Thêm các mốc quan trọng khác nếu có */}
        </ul>
      </div>
      <div className="lg:w-1/2">
        <img className="w-full h-auto rounded-lg shadow-lg" src="https://example.com/history-image.jpg" alt="Lịch sử và Di sản" />
      </div>
    </div>
  </div>
</section>
<section className="bg-gray-50 py-12">
  <div className="container mx-auto px-5 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Nhận Tin Tức Mới Nhất</h2>
    <p className="text-lg text-gray-600 mb-4">Đăng ký nhận tin tức và ưu đãi đặc biệt từ chúng tôi.</p>
    <form className="flex flex-col md:flex-row items-center justify-center">
      <input
        type="email"
        className="border border-gray-300 py-2 px-4 rounded-lg mb-4 md:mb-0 md:mr-4 w-full md:w-1/2"
        placeholder="Nhập email của bạn"
      />
      <button className="bg-orange-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-700">Đăng Ký</button>
    </form>
  </div>
</section>
<section className="py-12">
<iframe
  className="w-full h-[315px] rounded-lg shadow-lg" 
  src="https://www.youtube.com/embed/WdWEMXnHBVI"
  title="Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

</section>


<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-5">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nhận Xét Của Khách Hàng</h2>
    <div className="flex flex-col gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">"Quán cà phê tuyệt vời! Cà phê thơm ngon và dịch vụ rất tốt."</p>
        <p className="text-gray-800 font-semibold mt-2">- Nguyễn Văn A</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">"Môi trường thoải mái, lý tưởng để thư giãn và làm việc."</p>
        <p className="text-gray-800 font-semibold mt-2">- Trần Thị B</p>
      </div>
      {/* Thêm nhiều nhận xét khác nếu cần */}
    </div>
  </div>
</section>
<section className="py-12">
  <div className="container mx-auto px-5">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Tin Tức Mới Nhất</h2>
    <div className="flex flex-wrap gap-8">
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img className="w-full h-48 object-cover rounded-t-lg" src="https://example.com/blog-image1.jpg" alt="Tin tức 1" />
          <h3 className="text-xl font-semibold mt-4">Tiêu Đề Bài Viết 1</h3>
          <p className="text-gray-600 mt-2">Một đoạn giới thiệu về bài viết này. Đây là nơi bạn có thể cung cấp thông tin ngắn gọn về nội dung của bài viết.</p>
          <a href="#" className="text-blue-600 mt-4 block">Đọc Thêm</a>
        </div>
      </div>
      {/* Thêm nhiều bài viết khác nếu cần */}
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
