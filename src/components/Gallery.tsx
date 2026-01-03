"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";

// --- TIPAGEM ---
type ImageImport = {
  src: string;
  height?: number;
  width?: number;
  [key: string]: any;
};

type ImageType = string | ImageImport;

type GalleryItem = {
  id: number;
  image: ImageType;
  title: string;
  category: string;
};

// --- UTILITÁRIO PARA PEGAR SRC ---
const getSrc = (img: ImageType): string => {
  if (!img) return "";
  if (typeof img === "string") return img;
  if ("src" in img && typeof img.src === "string") return img.src;
  return "";
};

// --- GALLERY ITEMS ---
import iprodImg from "../assets/iprod_1.jpg";
import eventsImg from "../assets/events.jpg";

import iphoto1 from "../assets/iphoto_1.jpg";
import iphoto2 from "../assets/iphoto_2.jpg";
import iphoto3 from "../assets/iphoto_3.jpg";
import iphoto4 from "../assets/iphoto_4.jpg";
import iphoto5 from "../assets/iphoto_5.jpg";
import iphoto6 from "../assets/iphoto_6.jpg";

import iacademy1 from "../assets/iacademy_1.jpg";
import iacademy2 from "../assets/iacademy_2.jpg";
import iacademy3 from "../assets/iacademy_3.jpg";
import iacademy4 from "../assets/iacademy_4.jpg";

const galleryItems: Record<string, GalleryItem[]> = {
  photos: [
    { id: 1, image: iphoto1, title: "Foto 1", category: "Inácio Photos" },
    { id: 2, image: iphoto2, title: "Foto 2", category: "Inácio Photos" },
    { id: 3, image: iphoto3, title: "Foto 3", category: "Inácio Photos" },
    { id: 4, image: iphoto4, title: "Foto 4", category: "Inácio Photos" },
    { id: 5, image: iphoto5, title: "Foto 5", category: "Inácio Photos" },
    { id: 6, image: iphoto6, title: "Foto 6", category: "Inácio Photos" },
  ],
  // producoes: [
  //   { id: 7, image: iprodImg, title: "Produção 1", category: "I.M Produções" },
  // ],
  // events: [
  //   { id: 9, image: eventsImg, title: "Evento 1", category: "I Eventos" },
  // ],
  IAcademy: [
    { id: 10, image: iacademy1, title: "Academy 1", category: "I Academy" },
    { id: 11, image: iacademy2, title: "Academy 2", category: "I Academy" },
    { id: 12, image: iacademy3, title: "Academy 3", category: "I Academy" },
    { id: 13, image: iacademy4, title: "Academy 4", category: "I Academy" },
  ],
};

// --- CAROUSEL COMPONENT ---
const GalleryCarousel = ({ items }: { items: GalleryItem[] }) => {
  const pluginRef = useRef<AutoplayType | null>(null);

  useEffect(() => {
    pluginRef.current = Autoplay({ delay: 3000, stopOnInteraction: true });
    return () => {
      pluginRef.current?.destroy();
      pluginRef.current = null;
    };
  }, []);

  return (
    <Carousel
      plugins={pluginRef.current ? [pluginRef.current] : []}
      onMouseEnter={() => pluginRef.current?.stop?.()}
      onMouseLeave={() => pluginRef.current?.reset?.()}
      opts={{ align: "start", loop: true }}
      className="w-full"
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
              <img
                src={getSrc(item.image)}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-primary-foreground font-semibold text-lg">
                    {item.title}
                  </p>
                  <p className="text-primary-foreground/80 text-sm">
                    {item.category}
                  </p>
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

// --- GALLERY PRINCIPAL ---
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

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-7xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
            <TabsTrigger value="photos">Inácio Photos</TabsTrigger>
            <TabsTrigger value="IAcademy">I Academy</TabsTrigger>
            <TabsTrigger value="producoes">I.M Produções</TabsTrigger>
            <TabsTrigger value="events">I Eventos</TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            <GalleryCarousel items={galleryItems.photos} />
          </TabsContent>

          <TabsContent value="IAcademy">
            <GalleryCarousel items={galleryItems.IAcademy} />
          </TabsContent>
{/* 
          <TabsContent value="producoes">
            <GalleryCarousel items={galleryItems.producoes} />
          </TabsContent>

          <TabsContent value="events">
            <GalleryCarousel items={galleryItems.events} />
          </TabsContent> */}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
