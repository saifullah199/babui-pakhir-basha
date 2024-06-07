import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useCart from "../../../../Hooks/useCart";

const CheckOutForm = ({ agreement }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosPublic = useAxiosPublic();

  console.log(agreement);

  const price = agreement.map((ag) => ag.rent);
  console.log(price);
  // const [cart] = useCart();
  // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  // console.log(rent);
  // useEffect(() => {
  //   if (totalPrice > 0) {
  //     axiosPublic
  //       .post("/create-payment-intent", { price: totalPrice })
  //       .then((res) => {
  //         console.log(res.data.clientSecret);
  //       });
  //   }
  // }, [axiosPublic, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Apply Coupon"
        className="p-3 my-5 border"
      />
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {agreement.map((ag) => (
        <button
          key={ag._id}
          className="btn btn-primary my-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay {ag.rent}
        </button>
      ))}
      <p> {error} </p>
    </form>
  );
};

export default CheckOutForm;
