import { IProduct } from '@/shared/types/products.types';
import DetailInformation from './components/detail-infomation';
import DetailImage from './components/detail-image';
import Button from '@/shared/components/button';

type ProductDetailProps = {
  detailData: IProduct;
};

const ProductDetail = ({ detailData }: ProductDetailProps) => {
  return (
    <div className='detail-wrapper bg-neutral-0 border-neutral-100 rounded-[12px] p-4'>
      <Button link='/'  value='Back' btnType='secondary' iconPath='/icons/arrow-left.svg' className='max-w-[200px]'/>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-5 mt-3'>
        <DetailImage detailData={detailData} />
        <DetailInformation detailData={detailData} />
      </div>
    </div>
  );
};

export default ProductDetail;
