import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
