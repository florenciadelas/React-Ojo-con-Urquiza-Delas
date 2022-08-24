import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { itemsCarrito, removeItem, sendOrder } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    console.log(inputs[0]);
    const data = Array.from(inputs).map((input, index) => input.value);
    sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] });
  };


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
    <div className="infoCart">
    <div className="ticket">
      <ul>
        {itemsCarrito.map((elem) => (
          <div key={elem.item.id}>
            <div className="infoTicket">
            <label for="producto">Producto: </label>
            <li>{elem.item.name}</li>
            </div>
            <div className="infoTicket">
            <label for="precio">Precio: </label>
            <li>{elem.item.price}</li>
            </div>
            <div className="infoTicket">
            <label for="cantidad">Cantidad: </label>
            <li>{elem.quantity}</li>
            </div>
            <div className="infoTicket">
            <label for="valor">Valor total: </label>
            <li>{elem.item.price * elem.quantity}</li>
            </div>
            <button className="botones" onClick={() => removeItem(elem.item.id)}> Eliminar </button>
          </div> 
        ))}
      </ul>
      <h3 className="colorPrecio">{`El total es: $${totalPrice}`}</h3>
      </div>
      <form onSubmit={handleSubmit} className="formulario">
      <label for="nombre">Nombre: </label>
        <input type="text" />
        <label for="email">Email: </label>
        <input type="email" />
        <label for="number">Telefono: </label>
        <input type="tel" />
        <button
          type="submit"
          className="botones"
        >
          Send order
        </button>
      </form>
      </div>
    </>
  );
};

export default Cart;