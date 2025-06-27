import { Card, CardContent } from "@/components/ui/card"
import { Code, Figma, Globe } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
          <p className="text-lg text-muted-foreground">
            Développeur passionné avec une expertise en création d'interfaces utilisateur modernes et réactives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4">Qui suis-je</h3>
            <p className="text-muted-foreground mb-4">
              Je suis un développeur front-end spécialisé dans la création d'applications web modernes avec React. Avec
              plusieurs années d'expérience, j'ai travaillé sur divers projets allant des sites vitrines aux
              applications complexes.
            </p>
            <p className="text-muted-foreground">
              Ma passion est de créer des expériences utilisateur intuitives et performantes qui répondent aux besoins
              des utilisateurs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Mes compétences</h3>
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <Code className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Développement Front-End</h4>
                    <p className="text-sm text-muted-foreground">React, Next.js, JavaScript, TypeScript, HTML, CSS</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <Figma className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Design UI/UX</h4>
                    <p className="text-sm text-muted-foreground">Tailwind CSS, Styled Components, Responsive Design</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Outils & Autres</h4>
                    <p className="text-sm text-muted-foreground">Git, GitHub, VS Code, Figma, Notion</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
