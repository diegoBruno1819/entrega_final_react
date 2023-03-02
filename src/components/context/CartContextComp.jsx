import { CartContext } from "./CartContext";
import { useState } from "react";

const StateComponent = ({ children }) => {
    const [cart, setCart] = useState([]);

    const increment = () => {
        setCart(cart + 1)
    }

    const decrement = () => {
        setCart(cart - 1)
    }

    const reset = () => {
        setCart(0)
    }

  return (
    <CartContext.Provider value={{ cart
    , increment
    , decrement, 
    reset
     }}>
        {children}
     </CartContext.Provider>
  )
}

export default StateComponent