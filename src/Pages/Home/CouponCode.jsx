import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const CouponCode = () => {
  const axiosPublic = useAxiosPublic();
  const { data: offers = [] } = useQuery({
    queryKey: ["offers"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/coupons`);
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-5">
        Hey, Apply This Coupon!{" "}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {offers.map((offer) => (
          <div key={offer._id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{offer.description}!</h2>
              <div className="grid grid-cols-2 font-semibold">
                <p>Coupon Code:{offer.coupon}</p>
                <p>Discount:{offer.discount}</p>
                <p>Available for:{offer.available}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponCode;
