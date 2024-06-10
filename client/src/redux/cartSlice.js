import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 2000,
    tax: 0,
    orderTotal: 0,
};

const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart')) || defaultState;
};

const cartSlice = createSlice({
    name: "cart",
    initialState: getCartFromLocalStorage(),
    reducers: {
        addItem: (state, action) => {
            const { product } = action.payload;
            const item = state.cartItems.find((i) => i.cartID === product.cartID);
            if (item) {
                item.amount += product.amount;
            } else {
                state.cartItems.push(product);
            }
            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            cartSlice.caseReducers.caculateTotal(state);
            toast.success(`Add success ${product.amount} item${product.amount > 1 ? "s" : ""} to cart`);
        },
        increaseItem: (state, action) => {
            const { cartID } = action.payload;
            const product = state.cartItems.find((i) => i.cartID === cartID);
            product.amount += 1;
            state.numItemsInCart += 1;
            state.cartTotal += Number(product.price);
            cartSlice.caseReducers.caculateTotal(state);
        },
        decreaseItem: (state, action) => {
            const { cartID } = action.payload;
            const product = state.cartItems.find((i) => i.cartID === cartID);
            if (product.amount > 1) {
                product.amount -= 1;
                state.numItemsInCart -= 1;
                state.cartTotal -= Number(product.price);
            } else {
                return;
            }
            cartSlice.caseReducers.caculateTotal(state);
        },
        removeItem: (state, action) => {
            const { cartID } = action.payload;
            console.log(cartID)
            const product = state.cartItems.find((i) => i.cartID === cartID);
            state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
            state.numItemsInCart -= product.amount;
            state.cartTotal -= product.price * product.amount;
            cartSlice.caseReducers.caculateTotal(state);
            toast.error('Item removed from cart');
        },
        clearCart: (state, action) => {
            localStorage.setItem('cart', JSON.stringify(defaultState));
            return defaultState;
        },
        caculateTotal: (state, action) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart', JSON.stringify(state));
        },
    }
});

export const { addItem, increaseItem, decreaseItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;