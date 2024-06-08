import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useRole from "../../../Hooks/useRole";

const AdminProfile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const axiosPublic = useAxiosPublic();

  const { data: rooms = [] } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/rooms`);
      return data;
    },
  });

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/users`);
      return data;
    },
  });

  const members = users.filter((user) => user.role === "member");

  const availableRooms = ((rooms.length - members.length) / rooms.length) * 100;
  const agreements = (members.length / rooms.length) * 100;
  console.log(agreements);
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
            <h1 className="text-5xl font-bold"> {user?.displayName} </h1>
            <p className="py-6">Email: {user?.email}</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <div>
              <div className="">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Total Rooms</th>
                        <th>Available Rooms</th>
                        <th>Agreements/Unavailable Rooms</th>
                        <th>Users</th>
                        <th>Members</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>{rooms.length}</th>
                        <td>{availableRooms}%</td>
                        <td>{agreements}%</td>
                        <td>{users.length}</td>
                        <td>{members.length}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
