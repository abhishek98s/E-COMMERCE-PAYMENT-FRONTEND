'use client';

import Dropdown from '@/shared/components/dropdown';
import ProductSearch from './components/product-search';
import { IFilter, ProductFilterProps } from './types';
import { debounce, sortByList } from './utils';
import { useMemo } from 'react';

const ProductFilter = ({
  setFilters,
}: ProductFilterProps) => {
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
          defaultOption='Default'
          onListClick={onSortByListClick}
          dropdownList={sortByList}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
