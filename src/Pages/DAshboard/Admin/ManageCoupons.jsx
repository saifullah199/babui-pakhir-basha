import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ManageCoupons = () => {
  const axiosPublic = useAxiosPublic();

  const { data: offers = [] } = useQuery({
    queryKey: ["offers"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/coupons`);
      return data;
    },
  });
  console.log(offers);

  const handleCoupons = (e) => {
    e.preventDefault();
    const form = e.target;
    const coupon = form.coupon.value;
    const discount = form.discount.value;
    const description = form.description.value;
    const available = form.available.value;

    const newCoupons = { coupon, discount, description, available };
    console.log(newCoupons);

    fetch("http://localhost:5000/coupons", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoupons),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Agreement Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <h2>Manage Coupons </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Coupon Code </th>
              <th>Discount</th>
              <th>Description</th>
              <th>Available Time </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {offers.map((offer, index) => (
              <tr key={offer._id} className="">
                <th>{index + 1} </th>
                <td>{offer.coupon}</td>
                <td>{offer.discount}</td>
                <td>{offer.description}</td>
                <td>{offer.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div className="mt-7">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Add Coupons
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form onSubmit={handleCoupons}>
              <div className="">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    name="coupon"
                    className="input input-bordered w-full max-w-xs mr-5"
                  />
                  <input
                    type="text"
                    placeholder="Discount"
                    name="discount"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-5">
                  <input
                    type="text"
                    placeholder="Coupon Description"
                    name="description"
                    className="input input-bordered w-full max-w-xs mr-5"
                  />
                  <input
                    type="text"
                    placeholder="Available Time"
                    name="available"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
              <input type="submit" value="Coupons" className="btn mt-5" />
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ManageCoupons;
