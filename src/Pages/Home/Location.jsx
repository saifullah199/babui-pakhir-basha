import location from "../../assets/images/location.png";

const Location = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <h2 className="text-center text-2xl mb-6">
          This is a well renowned 15 stored building. We are providing best
          apartments since 15 years.{" "}
        </h2>
      </div>
      <div>
        <img src={location} alt="" />
      </div>
    </div>
  );
};

export default Location;
