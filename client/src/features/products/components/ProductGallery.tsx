import { useState } from 'react';

type ProductGalleryProps = { images: string[]; alt: string };

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);
  const current = images[selected] ?? images[0];

  if (!current) {
    return <div className="aspect-4/5 rounded bg-neutral-200" />;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="aspect-4/5 overflow-hidden rounded bg-neutral-200">
        <img src={current} alt={alt} className="h-full w-full object-cover" />
      </div>
      {images.length > 1 && (
        <ul className="grid grid-cols-5 gap-2">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setSelected(i)}
                aria-label={`Show image ${i + 1} of ${images.length}`}
                aria-current={i === selected}
                className={`block aspect-square w-full overflow-hidden rounded border-2 bg-neutral-200 ${
                  i === selected ? 'border-black' : 'border-transparent'
                }`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
