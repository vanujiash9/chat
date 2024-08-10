import MenuCart from "./menu/MenuCart";
import imn1 from "../assets/website/2c96dab0ec3706fdf4d6b21090a104ac.jpg";
import imn2 from "../assets/website/27780fc651dff0eb419b06ecf93a3055.jpg";
import imn3 from "../assets/website/d191162bab13fb9f788a1dc3334eecf6.jpg";
import imn4 from "../assets/website/3c46922bbf6faa03c92f4b7fa29e233e.jpg";
import imn5 from "../assets/website/faddc7a59fc2cf3ba774a25821c951f9.jpg";
import imn6 from "../assets/website/e3615d551329c1343da0a052b4173ae6.jpg";
import imn7 from "../assets/website/3c46922bbf6faa03c92f4b7fa29e233e.jpg";

import imn8 from "../assets/website/166be34df841eff4d5a6303cb031d3b0.jpg";
import imn9 from "../assets/website/1bbf21967acbd14e429803d4dbe29d49.jpg";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Menu = () => {
  return (
    <div>
      <Navbar/>
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Menu
      </h1>

      <div className="flex flex-wrap gap-8 justify-center items-center lg:px px-5">
      <MenuCart img={imn7} title="Tasty Dish" price="210.000" />

        <MenuCart img={imn2} title="Tasty Dish" price="210.000" />
        <MenuCart img={imn3} title="Tasty Dish" price="210.000" />
        <MenuCart img={imn1} title="Tasty Dish" price="210.000" />

        <MenuCart img={imn5} title="Tasty Dish" price="210.000" />
        <MenuCart img={imn9} title="Tasty Dish" price="210.000" />

        <MenuCart img={imn6} title="Tasty Dish" price="210.000" />
        <MenuCart img={imn4} title="Tasty Dish" price="210.000" />

        <MenuCart img={imn8} title="Tasty Dish" price="210.000" />

      </div>
      <Footer/>

    </div>
  );
};

export default Menu;
