const Contact = () => {
  return (
      <div>
          <section className="bg-[#FFFAFF] dark:bg-[#4C2113]">
              <div className="container px-6 py-12 mx-auto">
                  <div>
                      <p className="font-medium text-[#DCB485] dark:text-[#DCB485]">Liên hệ với chúng tôi</p>
                      <h1 className="mt-2 text-2xl font-semibold text-[#4C2113] dark:text-[#FFFFFF] md:text-3xl">Kết nối với chúng tôi</h1>
                      <p className="mt-3 text-[#B38B60] dark:text-[#DCB485]">Đội ngũ thân thiện của chúng tôi rất vui được nghe từ bạn.</p>
                  </div>
                  <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                          <div>
                              <span className="inline-block p-3 text-[#A45C23] rounded-full bg-[#DCB485]/80 dark:bg-[#4C2113]">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                  </svg>
                              </span>
                              <h2 className="mt-4 text-base font-medium text-[#4C2113] dark:text-[#FFFFFF]">Email</h2>
                              <p className="mt-2 text-sm text-[#B38B60] dark:text-[#DCB485]">Đội ngũ thân thiện của chúng tôi luôn sẵn sàng hỗ trợ bạn.</p>
                              <p className="mt-2 text-sm text-[#A45C23] dark:text-[#DCB485]">hello@merakiui.com</p>
                          </div>
                          <div>
                              <span className="inline-block p-3 text-[#A45C23] rounded-full bg-[#DCB485]/80 dark:bg-[#4C2113]">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                  </svg>
                              </span>
                              <h2 className="mt-4 text-base font-medium text-[#4C2113] dark:text-[#FFFFFF]">Văn phòng</h2>
                              <p className="mt-2 text-sm text-[#B38B60] dark:text-[#DCB485]">Hãy ghé thăm chúng tôi tại văn phòng chính.</p>
                              <p className="mt-2 text-sm text-[#A45C23] dark:text-[#DCB485]">100 Smith Street Collingwood VIC 3066 AU</p>
                          </div>
                          <div>
                              <span className="inline-block p-3 text-[#A45C23] rounded-full bg-[#DCB485]/80 dark:bg-[#4C2113]">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                  </svg>
                              </span>
                              <h2 className="mt-4 text-base font-medium text-[#4C2113] dark:text-[#FFFFFF]">Điện thoại</h2>
                              <p className="mt-2 text-sm text-[#B38B60] dark:text-[#DCB485]">Từ thứ Hai đến thứ Sáu, từ 8am đến 5pm.</p>
                              <p className="mt-2 text-sm text-[#A45C23] dark:text-[#DCB485]">+1 (555) 000-0000</p>
                          </div>
                      </div>
                      <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                          <iframe
                              width="100%"
                              height="100%"
                              frameBorder={0}
                              title="map"
                              marginHeight={0}
                              marginWidth={0}
                              scrolling="no"
                              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                          />
                      </div>
                  </div>
              </div>

              <section className="bg-gray-100 py-12">
                  <div className="container mx-auto px-5">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Câu Hỏi Thường Gặp</h2>
                      <div className="space-y-4">
                          <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="text-xl font-semibold text-gray-800">Chúng tôi có thể đặt hàng online không?</h3>
                              <p className="text-gray-600 mt-2">Có, bạn có thể đặt hàng online thông qua trang web của chúng tôi và chúng tôi sẽ giao hàng tận nơi cho bạn.</p>
                          </div>
                          <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="text-xl font-semibold text-gray-800">Có các tùy chọn cà phê nào có sẵn?</h3>
                              <p className="text-gray-600 mt-2">Chúng tôi cung cấp nhiều loại cà phê khác nhau, bao gồm cà phê espresso, cappuccino, latte, và nhiều loại cà phê đặc biệt khác.</p>
                          </div>
                          {/* Thêm nhiều câu hỏi và trả lời khác nếu cần */}
                      </div>
                  </div>
              </section>

              <div className="flex justify-center min-h-screen items-center py-3 px-2">
                  <div className="bg-white flex flex-col gap-3 sm:flex-row items-center justify-around py-5 drop-shadow-lg rounded-lg max-w-5xl w-full px-5">
                      <div className="max-w-lg flex justify-center flex-col gap-3">
                          <h2 className="text-2xl lg:text-4xl font-bold text-start">
                              Hãy biến giấc mơ của bạn thành hiện thực
                          </h2>
                          <p className="text-base md:text-lg text-gray-500">
                              Bạn đang tìm kiếm cách thúc đẩy nhanh chóng cho doanh nghiệp của mình?
                              <br /> Gửi email của bạn và chúng tôi sẽ liên hệ với bạn sớm nhất.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-5 max-w-md">
                              <input
                                  type="text"
                                  className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#3651BF] focus:border-transparent"
                                  placeholder="Email"
                              />
                              <button
                                  className="px-4 py-2 text-base font-semibold text-white bg-[#3651BF] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6]"
                                  type="submit"
                              >
                                  Đăng ký
                              </button>
                          </div>
                      </div>
                      <div className="flex items-center justify-center sm:justify-end max-w-xs w-full">
                          <img
                              src="https://www.tailwindtap.com/assets/components/subscription-cta/jar.jpg"
                              alt="flower image"
                              className="rounded-md object-cover"
                          />
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
};

export default Contact;
