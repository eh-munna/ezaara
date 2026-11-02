import { Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { useCart } from '../features/cart/hooks';
import QuantityInput from '../features/products/components/QuantityInput';
import { formatPrice } from '../lib/format';

export default function CartPage() {
  const { items, subtotalCents, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link to="/" className="mt-4 inline-block text-sm underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-4">
      <h1 className="mb-6 text-2xl font-bold tracking-tight">Your cart</h1>
      <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
        {items.map((item) => (
          <li
            key={`${item.productId}:${item.size}`}
            className="flex gap-4 py-4"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="h-28 w-24 shrink-0 rounded bg-neutral-200 object-cover"
            />
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <Link
                to={`/products/${item.slug}`}
                className="text-sm font-medium break-words hover:underline"
              >
                {item.name}
              </Link>
              {item.size && (
                <p className="text-xs text-neutral-600">Size: {item.size}</p>
              )}
              <p className="text-sm">{formatPrice(item.unitPriceCents)}</p>
              <QuantityInput
                value={item.quantity}
                onChange={(q) => updateQuantity(item.productId, item.size, q)}
                idSuffix={`${item.productId}-${item.size}`}
              />
            </div>
            <div className="flex flex-col items-end justify-between">
              <button
                type="button"
                aria-label={`Remove ${item.name} from cart`}
                onClick={() => removeItem(item.productId, item.size)}
                className="text-neutral-500 hover:text-black"
              >
                <Trash2 size={18} aria-hidden />
              </button>
              <p className="text-sm font-semibold">
                {formatPrice(item.unitPriceCents * item.quantity)}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-lg font-semibold">Subtotal</p>
        <p className="text-lg font-semibold">{formatPrice(subtotalCents)}</p>
      </div>
    </div>
  );
}
