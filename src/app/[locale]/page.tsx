import dynamic from "next/dynamic";
import React, {Suspense} from "react";

const LandingPage = dynamic(() => import('@/app/components/LandingPage').then(mod => mod.default), {
    ssr: false
});

export default function Home() {
    return (
        <Suspense
            fallback={
                <p style={{ textAlign: "center" }}>Loading</p>
            }
        >
            <LandingPage />
        </Suspense>
    )
}
