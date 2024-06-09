import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const MemberProfile = () => {
  const { user, loading } = useAuth();
  const [role] = useRole();
  const [agreements, setAgreements] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const requestedDate = startDate;

  useEffect(() => {
    fetch(`https://server-peach-omega-42.vercel.app/person/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAgreements(data);
      });
  }, [user]);
  console.log(agreements);

  // const axiosPublic = useAxiosPublic();

  return (
    <div>
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col">
            <img
              src={user?.photoUrl}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <p className="p-2 uppercase px-4 text-xs text-white bg-pink-500 rounded-full">
              {role}
            </p>
            <div>
              <div className="grid grid-cols-2">
                <h1 className="text-5xl font-bold"> {user?.displayName} </h1>
                <p className="py-6">Email: {user?.email}</p>
                <p>
                  {" "}
                  Agreements:{" "}
                  <span className=" bg-pink-500 text-white rounded-full">
                    {agreements.length}
                  </span>{" "}
                </p>
              </div>
              {/* <button className="btn btn-primary">Get Started</button> */}
              <div>
                {agreements.map((agreement) => (
                  <div key={agreement._id} className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">
                            Agreement accept date
                          </span>
                        </div>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs"
                          defaultValue={new Date(
                            requestedDate
                          ).toLocaleDateString()}
                        />
                      </label>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">Block name</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Type here"
                          defaultValue={agreement.block_name}
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">Floor No</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Type here"
                          defaultValue={agreement.floor_no}
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span className="label-text">Room no</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Type here"
                          defaultValue={agreement.apartment_no}
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
