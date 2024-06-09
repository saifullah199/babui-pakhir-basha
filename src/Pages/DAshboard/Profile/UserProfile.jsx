import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const UserProfile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col">
        <img src={user?.photoUrl} className="max-w-sm rounded-lg shadow-2xl" />
        <p className="p-2 uppercase px-4 text-xs text-white bg-pink-500 rounded-full">
          {role}
        </p>
        <div>
          <h1 className="text-5xl font-bold"> {user?.displayName} </h1>
          <p className="py-6">Email: {user?.email}</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
