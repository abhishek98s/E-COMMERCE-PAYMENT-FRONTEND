import { IProduct } from '@/shared/types/products.types';
import ProductBox from './components/product_box';

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
  if (loading && !productList.length) {
    return <div className='loading'>loading</div>;
  }

  if (filterSearch && !productList.length) {
    return <div className='loading'>no product with {filterSearch}</div>;
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
