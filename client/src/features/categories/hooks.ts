import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from './api';

export const useCategories = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  return { data, isLoading, isError };
};
