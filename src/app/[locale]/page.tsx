import dynamic from "next/dynamic";
import React, {Suspense} from "react";

const LandingPage = dynamic(() => import('@/app/components/LandingPage').then(mod => mod.default), {
    ssr: false
});

// @ts-ignore
export default function Home(props): JSX.Element {
    const { locale } = props;

    return (
        <Suspense
            fallback={
                <p style={{ textAlign: "center" }}>Loading</p>
            }
        >
            <LandingPage locale={locale} />
        </Suspense>
    )
}
