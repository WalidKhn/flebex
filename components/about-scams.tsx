import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, CreditCard, Phone, Globe, Heart, TrendingUp } from "lucide-react"

export default function AboutScams() {
  return (
    <section id="about" className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Type d'arnaques et fraude</h2>
          <p className="text-lg text-muted-foreground">
            Apprenez à reconnaître ces techniques d'escroquerie et de fraude pour mieux vous en protéger
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>Phishing par mail & sms</span>
              </CardTitle>
              <CardDescription>Des messages frauduleux qui semblent provenir d'entreprises légitimes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Les escrocs envoient des emails ou SMS qui imitent des entreprises légitimes pour vous inciter à
                partager vos informations personnelles ou financières. Ils peuvent contenir des liens vers des sites web
                frauduleux ou des pièces jointes malveillantes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <span>Fraude à la carte bancaire</span>
              </CardTitle>
              <CardDescription>
                Vol d'informations de carte de crédit pour effectuer des achats frauduleux
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Les fraudeurs peuvent voler vos informations de carte bancaire via des sites web non sécurisés, des
                skimmers sur les distributeurs automatiques, ou des fuites de données. Ils utilisent ensuite ces
                informations pour effectuer des achats non autorisés.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>Arnaques téléphoniques</span>
              </CardTitle>
              <CardDescription>
                Appels frauduleux visant à obtenir de l'argent ou des informations personnelles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Les escrocs se font passer pour des organismes officiels, des banques ou des services techniques pour
                vous soutirer de l'argent ou des informations personnelles. Ils peuvent utiliser des tactiques
                d'intimidation ou créer un faux sentiment d'urgence.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Faux sites web</span>
              </CardTitle>
              <CardDescription>Sites web frauduleux imitant des entreprises légitimes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ces sites web sont conçus pour ressembler à des sites légitimes afin de vous inciter à saisir vos
                identifiants, informations de paiement ou autres données personnelles. Ils peuvent être accessibles via
                des liens dans des emails de phishing ou des publicités.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <span>Arnaque à la romance (love scam)</span>
              </CardTitle>
              <CardDescription>Manipulation sentimentale pour extorquer de l'argent</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Les escrocs créent de faux profils sur des sites de rencontres ou réseaux sociaux et établissent une
                relation sentimentale avec leurs victimes. Après avoir gagné leur confiance, ils inventent des
                situations d'urgence nécessitant un soutien financier.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Faux placements et arnaques financières</span>
              </CardTitle>
              <CardDescription>Promesses de rendements exceptionnels pour attirer les investisseurs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ces arnaques promettent des rendements financiers irréalistes avec peu ou pas de risque. Les escrocs
                utilisent souvent des termes techniques complexes et créent de faux sites d'investissement pour paraître
                légitimes et convaincre les victimes d'investir.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
