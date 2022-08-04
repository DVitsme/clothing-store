import { createContext, useContext, useState } from 'react';

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  // add our data for the state
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prevQty) => {
      if (prevQty <= 1) return 1;
      return prevQty - 1;
    });
  };
  return (
    <ShopContext.Provider
      value={{ quantity, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
