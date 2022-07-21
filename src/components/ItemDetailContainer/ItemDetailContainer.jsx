import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Spinner from "../Spinner/Spinner";
import details from "../../Details/details"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
 const {id} = useParams()
 console.log(id)

  let [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setLoading(true);
    let promiseItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(details);
      }, 2000);
    });

    promiseItems
      .then((res) => {
          const itemOk = (res.filter(items => items.id == id));
          setItems(itemOk[0])              
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;
  return (
    <>
      <ItemDetail items={items} />
    </>
  );
};

export default ItemDetailContainer; 