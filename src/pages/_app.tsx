import "styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "hooks/useModal";
import Airtable from "airtable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

;

console.log({ key: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY });
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
