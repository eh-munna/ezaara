import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import CartProvider from '../../features/cart/CartProvider';

type ProvidersProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  );
}
