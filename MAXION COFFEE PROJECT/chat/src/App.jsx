import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "./component/Service";
import About from "./component/Home/About";
import Menu from "./component/Menu";
import Coffee from "./component/coffee"; // Assuming you have a Coffee component
import Home from "./component/Home/Home";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Contact from "./component/Contact";
import Register from "./component/Register";

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

            <Route path="login" element={<Login />} />


          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
