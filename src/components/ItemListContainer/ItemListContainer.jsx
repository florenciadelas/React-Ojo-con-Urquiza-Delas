import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import details from "../../Details/details"

const ItemListContainer = ({id}) => {
  

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
        setItems(details);
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
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer; 
