import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import photographyImg from "@/assets/photography.jpg";
import technologyImg from "@/assets/technology.jpg";
import eventsImg from "@/assets/events.jpg";

import iphoto from "@/assets/iphoto.jpg";
import Autoplay from "embla-carousel-autoplay";

import iphoto1 from "@/assets/iphoto1.jpg"
import iphoto2 from "@/assets/iphoto2.jpg"
import iphoto3 from "@/assets/iphoto3.jpg"
import iphoto4 from "@/assets/iphoto4.jpg"

type GalleryItem = { id: number; image: string; title: string; category: string };

const galleryItems = {
  photos: [
    { id: 1, image: iphoto1, title: "Evento Social", category: "Social" },
    { id: 3, image: photographyImg, title: "Retrato Profissional", category: "Individual" },
    { id: 4, image: photographyImg, title: "Casamento", category: "Social" },
  ],
  producoes: [
    { id: 5, image: photographyImg, title: "Clipe Musical", category: "Artístico" },
    { id: 6, image: photographyImg, title: "Vídeo Institucional", category: "Corporativo" },
    { id: 7, image: photographyImg, title: "Cobertura de Evento", category: "Evento" },
    { id: 8, image: photographyImg, title: "Vídeo Lírico", category: "Artístico" },
  ],
  tech: [
    { id: 9, image: technologyImg, title: "Website Institucional", category: "Web" },
    { id: 10, image: technologyImg, title: "Aplicativo Mobile", category: "App" },
    { id: 11, image: technologyImg, title: "Sistema de Gestão", category: "Sistema" },
    { id: 12, image: technologyImg, title: "E-commerce", category: "Web" },
  ],
  eventos: [
    { id: 13, image: eventsImg, title: "Conferência Empresarial", category: "Corporativo" },
    { id: 14, image: eventsImg, title: "Lançamento de Produto", category: "Corporativo" },
    { id: 15, image: eventsImg, title: "Casamento Premium", category: "Social" },
    { id: 16, image: eventsImg, title: "Workshop", category: "Educacional" },
  ],
};

const GalleryCarousel = ({ items }: { items: GalleryItem[] }) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true })).current;

  return (
    <Carousel
      plugins={[plugin]}
      onMouseEnter={plugin.stop}
      onMouseLeave={plugin.reset}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-primary-foreground font-semibold text-lg">{item.title}</p>
                  <p className="text-primary-foreground/80 text-sm">{item.category}</p>
                </div>
              </div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <section id="galeria" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfólio
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça alguns dos nossos projetos realizados
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
            <TabsTrigger value="photos">Inácio Photos</TabsTrigger>
            <TabsTrigger value="producoes">I.M Produções</TabsTrigger>
            <TabsTrigger value="tech">I Tech Solutions</TabsTrigger>
            <TabsTrigger value="eventos">I Eventos</TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            <GalleryCarousel items={galleryItems.photos} />
          </TabsContent>

          <TabsContent value="producoes">
            <GalleryCarousel items={galleryItems.producoes} />
          </TabsContent>

          <TabsContent value="tech">
            <GalleryCarousel items={galleryItems.tech} />
          </TabsContent>

          <TabsContent value="eventos">
            <GalleryCarousel items={galleryItems.eventos} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
