import { Fragment } from "react";
import Head from "next/head";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Birthday Reminder</title>
                <meta
                    name="description"
                    content="Birthday Reminder By NextJS"
                />
                <meta name="theme-color" content="#f28ab2" />
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
