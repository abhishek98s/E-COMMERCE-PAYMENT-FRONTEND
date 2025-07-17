import { IProduct } from '@/shared/types/products.types';
import ProductBox from './components/product_box';

type ProductListProps = {
  productList: IProduct[];
};

const ProductList = ({ productList }: ProductListProps) => {
  if (!productList.length) {
    return <div className=''>No products</div>;
  }

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] p-4'>
        {productList.map((product: IProduct) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
