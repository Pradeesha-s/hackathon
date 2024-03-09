import React from 'react';

const ShoppingCart = () => {
  // Fetch cart items from the state or local storage
  const cartItems = []; // Replace with actual cart data

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      {/* Add checkout button */}
    </div>
  );
};

export default ShoppingCart;
