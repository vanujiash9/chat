import PropTypes from 'prop-types';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Swal from "sweetalert2";

const MenuCart = ({ img, title, price }) => {
    const handleAddToCart = () => {
        Swal.fire({
            icon: 'success',
            title: 'Added to cart',
            text: `${title} has been added to your cart.`,
            confirmButtonText: 'OK',
        });
    };

    return (
        <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg flex flex-col items-center">
            <img 
                src={img} 
                alt={title} 
                className="w-full h-25 rounded-xl object-cover mb-4" 
            />
            <div className="text-center mb-2">
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <div className="flex items-center mb-2">
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarHalf className="text-yellow-500" />
            </div>
            <div className="text-lg font-bold mb-4">
                {price}
            </div>
            <button 
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark flex items-center justify-center"
                onClick={handleAddToCart}
            >
                Add to cart
            </button>
        </div>
    );
};

MenuCart.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default MenuCart;
