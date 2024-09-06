import { useState } from 'react';
import imn1 from '../assets/website/2c96dab0ec3706fdf4d6b21090a104ac.jpg';
import imn2 from '../assets/website/27780fc651dff0eb419b06ecf93a3055.jpg';
// Import additional images as needed

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, img: imn1, title: 'Product 1', price: 19.99, quantity: 1 },
        { id: 2, img: imn2, title: 'Product 2', price: 29.99, quantity: 1 },
        // Add more items as needed
    ]);

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, delta) => {
        setCartItems(cartItems.map(item =>
            item.id === id
                ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
                : item
        ));
    };

    const getSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const calculateTaxes = (subtotal) => {
        return subtotal * 0.1; // Example tax rate
    };

    const getTotal = () => {
        const subtotal = getSubtotal();
        const taxes = calculateTaxes(subtotal);
        return subtotal + taxes;
    };

    return (
        <div className="bg-gray-100 h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold">Product</th>
                                        <th className="text-left font-semibold">Price</th>
                                        <th className="text-left font-semibold">Quantity</th>
                                        <th className="text-left font-semibold">Total</th>
                                        <th className="text-left font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id}>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <img className="h-16 w-16 mr-4" src={item.img} alt={item.title} />
                                                    <span className="font-semibold">{item.title}</span>
                                                </div>
                                            </td>
                                            <td className="py-4">${item.price.toFixed(2)}</td>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <button
                                                        className="border rounded-md py-2 px-4 mr-2"
                                                        onClick={() => handleQuantityChange(item.id, -1)}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-center w-8">{item.quantity}</span>
                                                    <button
                                                        className="border rounded-md py-2 px-4 ml-2"
                                                        onClick={() => handleQuantityChange(item.id, 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-4">${(item.price * item.quantity).toFixed(2)}</td>
                                            <td className="py-4">
                                                <button
                                                    className="bg-red-500 text-white py-2 px-4 rounded-lg"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-4">Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>${getSubtotal().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Taxes</span>
                                <span>${calculateTaxes(getSubtotal()).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping</span>
                                <span>$0.00</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">Total</span>
                                <span className="font-semibold">${getTotal().toFixed(2)}</span>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
