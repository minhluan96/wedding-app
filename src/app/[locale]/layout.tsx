import type {Metadata} from 'next';
import React, {ReactNode} from "react";
import LandingPageScript from "@/app/components/LandingPageScript";
import Provider from "@/app/utils/Provider";
import {locales} from "@/config";
import {unstable_setRequestLocale} from "next-intl/server";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from "@vercel/speed-insights/next"

type Props = {
    children: ReactNode;
    params: {locale: string};
};

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
    title: 'LQ Wedding',
    description: "Luan va Quynh's wedding website",
}

export default function RootLayout({
   children,
   params: {locale}
}: Props) {
    unstable_setRequestLocale(locale);
    const messages = useMessages();

    return (
        <html lang={locale} suppressHydrationWarning={true}>
        <head>
            <title>LQ Wedding</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link href="https://fonts.googleapis.com/css?family=Dosis:300,400,600,700%7COpen+Sans:300,400,700%7CPlayfair+Display:400,400i,700,700i" rel="stylesheet" />
            
            <LandingPageScript />
        </head>
        <GoogleAnalytics gaId="GTM-M3D8ML87" />
        <body className='gla_middle_titles'>
            <NextIntlClientProvider
                locale={locale}
                messages={messages}
            >
                <Provider>
                    {children}
                </Provider>
            </NextIntlClientProvider>
            <SpeedInsights />
        </body>
        </html>
    )
}
