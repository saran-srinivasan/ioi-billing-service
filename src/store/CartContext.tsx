import React, { createContext, useContext, useReducer } from 'react';

// Initial state for the cart
const initialState = {
  basketItems: [],
  totalAmount: 0,
  gstAmount: 0,
  handlingCharges: 15,
  finalAmount: 0,
};

// Reducer function to handle state updates
const reducer = (state: any, action: { type: any; item: any; newQuantity: any; }) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return handleAddToBasket(state, action.item);
    case 'REMOVE_FROM_BASKET':
      return handleRemoveFromBasket(state, action.item);
    case 'UPDATE_QUANTITY':
      return handleQuantityChange(state, action.item, action.newQuantity);
    case 'CALCULATE_TOTALS':
      return handleCalculateTotals(state);
    default:
      return state;
  }
};

// Helper functions for handling cart actions
const handleAddToBasket = (state: { basketItems: any; }, item: any) => {
  // (Implementation similar to RightLayout component)
  console.log('getting value', state);
  console.log('getting value and item', item);

  return {
    ...state,
    basketItems: [...state.basketItems, { ...item, quantity: 1 }],
  };
};

const handleRemoveFromBasket = (state: { basketItems: any[]; }, item: { name: any; }) => {
  // ... (Implement logic to remove item from basket)
  return {
    ...state,
    basketItems: state.basketItems.filter((i: { name: any; }) => i.name !== item.name),
  };
};

const handleQuantityChange = (state: { basketItems: any[]; }, item: { name: any; }, newQuantity: any) => {
    return {
        ...state,
        basketItems: state.basketItems.map((i: { name: any; quantity: number; }) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        ),
    };
};

const handleCalculateTotals = (state: any) => {
  // ... (Implement logic to calculate totals, similar to RightLayout component)
};

// Create the CartContext
export const CartContext = createContext(initialState);

// Custom hook to access and dispatch actions to the cart context
export const useCart = () => useContext(CartContext)

// Provider component to wrap the application with the context
export const CartProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={[ state, dispatch ]}>
      {children}
    </CartContext.Provider>
  );
};
