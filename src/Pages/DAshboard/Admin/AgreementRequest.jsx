import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";

const AgreementRequest = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: agreements = [] } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/agreement`);
      return data;
    },
  });

  const [startDate, setStartDate] = useState(new Date());
  const requestedDate = startDate;

  const { mutateAsync } = useMutation({
    mutationFn: async ({ id, status }) => {
      const { data } = await axiosPublic.patch(`/agreement/${id}`, { status });
      console.log(data);
    },
  });

  // const handleAccept = async (agreementId, userId) => {
  //   try {
  //     const { data } = await axiosPublic.patch(
  //       `/accept/${agreementId}/${userId}`
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error updating agreement and user role:", error);
  //   }
  // };

  // // Assuming you have a way to get the userId, for example from the agreement data
  // const handleStatusAcceptClick = (agreement) => {
  //   handleAccept(agreement._id, agreement.agreementId); // Replace agreement.userId with the correct user Id
  // };

  const handleStatus = async (id, prevStatus, status) => {
    console.log(id, prevStatus, status);
    const { data } = await axiosPublic.patch(`/agreement/${id}`, { status });
    console.log(data);
    // await mutateAsync({ id, status });
  };
  const handleUpdateRole = async (email, prevRole, newRole) => {
    console.log(email, prevRole, newRole);
    const { data } = await axiosPublic.patch(`/user/${email}`, {
      role: newRole,
    });
    console.log(data);
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      {agreements.map((agreement) => (
        <div key={agreement._id}>
          <div className="card w-72 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Block name:{agreement.block_name}</h2>
              <div className="grid grid-cols-2 gap-3 font-semibold">
                <p>Floor no:{agreement.floor_no}</p>
                <p>Apartment no : {agreement.apartment_no} </p>
                <p>Rent: {agreement.rent}</p>
                <p>
                  {" "}
                  Request Date:{new Date(
                    requestedDate
                  ).toLocaleDateString()}{" "}
                </p>
                <p>{agreement.role}</p>
              </div>
              <div className="card-actions justify-between">
                <button
                  onClick={() => {
                    handleStatus(agreement._id, agreement.status, "checked"),
                      handleUpdateRole(agreement.userEmail, "user", "member");
                  }}
                  // onClick={() => handleStatusAcceptClick(agreement)}
                  className="btn  btn-error"
                >
                  Accept
                </button>
                <button
                  onClick={() =>
                    handleStatus(agreement._id, agreement.status, "checked")
                  }
                  className="btn btn-outline btn-error"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgreementRequest;
