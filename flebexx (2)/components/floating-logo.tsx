import Link from "next/link"
import Image from "next/image"

export default function FloatingLogo() {
  return (
    <div className="fixed top-4 left-4 z-[60]">
      <Link href="/" className="block">
        <div className="relative h-32 w-[500px] logo-glow">
          <Image src="/images/flebex-logo-transparent.png" alt="Flebex Logo" fill className="object-contain" priority />
        </div>
      </Link>
    </div>
  )
}
