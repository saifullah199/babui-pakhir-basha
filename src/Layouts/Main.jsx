import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div>
      <div className="container  mx-auto">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
