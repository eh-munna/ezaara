import { useProducts } from '../hooks';
import type { ProductQuery } from '../types';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

type Props = {
  query?: ProductQuery;
  /** Number of skeleton cards while loading */
  skeletonCount?: number;
  emptyMessage?: string;
};

const gridClass = 'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4';

export default function ProductGrid({
  query = {},
  skeletonCount = 4,
  emptyMessage = 'No products found.',
}: Props) {
  const { data: products, isLoading, isError } = useProducts(query);

  if (isLoading) {
    return (
      <div className={gridClass} role="status" aria-label="Loading products">
        {Array.from({ length: skeletonCount }, (_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p role="alert" className="text-sm text-red-600">
        Could not load products. Please try again later.
      </p>
    );
  }

  if (!products || products.length === 0) {
    return <p className="text-sm text-neutral-600">{emptyMessage}</p>;
  }

  return (
    <div className={gridClass}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
