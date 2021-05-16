import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        
 
  
        <meta property="og:title" content="Web developer" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="i'm a web developer , focused on build beautiful web experiences " />
        <meta property="og:image" content="https://wondervg.com/icon/favicon-96x96.png" />
        <meta property="og:url" content="https://wondervg.com" />
    <meta name="twitter:creator" content="@WonDErV14" />
    <meta name="twitter:site" content="@WonDErV14" />
    <meta
      name="twitter:card"
      content="summary || summary_large_image || player || app"
    />
       <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png"/>
<link rel="manifest" href="/icon/site.webmanifest"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
