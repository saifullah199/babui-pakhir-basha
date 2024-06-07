import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY);

const PayAgreement = () => {
  const agreement = useLoaderData();
  const { rent } = agreement;
  return (
    <div className="mt-10">
      <h3> PLease pay before agreement </h3>
      <Elements stripe={stripePromise}>
        <CheckOutForm agreement={agreement}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default PayAgreement;
