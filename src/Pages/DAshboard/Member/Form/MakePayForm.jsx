import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import { Link } from "react-router-dom";

const MakePayForm = () => {
  const [agreements, setAgreements] = useState([]);
  const { user, loading } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/person/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAgreements(data);
      });
  }, [user]);
  console.log(agreements);

  return (
    <div>
      {agreements.map((agreement) => (
        <div
          key={agreement._id}
          className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50"
        >
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="location" className="block text-gray-600">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="email"
                    type="email"
                    placeholder="Email"
                    defaultValue={agreement.userEmail}
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="category" className="block text-gray-600">
                    Floor No
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="floor"
                    type="text"
                    placeholder="Floor"
                    defaultValue={agreement.floor_no}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="location" className="block text-gray-600">
                    Select Availability Month
                  </label>
                  {/* Calender */}
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="title" className="block text-gray-600">
                    BLock name
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="block"
                    type="text"
                    placeholder="BLock name"
                    defaultValue={agreement.block_name}
                    required
                  />
                </div>

                {/* <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                  
                </div>
              </div> */}
                <div className="flex justify-between gap-2">
                  <div className="space-y-1 text-sm">
                    <label htmlFor="price" className="block text-gray-600">
                      Rent
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                      name="rent"
                      type="number"
                      placeholder="Rent"
                      defaultValue={agreement.rent}
                      required
                    />
                  </div>

                  <div className="space-y-1 text-sm">
                    <label htmlFor="guest" className="block text-gray-600">
                      Apartment no
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                      name="apartment"
                      id="guest"
                      type="text"
                      placeholder="Apartment no"
                      defaultValue={agreement.apartment_no}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <Link to="/dashboard/pay">
              <button className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500">
                Pay
              </button>
            </Link>
          </form>
        </div>
      ))}
    </div>
  );
};

export default MakePayForm;
