import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import dataWorkshops from './dataWorkshops';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../redux/cartSlice";
import { FaOpencart, FaArrowLeft } from 'react-icons/fa';
import "./WorkshopDetail.css";
import Contact from './Contact';

function WorkshopDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isParticipating, setIsParticipating] = useState(false);
    const workshop = dataWorkshops.find(w => w.id === parseInt(id));
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    if (!workshop) {
        return <div>Workshop not found</div>;
    }

    const openCart = () => {
        navigate('/cart');
    };

    const goBack = () => {
        navigate('/workshop');
    };

    const handleParticipate = () => {
        const payload = {
            cartItem: {
                id: workshop.id,
                src: workshop.src,
                title: workshop.title,
                price: workshop.price,
                date: workshop.date,
                quantity: 1,
            }
        };
        dispatch(addToCart(payload));
        setIsParticipating(true);
    };

    return (
        <div className="workshop-detail-container">
            <div className="navigation-buttons">
                <div className="cart-icon-container">
                    <FaOpencart size={40} onClick={openCart} className="cart-icon" />
                    {cartItemsCount > 0 && (
                        <div className="cart-badge">
                            {cartItemsCount}
                        </div>
                    )}
                </div>
            </div>
            <div className="workshop-detail-content">
                <img 
                    src={workshop.src} 
                    alt={workshop.title} 
                    className="workshop-detail-image"
                />
                <div className="workshop-detail-info">
                    <h1>{workshop.title}</h1>
                    <p className="description">{workshop.description}</p>
                    <div className="details">
                        <p><strong>Date:</strong> {workshop.date}</p>
                        <p><strong>Horaire:</strong> {workshop.duration}</p>
                        <h3>Prix: {workshop.price}€</h3>
                    </div>
                    <Button 
                        className={`participate-button ${isParticipating ? 'participating' : ''}`}
                        onClick={handleParticipate}
                    >
                        {isParticipating ? 'Je participe' : 'Participer'}
                    </Button>
                    <Button 
                        onClick={goBack}
                        className="back-button"
                    >
                        <FaArrowLeft /> Retour aux ateliers
                    </Button>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default WorkshopDetail; 
