import Banner from "../Banner";
import Testimonial from "../Testimonial";
import Footer from "../Footer";
import AppStore from "../AppStore";
import Navbar from "../Navbar";
import Service from "../Service";
const Home = () => {
  return (
    <>
      <Navbar />
      <Service/>

      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
