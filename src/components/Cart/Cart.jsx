import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { itemsCarrito } = useContext(CartContext);
  useEffect(() => {
    let total = 0;
    itemsCarrito.forEach((item) => {
      total += parseInt(item.price);
    });
    setTotalPrice(total);
  }, [itemsCarrito]);
  return (
    <>
      <ul>
        {itemsCarrito.map((item) => (
          <>
            <li>{item.title}</li>
            <li>{item.price}</li>
          </> 
        ))}
      </ul>
      <h1>{`Your total is: $${totalPrice}`}</h1>
    </>
  );
};

export default Cart;