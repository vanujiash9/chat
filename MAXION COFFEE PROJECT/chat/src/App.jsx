import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "./component/Home/Service";
import About from "./component/About/About";
import Menu from "./component/menu/Menu";
import Coffee from "./component/coffee";
import Home from "./component/Home/Home";
import Cart from "./component/Cart/Cart";
import Login from "./component/Auth/Login";
import Contact from "./component/contact/Contact";
import Register from "./component/Auth/Register";
import Review from "./component/menu/review";
import Detailproduct from "./component/redux/slice/detailProduct"
import Product3 from "./component/redux/slice/detailproduct2";
import Feedback from "./component/Home/feedback";
import Index from "./component/About/caresoult";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/coffee" element={<Coffee />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="service" element={<Service />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="review" element={<Review />} />
            <Route path="product3" element={<Product3 />} />
            <Route path="detailproduct" element={<Detailproduct />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="caresoult" element={<Index/>} />

            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
