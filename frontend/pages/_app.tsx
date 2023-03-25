import type { AppProps } from "next/app";
import { MetaDatos } from "../components/MetaDatos";
import "../public/globals.css"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { NavbarAdmin } from "../components/NavbarAdmin";
import { Global } from "@emotion/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={`
      @import url('https://fonts.googleapis.com/css2?family=Anton&family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Rajdhani:wght@300;400;500;600;700&display=swap');
      
      body{
        font-family: 'Cabin', sans-serif;
        font-size: 20px;
      }
      `}
      />
      <MetaDatos />
      <Navbar></Navbar>
      <NavbarAdmin></NavbarAdmin>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}