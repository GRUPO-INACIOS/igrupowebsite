import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    { icon: Mail, text: "Departamento de Comunicação: contato@grupoinacios.com", href: "mailto:contato@grupoinacios.com" },
    { icon: Mail, text: "Departamento Comercial: depcomercial@grupoinacios.com", href: "mailto:depcomercial@grupoinacios.com" },
    { icon: Phone, text: "+244 94933 139 566 / 924 794 016" },
    { icon: MapPin, text: "Angola, Luanda, Avenida Universitária Dr. Agostinho Neto Ulengo Center" },
  ];

  const socialMedia = [
    { icon: Instagram, href: "https://www.instagram.com/grupoinacios.gi/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/GrupoInacio", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/grupoinacios/posts/?feedView=all", label: "LinkedIn" },
  ];

  return (
    <section id="contato" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Estamos prontos para transformar suas ideias em realidade
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-xl mx-auto text-left"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Informações de Contato</h3>
          <div className="space-y-4 mb-8">
            {contactInfo.map((info) => (
              <a
                key={info.text}
                href={info.href}
                className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-lg hover:bg-primary-foreground/10 transition-colors"
              >
                <info.icon className="h-6 w-6 flex-shrink-0" />
                <span>{info.text}</span>
              </a>
            ))}
          </div>

          <h4 className="text-xl font-semibold mb-4 text-center">Redes Sociais</h4>
          <div className="flex justify-center gap-4">
            {socialMedia.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 bg-primary-foreground/5 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
