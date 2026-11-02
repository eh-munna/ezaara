import type { Category } from './types';

export const mockCategories: Category[] = [
  {
    id: 'women',
    name: 'Women',
    slug: 'women',
    imageUrl: 'https://picsum.photos/seed/ezaara-cat-women/600/700',
  },
  {
    id: 'men',
    name: 'Men',
    slug: 'men',
    imageUrl: 'https://picsum.photos/seed/ezaara-cat-men/600/700',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    imageUrl: 'https://picsum.photos/seed/ezaara-cat-accessories/600/700',
  },
  {
    // No products in the mocks: exercises the empty state on the shop page.
    id: 'shoes',
    name: 'Shoes',
    slug: 'shoes',
    imageUrl: 'https://picsum.photos/seed/ezaara-cat-shoes/600/700',
  },
];
