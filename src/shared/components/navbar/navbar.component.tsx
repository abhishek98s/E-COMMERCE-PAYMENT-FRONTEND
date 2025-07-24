'use client';

import Link from 'next/link';
import ImageWrapper from '../img-wrapper/img-wrapper.component';
import { useContext } from 'react';
import { CartContext } from '@/shared/context/cart.context';
import Button from '../button';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className={`border-bottom-neutral-200 bg-neutral-0`}>
      <div className="container px-[20px] mx-auto border-red-100 border-b-0">
        <div className="flex min-h-[80px] items-center px-2">
          <div className="logo font-bold text-[20px] text-neutral-900">
            <Link href={'/'}>E_COM</Link>
          </div>
          <Link
            href={`/cart`}
            className="cart-wrapper ms-auto relative flex-center size-[44px] bg-neutral-50 border-neutral-200 rounded-full "
          >
            <ImageWrapper
              className="size-[18px]"
              path="/icons/cart.svg"
              flex-center
            />
            <div className="absolute flex-center bg-neutral-1000 text-white rounded-full block text-[12px] font-bold top-0 right-0 translate-x-[10px] translate-y-[-10px] size-[24px]">
              {cart.length}
            </div>
          </Link>

          <Button
            value='Logout'
            btnType='secondary'
            className='ms-[16px] max-w-[120px]'
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
