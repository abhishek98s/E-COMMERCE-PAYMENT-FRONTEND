'use client';

import Pagination from '@/features/pagination';
import ProductList from '@/features/productList';
import { useFetch } from '@/shared/hooks/use-fetch.hooks';
import { IProduct } from '@/shared/types/products.types';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const { data, loading, error } = useFetch<IProduct>('/products');

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [itemPerPage] = useState<number>(8);

  const totalPage = Math.ceil(data.length / itemPerPage);

  const lastItemindex = currentPage * itemPerPage;
  const firstItemindex = lastItemindex - itemPerPage;

  const [allProducts, setAllProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setAllProducts(data);
  }, [loading]);

  type Ifilter = {
    category: string;
    sortBy: 'default' | 'low-high' | 'high-low' | 'name' | 'rating';
  };

  const [filters, setFilters] = useState<Ifilter>({
    category: 'all',
    sortBy: 'default',
  });

  const filteredSortedProducts = useMemo(() => {
    let result = [...allProducts];

    if (filters.category != 'all') {
      result = result.filter((p: IProduct) => p.category === filters.category);
    }

    if (filters.sortBy === 'low-high') {
      result.sort((a: IProduct, b: IProduct) => a.price - b.price);
    } else if (filters.sortBy === 'high-low') {
      result.sort((a: IProduct, b: IProduct) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      result.sort((a: IProduct, b: IProduct) => b.rating.rate - a.rating.rate);
    } else if (filters.sortBy === 'name') {
      result.sort((a: IProduct, b: IProduct) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
    }

    return result;
  }, [allProducts, filters]);

  const currentItems = filteredSortedProducts.slice(
    firstItemindex,
    lastItemindex
  );

  return (
    <div className='container mx-auto'>
      <ProductList productList={currentItems} />
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
