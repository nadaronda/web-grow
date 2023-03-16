import Head from "next/head";
export const MetaDatos : React.FC<{ children: any }> = ({ children }) => {
    return  (<>
        <Head>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Monasterio</title>
            <link rel="shortcut icon" href="/cannabis.png" type="image/x-icon" />
        </Head>
        {children}
    </>)
}