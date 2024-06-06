import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Anouncement = () => {
  const axiosPublic = useAxiosPublic();

  const { data: announces = [] } = useQuery({
    queryKey: ["announces"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/announcements`);
      return data;
    },
  });
  console.log(announces);
  return (
    <div>
      <h3> All Announcements</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {announces.map((announcement, index) => (
              <tr key={announcement._id} className="">
                <th>{index + 1}</th>
                <td>{announcement.title}</td>
                <td> {announcement.description} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Anouncement;
