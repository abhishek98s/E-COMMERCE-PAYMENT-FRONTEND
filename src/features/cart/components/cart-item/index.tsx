import ImageWrapper from '@/shared/components/img-wrapper/img-wrapper.component';
import { ICart } from '@/shared/types/cart.types';

type CartItemProps = {
  cartItem: ICart;
  setQuantity: (num: number, cartItem: number) => void;
  deleteCartItem: (cartItem: number) => void;
};

const CartItem = ({ cartItem, setQuantity, deleteCartItem }: CartItemProps) => {
  return (
    <li key={cartItem.id} className="relative">
      <div className="absolute top-2 right-2">
        <button
          onClick={() => deleteCartItem(cartItem.id)}
          className="size-[40px] flex-center rounded-full border-neutral-100 bg-neutral-50"
        >
          <ImageWrapper
            path={'/icons/close.svg'}
            className="max-w-[24px] opacity-80"
          />
        </button>
      </div>

      <div className="flex gap-[12px] p-2">
        <ImageWrapper
          path={cartItem.image}
          className="max-w-[150px] border-neutral-100 p-2 aspect-[1.5] rounded-[8px]"
        />

        <div className="info">
          <div className="text-[18px] font-bold">{cartItem.title}</div>
          <div className="text-[16px] ">
            Rs{Math.round(Number(cartItem.price)).toString()}
          </div>

          <div className="flex items-center gap-[8px] mt-3">
            <button
              onClick={() => setQuantity(-1, cartItem.id)}
              className="size-[40px] flex-center bg-neutral-0 border-neutral-100  font-bold text-neutral-700 rounded-[8px] p-2"
            >
              -
            </button>

            <div className="size-[40px] flex-center bg-neutral-0 border-neutral-100 shadow-sm font-bold text-neutral-700 rounded-[8px] p-2">
              {cartItem.quantity}
            </div>
            <button
              onClick={() => setQuantity(1, cartItem.id)}
              className="size-[40px] flex-center bg-neutral-0 border-neutral-100 font-bold text-neutral-700 rounded-[8px] p-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
