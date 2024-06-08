import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ApartmentCard = ({ room }) => {
  const { user } = useAuth();
  // const axiosPublic = useAxiosPublic();

  // const { data: users = [] } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const { data } = await axiosPublic(`/users`);
  //     return data;
  //   },
  // });

  // console.log(users);
  const { apartment_image, block_name, floor_no, rent, apartment_no, _id } =
    room;

  const handleAddAgreement = async (e) => {
    const userName = user.displayName;
    const userEmail = user.email;
    const status = "pending";

    const agreement = {
      userName,
      userEmail,
      block_name,
      floor_no,
      rent,
      apartment_no,
      status,
    };
    console.log(agreement);

    // send data to the server

    fetch("http://localhost:5000/agreements", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(agreement),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Agreement Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
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
            <button
              onClick={handleAddAgreement}
              className="btn btn-outline btn-error"
            >
              Make Agreement{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
