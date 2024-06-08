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

  // const { mutateAsync } = useMutation({
  //   mutationFn: async ({ id, status }) => {
  //     const { data } = await axiosPublic.patch(`/agreement/${id}`, { status });
  //     console.log(data);
  //   },
  // });

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
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Floor no</th>
              <th>Block Name</th>
              <th>Apartment No</th>
              <th>Rent</th>
              <th>Request Date</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {agreements
              .filter((a) => a.status === "pending")
              .map((agreement, index) => (
                <tr key="agreement._id">
                  <th>{agreement.floor_no}</th>
                  <td>{agreement.block_name}</td>
                  <td>{agreement.apartment_no}</td>
                  <td>{agreement.rent}</td>
                  <td>{new Date(requestedDate).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleStatus(
                          agreement._id,
                          agreement.status,
                          "checked"
                        ),
                          handleUpdateRole(
                            agreement.userEmail,
                            "user",
                            "member"
                          );
                      }}
                      // onClick={() => handleStatusAcceptClick(agreement)}
                      className="btn  btn-error"
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handleStatus(agreement._id, agreement.status, "checked")
                      }
                      className="btn btn-outline btn-error"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgreementRequest;
