import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Save state to localStorage
const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (error) {
        console.error('Could not save state:', error);
    }
};

// Load state from localStorage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.error('Could not load state:', error);
        return undefined;
    }
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: loadFromLocalStorage(),
});

// Subscribe to store updates and save state to localStorage
store.subscribe(() => saveToLocalStorage(store.getState().cart));

export default store;



