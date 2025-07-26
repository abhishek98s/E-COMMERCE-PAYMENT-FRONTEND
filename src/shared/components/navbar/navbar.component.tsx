'use client';

import Link from 'next/link';
import { useContext } from 'react';

import { CartContext } from '@/shared/context/cart.context';
import ImageWrapper from '../img-wrapper/img-wrapper.component';
import Button from '../button';
import { AuthContext } from '@/shared/context/auth.context';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { role, isAuthenticated, dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    window.location.href = '/'
    dispatch({ type: 'LOGOUT' })
    localStorage.clear();
    document.cookie = 'isAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  return (
    <nav className={`border-bottom-neutral-200 bg-neutral-0`}>
      <div className="container px-[20px] mx-auto border-red-100 border-b-0">
        <div className="flex min-h-[80px] items-center px-2">
          <div className="logo font-bold text-[20px] text-neutral-900">
            <Link href={'/'}>E_COM</Link>
          </div>
          <div className="ms-auto flex gap-[16px]">

            {role !== 'admin' &&
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
            }


            {isAuthenticated &&
              <Button
                value='Logout'
                clickFunc={handleLogout}
                btnType='secondary'
                className='ms-[16px] max-w-[120px]'
              />
            }
            {!isAuthenticated &&
              <Button
                value='Login/ Register'
                link='/auth/login'
                btnType='secondary'
                className='ms-[16px] max-w-[150px]'
              />
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
