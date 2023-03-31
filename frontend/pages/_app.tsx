import '../public/css/globals.css';
import { MetaDatos } from '../components/layout/MetaDatos';
import { Layout } from '../components/layout/Layout';
import { Footer } from '../components/layout/Footer';
import { Global } from '@emotion/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { SWRConfig } from 'swr/_internal';
import { backendFetcher } from '../lib/backendFetcher';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <UserProvider>
                <SWRConfig value={{ fetcher: backendFetcher }}>
                    <Global
                        styles={`
                          @import url('https://fonts.googleapis.com/css2?family=Anton&family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Rajdhani:wght@300;400;500;600;700&display=swap');
                          
                          body{
                            font-family: 'Cabin', sans-serif;
                            font-size: 20px;
                          }
                        `}
                    />
                    <MetaDatos />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                    <Footer />
                </SWRConfig>
            </UserProvider>
        </>
    );
}
