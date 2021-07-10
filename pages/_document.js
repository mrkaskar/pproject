import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <body>
        {/* <script async type="application/javascript" src="https://a.realsrv.com/ad-provider.js"></script>  */}
          <Main />
          <NextScript />
        {/* <div id="ad1">
        <ins class="adsbyexoclick" data-zoneid="4345138"></ins> 
      </div>
      <div id="ad2">
        <ins class="adsbyexoclick" data-zoneid="4345138"></ins> 
      </div>
      <div id="ad3">
        <ins class="adsbyexoclick" data-zoneid="4345138"></ins> 
      </div>
      <div id="ad4">
        <ins class="adsbyexoclick" data-zoneid="4345138"></ins> 
      </div> */}

 
          {/* <script type="text/javascript" dangerouslySetInnerHTML={{ __html: 
        "var ad_idzone = '4345132';var ad_width = '400';var ad_height = '100';var v_pos = 'top';var h_pos = 'center';var obj={'serve':{}}"
        }}></script>
        <script type="application/javascript" src="https://a.realsrv.com/js.php?t=17&idzone=4345132"></script> */}
        

        {/* <script>(AdProvider = window.AdProvider || []).push(obj);</script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument