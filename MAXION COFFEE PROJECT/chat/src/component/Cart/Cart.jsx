import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [note, setNote] = useState(""); // State for customer note
    const [noteSuggestions] = useState([
        "Xin vui lòng gói hàng cẩn thận.",
        "Giao hàng vào buổi tối nếu có thể.",
        "Tôi cần hóa đơn kèm theo đơn hàng.",
        "Để lại hàng ở cửa hàng nếu không có ai ở nhà.",
        "Liên hệ tôi qua số điện thoại nếu cần thêm thông tin."
    ]);
    const [isEditing, setIsEditing] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({
        name: "David Kent",
        address: "123 Phố Hòa Bình, Quận 1, TP.HCM",
        phone: "0123-456-789",
        email: "david.kent@example.com",
        avatar: "https://baogiaothong.mediacdn.vn/upload/images/2019-4/article_img/2019-10-08/ho-1570498911-width800height559.jpg" // Example avatar URL
    });
    const [ setPaymentMethod] = useState("Cash on Delivery"); // Default payment method
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Cash on Delivery"); // Selected payment method

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
        updateTotalPrice(cart);
    }, []);

    const updateTotalPrice = (items) => {
        const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotalPrice(total);
    };

    const handleRemoveItem = (index) => {
        Swal.fire({
            title: 'Bạn có chắc chắn?',
            text: 'Sản phẩm này sẽ bị xóa khỏi giỏ hàng của bạn.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedCart = cartItems.filter((_, i) => i !== index);
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                setCartItems(updatedCart);
                updateTotalPrice(updatedCart);
                Swal.fire(
                    'Đã xóa!',
                    'Sản phẩm đã được xóa khỏi giỏ hàng của bạn.',
                    'success'
                );
            }
        });
    };

    const handleUpdateQuantity = (index, quantity) => {
        if (quantity < 1) return;

        const item = cartItems[index];
        if (quantity === 1 && item.quantity === 1) {
            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: 'Nếu giảm thêm, sản phẩm này sẽ bị xóa khỏi giỏ hàng của bạn.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xóa',
                cancelButtonText: 'Hủy'
            }).then((result) => {
                if (result.isConfirmed) {
                    handleRemoveItem(index);
                }
            });
            return;
        }

        const updatedCart = cartItems.map((item, i) =>
            i === index ? { ...item, quantity: Math.max(quantity, 1) } : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
        updateTotalPrice(updatedCart);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleNoteSubmit = () => {
        Swal.fire({
            title: 'Ghi chú của bạn đã được gửi',
            text: `Ghi chú: ${note}`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    const handleCustomerInfoChange = (e) => {
        setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
    };

    const handleCustomerInfoSave = () => {
        setIsEditing(false);
        Swal.fire(
            'Thông tin đã được cập nhật!',
            '',
            'success'
        );
    };

    const handlePaymentMethodChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
    };

    const handlePaymentMethodConfirm = () => {
        Swal.fire({
            title: 'Xác nhận phương thức thanh toán',
            text: `Bạn chọn phương thức thanh toán: ${selectedPaymentMethod}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Hủy'
        }).then((result) => {
            if (result.isConfirmed) {
                setPaymentMethod(selectedPaymentMethod);
                Swal.fire(
                    'Đã xác nhận!',
                    `Phương thức thanh toán đã được thay đổi thành: ${selectedPaymentMethod}`,
                    'success'
                );
            }
        });
    };

    const handleSuggestionClick = (suggestion) => {
        setNote(prevNote => prevNote + (prevNote ? '\n' : '') + suggestion);
    };

    const discount = 28000; // Example discount value
    const shipping = 8000;  // Example shipping cost
    const finalPrice = totalPrice - discount + shipping;

    return (
        <div className="container mx-auto p-6">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-semibold mb-2">Giỏ hàng của bạn</h1>
                <p className="text-lg text-gray-600">Ngày hôm nay</p>
            </div>
            <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 xl:space-x-8">
                <div className="xl:w-2/3">
                    <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Giỏ hàng</h2>
                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-600">Giỏ hàng của bạn đang trống.</p>
                        ) : (
                            cartItems.map((item, index) => (
                                <div key={index} className="flex items-center border-b py-4">
                                    <img src={item.img} alt={item.title} className="w-20 h-20 object-cover mr-4 rounded-md" />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-base font-semibold">{item.price.toLocaleString()} VNĐ x {item.quantity}</p>
                                    </div>
                                    <div className="text-right flex flex-col items-end">
                                        <p className="text-lg font-semibold">{(item.price * item.quantity).toLocaleString()} VNĐ</p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <button
                                                className="bg-gray-200 px-3 py-1 rounded"
                                                onClick={() => handleUpdateQuantity(index, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <p className="text-base font-semibold">{item.quantity}</p>
                                            <button
                                                className="bg-gray-200 px-3 py-1 rounded"
                                                onClick={() => handleUpdateQuantity(index, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <button
                                                className="bg-red-500 text-white px-3 py-1 rounded"
                                                onClick={() => handleRemoveItem(index)}
                                            >
                                                Xóa
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Tóm tắt</h2>
                        <div className="flex justify-between mb-2">
                            <p>Tổng cộng</p>
                            <p>{totalPrice.toLocaleString()} VNĐ</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p>Giảm giá <span className="bg-gray-200 p-1 text-xs">HỌC SINH</span></p>
                            <p>-{discount.toLocaleString()} VNĐ</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p>Phí vận chuyển</p>
                            <p>{shipping.toLocaleString()} VNĐ</p>
                        </div>
                        <div className="flex justify-between mb-4 font-semibold">
                            <p>Tổng tiền</p>
                            <p>{finalPrice.toLocaleString()} VNĐ</p>
                        </div>
                      
                    </div>
                    <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Chọn phương thức thanh toán</h2>
                        <div>
                            <label className="inline-flex items-center mt-2">
                                <input
                                    type="radio"
                                    value="Cash on Delivery"
                                    checked={selectedPaymentMethod === "Cash on Delivery"}
                                    onChange={handlePaymentMethodChange}
                                    className="form-radio"
                                />
                                <span className="ml-2">Thanh toán khi nhận hàng</span>
                            </label>
                            <label className="inline-flex items-center mt-2">
                                <input
                                    type="radio"
                                    value="Credit Card"
                                    checked={selectedPaymentMethod === "Credit Card"}
                                    onChange={handlePaymentMethodChange}
                                    className="form-radio"
                                />
                                <span className="ml-2">Thanh toán qua ngân hàng</span>
                            </label>
                        </div>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                        >
                            Xác nhận phương thức thanh toán
                        </button>
                    </div>
                </div>
                <div className="xl:w-1/3">
                    <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Thông tin khách hàng</h2>
                        {isEditing ? (
                            <div>
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold mb-1">Tên:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={customerInfo.name}
                                        onChange={handleCustomerInfoChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold mb-1">Địa chỉ:</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={customerInfo.address}
                                        onChange={handleCustomerInfoChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold mb-1">Số điện thoại:</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={customerInfo.phone}
                                        onChange={handleCustomerInfoChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold mb-1">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={customerInfo.email}
                                        onChange={handleCustomerInfoChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={handleCustomerInfoSave}
                                >
                                    Lưu
                                </button>
                            </div>
                        ) : (
                            <div className="text-center">
                                <img src={customerInfo.avatar} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <p className="font-semibold mb-2">{customerInfo.name}</p>
                                <p>{customerInfo.address}</p>
                                <p>{customerInfo.phone}</p>
                                <p>{customerInfo.email}</p>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                                    onClick={() => setIsEditing(true)}
                                >
                                    Chỉnh sửa
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Ghi chú</h2>
                        <textarea
                            value={note}
                            onChange={handleNoteChange}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            rows="4"
                            placeholder='Bạn có thể ghi chú ở đây'
                        />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={handleNoteSubmit}
                        >
                            Gửi ghi chú
                        </button>
                        <h3 className="text-lg font-semibold mt-6">Gợi ý ghi chú</h3>
                        <ul className="list-disc list-inside mt-2">
                            {noteSuggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer text-blue-500 hover:underline"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Cart;
