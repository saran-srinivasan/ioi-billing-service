import React, { useState, useEffect, useContext } from 'react'; // Assuming Menu component is in the same directory
import { MenuItem } from '../Menu/MenuData';
import { CartContext, useCart } from '../../store/CartContext';

interface CheckoutPagepops {

}

const CheckoutPage: React.FC<any> = ({ menuItems }) => {

  const [totalAmount, setTotalAmount] = useState(0);
  const [gstAmount, setGstAmount] = useState(0);
  const [handlingCharges, setHandlingCharges] = useState(15);
  const [finalAmount, setFinalAmount] = useState(0);

  const [state] = useCart();


  useEffect(() => {
    calculateTotals();
  }, [state]);

  

  const calculateTotals = () => {
    const totalItemPrice = state.basketItems.reduce((acc: number, item: { price: number; quantity: number; }) => acc + item.price * item.quantity, 0);
    setTotalAmount(totalItemPrice);
    setGstAmount(totalItemPrice * 0.05);
    setFinalAmount(totalItemPrice + gstAmount + handlingCharges);
  };

    function handleFinalOrder(event:any): void {
       
    }

  return (
    <div className="bill-container">
      <div className="checkout-section">
        <h2>Your Basket</h2>
        {state.basketItems.length > 0 ? (
          <ul>
            {state.basketItems.map((item:any) => (
              <li key={item.name}>
                {item.name} - ₹{item.price} x {item.quantity}
                {/* ... (Add buttons for quantity adjustments) */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your basket is empty.</p>
        )}
        <div className="totals">
          <p>Total Amount: ₹{totalAmount}</p>
          <p>GST (5%): ₹{gstAmount}</p>
          <p>Handling Charges: ₹{handlingCharges}</p>
          <p className="final-amount">Final Amount: ₹{finalAmount}</p>
          <button onClick={handleFinalOrder}>Place Final Order (₹{finalAmount})</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
