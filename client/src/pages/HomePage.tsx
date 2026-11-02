import CategoryTiles from '../features/categories/components/CategoryTiles';
import ProductSection from '../features/products/components/ProductSection';

export default function HomePage() {
  return (
    <>
      <section className="py-8">
        <h2 className="mb-4 text-xl font-bold tracking-tight">
          Shop by category
        </h2>
        <CategoryTiles />
      </section>
      <ProductSection
        title="Featured"
        query={{ featured: true }}
        viewAllTo="/shop?featured=true"
      />
      <ProductSection
        title="New arrivals"
        query={{ new: true }}
        viewAllTo="/shop?new=true"
      />
      <ProductSection
        title="Sale"
        query={{ sale: true }}
        viewAllTo="/shop?sale=true"
      />
    </>
  );
}
