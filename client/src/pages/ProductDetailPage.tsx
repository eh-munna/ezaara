import { isAxiosError } from 'axios';
import { Link, useParams } from 'react-router';
import ProductGallery from '../features/products/components/ProductGallery';
import ProductInfo from '../features/products/components/ProductInfo';
import { useProduct } from '../features/products/hooks';

function DetailSkeleton() {
  return (
    <div
      className="grid animate-pulse gap-8 md:grid-cols-2"
      role="status"
      aria-label="Loading product"
    >
      <div className="aspect-4/5 rounded bg-neutral-200" />
      <div className="flex flex-col gap-3">
        <div className="h-8 w-3/4 rounded bg-neutral-200" />
        <div className="h-4 w-1/2 rounded bg-neutral-200" />
        <div className="h-6 w-1/4 rounded bg-neutral-200" />
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { data: product, isLoading, isError, error } = useProduct(slug);

  if (isLoading) return <DetailSkeleton />;

  if (isError || !product) {
    const notFound = isAxiosError(error) && error.response?.status === 404;
    return (
      <div className="py-12 text-center" role={notFound ? undefined : 'alert'}>
        <h1 className="text-2xl font-bold">
          {notFound ? 'Product not found' : 'Something went wrong'}
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          {notFound
            ? "We couldn't find the product you're looking for."
            : 'Could not load this product. Please try again later.'}
        </p>
        <Link to="/" className="mt-4 inline-block text-sm underline">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 py-4 md:grid-cols-2">
      <ProductGallery key={product.id} images={product.images} alt={product.name} />
      <ProductInfo key={product.id} product={product} />
    </div>
  );
}
