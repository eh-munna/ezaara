import { useQuery } from '@tanstack/react-query';
import { fetchProducts, getProductBySlug } from './api';
import type { ProductQuery } from './types';

export const useProducts = (query: ProductQuery) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products', query],
    queryFn: () => fetchProducts(query),
  });

  return { data, isLoading, isError, error };
};

export const useProduct = (slug: string | undefined) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProductBySlug(slug!),
    enabled: !!slug,
  });

  return { data, isLoading, isError, error };
};
