import Button from '@/shared/components/button';
import { CartContext } from '@/shared/context/cart.context';
import { ICart } from '@/shared/types/cart.types';
import { useContext, useMemo } from 'react';
import CartItem from './components/cart-item';
import EmptyCart from './components/empty-cart';
import Checkout from './components/checkout';

const CartWrapper = () => {
  const { cart, setQuantity, deleteCartItem, clearCart } =
    useContext(CartContext);

  const totalPrice = useMemo(() => {
    const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);
    return total.toFixed(2);
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

        {cart.length > 0 && (
          <Button
            clickFunc={clearCart}
            value="Clear Cart"
            btnType="secondary"
            className="max-w-[120px]"
          />
        )}
      </div>

      {!cart.length && <EmptyCart />}

      {cart.length > 0 && (
        <>
          <ul>
            {cart.map((c: ICart) => (
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
            <div className="text-[28px] font-bold total-price">
              Rs{Math.round(Number(totalPrice)).toString()}
            </div>
          </div>
        </>
      )}
      <Checkout totalPrice={Math.round(Number(totalPrice)).toString()} />
    </div>
  );
};

export default CartWrapper;
