import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="pt-48 pb-12 md:pt-52 md:pb-24 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Protégez vous contres les <span className="gradient-text">arnaques et les fraudes</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Apprenez à reconnaître les arnaques et les fraudes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#subscriptions">Voir nos abonnements</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
              <Link href="#about">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
