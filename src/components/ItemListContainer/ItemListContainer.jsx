import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import details from "../../Details/details";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({}) => {
  let { name } = useParams();
  let [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let promiseItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(details);
      }, 2000);
    });

    const categoria = name;

    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      if (categoria === undefined) {
        setItems(data);
      } else {
        const itemsFiltered = data.filter((product) => {
          return product.categoria === categoria;
        });

        setItems(itemsFiltered);
      }

      setLoading(false);
    });
  }, [name]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
