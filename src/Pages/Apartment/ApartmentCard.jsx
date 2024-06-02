const ApartmentCard = ({ room }) => {
  console.log(room);
  const { apartment_image, block_name, floor_no, rent, apartment_no, _id } =
    room;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={apartment_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="grid grid-cols-2 gap-3">
            <h2 className="card-title">Block name:{block_name}</h2>
            <p>Floor no:{floor_no}</p>
            <p>Apartment no : {apartment_no} </p>
            <p>Rent: {rent}</p>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-outline btn-error">
              Make Agreement{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
