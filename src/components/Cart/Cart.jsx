import React, { Children, useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { itemsCarrito, removeItem } = useContext(CartContext);
  useEffect(() => {
    let total = 0;
    let cantidad = 0;
    itemsCarrito.forEach((item) => {
      total += item.item.price * item.quantity;
      cantidad += item.quantity 
    });
    setTotalPrice(total);
  }, [itemsCarrito]);
  return (
    <>
      <ul>
        {itemsCarrito.map((elem) => (
          <div key={elem.item.id}>
            <li>{elem.item.name}</li>
            <li>{elem.item.price}</li>
            <li>{elem.quantity}</li>
            <li>{elem.item.price * elem.quantity}</li>
            <button onClick={() => removeItem(elem.item.id)}> Eliminar </button>
          </div> 
        ))}
      </ul>
      <h3>{`El total es: $${totalPrice}`}</h3>
    </>
  );
};

export default Cart;