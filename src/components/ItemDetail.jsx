import { useParams } from "react-router-dom";
import { 
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Divider,
 } from "@chakra-ui/react";
 import hp from "../assets/hp.jpg";
 import ItemCount from "./ItemCount";

const ItemDetail = ({ magxs }) => {

  const { id } = useParams();

  const magxsFilter = magxs.filter((magx) => magx.id == id);

  return (
    <>
    {magxsFilter.map((magx) => (
      <div key={magx.id}>
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="lg" src={hp} />
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
                  Price: U$D {magx.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <ItemCount />
              <Center className="btn-center">
                <Button variant="solid" colorScheme="blue">
                  Buy
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    ))}
  </>
  )
}

export default ItemDetail