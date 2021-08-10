import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap"
            rel="stylesheet"
          />
          <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <Script src="https://unpkg.com/scrollreveal"></Script>
        <Script>
          {`
            const sr = ScrollReveal({
              origin: 'top',
              distance: '50px',
              duration: 2000,
              reset: true
            });
    
            ScrollReveal().reveal('.container-post', { delay: 200 });
            ScrollReveal().reveal('.date', { delay: 400 });
            ScrollReveal().reveal('.title', { delay: 500 });
            ScrollReveal().reveal('.description', { delay: 600 });
          `}
        </Script>
      </Html>
    );
  }
}
