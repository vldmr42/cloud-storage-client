import '@/styles/globals.css';
import { NextComponentType, NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

//-------------------------------------
// interface Props extends AppProps {
//     Component: React.FunctionComponent & {
//         getLayout: (page: React.ReactElement) => React.ReactNode;
//     };
// }

//-------------------------------------
// type Page<P = {}> = NextPage<P> & {
//     getLayout?: (page: React.ReactNode) => React.ReactNode;
// };

// type Props = AppProps & {
//     Component: Page;
// };

function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

    return getLayout(<Component {...pageProps} />);
}

export default App;
