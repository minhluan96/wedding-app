import React from "react";
import Script from 'next/script';

export default function LandingPageScript() {
    return (
        <>
            <Script src='js/jquery-1.12.4.min.js' strategy="beforeInteractive" />
            <Script src='js/glanz_library.js' strategy="afterInteractive" />
            <Script src='js/glanz_script.js' strategy="lazyOnload" />
        </>
    )
}