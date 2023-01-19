import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useAuthUser, withFronteggApp } from "@frontegg/nextjs";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    alert("I should not see this");
  }, []);

  return <Component {...pageProps} />;
}

export default withFronteggApp(App, { hostedLoginBox: false });
