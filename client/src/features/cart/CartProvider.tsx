import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';
import { CartContext } from './CartContext';
import type { AddToCartInput, CartContextValue, CartItem } from './types';

const STORAGE_KEY = 'ezaara.cart';
const MAX_QUANTITY = 10;

type Action =
  | { type: 'add'; item: CartItem }
  | { type: 'update'; productId: string; size: string; quantity: number }
  | { type: 'remove'; productId: string; size: string }
  | { type: 'clear' };

const sameLine = (a: CartItem, productId: string, size: string) =>
  a.productId === productId && a.size === size;

const clampQuantity = (q: number) => Math.min(MAX_QUANTITY, Math.max(1, q));

function reducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case 'add': {
      const { item } = action;
      const existing = state.find((i) => sameLine(i, item.productId, item.size));
      if (!existing) {
        return [...state, { ...item, quantity: clampQuantity(item.quantity) }];
      }
      return state.map((i) =>
        i === existing
          ? { ...i, quantity: clampQuantity(i.quantity + item.quantity) }
          : i,
      );
    }
    case 'update':
      return state.map((i) =>
        sameLine(i, action.productId, action.size)
          ? { ...i, quantity: clampQuantity(action.quantity) }
          : i,
      );
    case 'remove':
      return state.filter((i) => !sameLine(i, action.productId, action.size));
    case 'clear':
      return [];
  }
}

function load(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as CartItem[]) : [];
  } catch {
    return [];
  }
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, undefined, load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable (private mode, quota): cart still works in memory
    }
  }, [items]);

  const addItem = useCallback(({ product, size, quantity }: AddToCartInput) => {
    const onSale =
      product.salePriceCents !== undefined &&
      product.salePriceCents < product.priceCents;
    dispatch({
      type: 'add',
      item: {
        productId: product.id,
        slug: product.slug,
        name: product.name,
        unitPriceCents: onSale ? product.salePriceCents! : product.priceCents,
        imageUrl: product.imageUrl,
        size,
        quantity,
      },
    });
  }, []);

  const updateQuantity = useCallback(
    (productId: string, size: string, quantity: number) =>
      dispatch({ type: 'update', productId, size, quantity }),
    [],
  );
  const removeItem = useCallback(
    (productId: string, size: string) =>
      dispatch({ type: 'remove', productId, size }),
    [],
  );
  const clear = useCallback(() => dispatch({ type: 'clear' }), []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount: items.reduce((n, i) => n + i.quantity, 0),
      subtotalCents: items.reduce((n, i) => n + i.unitPriceCents * i.quantity, 0),
      addItem,
      updateQuantity,
      removeItem,
      clear,
    }),
    [items, addItem, updateQuantity, removeItem, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
