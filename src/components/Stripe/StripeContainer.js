import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51Q3aYW08NEnQxjUuWNqqtgJdceGrQ8BYVjBL5oWhGPP4JUxS58WW3DI0RhNQHfVnQGyxQ3P0soUK6zyeGIVZh8a1003X75t65Q";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({totalPrice, onClose}) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm totalPrice={totalPrice} onClose={onClose} />
    </Elements>
  );
};

export default StripeContainer;