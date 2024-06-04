import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";

const AgreementRequest = () => {
  const axiosPublic = useAxiosPublic();

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

  const handleStatus = async (id, prevStatus, status) => {
    console.log(id, prevStatus, status);
    const { data } = await axiosPublic.patch(`/agreement/${id}`, { status });
    console.log(data);
    // await mutateAsync({ id, status });
  };
  const handleUpdateRole = async (id, prevRole, role) => {
    console.log(id, prevRole, role);
    const { data } = await axiosPublic.patch(`/user/${id}`, { role });
    console.log(data);
    // await mutateAsync({ id, status });
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
                      handleUpdateRole(agreement._id, agreement.role, "member");
                  }}
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
