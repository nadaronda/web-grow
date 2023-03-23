import type { AppProps } from "next/app";
import { MetaDatos } from "../components/MetaDatos";
import "../public/globals.css"

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
export default function MyApp({ Component, pageProps }: AppProps) {

  return (<MetaDatos>
    <Navbar></Navbar>
    <Component {...pageProps} />
    <Footer></Footer>
  </MetaDatos>
  );
}