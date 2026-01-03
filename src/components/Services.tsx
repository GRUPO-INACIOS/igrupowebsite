import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Mic2, Heart, User } from "lucide-react";

const packages = [
  {
    icon: Building2,
    title: "Pacotes para Empresas",
    description:
      "Soluções completas de branding, marketing digital, eventos corporativos e presença online para empresas de todos os portes.",
    features: ["Identidade Visual", "Marketing Digital", "Eventos Corporativos", "Websites e Sistemas"],
  },
  {
    icon: Mic2,
    title: "Pacotes para Artistas",
    description:
      "Produções audiovisuais, gestão de redes sociais, divulgação de trabalhos e cobertura de eventos artísticos.",
    features: ["Clipes e Vídeos Líricos", "Gestão de Redes Sociais", "Fotografia Profissional", "Promoção Digital"],
  },
  {
    icon: Heart,
    title: "Pacotes para I Média",
    description:
      "Planejamento completo, cobertura fotográfica e audiovisual, decoração e gestão de eventos especiais.",
    features: ["Casamentos", "Aniversários", "Formaturas", "Eventos Corporativos"],
  },
  {
    icon: User,
    title: "Pacotes Individuais",
    description:
      "Ensaios fotográficos, desenvolvimento pessoal, consultoria profissional e criação de portfólios digitais.",
    features: ["Ensaios Fotográficos", "Portfólios Digitais", "Consultoria de Carreira", "Presença Digital"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Serviços e Pacotes</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Escolha o pacote ideal para suas necessidades
          </p>
        </motion.div>

        {/* Cards de pacotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <pkg.icon className="h-12 w-12 text-primary-foreground mb-4" />
              <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">{pkg.description}</p>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-primary-foreground/80"
                  >
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Botão WhatsApp com mensagem pré-preenchida */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href={`https://wa.me/244933139566?text=${encodeURIComponent(
                    `Olá, quero solicitar um orçamento do pacote: ${pkg.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" className="w-full">
                    Solicitar Orçamento
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
