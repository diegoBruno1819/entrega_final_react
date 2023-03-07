import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = () => {
  const [magx, setMagx] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const magxsCollection = collection(db, "magxs");
    getDocs(magxsCollection).then((querySnapshot) => {
      {console.log(querySnapshot)}
      const magxs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setMagx(magxs)
    })
  }, [])

  const miFilter = magx.filter((magx) => magx.category === category)

    return (
      <div>
            {category ? <ItemList magx={miFilter} /> : <ItemList magxs={magx}/>}
      </div>
    );
  }


export default ItemListContainer;