import { Link } from 'react-router';
import type { ProductQuery } from '../types';
import ProductGrid from './ProductGrid';

type Props = {
  title: string;
  query: ProductQuery;
  emptyMessage?: string;
  skeletonCount?: number;
  /** Optional "View all" link shown next to the title */
  viewAllTo?: string;
};

export default function ProductSection({
  title,
  query,
  emptyMessage,
  skeletonCount,
  viewAllTo,
}: Props) {
  return (
    <section className="py-8">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
        {viewAllTo && (
          <Link to={viewAllTo} className="text-sm underline">
            View all
          </Link>
        )}
      </div>
      <ProductGrid
        query={query}
        emptyMessage={emptyMessage}
        skeletonCount={skeletonCount}
      />
    </section>
  );
}
