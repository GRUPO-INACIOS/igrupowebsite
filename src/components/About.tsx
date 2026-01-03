import { motion } from "framer-motion";
import { Camera, Video, Megaphone, Calendar, GraduationCap, Code2 } from "lucide-react";

const segments = [
  { icon: Camera, title: "Fotografia Profissional", color: "text-foreground" },
  { icon: Video, title: "Produção Audiovisual", color: "text-foreground" },
  { icon: Megaphone, title: "Marketing e Comunicação", color: "text-foreground" },
  { icon: Calendar, title: "Eventos Corporativos", color: "text-foreground" },
  { icon: GraduationCap, title: "Formação Profissional", color: "text-foreground" },
  { icon: Code2, title: "Soluções Tecnológicas", color: "text-foreground" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre Nós
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            O <span className="font-semibold text-foreground">Grupo Inácios</span> é um coletivo de excelência, formado por cinco empresas
            especializadas que atuam de forma integrada para oferecer soluções completas nas áreas
            de imagem, comunicação, eventos e formação profissional.
            Nosso propósito é eternizar momentos, impulsionar marcas e transformar ideias
            em experiências memoráveis. Do registro visual à estratégia digital, da produção
            audiovisual à realização de eventos corporativos, cada empresa do grupo oferece
            soluções personalizadas, criativas e eficazes para atender às mais diversas
            necessidades de nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border border-border hover:shadow-medium transition-all duration-300 group cursor-default"
            >
              <segment.icon className={`h-12 w-12 mb-3 ${segment.color} group-hover:scale-110 transition-transform duration-300`} />
              <p className="text-sm font-medium text-center text-card-foreground">{segment.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
