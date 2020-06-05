import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";
// import MainLayout from "../components/layout/main";
// import AdminLayout from "../components/layout/admin";

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: "#001F3F",
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    color: ${(props) => props.theme.niceBlack}; 
  }
`;
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    if (router.pathname.startsWith("/dashboard")) {
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* <AdminLayout> */}
          <Component {...pageProps}></Component>
          {/* </AdminLayout> */}
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Find Jobs</title>
        </Head>
        {/* <MainLayout> */}
        <GlobalStyle />
        <Component {...pageProps}></Component>
        {/* </MainLayout> */}
      </ThemeProvider>
    );
  }
}

export default MyApp;
