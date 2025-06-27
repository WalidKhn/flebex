"use client"

import { Check, Shield, Lock, Search, Download, BookOpen, Clock, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import PaymentModal from "@/components/payment-modal"

export default function ExpertDigital() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")
  const expertPrice = "24,99€"

  const handleSubscribe = () => {
    setPaymentModalOpen(true)
  }

  return (
    <section id="expert" className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert digital privé</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nos experts vous accompagnent pour sécuriser votre vie numérique et vous protéger contre les menaces en
            ligne
          </p>

          <div className="flex items-center justify-center mb-8">
            <div className="flex p-1 bg-muted rounded-lg">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-2 rounded-md ${
                  billingPeriod === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent hover:bg-background/80"
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-4 py-2 rounded-md ${
                  billingPeriod === "yearly"
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent hover:bg-background/80"
                }`}
              >
                Annuel <span className="text-xs opacity-75">(-20%)</span>
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 mb-8 max-w-md mx-auto hover:border-primary/50 transition-colors">
            <h3 className="text-2xl font-bold mb-2">Expert Digital Privé</h3>
            <p className="text-muted-foreground mb-4">Assistance personnalisée pour tous vos besoins numériques</p>
            <div className="mb-6">
              <span className="text-3xl font-bold">
                {billingPeriod === "yearly"
                  ? `${(Number.parseFloat(expertPrice.replace(",", ".")) * 0.8 * 12).toFixed(2)}€`
                  : expertPrice}
              </span>
              <span className="text-muted-foreground">{billingPeriod === "yearly" ? "/an" : "/mois"}</span>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleSubscribe}>
              Souscrire maintenant
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">Nos services d'expert digital privé</CardTitle>
              <CardDescription>
                Une assistance personnalisée pour tous vos besoins de sécurité numérique
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Sécurisation de vos comptes en ligne</p>
                    <p className="text-sm text-muted-foreground">
                      Audit de sécurité et mise en place d'authentification forte pour tous vos comptes importants
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Détection et tri des arnaques numériques</p>
                    <p className="text-sm text-muted-foreground">
                      Analyse de vos emails, messages et sollicitations pour identifier les tentatives d'arnaque
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Installation d'antivirus, VPN, outils anti-phishing</p>
                    <p className="text-sm text-muted-foreground">
                      Configuration et optimisation des outils de sécurité adaptés à vos besoins
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Formation personnalisée à la sécurité numérique</p>
                    <p className="text-sm text-muted-foreground">
                      Sessions de formation sur mesure pour vous et votre famille sur les bonnes pratiques de sécurité
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Assistance rapide en cas de fraude</p>
                    <p className="text-sm text-muted-foreground">
                      Intervention d'urgence et accompagnement dans les démarches en cas d'arnaque ou de piratage
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Conseil et accompagnement pour vos projets numériques</p>
                    <p className="text-sm text-muted-foreground">
                      Recommandations et support pour tous vos projets digitaux avec la sécurité comme priorité
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="bg-primary/5 rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Pourquoi faire appel à un expert digital privé ?</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Protection proactive contre les menaces numériques en constante évolution</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Gain de temps et tranquillité d'esprit avec un expert qui s'occupe de votre sécurité</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Conseils personnalisés adaptés à votre profil et à vos habitudes numériques</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Réduction significative des risques d'arnaque et de vol d'identité</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {paymentModalOpen && (
        <PaymentModal
          isOpen={paymentModalOpen}
          onClose={() => setPaymentModalOpen(false)}
          planName="Expert Digital Privé"
          planPrice={expertPrice}
          isYearly={billingPeriod === "yearly"}
        />
      )}
    </section>
  )
}
