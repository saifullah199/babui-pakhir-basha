import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://server-peach-omega-42.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
