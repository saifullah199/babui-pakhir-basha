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

  useEffect(() => {
    if (price > 0) {
      axiosPublic.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
      });
    }
  }, [axiosPublic, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe) {
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

      <button
        className="btn btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay {price}
      </button>

      <p> {error} </p>
    </form>
  );
};

export default CheckOutForm;
