import location from "../../assets/images/location.png";

const Location = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <h2 className="text-center text-2xl mb-6">How will you find us? </h2>
        <p className="text-center text-xl mb-6">
          It is 9 Km away from Jessore City. First , take a Bus or CNG and come
          Barinagar from Palbari. It is 5 minutes walk from the Bus stand . Come
          towards the west. It stands in the right-hand side. <br />
          <span className="text-orange-500 font-bold text-3xl mt-4">
            Babui Pakhir Basha
          </span>{" "}
        </p>
      </div>
      <div>
        <img src={location} alt="" />
      </div>
    </div>
  );
};

export default Location;
