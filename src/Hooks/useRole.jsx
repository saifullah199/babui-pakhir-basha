import { useContext } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";

const useRole = () => {
  const { user, loading } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const { data: role, isLoading } = useQuery({
    queryKey: ["role123", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      try {
        const { data } = await axiosPublic(`/user/${user?.email}`);
        console.log(data);
        return data.role;
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log(user?.email);
  console.log(role);
  return [role, isLoading];
};

export default useRole;
