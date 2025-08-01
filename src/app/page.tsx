'use client';

import Pagination from '@/features/pagination';
import ProductFilter from '@/features/product-filter';
import { IFilter } from '@/features/product-filter/types';
import ProductList from '@/features/product-list';
import ErrorWrapper from '@/shared/components/error';
import Navbar from '@/shared/components/navbar/navbar.component';

import { useFetch } from '@/shared/hooks/use-fetch.hooks';
import { IProduct } from '@/shared/types/products.types';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const { data, loading, error, refetchData } = useFetch<IProduct>('/product');

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [itemPerPage] = useState<number>(8);

  const lastItemindex = currentPage * itemPerPage;
  const firstItemindex = lastItemindex - itemPerPage;

  const [allProducts, setAllProducts] = useState<IProduct[] | []>([]);

  const [filters, setFilters] = useState<IFilter>({
    category: 'All',
    sortBy: 'Default',
    search: null,
  });

  useEffect(() => {
    const products: IProduct[] = Array.isArray(data) ? data : [];
    setAllProducts(products);
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
      <Navbar />
      <div className="container mx-auto px-2 my-5">

        <ProductFilter allProducts={allProducts} setFilters={setFilters} />
        {error && <ErrorWrapper refetchData={refetchData} />}
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
      </div>
    </>
  );
}
