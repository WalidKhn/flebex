"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import PaymentModal from "@/components/payment-modal"

// Type pour les fonctionnalités avec détails
type Feature = {
  name: string
  details: string
  isHeader?: boolean
}

const plans = [
  {
    id: "basic",
    name: "Pack Sécurité Premium",
    price: "3,99€",
    description: "Protection essentielle contre les arnaques courantes",
    features: [
      {
        name: "Protection contre le Phishing (hameçonnage)",
        details:
          "Détection et blocage des emails frauduleux qui tentent de voler vos informations personnelles. Nous analysons les liens et les pièces jointes pour identifier les menaces potentielles.",
      },
      {
        name: "Détection des arnaques au faux conseiller bancaire",
        details:
          "Alertes en temps réel lorsque vous recevez des appels suspects se faisant passer pour votre banque. Vérification des numéros de téléphone par rapport à une base de données d'escrocs connus.",
      },
      {
        name: "Sécurisation contre la fraude à la carte bancaire",
        details:
          "Surveillance des transactions inhabituelles et alertes immédiates en cas d'activité suspecte. Protection contre le skimming et les fuites de données de carte bancaire.",
      },
      {
        name: "Protection contre les arnaques aux rencontres amoureuses (Romance Scam)",
        details:
          "Détection des profils suspects sur les sites de rencontres. Analyse des comportements typiques des escrocs romantiques et alertes en cas de signes d'arnaque.",
      },
      {
        name: "Support par email",
        details:
          "Assistance par email avec un temps de réponse garanti sous 24 heures. Notre équipe d'experts vous aide à résoudre tout problème lié à la sécurité.",
      },
    ],
    popular: false,
  },
  {
    id: "standard",
    name: "Pack Sécurité Avancée",
    price: "8,99€",
    description: "Protection complète contre un large éventail d'arnaques",
    features: [
      {
        name: "Inclut toutes les protections du Pack Sécurité Premium, plus :",
        details:
          "Toutes les fonctionnalités du pack de base avec des protections supplémentaires pour une sécurité renforcée.",
        isHeader: true,
      },
      {
        name: "Escroquerie aux faux services techniques",
        details:
          "Protection contre les appels et emails frauduleux prétendant venir de services techniques. Détection des tentatives d'accès à distance à votre ordinateur par des escrocs.",
      },
      {
        name: "Arnaques sur les réseaux sociaux",
        details:
          "Détection des faux profils, des offres trompeuses et des escroqueries courantes sur les plateformes sociales. Protection contre le phishing ciblé via les messageries des réseaux sociaux.",
      },
      {
        name: "Arnaque au faux support technique",
        details:
          "Alertes lors des tentatives d'escroquerie par téléphone ou pop-up prétendant que votre ordinateur est infecté. Blocage des sites web malveillants liés à ces arnaques.",
      },
      {
        name: "Usurpation d'identité et fraude aux documents",
        details:
          "Surveillance du web et du dark web pour détecter si vos informations personnelles ont été compromises. Alertes en cas d'utilisation frauduleuse de vos données.",
      },
      {
        name: "Support par téléphone en heures ouvrables",
        details:
          "Assistance téléphonique disponible du lundi au vendredi de 9h à 18h. Accès direct à nos experts en sécurité pour résoudre rapidement vos problèmes.",
      },
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Pack Sécurité Expert",
    price: "19,99€",
    description: "Protection complète contre toutes les arnaques connues",
    features: [
      {
        name: "Inclut toutes les protections du Pack Sécurité Avancée, plus :",
        details:
          "Toutes les fonctionnalités des packs précédents avec des protections supplémentaires pour une sécurité maximale.",
        isHeader: true,
      },
      {
        name: "Fraude aux chèques et virements bancaires",
        details:
          "Vérification en temps réel des transactions bancaires suspectes. Analyse des schémas de fraude et protection contre les tentatives d'interception de virements.",
      },
      {
        name: "Arnaque au faux policier ou agent gouvernemental",
        details:
          "Détection des appels et communications frauduleuses se faisant passer pour des autorités. Vérification de l'authenticité des demandes officielles.",
      },
      {
        name: "Escroquerie aux locations et immobilier",
        details:
          "Vérification de la légitimité des offres immobilières. Détection des fausses annonces et des demandes de paiement anticipé frauduleuses.",
      },
      {
        name: "Arnaque aux dons et faux organismes caritatifs",
        details:
          "Vérification de l'authenticité des organisations caritatives. Alertes sur les campagnes de dons frauduleuses, particulièrement après des catastrophes naturelles.",
      },
      {
        name: "Escroquerie aux faux investissements",
        details:
          "Analyse des offres d'investissement pour détecter les schémas pyramidaux et autres arnaques financières. Vérification de la légitimité des opportunités d'investissement.",
      },
      {
        name: "Arnaques aux cryptomonnaies",
        details:
          "Protection contre les fausses plateformes d'échange, les ICO frauduleuses et les arnaques de type pump-and-dump. Vérification des portefeuilles et des smart contracts.",
      },
      {
        name: "Faux sites de vente en ligne",
        details:
          "Détection des boutiques en ligne frauduleuses. Vérification de la sécurité des sites avant vos achats et analyse des avis suspects.",
      },
      {
        name: "Assistance en cas de fraude 24/7",
        details:
          "Accès à notre équipe d'intervention d'urgence à tout moment. Support immédiat en cas de compromission ou de tentative de fraude.",
      },
      {
        name: "Assurance contre les pertes financières (jusqu'à 1000€)",
        details:
          "Remboursement des pertes financières dues à une fraude, jusqu'à 1000€ par an. Processus de réclamation simplifié avec assistance dédiée.",
      },
    ],
    popular: false,
  },
  {
    id: "enterprise",
    name: "Pack Sécurité Entreprise",
    price: "99,99€",
    description: "Solution complète de protection pour les entreprises",
    features: [
      {
        name: "Inclut toutes les protections du Pack Sécurité Expert, plus :",
        details:
          "Toutes les fonctionnalités des packs précédents avec des protections supplémentaires spécifiquement conçues pour les entreprises.",
        isHeader: true,
      },
      {
        name: "Protection pour jusqu'à 5 employés",
        details:
          "Couverture complète pour 5 membres de votre équipe. Possibilité d'ajouter des utilisateurs supplémentaires moyennant un coût additionnel.",
      },
      {
        name: "Formation de sensibilisation pour votre équipe",
        details:
          "Sessions de formation trimestrielles pour vos employés sur les meilleures pratiques de sécurité. Simulations d'attaques de phishing pour tester et renforcer la vigilance.",
      },
      {
        name: "Audit de sécurité trimestriel",
        details:
          "Évaluation complète de votre infrastructure de sécurité tous les trois mois. Rapport détaillé avec recommandations et plan d'action personnalisé.",
      },
      {
        name: "Gestionnaire de compte dédié 24/7",
        details:
          "Un expert en sécurité attitré disponible à tout moment pour répondre à vos besoins. Suivi personnalisé et conseils stratégiques pour optimiser votre protection.",
      },
    ],
    popular: false,
  },
]

export default function SubscriptionPlans() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null)

  const handleSubscribe = (planName: string, planPrice: string) => {
    setSelectedPlan({ name: planName, price: planPrice })
    setPaymentModalOpen(true)
  }

  return (
    <section id="subscriptions" className="py-12 md:py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos abonnements</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choisissez le plan qui correspond le mieux à vos besoins de protection
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col bg-card border-border ${
                plan.popular
                  ? "border-primary shadow-lg relative ring-1 ring-primary/20"
                  : "hover:border-primary/50 transition-colors"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">Populaire</span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    {billingPeriod === "yearly"
                      ? `${(Number.parseFloat(plan.price.replace(",", ".")) * 0.8 * 12).toFixed(2)}€`
                      : plan.price}
                  </span>
                  <span className="text-muted-foreground">{billingPeriod === "yearly" ? "/an" : "/mois"}</span>
                </div>
                <Accordion type="multiple" className="w-full">
                  {plan.features.map((feature, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                      <div className="flex items-start gap-2 py-1">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div className="flex-grow">
                          <AccordionTrigger
                            className={`p-0 hover:no-underline ${feature.isHeader ? "font-medium text-primary" : ""}`}
                          >
                            <span className="text-left">{feature.name}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground pt-1 pb-2">
                            {feature.details}
                          </AccordionContent>
                        </div>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  variant={plan.popular ? "default" : "default"}
                  onClick={() => handleSubscribe(plan.name, plan.price)}
                >
                  S'abonner
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <PaymentModal
          isOpen={paymentModalOpen}
          onClose={() => setPaymentModalOpen(false)}
          planName={selectedPlan.name}
          planPrice={selectedPlan.price}
          isYearly={billingPeriod === "yearly"}
        />
      )}
    </section>
  )
}
