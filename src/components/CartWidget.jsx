import React from "react";
import { Button } from "@chakra-ui/react";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { cart } = useContext(CartContext)
  return (
    <>
      <div className="cart">
        <Button size="lg" variant="outline" colorScheme="orange">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>{ cart }</span>
        </Button>
      </div>
      
    </>
  );
};

export default CartWidget;