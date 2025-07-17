import ImageWrapper from '@/shared/components/img-wrapper/img-wrapper.component';
import { IProduct } from '@/shared/types/products.types';

type DetailImageProps = {
  detailData: IProduct;
};

const DetailImage = ({ detailData }: DetailImageProps) => {
  return (
    <div className='relative w-full col-span-6 border-neutral-200'>
      <ImageWrapper
        className='zoom rounded-[8px] p-4 h-[400px] aspect-[1.5]'
        path={detailData.image}
      />

      <div className='absolute rating font-bold z-20 bottom-2 right-2'>
        <div className='flex justify-center items-center content-center text-[16px] font-medium min-w-[130px] py-2 border-neutral-100 bg-neutral-0 rounded-full'>
          <ImageWrapper
            path='/icons/star.svg'
            className='img-shadow max-w-[20px]'
          />
          <span className='ml-2'>{detailData.rating.rate}</span>
          <span className='font-[400] ml-1 opacity-70 text-[16px]'>
            ( {detailData.rating.count} )
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
