import { IProduct } from '@/shared/types/products.types';
import ProductBox from './components/product-box';
import ProductLoader from './components/product-loader';

type ProductListProps = {
  productList: IProduct[];
  loading: boolean;
  filterSearch: string | null;
};

const ProductList = ({
  filterSearch,
  productList,
  loading,
}: ProductListProps) => {
  if (filterSearch && !productList.length) {
    return (
      <div className='loading min-h-[70vh] flex-center flex flex-col text-[18px]'>
        <div className='opacity-70 text-[16px]'>No product with title</div>
        <div className='ml-2 font-bold'>({filterSearch})</div>
      </div>
    );
  }

  if (loading && !productList.length) {
    return (
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-4'>
        <ProductLoader />;
      </div>
    );
  }

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-4'>
        {productList.map((product: IProduct) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
