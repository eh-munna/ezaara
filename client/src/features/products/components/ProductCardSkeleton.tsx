export default function ProductCardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-2" aria-hidden="true">
      <div className="aspect-3/4 rounded bg-neutral-200" />
      <div className="h-4 w-3/4 rounded bg-neutral-200" />
      <div className="h-4 w-1/3 rounded bg-neutral-200" />
    </div>
  );
}
