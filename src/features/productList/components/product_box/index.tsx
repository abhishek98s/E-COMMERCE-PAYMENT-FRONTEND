import Button from '@/shared/components/button';
import ImageWrapper from '@/shared/components/img-wrapper/img-wrapper.component';
import { IProduct } from '@/shared/types/products.types';
import Link from 'next/link';

type ProductBoxProps = {
  product: IProduct;
};

const ProductBox = ({ product }: ProductBoxProps) => {
  return (
    <div className='product bg-neutral-0 border-neutral-200 rounded-[8px] p-3 pb-3 hover:shadow-xl hover:translate-y-[-8px]'>
      <Link href={`/product/${product.id}`}>
        <ImageWrapper className='zoom aspect-[1.5] ' path={product.image} />
      </Link>

      <div className='category mt-3 text-[14px] line-clamp-1 w-fit p-[2px_12px] color-neutral-500 opacity-80 border-neutral-200 bg-neutral-50 rounded-full'>
        {product.category}
      </div>

      <Link
        href={`/product/${product.id}`}
        className='title mt-2 text-[16px] leading-[1.2] line-clamp-2 min-h-[34px]'
      >
        {product.title}
      </Link>

      <div className='flex items-center text-[14px] font-medium gap-[6px] mt-2'>
        <ImageWrapper path='icons/star.svg' className='max-w-[18px]' />
        <div className='rating leading-none'>{product.rating.rate}</div>
      </div>

      <div className='rating font-bold text-[22px] mt-3'>${product.price}</div>

      <Button className='mt-4' value='Add to cart' />
    </div>
  );
};

export default ProductBox;
