import { createBrowserRouter } from 'react-router';
import CartPage from '../pages/CartPage';
import CheckoutSuccessPage from '../pages/CheckoutSuccessPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import OrdersPage from '../pages/OrdersPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import RegisterPage from '../pages/RegisterPage';
import ShopPage from '../pages/ShopPage';
import AdminProductsPage from '../pages/admin/AdminProductsPage';
import RootLayout from './layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'products/:slug', element: <ProductDetailPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'checkout/success', element: <CheckoutSuccessPage /> },
      { path: 'admin/products', element: <AdminProductsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
