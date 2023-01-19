import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { withFronteggApp } from "@frontegg/nextjs";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      I will only be rendered on 6.7.10
      <Component {...pageProps} />
    </>
  );
}

export default withFronteggApp(App, { hostedLoginBox: false });
