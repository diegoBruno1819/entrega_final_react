import ItemDetail from "./ItemDetail";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const magxsCollection = collection(db, "magxs");
    getDocs(magxsCollection).then((querySnapshot) => {
      const magxs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setData(magxs);
    });
  }, []);

  return <ItemDetail magxs={data} />
  
};

export default ItemDetailContainer;