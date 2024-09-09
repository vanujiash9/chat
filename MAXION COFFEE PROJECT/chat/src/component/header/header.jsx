import Logo from "../assets/website/coffee_logo.png";
import { FaCoffee, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Menus = [
  { id: 1, name: "HOME", link: "/coffee/home" },
  { id: 2, name: "MENU", link: "/coffee/menu" },
  { id: 3, name: "ABOUT", link: "/coffee/about" },
  { id: 4, name: "CONTACT", link: "/coffee/contact" },

];

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-950 via-gray-900 to-black/70 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="font-bold text-2xl sm:text-xl flex items-center gap-3 tracking-wider font-cursive"
            >
              <img src={Logo} alt="Logo" className="w-14" />
              Maxion Coffee
            </a>
          </div>

          {/* Links section */}
          <div className="hidden sm:flex items-center gap-4">
            <ul className="flex items-center gap-4">
              {Menus.map((data) => (
                <li key={data.id}>
                  <NavLink
                    to={data.link}
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block text-xl py-2 px-4 text-white"
                        : "inline-block text-xl py-2 px-4 text-white/70 hover:text-white duration-200"
                    }
                  >
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Login button */}
            <NavLink
              to="/coffee/login"
              className="flex items-center gap-2 text-white hover:text-gray-300"
            >
              <FaUser className="text-xl" />
              <span>Login</span>
            </NavLink>

            {/* Cart button */}
            <NavLink
              to="/coffee/cart"
              className="relative flex items-center gap-2 text-white hover:text-gray-300 "
            >
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3 
              </span>
            </NavLink>
          </div>

          <div className="sm:hidden">
            <button className="text-white text-2xl">
              <FaCoffee />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
