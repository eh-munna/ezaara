type Props = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  /** Makes the input id unique when several inputs are on one page */
  idSuffix?: string;
};

export default function QuantityInput({
  value,
  onChange,
  min = 1,
  max = 10,
  idSuffix,
}: Props) {
  const id = idSuffix ? `quantity-${idSuffix}` : 'quantity';
  const set = (next: number) => onChange(Math.min(max, Math.max(min, next)));

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        Quantity
      </label>
      <div className="inline-flex items-center rounded border border-neutral-300 bg-white">
        <button
          type="button"
          aria-label="Decrease quantity"
          disabled={value <= min}
          onClick={() => set(value - 1)}
          className="h-10 w-10 text-lg disabled:text-neutral-300"
        >
          −
        </button>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          value={value}
          onChange={(e) => set(Number(e.target.value) || min)}
          className="h-10 w-14 [appearance:textfield] border-x border-neutral-300 text-center text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          aria-label="Increase quantity"
          disabled={value >= max}
          onClick={() => set(value + 1)}
          className="h-10 w-10 text-lg disabled:text-neutral-300"
        >
          +
        </button>
      </div>
    </div>
  );
}
