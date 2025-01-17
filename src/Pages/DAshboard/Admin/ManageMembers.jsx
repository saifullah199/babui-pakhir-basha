import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageMembers = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`);
      return data;
    },
  });

  console.log(users);

  const handleUpdateRole = async (email, prevRole, newRole) => {
    console.log(email, prevRole, newRole);
    const { data } = await axiosPublic.patch(`/member/${email}`, {
      role: newRole,
    });
    console.log(data);
  };
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        {/* <Helmet>
    <title>Manage Users</title>
  </Helmet> */}
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    .filter((u) => u.role === "member")
                    .map((user) => (
                      <tr key={user._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user?.email}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user?.role}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {user?.displayName}
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <button
                              onClick={() => {
                                handleUpdateRole(user?.email, "member", "user");
                              }}
                              className="relative"
                            >
                              {" "}
                              Update Role
                            </button>
                          </span>
                          {/* Update User Modal */}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMembers;
