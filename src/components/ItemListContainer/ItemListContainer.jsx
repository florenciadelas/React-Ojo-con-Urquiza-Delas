import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import details from "../../Details/details"
import { useParams } from "react-router-dom";

const ItemListContainer = ({}) => {
  const {name} = useParams();

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
        const producto = details
        if(name){
          setItems(details.filter(producto => producto.categoria == name));
        }else{
          setItems(producto)}
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  if (loading) return <Spinner />;
  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer; 
