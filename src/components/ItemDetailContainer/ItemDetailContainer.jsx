import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import details from "../../Details/details";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  let [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let promiseItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(details);
      }, 2000);
    });

    const db = getFirestore();
    const itemDoc = doc(db, "items", id);
    getDoc(itemDoc).then((snapshot) => {
      setItems({ ...snapshot.data(), id: snapshot.id });
      setLoading(false);
    });
  }, [id]);
  return loading ? (
    <Spinner />
  ) : (
    <>
      <ItemDetail items={items} />
    </>
  );
};

export default ItemDetailContainer;
