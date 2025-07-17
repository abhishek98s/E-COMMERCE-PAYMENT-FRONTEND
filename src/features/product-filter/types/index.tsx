import { IProduct } from '@/shared/types/products.types';
import { Dispatch, SetStateAction } from 'react';
import { sortByList } from '../utils';

export type IFilter<T extends readonly string[]> = {
  category: string;
  sortBy: T[number];
};

export type ProductFilterProps = {
  allProducts: IProduct[];
  setSearchTitle: Dispatch<SetStateAction<string | null>>;
  setFilters: Dispatch<SetStateAction<IFilter<typeof sortByList>>>;
};
