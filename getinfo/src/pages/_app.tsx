import "../styles/global.css";
import "../utils/dayjs";
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useState } from "react";
import { MantineProvider } from "@mantine/core";
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Devtools from "../components/Devtools";

import { theme } from "../constants/theme/theme";
import { Provider } from "react-redux";
import store from "../store";


const config = {
    defaultOptions: {
        queries: {
            staleTime: 60 * 60 * 1000,
            cacheTime: 5 * 60 * 60 * 1000,
            refetchOnWindowFocus: false
        }
    }
}

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient(config));

    return (
        <Fragment>
            <Head>
                <title>QuickDirection</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="icon" href="/icon.png" type="image.png" />
            </Head>

            <MantineProvider theme={theme}>
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <Hydrate state={pageProps.dehydratedState}>
                            <Component  {...pageProps} />
                            <Devtools />
                        </Hydrate>
                    </QueryClientProvider>
                </Provider>
            </MantineProvider>
      </Fragment>
  );
}
