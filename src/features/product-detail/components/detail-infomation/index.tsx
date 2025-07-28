'use client';

import Button from '@/shared/components/button';
import { CartContext } from '@/shared/context/cart.context';
import { IProduct } from '@/shared/types/products.types';
import { useContext } from 'react';

type DetailInformationProps = {
  detailData: IProduct;
};

const DetailInformation = ({ detailData }: DetailInformationProps) => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div className="detail-wrapper col-span-6">
      <div className="hidden category mt-3 text-[16px] line-clamp-1 w-fit p-[2px_12px] color-neutral-500 opacity-80 border-neutral-200 bg-neutral-50 rounded-full">
        {detailData.category}
      </div>
      <div className="mt-3 text-[24px] font-bold text-neutral-800 lg:text-[28px]">
        {detailData.title}
      </div>
      <div className="0 text-neutral-600 text-[18px] leading-[2]">
        {detailData.description}
      </div>

      <div className="text-[32px] font-bold mt-3">Rs {detailData.price}</div>

      <Button
        clickFunc={() => {
          addToCart(detailData);
        }}
        className="animation-up mt-[40px] lg:max-w-[150px]"
        value="Add to cart"
      />
    </div>
  );
};

export default DetailInformation;
