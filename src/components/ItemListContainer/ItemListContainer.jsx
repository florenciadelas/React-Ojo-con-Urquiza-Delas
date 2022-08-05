import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import details from "../../Details/details"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs} from "firebase/firestore"

const ItemListContainer = ({}) => {
  const {categoria} = useParams();
  let [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {

// const db = getFirestore()
// const docRef = doc(db, "items", "1")
// getDoc(docRef).then((snapshot)=> {
//   const data = {id: snapshot.id, ...snapshot.data()}
// })

// const db = getFirestore()
// const itemsCollection = collection(db, "items")
// getDocs(itemsCollection).then((snapchot) => {
//   const data = snapchot.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
// })

// const db = getFirestore()
// const itemCollection = collection(db, "items")
// const filteredCollection = query (
//   itemCollection,
//   where("name", "==", "Remera Lola")
//   )
//   getDocs(filteredCollection).then(snapshot =>{
//     const data = snapshot.docs.map(doc => ({
//       id: doc.id, ...doc.data()
//     }))
//   })

    setLoading(true);
    let promiseItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(details);
      }, 2000);
    });

    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      if(categoria === undefined) { setItems(data[0].items);}
       else{
        const itemsFiltered = data[0].items.filter((product)=>{return product.categoria === categoria});
        setItems(itemsFiltered);
       }
      setItems(data);
      setLoading(false);
    });
  }, [categoria]);

  return loading ? <Spinner /> :
    <>
      <ItemList items={items} />
    </>
};

export default ItemListContainer; 
