import { motion } from "framer-motion";
import { Camera, Film, Megaphone, CalendarClock, GraduationCap, Code2 } from "lucide-react";
import iphotoImg from "@/assets/iphoto.jpg";
import imediaImg from "@/assets/imedia.jpg";
import immImg from "@/assets/iprod.jpg";
import isoImg from "@/assets/ieventos.jpg";
import technologyImg from "@/assets/itechsolution.jpg";
import iacademy from "@/assets/iacademy.jpg"

const companies = [
  {
    name: "Inácio Photos",
    icon: Camera,
    description: "Somos uma empresa especializada em capturar e eternizar os momentos mais especiais da sua vida, transformando histórias e emoções em memórias fotográficas que perduram para sempre. Especializada em eternizar momentos, histórias e emoções. Regista os melhores momentos da sua vida com InácioPhotos. ",
    services: [
      "Sessões de fotográficas",
      "Cobertura de eventos (casamentos, aniversários e mais.)",
      "Fotogafias comerciais",
    ],
    image: iphotoImg,
  },
  {
    name: "I.M Produções",
    icon: Film,
    description: "Sua empresa de audiovisual especializada em gravações de todos tipos de vídeos. Vídeos Publicitários, Vídeos Clipes, Vídeos Lyric, e registro de eventos. Temos pacotes para pequenas médias e grandes empresas, e para artistas novos e renomados. ",
    services: [
      "Produção de vídeo",
      "Captação e Gravação",
      "Pós-produção",
    ],
    image: immImg,
  },
  {
    name: "I Media",
    icon: Megaphone,
    description: "Sua agência de marketing digital especializada em gestão de medias sociais para empresas e pessoas singulares,  com foco de dar visibilidade em empresas e pessoas no mundo digtal. Temos pacotes para empresas pequenas medias e grandes. E pacotes especiais para pessoas singulares. ",
    services: [
      "Marketing digital estratégico",
      "Gestão de mídias sociais",
      "Branding e posicionamento",
    ],
    slogan: "Inovamos para impulsionar o seu futuro.",
    image: imediaImg,
  },
  {
    name: "I Eventos",
    icon: CalendarClock,
    description: "Sua organizadora de eventos inesquecíveis e memoráveis, especializada em organizar, informar e controlar o seu evento, proporcionando um ambiente agradável e organizado. Temos como foco a organização de eventos corporativos tais como: Palestras, Workshops, Mentorias, lançamentos de obras, Mentoria. Mais festivos: Casamentos e Aniversários. ",
    image: isoImg,
    services: [
      "Organização de eventos sociais e privados",
      "Eventos corporativos e empresariais",
      "Animação e entretenimento",
    ],
  },
  {
    name: "I Academy",
    icon: GraduationCap,
    description: "Centro de formação profissional que capacita empreendedores e líderes através de cursos e mentorias. Promove crescimento pessoal, profissional e institucional.",
    services: [
      "Formação modular certificada",
      "Foramações para empresas",
      "formação inicial e qualificação profissional",
    ],
    image: iacademy,
  },
  {
    name: "I Tech Solutions",
    icon: Code2,
    tagline: "Conectando Ideias à Inovação",
    description: "É uma empresa de tecnologia do Grupo Inácios, dedicada ao desenvolvimento de soluções digitais inteligentes e personalizadas. Oferecendo serviços de desennvolvmento.",
    services: [
      "Desenvolvimento de Websites e Portfólios",
      "Automação de Processos Empresariais",
      "Consultoria em Transformação Digital",
    ],
    slogan: "Inovamos para impulsionar o seu futuro.",
    image: technologyImg,
  },
];

const CompanyCard = ({ company, index }: { company: typeof companies[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group"
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-elevated transition-all duration-500">
        <div className="relative h-64 overflow-hidden bg-muted">
          <img
            src={company.image}
            alt={company.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <company.icon className="h-12 w-12 text-primary-foreground mb-3" />
            <h3 className="text-2xl font-bold text-primary-foreground">{company.name}</h3>
            {company.tagline && (
              <p className="text-sm text-primary-foreground/80 italic mt-1">{company.tagline}</p>
            )}
          </div>
        </div>

        <div className="p-8">
          <p className="text-muted-foreground leading-relaxed mb-6">
            {company.description}
          </p>

          {company.services && (
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">Serviços Principais:</h4>
              <ul className="space-y-2">
                {company.services.map((service, idx) => (
                  <li key={idx} className="flex items-start text-sm text-muted-foreground">
                    <span className="mr-2">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {company.slogan && (
            <p className="text-sm italic text-muted-foreground mb-6 border-l-2 border-border pl-4">
              "{company.slogan}"
            </p>
          )}

        </div>
      </div>
    </motion.div>
  );
};

const Companies = () => {
  return (
    <section id="empresas" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Empresas do Grupo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça as empresas que formam o ecossistema integrado do Grupo Inácios,
            Temos um leque de serviços e pacotes que fazem a sua cara, tornamos os seu momentos
            mais especiais e a sua empresa mais lucrativa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {companies.map((company, index) => (
            <CompanyCard key={company.name} company={company} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
