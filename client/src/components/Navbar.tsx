import { Link } from 'react-router';

export default function Navbar() {
  return (
    <>
      <nav className="mx-auto flex max-w-6xl items-center gap-6 p-4">
        <Link to="/" className="text-xl font-bold">
          ezaara
        </Link>
        <div className="ml-auto flex gap-4">
          <Link to="/cart">Cart</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </>
  );
}
