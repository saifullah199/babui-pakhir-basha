import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";

const MyProfile = () => {
  const { user } = useAuth();
  const [role, isLoading] = useRole();
  return (
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
            <h1 className="text-5xl font-bold"> {user?.dispalyName} </h1>
            <p className="py-6">Email: {user?.email}</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Agreement accept date</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Block name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
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
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
