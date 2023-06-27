import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';

import { useEffect } from "react";
import { useRouter } from "next/router";
import { user } from "@/apis/auth";
import { getCookie } from "@/utils/cookies";
import useUser from "@/hooks/useVerify";

function CustomUser() {
 const user = useUser();
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
