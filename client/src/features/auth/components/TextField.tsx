import type { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function TextField({ label, error, id, ...rest }: Props) {
  const inputId = id ?? rest.name;
  return (
    <div>
      <label htmlFor={inputId} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full rounded border bg-white px-3 py-2 text-sm outline-none focus:border-black ${
          error ? 'border-red-500' : 'border-neutral-300'
        }`}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
