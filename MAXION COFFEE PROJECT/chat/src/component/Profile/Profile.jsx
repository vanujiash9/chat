import React, { useState } from 'react';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('profile'); // Thay đổi phần nội dung hiển thị
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'James Bhatta',
    email: 'james.bhatta@example.com',
    phone: '+84 123 456 789',
    address: '123 Đường ABC, Thành phố XYZ, Việt Nam',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Gửi dữ liệu đến API hoặc lưu trữ dữ liệu
    console.log('Thông tin đã lưu:', formData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    if (window.confirm('Bạn chắc chắn muốn đăng xuất không?')) {
      // Thực hiện các hành động đăng xuất, chẳng hạn như xóa token và chuyển hướng
      console.log('Đăng xuất thành công');
    }
  };

  return (
    <div className="flex flex-wrap bg-gray-100 w-full h-screen p-4">
      {/* Sidebar */}
      <div className="w-full md:w-3/12 bg-white rounded-lg p-4 shadow-lg">
        <div className="flex items-center space-x-4 mb-5">
          <img
            className="h-24 w-24 rounded-full border-4 border-blue-500"
            src="https://vcdn1-giaitri.vnecdn.net/2020/03/29/991816090-56782878-2.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=_VlKS8qAdvKfuUrToqwCbw"
            alt="James Bhatta"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">James Bhatta</h2>
            <p className="text-sm text-gray-600">Người dùng đã xác thực</p>
          </div>
        </div>

        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#"
              onClick={() => setActiveSection('dashboard')}
              className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeSection === 'dashboard' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span>Bảng điều khiển</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setActiveSection('notifications')}
              className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeSection === 'notifications' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </span>
              <span>Thông báo</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setActiveSection('messages')}
              className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeSection === 'messages' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </span>
              <span>Tin nhắn cá nhân</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setActiveSection('profile')}
              className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeSection === 'profile' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span>Hồ sơ của tôi</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setActiveSection('orders')}
              className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeSection === 'orders' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </span>
              <span>Đơn hàng của tôi</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setActiveSection('favorites')}
              className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeSection === 'favorites' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </span>
              <span>Danh sách yêu thích</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setActiveSection('changePassword')}
              className={`flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium ${activeSection === 'changePassword' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <span>Đổi mật khẩu</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={handleLogout}
              className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline cursor-pointer"
            >
              <span className="text-gray-600">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              <span>Đăng xuất</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-9/12 p-4">
        {activeSection === 'profile' && (
          <>
            <h1 className="text-3xl font-semibold mb-4">Hồ Sơ Của Tôi</h1>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h2 className="text-2xl font-semibold mb-4">Thông tin cá nhân</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Họ và tên:</span>
                  <span>{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Email:</span>
                  <span>{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Số điện thoại:</span>
                  <span>{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Địa chỉ:</span>
                  <span>{formData.address}</span>
                </div>
              </div>
              <button
                onClick={handleEditClick}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Chỉnh sửa thông tin
              </button>
            </div>

            {isEditing && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
                  <h2 className="text-xl font-semibold mb-4">Chỉnh sửa thông tin</h2>
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Họ và tên:</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Số điện thoại:</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Địa chỉ:</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={handleCloseClick}
                        type="button"
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
                      >
                        Đóng
                      </button>
                      <button
                        onClick={handleSaveChanges}
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                      >
                        Lưu thay đổi
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </>
        )}

        {activeSection === 'messages' && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-semibold mb-4">Tin nhắn cá nhân</h2>
            {/* Giao diện tin nhắn cá nhân */}
            <p>Giao diện tin nhắn cá nhân sẽ được hiển thị ở đây.</p>
          </div>
        )}

        {activeSection === 'notifications' && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-semibold mb-4">Thông báo</h2>
            {/* Giao diện thông báo */}
            <p>Giao diện thông báo sẽ được hiển thị ở đây.</p>
          </div>
        )}

        {activeSection === 'orders' && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-semibold mb-4">Đơn hàng của tôi</h2>
            {/* Giao diện đơn hàng */}
            <p>Giao diện đơn hàng sẽ được hiển thị ở đây.</p>
          </div>
        )}

        {activeSection === 'favorites' && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-semibold mb-4">Danh sách yêu thích</h2>
            {/* Giao diện danh sách yêu thích */}
            <p>Giao diện danh sách yêu thích sẽ được hiển thị ở đây.</p>
          </div>
        )}

        {activeSection === 'changePassword' && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-semibold mb-4">Đổi mật khẩu</h2>
            {/* Giao diện đổi mật khẩu */}
            <p>Giao diện đổi mật khẩu sẽ được hiển thị ở đây.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
