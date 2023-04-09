import Head from "next/head";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import apolloClient from "@/Apollo";
import { ApolloProvider } from "@apollo/client";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </>
  );
}
