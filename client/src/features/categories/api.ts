import { api } from '../../lib/api-client';
import type { Category } from './types';

export const fetchCategories = async (): Promise<Category[]> => {
  const { data } = await api.get<Category[]>('/categories');
  return data;
};
