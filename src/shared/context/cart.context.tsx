'use client';

import { createContext, ReactNode, useState } from 'react';
import { IProduct } from '../types/products.types';

type CartContextType = {
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  addToCart: (cartItem: IProduct) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  addToCart: (cartItem) => {},
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (cartItem: IProduct) => {
    const isAlreadyExist = cart.find(
      (item: IProduct) => item.id === cartItem.id
    );
    
    if (isAlreadyExist) return;
    setCart((prev) => [...prev, cartItem]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
