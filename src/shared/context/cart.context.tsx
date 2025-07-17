'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';
import { IProduct } from '../types/products.types';
import useLocalStorage from '../hooks/use-local-storage';

type CartContextType = {
  cart: IProduct[];
  setCart?: React.Dispatch<React.SetStateAction<IProduct[]>>;
  addToCart?: (cartItem: IProduct) => void;
};

export const CartContext = createContext<CartContextType>({ cart: [] });

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [value, setValue] = useLocalStorage<IProduct>({
    key: 'cart',
  });

  useEffect(() => {
    setCart(value);
  }, [value]);

  const addToCart = (cartItem: IProduct) => {
    const isAlreadyExist = cart.find(
      (item: IProduct) => item.id === cartItem.id
    );

    if (isAlreadyExist) return;
    setValue([...value, cartItem]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
