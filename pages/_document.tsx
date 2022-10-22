import {Html, Head, Main, NextScript} from "next/document";
import React from "react";

function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
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
            <body className="scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800 hover:scrollbar-thumb-teal-700 scrollbar-corner-slate-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;
