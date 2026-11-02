import { useState } from 'react';
import { Link } from 'react-router';
import { formatPrice } from '../../../lib/format';
import { useCart } from '../../cart/hooks';
import type { Product } from '../types';
import QuantityInput from './QuantityInput';
import SizeSelector from './SizeSelector';

type Props = { product: Product };

export default function ProductInfo({ product }: Props) {
  const [size, setSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const onSale =
    product.salePriceCents !== undefined &&
    product.salePriceCents < product.priceCents;
  const needsSize = product.sizes.length > 0;

  const handleAddToCart = () => {
    if (needsSize && !size) {
      setSizeError(true);
      return;
    }
    addItem({ product, size: size ?? '', quantity });
    setAdded(true);
  };

  const handleAddToWishlist = () => {
    // Wired to the wishlist in task 11.
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight wrap-break-word">
          {product.name}
        </h1>
        {product.shortInfo && (
          <p className="text-sm text-neutral-600">{product.shortInfo}</p>
        )}
        <p className="text-xl">
          {onSale ? (
            <>
              <span className="font-semibold text-red-600">
                {formatPrice(product.salePriceCents!)}
              </span>{' '}
              <span className="text-base text-neutral-500 line-through">
                {formatPrice(product.priceCents)}
              </span>
            </>
          ) : (
            <span className="font-semibold">
              {formatPrice(product.priceCents)}
            </span>
          )}
        </p>
        {!product.inStock && (
          <p className="text-sm font-medium text-neutral-500">Sold out</p>
        )}
      </div>

      {needsSize && (
        <SizeSelector
          sizes={product.sizes}
          value={size}
          error={sizeError && !size}
          onChange={(label) => {
            setSize(label);
            setSizeError(false);
            setAdded(false);
          }}
        />
      )}

      <QuantityInput value={quantity} onChange={(q) => {
          setQuantity(q);
          setAdded(false);
        }}
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          disabled={!product.inStock}
          onClick={handleAddToCart}
          className="rounded bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
        >
          {product.inStock ? 'Add to cart' : 'Sold out'}
        </button>
        <button
          type="button"
          onClick={handleAddToWishlist}
          className="rounded border border-black bg-white px-4 py-3 text-sm font-semibold hover:bg-neutral-100"
        >
          Add to wishlist
        </button>
      </div>
      {added && (
        <p role="status" className="text-sm text-green-700">
          Added to cart.{' '}
          <Link to="/cart" className="font-medium underline">
            View cart
          </Link>
        </p>
      )}
    </div>
  );
}
