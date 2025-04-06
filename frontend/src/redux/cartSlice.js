import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) {
            return { cartItems: [] };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Error loading cart from localStorage:', err);
        return { cartItems: [] };
    }
};

// Save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (err) {
        console.error('Error saving cart to localStorage:', err);
    }
};

export const slice = createSlice({
    name: 'cart',
    initialState: loadState(),

    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload.cartItem;
            const existingItem = state.cartItems.find(
                item => item.itemId === newItem.id && item.date === newItem.date
            );

            if (existingItem) {
                // If item exists, update its quantity
                existingItem.quantity += newItem.quantity;
                existingItem.totalPrice = existingItem.quantity * existingItem.price;
            } else {
                // If item doesn't exist, add it as new
                const timeId = new Date().getTime();
                state.cartItems.push({
                    id: timeId,
                    itemId: newItem.id,
                    title: newItem.title,
                    src: newItem.src,
                    price: newItem.price,
                    date: newItem.date,
                    quantity: newItem.quantity,
                    totalPrice: newItem.quantity * newItem.price
                });
            }
            saveState(state);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            );
            saveState(state);
        },
        updateCartQuantity: (state, action) => {
            const { cartItemId, quantity } = action.payload;
            const cartItem = state.cartItems.find(item => item.id === cartItemId);
            if (cartItem) {
                cartItem.quantity = quantity;
                cartItem.totalPrice = cartItem.price * quantity;
            }
            saveState(state);
        },
        clearCart: (state) => {
            state.cartItems = [];
            saveState(state);
        }
    }
});

// Selector to calculate the total price
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return cartItem.totalPrice + total;
    }, 0);
};

// Selector to get cart items
export const getCartItems = state => state.cart.cartItems;

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } = slice.actions;

export default slice.reducer;
