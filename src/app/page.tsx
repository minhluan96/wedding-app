import dynamic from "next/dynamic";

const LandingPage = dynamic(() => import('@/app/components/LandingPage').then(mod => mod.default), {
    ssr: false
});

export default function Home() {
    return (
        <LandingPage />
    )
}
