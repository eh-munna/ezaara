import type { Product } from '../products/types';

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  /** Price actually charged per unit (sale price if on sale), in cents */
  unitPriceCents: number;
  imageUrl: string;
  /** Empty string when the product has no sizes */
  size: string;
  quantity: number;
};

export type AddToCartInput = {
  product: Product;
  size: string;
  quantity: number;
};

export type CartContextValue = {
  items: CartItem[];
  /** Total number of units across all lines */
  itemCount: number;
  subtotalCents: number;
  addItem: (input: AddToCartInput) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  removeItem: (productId: string, size: string) => void;
  clear: () => void;
};
