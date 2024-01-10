import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import "../styles/AboutMeExplain.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <NextUIProvider>
      <Head>
        <title>Ibraheem.Rehman()</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="dark text-foreground bg-background">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </NextUIProvider>
  );
}

export default MyApp;
