import { useState } from "react";
import Hero from "./Hero";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Footer from "../header/Footer";
import Caresoult from "./caresoult";
const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div
      className={
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }
    >
      {/* Dark Mode Toggle */}
      <div className="fixed bottom-4 right-4 z-30">
        <button
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "Chế Độ Sáng" : "Chế Độ Tối"}
        </button>
      </div>

      {/* Hero Component */}
      <Hero />
      <Caresoult />
      {/* Main Content */}
      <div className="relative flex flex-col bg-cover bg-center">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Header */}
        <header className="flex justify-between items-center p-5 z-30">
          <button
            className="w-12 h-12 relative sm:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="block w-5 absolute left-5 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <span
                className={`block h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
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
        <div
          className={`transition-transform ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-full bg-[#2D4263] h-full`}
        >
          <div
            className="flex pt-5 items-center justify-end text-xl font-bold px-[10%] w-full"
            onClick={toggleMenu}
          >
            <img
              src="/assets/nft/infytoken/close.svg"
              alt="Close Menu"
              className="h-7 cursor-pointer"
            />
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
            <img
              className="h-full w-full object-cover rounded-lg shadow-lg"
              src="https://picsum.photos/id/1018/2000"
              alt="Winding Mountain Road"
            />
          </div>
          {/* Text Column */}
          <div className="max-w-lg bg-gray-50 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 dark:bg-gray-700 dark:text-gray-100">
            <div className="flex flex-col p-12 md:px-16">
              <h2 className="text-2xl font-medium uppercase text-green-600 lg:text-4xl dark:text-green-200">
                Con Đường Núi Uốn Lượn
              </h2>
              <p className="mt-4 text-gray dark:text-gray-300">
                Tại quán cà phê của chúng tôi, chúng tôi cam kết mang đến cho
                bạn những trải nghiệm cà phê độc đáo nhất. Chúng tôi sử dụng hạt
                cà phê tươi mới được chọn lọc kỹ lưỡng từ các nông trại hàng
                đầu, cùng với kỹ thuật pha chế chuyên nghiệp để tạo ra những
                tách cà phê hoàn hảo.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block w-full text-center text-lg font-medium bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 text-gray-100 hover:bg-green-800 hover:shadow-md md:w-48 dark:bg-green-800 dark:border-gray-500 dark:hover:bg-green-700"
                >
                  Xem Thêm
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8 bg-white shadow-xl rounded-lg p-6 mb-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-6">
              <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-800">
                Giới thiệu về chúng tôi
              </h1>
              <p className="text-base md:text-lg leading-7 text-gray-700">
                Chúng tôi là một quán cà phê với không gian ấm cúng và sang
                trọng, nơi bạn có thể thưởng thức những ly cà phê tuyệt hảo. Đến
                với chúng tôi để trải nghiệm những phút giây thư giãn tuyệt vời
                trong không gian độc đáo của quán.
              </p>
            </div>
            <div className="w-full lg:w-7/12">
              <img
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="Nhóm người"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8 bg-white shadow-xl rounded-lg p-6">
            <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-6">
              <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-800">
                Câu chuyện của chúng tôi
              </h1>
              <p className="text-base md:text-lg leading-7 text-gray-700">
                Chúng tôi chia sẻ câu chuyện về hành trình xây dựng quán cà phê
                của mình, từ những ngày đầu cho đến những thành công hiện tại.
                Khám phá những giá trị và niềm đam mê của chúng tôi qua từng
                giai đoạn phát triển.
              </p>
            </div>
            <div className="w-full lg:w-7/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                <div className="p-4 flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                    src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                    alt="Alexa featured Img"
                  />
                  <p className="font-semibold text-lg leading-6 text-gray-800 mt-4">
                    Alexa
                  </p>
                </div>
                <div className="p-4 flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                    src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                    alt="Olivia featured Img"
                  />
                  <p className="font-semibold text-lg leading-6 text-gray-800 mt-4">
                    Olivia
                  </p>
                </div>
                <div className="p-4 flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                    src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                    alt="Liam featured Img"
                  />
                  <p className="font-semibold text-lg leading-6 text-gray-800 mt-4">
                    Liam
                  </p>
                </div>
                <div className="p-4 flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                    src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                    alt="Elijah featured Img"
                  />
                  <p className="font-semibold text-lg leading-6 text-gray-800 mt-4">
                    Elijah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Lịch Sử và Di Sản
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Quán cà phê của chúng tôi đã có một hành trình dài từ những ngày
                đầu thành lập. Chúng tôi tự hào về sự phát triển không ngừng và
                cam kết cung cấp những sản phẩm cà phê chất lượng cao. Dưới đây
                là những mốc quan trọng trong lịch sử của chúng tôi:
              </p>
              <ul className="mt-4 list-disc pl-5 text-gray-600 dark:text-gray-300">
                <li>Mở cửa lần đầu vào năm 2000.</li>
                <li>Giành giải thưởng Quán cà phê tốt nhất vào năm 2010.</li>
                <li>Đạt được chứng nhận cà phê hữu cơ vào năm 2015.</li>
                {/* Thêm các mốc quan trọng khác nếu có */}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lịch sử và Di sản"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Tin Tức Mới Nhất Về Quán Cà Phê
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src="https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tin tức 1"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
                  Khách Sạn Mới Mở Cửa Tại Trung Tâm Thành Phố
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
                  Quán cà phê mới được mở cửa tại trung tâm thành phố với không
                  gian sang trọng và dịch vụ chuyên nghiệp. Đến thưởng thức cà
                  phê và thư giãn cùng chúng tôi.
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 mt-4 block"
                >
                  Đọc Thêm
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src="https://images.unsplash.com/photo-1561082909-b4f331568933?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tin tức 2"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
                  Khuyến Mãi Đặc Biệt Cho Ngày Lễ
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
                  Chúng tôi đang có chương trình khuyến mãi đặc biệt nhân dịp
                  ngày lễ. Hãy đến quán để nhận ưu đãi và trải nghiệm những món
                  cà phê tuyệt vời.
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 mt-4 block"
                >
                  Đọc Thêm
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src="https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tin tức 3"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
                  Sự Kiện Ra Mắt Sản Phẩm Mới
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
                  Chúng tôi vui mừng thông báo sự kiện ra mắt sản phẩm cà phê
                  mới với hương vị độc đáo. Đừng bỏ lỡ cơ hội trải nghiệm sản
                  phẩm mới này.
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 mt-4 block"
                >
                  Đọc Thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="relative">
          {/* Nền trắng */}
          <div className="absolute inset-0 bg-white dark:bg-gray-900 h-full" />
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 h-full z-0" />
        </div>
        <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={2}
          >
            <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800 dark:text-gray-200">
              Khách hàng của chúng tôi
              <br />
              nói gì
            </h1>
            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800 dark:text-gray-200">
              Khách hàng của chúng tôi nói gì
            </h1>
            <Slider>
              <Slide index={0} tabIndex="null">
                <div className="flex">
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <img
                        src="https://i.ibb.co/4g1D9cv/imgslider1.png"
                        alt="Hình ảnh hồ sơ"
                        className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="dấu ngoặc kép"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800 dark:text-gray-200">
                          Một trong những công việc tốt nhất đã được thực hiện!
                        </h1>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600 dark:text-gray-400">
                          Các giá trị cốt lõi của chúng tôi là trung tâm của tất
                          cả những gì chúng tôi làm. Chúng được tích hợp vào
                          công việc hàng ngày của chúng tôi và giúp chúng tôi
                          nhớ rằng khách hàng của chúng tôi luôn đặt lên hàng
                          đầu, và lời cảm ơn cuối cùng luôn đến từ chúng tôi.
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800 dark:text-gray-200">
                          Anna Smith
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600 dark:text-gray-400">
                          Nhà thiết kế web cao cấp
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div
                  className="flex relative"
                  style={{ transform: "translateX(0%)" }}
                >
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <img
                        src="https://i.ibb.co/4g1D9cv/imgslider1.png"
                        alt="Hình ảnh hồ sơ"
                        className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="dấu ngoặc kép"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800 dark:text-gray-200">
                          Một trong những công việc tốt nhất đã được thực hiện!
                        </h1>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600 dark:text-gray-400">
                          Các giá trị cốt lõi của chúng tôi là trung tâm của tất
                          cả những gì chúng tôi làm. Chúng được tích hợp vào
                          công việc hàng ngày của chúng tôi và giúp chúng tôi
                          nhớ rằng khách hàng của chúng tôi luôn đặt lên hàng
                          đầu, và lời cảm ơn cuối cùng luôn đến từ chúng tôi.
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800 dark:text-gray-200">
                          Anna Smith
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600 dark:text-gray-400">
                          Nhà thiết kế web cao cấp
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <div className="flex items-center mt-8">
              <ButtonBack
                className="cursor-pointer"
                role="button"
                aria-label="trượt trước"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                  alt="trước"
                />
              </ButtonBack>

              <ButtonNext
                role="button"
                aria-label="trượt tiếp theo"
                className="cursor-pointer ml-2"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                  alt="tiếp theo"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>

      <div className="2xl:mx-auto 2xl:container mx-4 py-16">
        <div className="w-full relative flex items-center justify-center">
          {/* Ảnh nền cho quán cà phê */}
          <img
            src="https://i.ibb.co/4sYZ8gC/img-2.png"
            alt="cafe-interior"
            className="w-full h-full absolute z-0 hidden xl:block"
          />
          <img
            src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
            alt="cafe-interior"
            className="w-full h-full absolute z-0 hidden sm:block xl:hidden"
          />
          <img
            src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
            alt="cafe-interior"
            className="w-full h-full absolute z-0 sm:hidden "
          />
          <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
            <h1 className="text-4xl font-semibold leading-9 text-white text-center">
              Đừng bỏ lỡ cơ hội!
            </h1>
            <p className="text-base leading-normal text-center text-white mt-6">
              Đăng ký nhận bản tin của chúng tôi để luôn cập nhật những tin tức
              mới nhất. <br /> Bản tin của chúng tôi được gửi vào mỗi thứ Sáu
              hàng tuần, hãy đăng ký để nhận tin tức và cập nhật mới nhất.
            </p>
            <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
              <input
                className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                placeholder="Địa chỉ email"
              />
              <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
