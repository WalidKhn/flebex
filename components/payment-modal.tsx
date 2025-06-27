"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardContent, Card } from "@/components/ui/card"
import { Check, CreditCard, Lock } from "lucide-react"

interface PaymentModalProps {
    isOpen: boolean
    onClose: () => void
    planName: string
    planPrice: string
    isYearly: boolean
}

export default function PaymentModal({ isOpen, onClose, planName, planPrice, isYearly }: PaymentModalProps) {
    const [paymentStep, setPaymentStep] = useState<"details" | "card" | "processing" | "success">("details")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmitDetails = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch("/api/checkout_sessions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ priceId: getStripePriceId(planName, isYearly) }),
        })
        const data = await res.json()
        if (data.url) window.location.href = data.url
    }
    function getStripePriceId(planName: string, isYearly: boolean): string {
        const key = `${planName.toLowerCase().replace(/\s+/g, "_")}_${isYearly ? "yearly" : "monthly"}`
        const priceMap: Record<string, string> = {
            pack_sécurité_premium_monthly: "price_1Recqb2Nv2xicDYpeUKRvt6C",
            pack_sécurité_avancée_monthly: "price_1Recqp2Nv2xicDYpNe0tbf0r",
            pack_sécurité_expert_monthly: "price_1RecrY2Nv2xicDYpYQPJoalt",
            pack_sécurité_entreprise_monthly: "price_1Recrt2Nv2xicDYphw1oRxOl",

            pack_sécurité_premium_yearly: "price_def",
            pack_sécurité_avancée_yearly: "price_ghi",
            pack_sécurité_expert_yearly: "price_jkl",
            pack_sécurité_entreprise_yearly: "price_mno",
        }
        return priceMap[key]
    }

    const handleSubmitCard = (e: React.FormEvent) => {
        e.preventDefault()
        setPaymentStep("processing")

        // Simuler un traitement de paiement
        setTimeout(() => {
            setPaymentStep("success")
        }, 2000)
    }

    const handleClose = () => {
        onClose()
        // Reset state after modal is closed
        setTimeout(() => {
            setPaymentStep("details")
            setFormData({
                name: "",
                email: "",
                cardNumber: "",
                expiry: "",
                cvc: "",
            })
        }, 300)
    }

    const formatPrice = (price: string) => {
        const numericPrice = Number.parseFloat(price.replace(",", ".").replace("€", ""))
        return isYearly ? `${(numericPrice * 0.8 * 12).toFixed(2)}€` : price
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[500px] bg-card border-border">
                <DialogHeader>
                    <DialogTitle>{paymentStep === "success" ? "Paiement réussi !" : `S'abonner au ${planName}`}</DialogTitle>
                    <DialogDescription>
                        {paymentStep === "success"
                            ? "Votre abonnement a été activé avec succès."
                            : `Abonnement ${isYearly ? "annuel" : "mensuel"} à ${formatPrice(planPrice)}${isYearly ? "/an" : "/mois"
                            }`}
                    </DialogDescription>
                </DialogHeader>

                {paymentStep === "details" && (
                    <form onSubmit={handleSubmitDetails}>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Nom complet</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Jean Dupont"
                                    required
                                    className="bg-background border-border"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jean.dupont@exemple.com"
                                    required
                                    className="bg-background border-border"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleClose}
                                className="border-primary text-primary hover:bg-primary/10"
                            >
                                Annuler
                            </Button>
                            <Button type="submit" className="bg-primary hover:bg-primary/90">
                                Continuer
                            </Button>
                        </div>
                    </form>
                )}

                {paymentStep === "card" && (
                    <form onSubmit={handleSubmitCard}>
                        <div className="grid gap-4 py-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Lock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">Paiement sécurisé</span>
                            </div>

                            <Card className="bg-background border-border">
                                <CardContent className="p-4">
                                    <div className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="cardNumber">Numéro de carte</Label>
                                            <div className="relative">
                                                <Input
                                                    id="cardNumber"
                                                    name="cardNumber"
                                                    value={formData.cardNumber}
                                                    onChange={handleChange}
                                                    placeholder="1234 5678 9012 3456"
                                                    required
                                                    className="pl-10 bg-background border-border"
                                                />
                                                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="expiry">Date d'expiration</Label>
                                                <Input
                                                    id="expiry"
                                                    name="expiry"
                                                    value={formData.expiry}
                                                    onChange={handleChange}
                                                    placeholder="MM/AA"
                                                    required
                                                    className="bg-background border-border"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="cvc">CVC</Label>
                                                <Input
                                                    id="cvc"
                                                    name="cvc"
                                                    value={formData.cvc}
                                                    onChange={handleChange}
                                                    placeholder="123"
                                                    required
                                                    className="bg-background border-border"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setPaymentStep("details")}
                                className="border-primary text-primary hover:bg-primary/10"
                            >
                                Retour
                            </Button>
                            <Button type="submit" className="bg-primary hover:bg-primary/90">
                                Payer
                            </Button>
                        </div>
                    </form>
                )}

                {paymentStep === "processing" && (
                    <div className="py-8 flex flex-col items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                        <p>Traitement de votre paiement en cours...</p>
                    </div>
                )}

                {paymentStep === "success" && (
                    <div className="py-6">
                        <div className="flex flex-col items-center justify-center mb-6">
                            <div className="rounded-full bg-primary/10 p-3 mb-4">
                                <Check className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium">Merci pour votre abonnement !</h3>
                            <p className="text-center text-muted-foreground mt-2">
                                Vous êtes maintenant abonné au {planName}. Un email de confirmation a été envoyé à {formData.email}.
                            </p>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4 mb-4 border border-border">
                            <h4 className="font-medium mb-2">Détails de l'abonnement :</h4>
                            <ul className="space-y-1 text-sm">
                                <li className="flex justify-between">
                                    <span>Plan :</span>
                                    <span className="font-medium">{planName}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Période :</span>
                                    <span>{isYearly ? "Annuel" : "Mensuel"}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Montant :</span>
                                    <span className="font-medium">
                                        {formatPrice(planPrice)}
                                        {isYearly ? "/an" : "/mois"}
                                    </span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Date de début :</span>
                                    <span>{new Date().toLocaleDateString()}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={handleClose} className="bg-primary hover:bg-primary/90">
                                Fermer
                            </Button>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
