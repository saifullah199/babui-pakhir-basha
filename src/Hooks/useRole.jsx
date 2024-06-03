import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user, loading } = useAuth();

  const axiosPublic = useAxiosPublic();

  const { data: role = [], isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/user/${user?.email}`);
      return data;
    },
  });

  return [role, isLoading];
};

export default useRole;

// useRole.js

// import axios from "axios";
// import useAuth from "./useAuth";
// import useAxiosPublic from "./useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";

// const useRole = () => {
//   const { user, loading } = useAuth();
//   const axiosPublic = useAxiosPublic();

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["role", user?.email],
//     enabled: !loading && !!user?.email,
//     queryFn: async () => {
//       console.log("Fetching role for user email:", user?.email);
//       const response = await axios.get(
//         `http://localhost:5000/user/${user?.email}`
//       );
//       console.log("Data received from server:", response.data);
//       return response.data.role; // Ensure the API returns the role field.
//     },
//   });

//   if (error) {
//     console.error("Error fetching role:", error);
//   }

//   const role = data || ""; // Fallback to an empty string if data is undefined

//   console.log("Role in hook:", role);
//   return [role, isLoading];
// };

// export default useRole;
