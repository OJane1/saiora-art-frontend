import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },

    reducers: {
        addToCart: (state, action) => {
            const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                itemId: action.payload.cartItem.id,
                title: action.payload.cartItem.title,
                src: action.payload.cartItem.src,
                price: action.payload.cartItem.price,
                date: action.payload.cartItem.date,
                quantity: action.payload.cartItem.quantity,
                totalPrice: action.payload.cartItem.quantity * action.payload.cartItem.price
            });
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        },
        updateCartQuantity: (state, action) => {
            const { cartItemId, quantity } = action.payload;
            const cartItem = state.cartItems.find(item => item.id === cartItemId);
            if (cartItem) {
                cartItem.quantity = quantity;
                cartItem.totalPrice = cartItem.price * quantity;
            }
        } 
    }
})

// Selector to calculate the total price
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}
    
// Selector to get cart items
export const getCartItems = state => state.cart.cartItems;
export const { addToCart, removeFromCart, updateCartQuantity } = slice.actions;

export default slice.reducer;
