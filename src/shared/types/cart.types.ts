import { IProduct } from './products.types';

export type ICart = Pick<IProduct, 'id' | 'title' | 'price' | 'image'> & {
  quantity: number;
};
