import type { AppProps } from "next/app";
import { MetaDatos } from "../components/MetaDatos";

export default function MyApp({ Component, pageProps }: AppProps) {

  return (<MetaDatos>
    <Component {...pageProps} />
  </MetaDatos>
  );
}