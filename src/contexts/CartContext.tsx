import React, { createContext, useMemo } from "react";
import useLocalStorage from '../shared/hooks/useLocalStorage';
import { CART_LOCAL_STORAGE_KEY } from '../const/cart';

export const CartContext = createContext({
  cart: [],
  itemCount: 0,
  addToCart: (service: string) => [],
  clearCart: () => null
});

function CartProvider({children}) {
  const [cart, updateCart] = useLocalStorage<string[]>(CART_LOCAL_STORAGE_KEY, undefined);

  const addToCart = (service: string) => {
    const updatedCart = [ ...cart, service ];
    updateCart(updatedCart);
    return updatedCart;
  };

  const clearCart = () => {
    updateCart([]);
  };

  const itemCount: number = useMemo(() => cart?.length ?? 0, [cart]);

  return (
    <CartContext.Provider value={{ cart, itemCount, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
