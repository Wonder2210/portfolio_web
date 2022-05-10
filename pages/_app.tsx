import { DefaultSeo } from 'next-seo'
import Script from 'next/script'
import '../styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Wonder Gonzalez - Frontend Engineer"
        description="I'm a FrontEnd enginer, focused on build beautiful web experiences"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://wondervg.com',
          site_name: 'Wonder Gonzalez - Frontend Engineer',
          description:
            "I'm a FrontEnd enginer, focused on build beautiful web experiences",
          images: [
            {
              url: 'https://wondervg.com/icon/25516.jpg',
              width: 800,
              height: 600,
              alt: 'Wonder Gonzalez',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <Script src="/hotjar.js" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
