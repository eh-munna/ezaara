import { Link } from 'react-router';
import { useCategories } from '../hooks';

const gridClass = 'grid grid-cols-2 gap-4 md:grid-cols-4';

export default function CategoryTiles() {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) {
    return (
      <div className={gridClass} role="status" aria-label="Loading categories">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className="aspect-[4/5] animate-pulse rounded bg-neutral-200"
          />
        ))}
      </div>
    );
  }

  if (isError || !categories || categories.length === 0) return null;

  return (
    <ul className={gridClass}>
      {categories.map((category) => (
        <li key={category.id}>
          <Link
            to={`/shop?category=${encodeURIComponent(category.id)}`}
            className="group relative block aspect-[4/5] overflow-hidden rounded bg-neutral-200"
          >
            <img
              src={category.imageUrl}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-lg font-semibold text-white">
              {category.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
