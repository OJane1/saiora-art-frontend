import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dataWorkshops from './dataWorkshops';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Workshops.css";
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/cartSlice";
import { FaOpencart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Workshops() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openCart = () => {
        navigate('/cart');
    };

    return (
        <div className='workshop-container'>
            <h3>Nos prochains ateliers :</h3>
            <div style={{ position: "fixed", top: "1rem", right: "1rem", cursor: "pointer" }}>
                <FaOpencart size={40} onClick={openCart} />
            </div>
            <div className="d-flex flex-wrap gap-4 justify-content-center">
                {dataWorkshops.map((workshop) => (
                    <Card 
                    style={{ 
                        width: window.innerWidth <= 450 ? '90%' : '22rem',
                        marginTop: window.innerWidth <= 450 ? '3rem' : '0'
                    }}
                        key={workshop.id}
                        className='card'>      
                        <Card.Img 
                            variant="top" 
                            src={workshop.src}
                            alt={workshop.title} 
                        />
                        <Card.Body className='card-body d-grid'>
                            <Card.Title className="fs-4">{workshop.title}</Card.Title>
                            <Card.Text>{workshop.description}</Card.Text>
                            <div>
                                <p>Date: {workshop.date}</p>
                                <p>Horaire: {workshop.duration}</p>
                                <h4>Prix: {workshop.price}€</h4>
                            </div>
                            <Button 
                                onClick={() => {
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
                                  console.log("Dispatching payload to addToCart:", payload);
                                  dispatch(addToCart(payload));
                              }}
                            >
                                Participer
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Workshops;
