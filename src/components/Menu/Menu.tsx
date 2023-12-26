import React, { useState } from 'react';
import './Menu.scss'; // Import your CSS for styling
import { menuItems, MenuItem } from './MenuData';
import { useCart } from '../../store/CartContext';

interface MenuProps {
  menuItems: MenuItem[];
}

const Menu: React.FC<any> = () => {
  const [state, dispatch] = useCart();

  const handleAddToBasket = (item: MenuItem) => {
    console.log('menu add click', item);
    
    const existingItemIndex = state.basketItems.findIndex((i:any) => i.name === item.name);
    if (existingItemIndex !== -1) {
        console.log('index', existingItemIndex);
        
      dispatch({ type: 'UPDATE_QUANTITY', item });
      //zero edge case
    } else {
        dispatch({ type: 'ADD_TO_BASKET', item });
    }
  };


  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.name} className="menu-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price} INR</p>
            <p>
              <i className={item.veg ? 'fa-leaf' : 'fa-drumstick-bite'}></i>
            </p>
            <p>{item.category}</p>
            <button onClick={() => handleAddToBasket(item)}>Add to Basket</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;