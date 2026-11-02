import { delay, http, HttpResponse } from 'msw';
import { mockCategories } from '../features/categories/mocks';
import { mockProducts } from '../features/products/mocks';
import type { Product } from '../features/products/types';

export const handlers = [
  http.get('*/categories', async () => {
    await delay(300);
    return HttpResponse.json(mockCategories);
  }),

  http.get('*/products', async ({ request }) => {
    const params = new URL(request.url).searchParams;
    let result: Product[] = mockProducts;
    if (params.get('featured') === 'true') {
      result = result.filter((p) => p.isFeatured);
    }
    if (params.get('new') === 'true') {
      result = result.filter((p) => p.isNew);
    }
    if (params.get('sale') === 'true') {
      result = result.filter(
        (p) => p.salePriceCents !== undefined && p.salePriceCents < p.priceCents,
      );
    }
    const category = params.get('category');
    if (category) {
      result = result.filter((p) => p.categoryId === category);
    }
    const query = params.get('q');
    if (query) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()),
      );
    }
    await delay(500);
    return HttpResponse.json(result);
  }),

  http.get('*/products/:slug', async ({ params }) => {
    const product = mockProducts.find((p) => p.slug === params.slug);
    if (!product) {
      return HttpResponse.json(
        { message: 'Product not found' },
        { status: 404 },
      );
    }
    await delay(500);
    return HttpResponse.json(product);
  }),
];
