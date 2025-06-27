import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-commerce App",
    description: "Une application e-commerce complète avec panier d'achat et paiement.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Next.js", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Un tableau de bord d'analyse de données avec graphiques interactifs.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Chart.js", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Blog Personnel",
    description: "Un blog avec système de gestion de contenu personnalisé.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-lg text-muted-foreground">Découvrez une sélection de mes travaux récents</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 mt-auto">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
