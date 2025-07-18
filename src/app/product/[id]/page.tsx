'use client';

import ProductDetail from '@/features/product-detail';
import DetailLoader from '@/features/product-detail/components/detail-loader';
import DetailNotFound from '@/features/product-detail/components/detail-not-found';
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
    return <DetailLoader />;
  }

  if (!detailData) {
    return <DetailNotFound />;
  }

  return <ProductDetail detailData={detailData as IProduct} />;
};

export default ProductDetailPage;
