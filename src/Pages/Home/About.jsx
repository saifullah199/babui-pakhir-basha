import img1 from "../../assets/images/2.jpg";
import img2 from "../../assets/images/3.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="">
        <img src={img1} alt="" />
        <h2 className="text-center text-2xl mt-6">
          This is a well renowned 15 stored building. We are providing best
          apartments since 15 years.{" "}
        </h2>
      </div>
      <div className="p-4">
        <h3 className="text-xl">ABOUT PROPERTY</h3>
        <h2 className="text-5xl">
          We Provide <br /> Rooms With Top- <br /> Notch Amenities
        </h2>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <h3 className="text-5xl">49+</h3>
            <span className="text-xl uppercase">Staffs</span>
          </div>
          <div>
            <h3 className="text-5xl">21M</h3>
            <span className="text-xl uppercase">Reviews</span>
          </div>
          <div>
            <h3 className="text-5xl">50k</h3>
            <span className="text-xl uppercase">Bookings</span>
          </div>
          <div>
            <h3 className="text-5xl">776+</h3>
            <span className="text-xl uppercase">Members</span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-2xl mb-6">
          This is a well renowned 15 stored building. We are providing best
          apartments since 15 years.{" "}
        </h2>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default About;
