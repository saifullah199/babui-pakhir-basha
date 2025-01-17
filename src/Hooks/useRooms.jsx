import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRooms = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: rooms = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const res = await axiosPublic.get("/rooms");
      return res.data;
    },
  });
  return [rooms, loading, refetch];
};

export default useRooms;
