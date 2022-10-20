import {Html, Head, Main, NextScript} from "next/document";
import React from "react";

function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="scrollbar scrollbar-thumb-slate-700 scrollbar-track-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;
