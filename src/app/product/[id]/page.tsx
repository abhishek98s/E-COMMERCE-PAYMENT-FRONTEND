'use client';

import ProductDetail from '@/features/product-detail';
import Button from '@/shared/components/button';
import ImageWrapper from '@/shared/components/img-wrapper/img-wrapper.component';
import { useFetch } from '@/shared/hooks/use-fetch.hooks';
import { IProduct } from '@/shared/types/products.types';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch<IProduct>(`products/${id}`);

  const detailData = useMemo(() => {
    return data;
  }, [data, loading]);

  if (loading) {
    return <div className='la'>Detail is loading</div>;
  }

  if (!detailData) {
    return <div className='la'>Product does not exist</div>;
  }

  return <ProductDetail detailData={detailData as IProduct} />;
};

export default ProductDetailPage;
