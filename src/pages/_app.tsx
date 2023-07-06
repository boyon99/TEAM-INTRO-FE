import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';
import ProtectedRouter, { useUser } from "@/hooks/useVerify";

function CustomUser() {
 const user = ProtectedRouter();
 return null;
}

export default function App({ Component, pageProps }: AppProps) {
  
  
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
    <Layout>
      <CustomUser/>
      <Component {...pageProps} />
    </Layout>
    </QueryClientProvider>
  );
}
