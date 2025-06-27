import Hero from "@/components/hero"
import AboutScams from "@/components/about-scams"
import SubscriptionPlans from "@/components/subscription-plans"
import ExpertDigital from "@/components/expert-digital"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <AboutScams />
            <SubscriptionPlans />
            <ExpertDigital />
        </main>
    )
}
