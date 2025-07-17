'use client';

import { useContext, useMemo } from 'react';
import { CartContext } from '@/shared/context/cart.context';
import { ICart } from '@/shared/types/cart.types';
import CartItem from '@/features/cart/components/cart-item';
import Button from '@/shared/components/button';

const CartPage = () => {
  const { cart, setQuantity, deleteCartItem, clearCart } =
    useContext(CartContext);

  const totalPrice = useMemo(() => {
    return cart.reduce((a, b) => a + b.price * b.quantity, 0);
  }, [cart]);

  return (
    <div className="cart-page bg-neutral-0 border-neutral-50 rounded-[12px] p-4">
      <div className="flex justify-between mb-4">
        <Button
          link="/"
          value="Back"
          btnType="secondary"
          iconPath="/icons/arrow-left.svg"
          className="max-w-[120px]"
        />

        <Button
          clickFunc={clearCart}
          value="Clear Cart"
          btnType="secondary"
          className="max-w-[120px]"
        />
      </div>

      {!cart.length && <div className="">Cart Empty</div>}
      <ul>
        {cart.length > 0 &&
          cart.map((c: ICart) => (
            <CartItem
              setQuantity={setQuantity}
              deleteCartItem={deleteCartItem}
              key={c.id}
              cartItem={c}
            />
          ))}
      </ul>

      <div className="flex justify-between px-[16px] pt-[24px] mt-[32px] border-t-neutral-200 border border-l-0 border-r-0 border-b-0">
        <div className="text-[20px] opacity-80">Total price</div>
        <div className="text-[28px] font-bold total-price">${totalPrice}</div>
      </div>
    </div>
  );
};

export default CartPage;
