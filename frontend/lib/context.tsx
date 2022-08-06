import { createContext, useContext, useState } from 'react';
import Products from '../components/Products/products';

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  // add our data for the state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
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

  // Add Product To Cart
  const addProductToCart = (product, quantity) => {
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    console.log(exist);
    console.log(product, quantity);
  };

  return (
    <ShopContext.Provider
      value={{
        quantity,
        increaseQuantity,
        decreaseQuantity,
        cartItems,
        addProductToCart,
        showCart
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
