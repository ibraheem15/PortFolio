import { Inter } from "next/font/google";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#2DFCEE",
      background: "#212121",
      navbar: "#212121",
      navbarItem: "#212121",
      // you can also create your own color
      myColor: "#ff4ecd",
      navbarItemFontWeight: "700",

      // ...  more colors
    },
    space: {},
    fonts: {},
    styledCursonHighlight: {
      // light: "#000",
      dark: "#fff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider theme={theme}>
        <Head>
          <title>Next.js Blog</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
