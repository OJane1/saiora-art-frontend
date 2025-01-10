import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const CheckoutForm = ({totalPrice, onClose}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [messageSuccess, setMessageSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const amountInCents = Math.round(totalPrice * 100);
        
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: amountInCents,
            email: email,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSuccess(true);
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (<div className="stripe-container" style={{ textAlign: "center"}}>
    <IoMdCloseCircleOutline className="bm-cross-button" onClick={onClose} /> 
    {!messageSuccess ?
    <>
    <h4>Montant à payer : <span>{totalPrice} €</span></h4>
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
        <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="email"
        />
    <div style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
      <CardElement />
      </div>
      <button>Payer</button>
    </form>
    </>
    :
    <div><h3>Votre paiement a été accepté !</h3></div>
}
    </div>
  );
};