import "../styles/global.css";
import Head from 'next/head';

export default function App({Component, pageProps}) {
  return <> 
  <Head>
    <title>Precious Things</title>
      <meta name="exoclick-site-verification" content="63cb7b2c7c614d322f8e0f7d9b3fbbc5"/>
    </Head> 
  <Component {...pageProps}/>
  <script type="application/javascript">
    var ad_idzone = "4345132",
    ad_width = "728",
    ad_height = "90",
    v_pos = "top",
    h_pos = "left";
</script>
<script type="application/javascript" src="https://a.realsrv.com/js.php?t=17&idzone=4345132"></script>
  </>
}