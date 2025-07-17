import { IProduct } from '@/shared/types/products.types';
import Dropdown from '@/shared/components/dropdown';
import ProductSearch from './components/product-search';
import { ProductFilterProps } from './types';
import { sortByList } from './utils';

const ProductFilter = ({
  allProducts,
  setSearchTitle,
  setFilters,
}: ProductFilterProps) => {
  const categoryList = Array.from(
    new Set(allProducts.map((p: IProduct) => p.category)),
  );

  const onCategoryListClick = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category,
    }));
  };

  const onSortByListClick = (sortBy: string) => {
    setFilters((prev) => ({
      ...prev,
      sortBy,
    }));
  };

  return (
    <div className="filter-wrapper flex flex-col gap-y-[8px] md:flex-row bg-neutral-0 rounded-[12px] shadow-sm p-[12px] mt-5">
      <ProductSearch setSearchTitle={setSearchTitle} />

      <div className="ml-auto flex gap-[16px]">
        <Dropdown
          defaultOption="All"
          onListClick={onCategoryListClick}
          dropdownList={categoryList}
        />
        <Dropdown
          defaultOption="Default"
          onListClick={onSortByListClick}
          dropdownList={sortByList}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
