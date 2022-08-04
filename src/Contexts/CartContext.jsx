
import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [itemsCarrito, setItemCarrito] = useState([]);

  const addItem = (item, quantity) => {
   
    if (isInCart(item)) {
      const indexItem = itemsCarrito.findIndex((element) => element.item.id === item.id)
      const newItemsCarrito = [...itemsCarrito]
      newItemsCarrito[indexItem].quantity = newItemsCarrito[indexItem].quantity + quantity
      setItemCarrito(
       newItemsCarrito
      );
    }else {
      setItemCarrito([...itemsCarrito, { item, quantity }])
    }
  }

  const isInCart = (item) => {
    return itemsCarrito.find((element) => element.item.id === item.id);
  };

  const clear = () => {
    setItemCarrito([]);
  };
  const removeItem = (itemId) => {
    const newItemsCarrito = itemsCarrito.filter((element) => element.item.id !== itemId)
    setItemCarrito(newItemsCarrito);
  };

  const total = () => {
    return itemsCarrito.reduce(
      (valorAnterior, valorActual) => valorAnterior + valorActual.item.price * valorActual.quantity,
      0
    );
  }

  return <CartContext.Provider value={{ itemsCarrito, addItem, removeItem, clear, total }}>{children}</CartContext.Provider>;

};
export default CartProvider;