"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous implémenteriez la logique d'envoi du formulaire
    console.log("Form submitted:", formData)
    alert("Merci pour votre message ! Je vous répondrai dès que possible.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Me Contacter</h2>
          <p className="text-lg text-muted-foreground">Vous avez un projet en tête ? N'hésitez pas à me contacter !</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">votre.email@exemple.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Téléphone</h4>
                  <p className="text-muted-foreground">+33 6 12 34 56 78</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Localisation</h4>
                  <p className="text-muted-foreground">Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
