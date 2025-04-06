import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems, getTotalPrice, clearCart } from '../redux/cartSlice';
import CartItem from './CartItem';
import Button from 'react-bootstrap/Button';
import './Cart.css';
import Contact from './Contact';
import StripeContainer from './Stripe/StripeContainer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function Cart() {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showStripe, setShowStripe] = useState(false);

    const openStripeContainer = () => {
        setShowStripe(true);
    };

    const closeStripeContainer = () => {
        setShowStripe(false);
    };

    const handlePaymentSuccess = () => {
        dispatch(clearCart());
        setShowStripe(false);
        navigate('/workshop');
    };

    const goBack = () => {
        navigate('/workshop');
    };

    return (
        <div className="cart-container">
            <h2>Votre panier</h2>
            {cartItems.length === 0 ? (
                <p>Votre panier est vide</p>
            ) : (
                <>
                    {cartItems.map((cartItem, index) => (
                        <CartItem key={cartItem.id || index} cartItem={cartItem} />
                    ))}
                </>
            )}
            <h4>Prix total : {totalPrice} €</h4>
            <div className='cart-buttons-container'>
                <button 
                    onClick={openStripeContainer} 
                    className='cart-btn'
                    disabled={cartItems.length === 0}
                >
                    Valider le panier
                </button>
                <button onClick={goBack} className='cart-btn'>
                    <FaArrowLeft /> Retour aux ateliers
                </button>
            </div>
            <div>
                <Contact />
            </div>
            {showStripe && (
                <div>
                    <StripeContainer 
                        totalPrice={totalPrice} 
                        onClose={closeStripeContainer}
                        onSuccess={handlePaymentSuccess}
                    />
                </div>
            )}
        </div>
    );
}

export default Cart;

