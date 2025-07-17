import { IProduct } from '@/shared/types/products.types';
import DetailInformation from './components/detail-infomation';
import DetailImage from './components/detail-image';

type ProductDetailProps = {
  detailData: IProduct;
};

const ProductDetail = ({ detailData }: ProductDetailProps) => {
  return (
    <div className='detail-wrapper grid grid-cols-1 md:grid-cols-12  gap-5 bg-neutral-0 border-neutral-100 rounded-[12px] p-4'>
      <DetailImage detailData={detailData} />
      <DetailInformation detailData={detailData} />
    </div>
  );
};

export default ProductDetail;
