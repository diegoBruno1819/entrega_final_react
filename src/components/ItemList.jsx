import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ magxs }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {magxs?.map((magx) => (
          <Item
            key={magx.id}
            id={magx.id}
            name={magx.name}
            description={magx.description}
            price={magx.price}
            stock={magx.stock}
            category={magx.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;