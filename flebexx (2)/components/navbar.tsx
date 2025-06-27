"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-16 relative">
        <Link href="/" className="flex items-center relative">
          {/* Logo géant ancré dans la navbar */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-[200px] w-[400px] logo-glow z-[100]">
            <Image
              src="/images/flebex-logo-transparent.png"
              alt="Flebex Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Espace réservé invisible pour maintenir la mise en page */}
          <div className="w-32 h-10 invisible"></div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-sm">
          <Link href="#home" className="hover:text-primary transition-colors whitespace-nowrap">
            Accueil
          </Link>
          <Link href="#about" className="hover:text-primary transition-colors whitespace-nowrap">
            Type d'arnaque & fraude
          </Link>
          <Link href="#subscriptions" className="hover:text-primary transition-colors whitespace-nowrap">
            Abonnements
          </Link>
          <Link href="#expert" className="hover:text-primary transition-colors whitespace-nowrap">
            Expert digital privé
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors whitespace-nowrap">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground z-[101]"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border z-[101] relative">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#home" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Accueil
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Type d'arnaque & fraude
            </Link>
            <Link href="#subscriptions" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Abonnements
            </Link>
            <Link href="#expert" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Expert digital privé
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
