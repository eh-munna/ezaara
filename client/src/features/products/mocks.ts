import type { Product, Size } from './types';

const sizes = (labels: string[], outOfStock: string[] = []): Size[] =>
  labels.map((label) => ({ label, inStock: !outOfStock.includes(label) }));

const gallery = (seed: string): string[] =>
  [1, 2, 3].map((n) => `https://picsum.photos/seed/${seed}-${n}/800/1000`);

const DELIVERY =
  'Free standard delivery on orders over €75. Orders ship within 1–2 business days and arrive in 3–5 business days.';
const RETURNS =
  'Free returns within 30 days of delivery. Items must be unworn, unwashed and with the original tags attached.';

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Oversized Linen Shirt',
    slug: 'oversized-linen-shirt',
    priceCents: 5900,
    imageUrl: 'https://picsum.photos/seed/ezaara1/600/800',
    images: gallery('ezaara1'),
    shortInfo: 'Relaxed fit, 100% European linen.',
    description:
      'A breathable oversized shirt cut from washed European linen. Drop shoulders, a curved hem and mother-of-pearl style buttons make it easy to wear open or buttoned.',
    sizes: sizes(['XS', 'S', 'M', 'L', 'XL']),
    delivery: DELIVERY,
    returns: RETURNS,
    categoryId: 'women',
    inStock: true,
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'p2',
    name: 'Classic Denim Jacket',
    slug: 'classic-denim-jacket',
    priceCents: 8900,
    salePriceCents: 6900, // sale price edge case
    imageUrl: 'https://picsum.photos/seed/ezaara2/600/800',
    images: gallery('ezaara2'),
    shortInfo: 'Mid-weight rigid denim with a regular fit.',
    description:
      'The everyday denim jacket, made from sturdy 12 oz cotton denim. Chest pockets, adjustable side tabs and a slightly cropped length.',
    sizes: sizes(['S', 'M', 'L', 'XL'], ['S']),
    delivery: DELIVERY,
    returns: RETURNS,
    categoryId: 'men',
    inStock: true,
    isFeatured: true,
  },
  {
    id: 'p3',
    name: 'Wool Blend Overcoat',
    slug: 'wool-blend-overcoat',
    priceCents: 17900,
    imageUrl: 'https://picsum.photos/seed/ezaara3/600/800',
    images: gallery('ezaara3'),
    shortInfo: '70% wool, single-breasted, knee length.',
    description:
      'A timeless single-breasted overcoat in a warm wool blend, fully lined with notch lapels and two welt pockets.',
    sizes: sizes(['S', 'M', 'L', 'XL'], ['S', 'M', 'L', 'XL']),
    delivery: DELIVERY,
    returns: RETURNS,
    categoryId: 'men',
    inStock: false, // out-of-stock edge case
  },
  {
    id: 'p4',
    name: 'Ribbed Cotton Tank Top',
    slug: 'ribbed-cotton-tank-top',
    priceCents: 1990,
    imageUrl: 'https://picsum.photos/seed/ezaara4/600/800',
    images: gallery('ezaara4'),
    shortInfo: 'Soft stretch rib, slim fit.',
    description:
      'A slim ribbed tank in soft stretch cotton. Layer it under shirts or wear it on its own.',
    sizes: sizes(['XS', 'S', 'M', 'L']),
    delivery: DELIVERY,
    returns: RETURNS,
    categoryId: 'women',
    inStock: true,
    isNew: true,
  },
  {
    id: 'p5',
    name: 'Leather Belt',
    slug: 'leather-belt',
    priceCents: 3490,
    imageUrl: 'https://picsum.photos/seed/ezaara5/600/800',
    images: gallery('ezaara5'),
    shortInfo: 'Full-grain leather with a brushed metal buckle.',
    description:
      'A full-grain leather belt that ages beautifully. 3 cm width, brushed metal buckle.',
    sizes: [], // no size selection edge case
    delivery: DELIVERY,
    returns: RETURNS,
    categoryId: 'accessories',
    inStock: true,
    isFeatured: true,
  },
  {
    id: 'p6',
    name: 'Relaxed Fit Organic Cotton Wide-Leg Trousers with Elastic Waistband',
    slug: 'relaxed-fit-wide-leg-trousers',
    priceCents: 6490,
    imageUrl: 'https://picsum.photos/seed/ezaara6/600/800',
    images: gallery('ezaara6'),
    shortInfo: 'Organic cotton twill, elastic waistband.',
    description:
      'Wide-leg trousers in organic cotton twill with a comfortable elastic waistband, side pockets and a relaxed fit through the hip.',
    sizes: sizes(['XS', 'S', 'M', 'L', 'XL']),
    delivery: DELIVERY,
    returns: RETURNS,
    categoryId: 'women',
    inStock: true, // long-name edge case
  },
];
