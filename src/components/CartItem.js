import { useDispatch } from "react-redux";
import dataWorkshops from "./dataWorkshops";
import { removeFromCart, updateCartQuantity } from "../redux/cartSlice";
import { MdDelete } from "react-icons/md"; 

const CartItem = ({cartItem}) => {
    const items = dataWorkshops.find(item => item.id === cartItem.itemId);
    const dispatch = useDispatch();

    const increaseQuantity = () => {
        dispatch(updateCartQuantity({ cartItemId: cartItem.id, quantity: cartItem.quantity + 1 }));
    };

    const decreaseQuantity = () => {
        if (cartItem.quantity > 1) {
            dispatch(updateCartQuantity({ cartItemId: cartItem.id, quantity: cartItem.quantity - 1 }));
        }
    }

    return(<div className="cart-item">
        <img src={items.src} alt={items.title} className="cart-img"/>
        <div className="cart-content">
        <p>Atelier : {items.title}</p>
        <p>Date : {items.date}</p>
        <div className="quantity-btn-container">
            <p>Quantité : </p>
        <button onClick={increaseQuantity} className="quantity-btn">+</button>
        <p>{cartItem.quantity}</p>
        <button onClick={decreaseQuantity} className="quantity-btn">-</button>
        </div>
        <p>Prix unitaire : {items.price * cartItem.quantity}€</p>
        <span onClick={() => dispatch(removeFromCart({cartItemId : cartItem.id}))}>
            <MdDelete />  
        </span>
        </div>
    </div>)
};

export default CartItem;