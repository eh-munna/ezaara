import { Link } from 'react-router';
import { formatPrice } from '../../../lib/format';
import type { Product } from '../types';

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const onSale =
    product.salePriceCents !== undefined &&
    product.salePriceCents < product.priceCents;

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex min-w-0 flex-col gap-2"
    >
      <div className="relative aspect-3/4 overflow-hidden rounded bg-neutral-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            product.inStock ? '' : 'opacity-50'
          }`}
        />
        <div className="absolute left-2 top-2 flex flex-col items-start gap-1">
          {!product.inStock && (
            <span className="rounded bg-neutral-900 px-2 py-0.5 text-xs font-medium text-white">
              Sold out
            </span>
          )}
          {product.inStock && onSale && (
            <span className="rounded bg-red-600 px-2 py-0.5 text-xs font-medium text-white">
              Sale
            </span>
          )}
          {product.inStock && product.isNew && (
            <span className="rounded bg-white px-2 py-0.5 text-xs font-medium text-neutral-900">
              New
            </span>
          )}
        </div>
      </div>
      <div className="min-w-0">
        <h3 className="line-clamp-2 text-sm font-medium" title={product.name}>
          {product.name}
        </h3>
        <p className="mt-1 text-sm">
          {onSale ? (
            <>
              <span className="font-semibold text-red-600">
                {formatPrice(product.salePriceCents!)}
              </span>{' '}
              <span className="text-neutral-500 line-through">
                {formatPrice(product.priceCents)}
              </span>
            </>
          ) : (
            <span className="font-semibold">
              {formatPrice(product.priceCents)}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}
