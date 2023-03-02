import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";


const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category)

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if(Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await genDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  if (category === undefined) {
    return (
      <div>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Magxs Catalogue
          </Heading>
        </Center>
        <ItemList magxs={Data} />
      </div>
    );
  } else {
    const catFilter = Data.filter((magx) => magx.category === category);
    return (
      <div>
        <Center bg="#D6EAF8" h="100px" color="black">
          <Heading as="h2" size="2xl">
            Magxs de Hogwartz
          </Heading>
        </Center>
        {catFilter ? <ItemList magxs={catFilter} /> : <ItemList magxs={Data} />}
      </div>
    );
  }


  
};

export default ItemListContainer;