import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../redux/cartSlice';
import CartItem from './CartItem';
import './Cart.css';
import Contact from './Contact';
import StripeContainer from './Stripe/StripeContainer';


function Cart () {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

   const [showStripe, setShowStripe] = useState(false);

    const openStripeContainer = () => {
        setShowStripe(true);
    };

    const closeStripeContainer = () => {
        setShowStripe(false);
      };

    return (
        <div className="cart-container">
            <h2>Votre panier</h2>
            {cartItems.length === 0 ? (
                <p>Votre panier est vide</p>
            ) : (
                <>
                {cartItems.map((cartItem, index) => <CartItem key={ cartItem.id || index } cartItem={cartItem} />)} 
               </>
            )}
            <h4>Prix total : {totalPrice} €</h4>
            <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform:"translateX(-50%", cursor: "pointer" }}>
            <button onClick={openStripeContainer} className='cart-btn'>Valider le panier</button>     
            </div>
            <div>
                <Contact />
            </div>
            {showStripe && (
                <div>
                    <StripeContainer totalPrice={totalPrice} onClose={closeStripeContainer} />
                </div>
            )}
        </div>
    );
}

export default Cart;

