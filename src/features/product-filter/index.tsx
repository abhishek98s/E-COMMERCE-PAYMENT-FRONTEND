'use client';

import { IProduct } from '@/shared/types/products.types';
import Dropdown from '@/shared/components/dropdown';
import ProductSearch from './components/product-search';
import { IFilter, ProductFilterProps } from './types';
import { debounce, sortByList } from './utils';
import { useMemo } from 'react';

const ProductFilter = ({
  allProducts,
  setFilters,
}: ProductFilterProps) => {
  const categoryList = Array.from(
    new Set(allProducts.map((p: IProduct) => p.category))
  ).concat('All');

  const onCategoryListClick = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category,
    }));
  };

  const onSortByListClick = (sortBy: string) => {
    setFilters((prev: IFilter) => ({
      ...prev,
      sortBy: sortBy as IFilter['sortBy'],
    }));
  };

  const onSearchChange = (search: string) => {
    setFilters((prev: IFilter) => ({
      ...prev,
      search: search,
    }));
  };

const debouncedSearchChange = useMemo(() => debounce(onSearchChange, 300), []);
  return (
    <div className='filter-wrapper flex flex-col gap-y-[8px] md:flex-row bg-neutral-0 rounded-[12px] shadow-sm p-[12px] mt-5'>
      <ProductSearch setSearchTitle={debouncedSearchChange} />

      <div className='ml-auto flex gap-[16px]'>
        <Dropdown
          defaultOption='All'
          onListClick={onCategoryListClick}
          dropdownList={categoryList}
        />
        <Dropdown
          defaultOption='Default'
          onListClick={onSortByListClick}
          dropdownList={sortByList}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
