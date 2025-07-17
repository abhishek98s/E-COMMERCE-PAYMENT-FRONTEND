import Button from '@/shared/components/button';
import { IProduct } from '@/shared/types/products.types';

type DetailInformationProps = {
  detailData: IProduct;
};

const DetailInformation = ({ detailData }: DetailInformationProps) => {
  return (
    <div className='detail-wrapper col-span-6'>
      <div className='category mt-3 text-[16px] line-clamp-1 w-fit p-[2px_12px] color-neutral-500 opacity-80 border-neutral-200 bg-neutral-50 rounded-full'>
        {detailData.category}
      </div>
      <div className='mt-3 text-[24px] font-bold text-neutral-800'>
        {detailData.title}
      </div>
      <div className='0 text-neutral-600 text-[18px] leading-[2]'>
        {detailData.description}
      </div>

      <div className='text-[32px] font-bold mt-3'>${detailData.price}</div>

      <Button className='mt-[40px] lg:max-w-[300px]' value='Add to cart' />
    </div>
  );
};

export default DetailInformation;
