import { useParams } from "react-router-dom";
import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
 import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ magxs }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const magxRef = doc(db, "magxs", `${id}`);

    getDoc(magxRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);


  
  const magxsFilter = magxs.filter((magx) => magx.id == id);

  return (
    <>
    {magxsFilter.map((magx) => (
      <div key={magx.id}>
      
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="lg" src={magx.image} />
              {console.log(magx.image)}
              <Stack mt="6" spacing="3">
                <Heading size="md">{magx.name}</Heading>
                <Text color="blue.800" fontSize="l">
                  Description: {magx.description}
                </Text>
                <Text color="blue.800" fontSize="l">
                  Category: {magx.category}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {magx.stock}
                </Text>
                <Text color="green.600" fontSize="xl">
                  Price: $ {magx.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <ItemCount 
                stock={magx.stock}
                id={magx.id}
                price={magx.price}
                name={magx.name}
              />
            </CardFooter>
          </Card>
        </Center>
      </div>
    ))}
  </>
  )
}

export default ItemDetail;