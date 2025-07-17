import ImageWrapper from '@/shared/components/img-wrapper/img-wrapper.component';
import { ProductFilterProps } from '../../types';

type ProductSearchProps = Pick<ProductFilterProps, 'setSearchTitle'>;

const ProductSearch = ({ setSearchTitle }: ProductSearchProps) => {
  return (
    <div className="search-wrapper relative overflow-hidden rounded-[8px] max-w-[500px] w-full">
      <input
        onChange={(e) => setSearchTitle(e.target.value)}
        type="text"
        placeholder="Search for a product"
        className="search-input p-[12px] pl-[48px]"
      />
      <div className="absolute top-1/2 left-0 -translate-y-1/2">
        <button className="search-btn size-[48px] flex-center ">
          <ImageWrapper
            className="max-w-[24px] opacity-50"
            path="/icons/search.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductSearch;
