import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Spinner from "../Spinner/Spinner";
import details from "../../Details/details"


const ItemDetailContainer = ({id}) => {
  

  let [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(items);
  
  useEffect(() => {
    setLoading(true);
    let promiseItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(details);
      }, 2000);
    });

    promiseItems
      .then((details) => {
        setItems(details[id]);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  return (
    <>
      <ItemDetail items={items} />
    </>
  );
};

export default ItemDetailContainer; 