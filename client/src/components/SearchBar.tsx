import { Search } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

type Props = {
  /** Called after a search is submitted (e.g. to close the mobile menu) */
  onSearch?: () => void;
  idSuffix: string;
};

function SearchForm({
  initial,
  onSearch,
  idSuffix,
}: Props & { initial: string }) {
  const [value, setValue] = useState(initial);
  const navigate = useNavigate();
  const id = `search-${idSuffix}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = value.trim();
    navigate(q ? `/shop?q=${encodeURIComponent(q)}` : '/shop');
    onSearch?.();
  };

  return (
    <form role="search" onSubmit={handleSubmit} className="relative w-full">
      <label htmlFor={id} className="sr-only">
        Search products
      </label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search products"
        autoComplete="off"
        className="w-full rounded-full border border-neutral-300 bg-neutral-50 py-2 pl-4 pr-10 text-sm outline-none focus:border-black focus:bg-white"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-2 text-neutral-600 hover:text-black"
      >
        <Search size={16} aria-hidden />
      </button>
    </form>
  );
}

export default function SearchBar(props: Props) {
  const [params] = useSearchParams();
  const q = params.get('q') ?? '';
  // key resets the input when the URL query changes (back/forward, links)
  return <SearchForm key={q} initial={q} {...props} />;
}
