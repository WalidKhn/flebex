import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-28 h-14">
                <Image src="/images/flebex-logo-transparent.png" alt="Flebex Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Votre partenaire de confiance pour la protection contre les arnaques et les fraudes en ligne.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  Type d'arnaque & fraude
                </Link>
              </li>
              <li>
                <Link href="#subscriptions" className="hover:text-primary transition-colors">
                  Abonnements
                </Link>
              </li>
              <li>
                <Link href="#expert" className="hover:text-primary transition-colors">
                  Expert digital privé
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Guide de sécurité
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Témoignages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>contact@flebex.fr</li>
              <li>+33 1 23 45 67 89</li>
              <li>123 Rue de la Protection</li>
              <li>75001 Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Flebex. Tous droits réservés.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>{" "}
            |
            <Link href="#" className="hover:text-primary transition-colors ml-2">
              Conditions d'utilisation
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
