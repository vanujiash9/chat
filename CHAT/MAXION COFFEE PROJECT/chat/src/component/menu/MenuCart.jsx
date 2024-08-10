import { BsStarFill, BsStarHalf } from "react-icons/bs";

const MenuCart = (item ) => {
    return (
        <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg flex flex-col items-center ">
            <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-25 rounded-xl object-cover mb-4" 
            />
            <div className="text-center mb-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <div className="flex items-center mb-2">
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarHalf className="text-yellow-500" />
            </div>
            <div className="text-lg font-bold mb-4">
                {item.price}
            </div>
            <button 
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark flex items-center justify-center"
            >
                Add to cart
            </button>
        </div>
    );
};

export default MenuCart;
