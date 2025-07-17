'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';
import { IProduct } from '../types/products.types';
import useLocalStorage from '../hooks/use-local-storage';
import { ICart } from '../types/cart.types';

type CartContextType = {
  cart: ICart[];
  setQuantity: (num: number, cartItemId: number) => void;
  setCart?: React.Dispatch<React.SetStateAction<ICart[]>>;
  addToCart?: (cartItem: IProduct) => void;
  deleteCartItem: (cartItemID: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setQuantity: () => {},
  deleteCartItem: () => {},
  clearCart: () => {},
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [value, setValue] = useLocalStorage<ICart>({
    key: 'cart',
  });

  useEffect(() => {
    setCart(value);
  }, [value]);

  const addToCart = (productItem: IProduct) => {
    const isAlreadyExist = cart.find(
      (item: ICart) => item.id === productItem.id
    );

    if (isAlreadyExist) return;
    const { id, image, price, title } = productItem;

    const cartObj = { id, image, price, title, quantity: 1 };

    setValue([...value, cartObj]);
  };

  const setQuantity = (num: number, cartItemId: number) => {
    const newCartItems = cart.map((item: ICart) => {
      if (item.id === cartItemId && item.quantity + num !== 0) {
        return { ...item, quantity: item.quantity + num };
      }
      return item;
    });
    setValue(newCartItems);
  };

  const deleteCartItem = (cartItemId: number) => {
    const updatedCart = cart.filter((item: ICart) => item.id !== cartItemId);
    setValue(updatedCart);
  };

  const clearCart = () => {
    setValue([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        setQuantity,
        deleteCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
