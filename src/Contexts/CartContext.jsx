import React, { createContext, useState } from "react";
import swal from "sweetalert";
import {
  addDoc,
  collection,
  getFirestore,
  writeBatch,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [itemsCarrito, setItemCarrito] = useState([]);

  const sendOrder = async (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: itemsCarrito,
      total: totalPrice,
      buyer: buyerData,
      date: formatDate(new Date()),
    };

    const batch = writeBatch(db);
    const idList = itemsCarrito.map((product) => product.item.id);
    const withoutStock = [];
    const collectionRef = collection(db, "items");
    const docsResponse = await getDocs(
      query(collectionRef, where(documentId(), "in", idList))
    );
    docsResponse.docs.forEach((doc) => {
      const dataDoc = doc.data();
      const prod = itemsCarrito.find((prod) => prod.item.id === doc.id);

      if (dataDoc.stock >= prod.quantity) {
        batch.update(doc.ref, { stock: dataDoc.stock - prod.quantity });
      } else {
        withoutStock.push({ prod });
      }
    });
    if (withoutStock.length === 0) {
      const addResponse = await addDoc(orderCollection, order);
      batch.commit();
      swal({
        title: "Gracias!",
        text: `Tu Numero de Orden es:
        ${addResponse.id}`,
        icon: "success",
        button: "Finalizar",
      });
    }
    clear();
  };

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };

  const formatDate = (date) => {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  };

  const addItem = (item, quantity) => {
    if (isInCart(item)) {
      const indexItem = itemsCarrito.findIndex(
        (element) => element.item.id === item.id
      );
      const newItemsCarrito = [...itemsCarrito];
      newItemsCarrito[indexItem].quantity =
        newItemsCarrito[indexItem].quantity + quantity;
      setItemCarrito(newItemsCarrito);
    } else {
      setItemCarrito([...itemsCarrito, { item, quantity }]);
    }
  };

  const isInCart = (item) => {
    return itemsCarrito.find((element) => element.item.id === item.id);
  };

  const clear = () => {
    setItemCarrito([]);
  };
  const removeItem = (itemId) => {
    const newItemsCarrito = itemsCarrito.filter(
      (element) => element.item.id !== itemId
    );
    setItemCarrito(newItemsCarrito);
  };

  const total = () => {
    return itemsCarrito.reduce(
      (valorAnterior, valorActual) =>
        valorAnterior + valorActual.item.price * valorActual.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ itemsCarrito, addItem, removeItem, clear, total, sendOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
