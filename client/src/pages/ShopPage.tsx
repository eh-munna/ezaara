import { useSearchParams } from 'react-router';
import ProductGrid from '../features/products/components/ProductGrid';
import type { ProductQuery } from '../features/products/types';

function titleFor(params: URLSearchParams): string {
  const q = params.get('q')?.trim();
  if (q) return `Results for “${q}”`;
  const category = params.get('category');
  if (category) return category.charAt(0).toUpperCase() + category.slice(1);
  if (params.get('sale') === 'true') return 'Sale';
  if (params.get('new') === 'true') return 'New arrivals';
  if (params.get('featured') === 'true') return 'Featured';
  return 'All products';
}

export default function ShopPage() {
  const [params] = useSearchParams();

  const query: ProductQuery = {};
  const q = params.get('q')?.trim();
  if (q) query.q = q;
  const category = params.get('category');
  if (category) query.category = category;
  if (params.get('featured') === 'true') query.featured = true;
  if (params.get('new') === 'true') query.new = true;
  if (params.get('sale') === 'true') query.sale = true;

  return (
    <section className="py-8">
      <h1 className="mb-4 text-2xl font-bold tracking-tight">
        {titleFor(params)}
      </h1>
      <ProductGrid
        query={query}
        skeletonCount={8}
        emptyMessage="No products found."
      />
    </section>
  );
}
