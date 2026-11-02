export type Size = {
  label: string;
  inStock: boolean;
};

export type Product = {
  id: string;
  name: string;
  isNew?: boolean;
  slug: string;
  priceCents: number;
  salePriceCents?: number;
  /** Card thumbnail */
  imageUrl: string;
  /** Gallery images for the product detail page */
  images: string[];
  shortInfo?: string;
  description: string;
  /** Empty array means the product has no size selection */
  sizes: Size[];
  delivery: string;
  returns: string;
  categoryId: string;
  isFeatured?: boolean;
  inStock: boolean;
};

export type ProductQuery = {
  featured?: boolean;
  new?: boolean;
  sale?: boolean;
  category?: string;
  q?: string;
};
