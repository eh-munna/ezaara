import type { Size } from '../types';

type Props = {
  sizes: Size[];
  value: string | null;
  onChange: (label: string) => void;
  error?: boolean;
};

export default function SizeSelector({ sizes, value, onChange, error }: Props) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium">
        Size{value ? `: ${value}` : ''}
      </legend>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => {
          const selected = value === size.label;
          return (
            <button
              key={size.label}
              type="button"
              disabled={!size.inStock}
              aria-pressed={selected}
              onClick={() => onChange(size.label)}
              className={`min-w-12 rounded border px-3 py-2 text-sm ${
                selected
                  ? 'border-black bg-black text-white'
                  : 'border-neutral-300 bg-white hover:border-black'
              } disabled:cursor-not-allowed disabled:text-neutral-400 disabled:line-through disabled:hover:border-neutral-300`}
            >
              {size.label}
            </button>
          );
        })}
      </div>
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-600">
          Please select a size.
        </p>
      )}
    </fieldset>
  );
}
