'use client';

import Pagination from '@/features/pagination';
import ProductFilter from '@/features/product-filter';
import { IFilter } from '@/features/product-filter/types';
import ProductList from '@/features/productList';

import { useFetch } from '@/shared/hooks/use-fetch.hooks';
import { IProduct } from '@/shared/types/products.types';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const { data, loading, error } = useFetch<IProduct>('/products');

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [itemPerPage] = useState<number>(8);

  const lastItemindex = currentPage * itemPerPage;
  const firstItemindex = lastItemindex - itemPerPage;

  const [allProducts, setAllProducts] = useState<IProduct[]>([]);

  const [filters, setFilters] = useState<IFilter>({
    category: 'All',
    sortBy: 'Default',
    search: null,
  });

  useEffect(() => {
    setAllProducts(data);
  }, [loading]);

  const filteredSortedProducts = useMemo(() => {
    const { category, sortBy, search } = filters;
    let result = [...allProducts];

    if (category != 'All') {
      result = result.filter((p: IProduct) => p.category === category);
    }

    if (sortBy === 'low-high') {
      result.sort((a: IProduct, b: IProduct) => a.price - b.price);
    } else if (sortBy === 'high-low') {
      result.sort((a: IProduct, b: IProduct) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a: IProduct, b: IProduct) => b.rating.rate - a.rating.rate);
    } else if (sortBy === 'title') {
      result.sort((a: IProduct, b: IProduct) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
    }

    if (search) {
      const regex = new RegExp(search, 'i');
      return result.filter((a: IProduct) => regex.test(a.title));
    }
    return result;
  }, [allProducts, filters, loading]);

  const currentItems = useMemo(() => {
    return filteredSortedProducts.slice(firstItemindex, lastItemindex);
  }, [filteredSortedProducts, firstItemindex, lastItemindex]);

  return (
    <>
      <ProductFilter allProducts={allProducts} setFilters={setFilters} />
      <ProductList
        filterSearch={filters.search}
        loading={loading}
        productList={currentItems}
      />
      <Pagination
        allProducts={
          filters.category !== 'All' || filters.search
            ? currentItems
            : allProducts
        }
        itemPerPage={itemPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
