import { api } from '../../lib/api-client';
import type { Product, ProductQuery } from './types';

export const fetchProducts = async (
  query: ProductQuery = {},
): Promise<Product[]> => {
  const { data } = await api.get('/products', { params: query });
  return data;
};

export async function getProductBySlug(slug: string): Promise<Product> {
  const { data } = await api.get<Product>(`/products/${slug}`);
  return data;
}
