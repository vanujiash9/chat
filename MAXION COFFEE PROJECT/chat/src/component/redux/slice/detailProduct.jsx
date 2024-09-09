import "pure-react-carousel/dist/react-carousel.es.css";

export default function Index() {
    const handleAddToCart = (item) => {
        console.log(`${item} added to cart`);
        // Implement your cart functionality here
    };

    return (
        <div className="mx-auto container px-6 xl:px-0 py-12">
            <div className="flex flex-col">
                <div className="flex flex-col justify-center">
                    <div className="relative">
                        <img className="hidden sm:block w-full" src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png" alt="sofa" />
                        <img className="sm:hidden w-full" src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png" alt="sofa" />
                        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                            <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">Range Comfort Sofas</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
                    {[{
                        id: 1,
                        imgSrc: "https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png",
                        title: "Sectional Sofa",
                        price: "$78900"
                    }, {
                        id: 2,
                        imgSrc: "https://i.ibb.co/3BbZvtQ/pexels-andrea-piacquadio-3757055-removebg-preview-1.png",
                        title: "Two Seater Sofa",
                        price: "$2900"
                    }, {
                        id: 3,
                        imgSrc: "https://i.ibb.co/DgFfGcm/paul-weaver-n-Wid-MEQsn-AQ-unsplash-removebg-preview-1.png",
                        title: "Sectional Sofa",
                        price: "$78900"
                    }, {
                        id: 4,
                        imgSrc: "https://i.ibb.co/K6PL38P/pexels-pixabay-276566-removebg-preview-1.png",
                        title: "Sectional Sofa",
                        price: "$78900"
                    }, {
                        id: 5,
                        imgSrc: "https://i.ibb.co/zP9sWqP/phillip-goldsberry-f-Zule-Efe-A1-Q-unsplash-1-removebg-preview-1.png",
                        title: "Sectional Sofa",
                        price: "$78900"
                    }, {
                        id: 6,
                        imgSrc: "https://i.ibb.co/SPyYgjw/pexels-martin-p-chy-1866149-removebg-preview-1.png",
                        title: "Sectional Sofa",
                        price: "$78900"
                    }].map(item => (
                        <div key={item.id} className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
                            <img className="group-hover:opacity-60 transition duration-500" src={item.imgSrc} alt={`sofa-${item.id}`} />
                            <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                                <div>
                                    <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">{item.title}</p>
                                </div>
                                <div>
                                    <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800">{item.price}</p>
                                </div>
                            </div>
                            <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
                                <button 
                                    className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" 
                                    onClick={() => handleAddToCart(item.title)}
                                >
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 2L4 6H1v2h3l1 5h13l1-5h3V6h-3l-2-4H6z" fill="#000" />
                                    </svg>
                                </button>
                                <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
                            </div>
                            <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                                <button>
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      {/* SVG path for button */}
                                    </svg>
                                </button>
                                <button>
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      {/* SVG path for button */}
                                    </svg>
                                </button>
                                <button>
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      {/* SVG path for button */}
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end items-end mt-12">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>1</p>
                        </button>
                        <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>2</p>
                        </button>
                        <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>3</p>
                        </button>
                        <button className="flex justify-center items-center">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
