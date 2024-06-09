import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import AdminProfile from "./Profile/AdminProfile";
import MemberProfile from "./Profile/MemberProfile";
import UserProfile from "./Profile/UserProfile";

const MyProfile = () => {
  const { user } = useAuth();
  const [role, isLoading] = useRole();
  return (
    <div>
      {role === "member" && <MemberProfile />}
      {role === "admin" && <AdminProfile />}
      {role === "user" && <UserProfile />}
    </div>
  );
};

export default MyProfile;
