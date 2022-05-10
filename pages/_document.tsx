import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="twitter:creator" content="@WonDErV14" />
          <meta name="twitter:site" content="@WonDErV14" />
          <meta
            name="twitter:card"
            content="summary || summary_large_image || player || app"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icon/favicon-16x16.png"
          />
          <link rel="manifest" href="/icon/site.webmanifest" />
          <link rel="manifest" href="/icon/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff"></meta>
          <Script src="/hotjar.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
