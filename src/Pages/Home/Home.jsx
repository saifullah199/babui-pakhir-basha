import About from "./About";
import Banner from "./Banner";
import Location from "./Location";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-16">
        <About />
      </div>
      <div className="mt-16 mb-10">
        <Location />
      </div>
    </div>
  );
};

export default Home;
