import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { useCart } from '../features/cart/hooks';
import SearchBar from './SearchBar';

type NavItem = { to: string; label: string };

const rightLinks: NavItem[] = [
  { to: '/shop', label: 'Shop' },
  { to: '/cart', label: 'Cart' },
  { to: '/login', label: 'Log in' },
  { to: '/register', label: 'Register' },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm ${isActive ? 'font-semibold text-black' : 'text-neutral-600 hover:text-black'}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();
  const withCount = (items: NavItem[]) =>
    items.map((item) =>
      item.to === '/cart' && itemCount > 0
        ? { ...item, label: `Cart (${itemCount})` }
        : item,
    );

  return (
    <header className="border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-lg font-bold tracking-tight">
            ezaara
          </Link>
        </div>

        <div className="mx-6 hidden max-w-sm flex-1 md:block">
          <SearchBar idSuffix="desktop" />
        </div>

        <div className="hidden gap-4 md:flex">
          {withCount(rightLinks).map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-3 border-t border-neutral-200 px-4 py-3 md:hidden">
          <SearchBar idSuffix="mobile" onSearch={() => setOpen(false)} />
          {withCount(rightLinks).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
