'use client'

import { createContext, useContext, useState } from "react";

type CartItem = {
  id: string;
  title:string;
  name: string;
  price: number;
};

type CartContextType = {
  itemsInCart: CartItem[];
  addToCart: (item: CartItem) => void;
};

const initialCartParams: CartContextType = {
  itemsInCart: [],        // empty array matches CartItem[]
  addToCart: () => {},    
};
export const CartContext = createContext(initialCartParams);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [cartItems, setItemsInCart] = useState<any[]>([]);

  function addToCart(itemSelected: any) {
    setItemsInCart((prevItems) => [...prevItems, itemSelected]);
  }

  return (
    <CartContext.Provider value={{ itemsInCart:cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

