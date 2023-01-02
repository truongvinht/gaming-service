'use client';
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient();

export default function ReactQueryWrapper({ children }) {
    return (
      <QueryClientProvider client={queryClient}>
          {children}
      </QueryClientProvider>
    )
  }