import { IProduct } from '@/shared/types/products.types';
import { Dispatch, SetStateAction } from 'react';
import { sortByList } from '../utils';

export type IFilter = {
  category: string;
  sortBy: 'Default' | 'low-high' | 'high-low' | 'rating' | 'title';
  search: string | null;
};

export type ProductFilterProps = {
  allProducts: IProduct[];
  setFilters: Dispatch<SetStateAction<IFilter>>;
};
