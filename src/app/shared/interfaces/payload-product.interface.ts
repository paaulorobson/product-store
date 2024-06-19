import { Product } from './product.Interface';
export type ProductPayload = Omit<Product, 'id'>;
