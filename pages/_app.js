import "../styles/global.css";
import Head from 'next/head';

export default function App({Component, pageProps}) {
  return <> 
  <Head>
    <title>Precious Things</title>
      <meta name="exoclick-site-verification" content="63cb7b2c7c614d322f8e0f7d9b3fbbc5"/>
    </Head> 
  <Component {...pageProps}/>
  </>
}