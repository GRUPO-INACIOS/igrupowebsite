import { motion } from "framer-motion";
import { Target, Eye, Award, Lightbulb, Users, Shield } from "lucide-react";

const Values = () => {
  const values = [
    { icon: Award, title: "Excelência em cada detalhe" },
    { icon: Lightbulb, title: "Criatividade com propósito" },
    { icon: Users, title: "Compromisso com o cliente" },
    { icon: Users, title: "Trabalho colaborativo" },
    { icon: Shield, title: "Responsabilidade e ética" },
    { icon: Lightbulb, title: "Inovação contínua" },
  ];

  return (
    <section id="valores" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-start gap-6 p-8 bg-card border border-border rounded-xl hover:shadow-medium transition-all duration-300">
              <Target className="h-12 w-12 text-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Oferecer soluções integradas e criativas que unem imagem, tecnologia, estratégia, 
                  educação e experiência, promovendo o crescimento pessoal, profissional e institucional.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-start gap-6 p-8 bg-card border border-border rounded-xl hover:shadow-medium transition-all duration-300">
              <Eye className="h-12 w-12 text-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser referência nacional em comunicação, tecnologia e eventos, reconhecido por entregar 
                  resultados impactantes e experiências transformadoras.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:shadow-medium transition-all duration-300 group"
                >
                  <value.icon className="h-8 w-8 text-foreground group-hover:scale-110 transition-transform flex-shrink-0" />
                  <p className="text-sm font-medium text-card-foreground">{value.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Values;
