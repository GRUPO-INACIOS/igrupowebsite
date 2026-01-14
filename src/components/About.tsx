import { motion } from "framer-motion";
import { Camera, Video, Megaphone, Calendar, GraduationCap, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/images/iacademy/iacademy_1.jpg";

const segments = [
	{ icon: Camera, title: "Fotografia Profissional" },
	{ icon: Video, title: "Produção Audiovisual" },
	{ icon: Megaphone, title: "Marketing Digital" },
	{ icon: Calendar, title: "Eventos Corporativos" },
	{ icon: GraduationCap, title: "I Academy" },
	{ icon: Code2, title: "Tech Solutions" },
];

const About = () => {
	return (
		<section id="sobre" className="py-32 bg-background relative overflow-hidden">
			{/* Decorative background elements */}
			<div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto mb-24">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true, margin: "-100px" }}
						className="flex-1"
					>
						<span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
							Nossa Essência
						</span>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
							Sobre Nós
						</h2>
						<div className="w-20 h-1 bg-primary/20 rounded-full mb-8" />
						<p className="text-lg text-muted-foreground leading-relaxed mb-8">
							O <span className="font-semibold text-foreground">Grupo Inácios</span> é um coletivo de excelência, formado por cinco empresas
							especializadas que atuam de forma integrada para oferecer soluções completas nas áreas
							de imagem, comunicação, eventos e formação profissional. Nosso propósito é eternizar momentos,
							impulsionar marcas e transformar ideias em experiências memoráveis. Do registro visual à estratégia digital,
							da produção audiovisual à realização de eventos corporativos, cada empresa do grupo oferece soluções personalizadas,
							criativas e eficazes para atender às mais diversas necessidades de nossos clientes.
						</p>
						<Button variant="outline" className="group/btn hover:bg-primary hover:text-white transition-all duration-300">
							Saiba mais
							<ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true, margin: "-100px" }}
						className="flex-1 relative"
					>
						<div className="relative rounded-[2.5rem] overflow-hidden group">
							<img
								src={aboutImg}
								alt="Equipe Grupo Inácios"
								className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

							<div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
								<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl relative">
									<div className="absolute -top-3 -right-3 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-pulse" />
									<p className="text-white leading-relaxed text-sm md:text-base italic border-l-2 border-primary/50 pl-4">
										"Criamos experiências que transformam a maneira como o mundo vê o seu negócio."
									</p>
									<div className="mt-4 flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
											<div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
										</div>
										<div>
											<p className="font-bold text-white text-sm">Grupo Inácios</p>
											<p className="text-[10px] text-white/60 uppercase tracking-widest">Inovação e Legado</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Elemento flutuante decorativo */}
						<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
					</motion.div>
				</div>

				<div className="relative mt-20">
					{/* Gradient Masks for smooth fade */}
					<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
					<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

					<div className="flex overflow-hidden">
						<motion.div
							className="flex gap-6 py-4"
							animate={{ x: ["0%", "-50%"] }}
							transition={{
								duration: 30,
								repeat: Infinity,
								ease: "linear"
							}}
						>
							{/* Duplicating the list for infinite effect */}
							{[...segments, ...segments].map((segment, index) => (
								<div
									key={`${segment.title}-${index}`}
									className="group relative flex flex-col items-center justify-center p-8 bg-card/40 backdrop-blur-sm border border-border/40 rounded-3xl hover:bg-card hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 cursor-default min-w-[200px]"
								>
									<div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
										<segment.icon className="h-6 w-6 transition-transform duration-500" />
									</div>
									<p className="text-[10px] font-bold text-center text-foreground/70 uppercase tracking-widest group-hover:text-primary transition-colors whitespace-nowrap">
										{segment.title}
									</p>
									<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-1/3 transition-all duration-500 rounded-full" />
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
