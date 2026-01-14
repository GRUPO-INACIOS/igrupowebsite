import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Target, Users, MapPin, Milestone } from "lucide-react";
import imgHero from "@/assets/images/campaign/ARTE FOTOS CAMPANHA 1.png";
import imgAction1 from "@/assets/images/campaign/01.png";
import imgAction2 from "@/assets/images/campaign/05.png";
import imgAction3 from "@/assets/images/campaign/07.png";
import imgAction4 from "@/assets/images/campaign/25.png";
import imgAction5 from "@/assets/images/campaign/08.png";

const SocialAction = () => {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />

			{/* Hero Section */}
			<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-primary">
					<img
						src={imgHero}
						className="w-full h-full object-cover opacity-40"
						alt="Janeiro Solidário"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />
				</div>

				<div className="container mx-auto px-6 relative z-10 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-white/10 text-white text-sm font-bold uppercase tracking-widest mb-6">
							<Heart className="h-4 w-4 text-" /> Responsabilidade Social
						</span>
						<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
							Janeiro Solidário
						</h1>
					</motion.div>
				</div>
			</section>

			{/* Intro Section */}
			<section className="py-24 relative">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="text-center mb-20"
						>
							<h2 className="text-3xl md:text-4xl font-bold mb-8">O Projeto</h2>
							<p className="text-xl text-muted-foreground leading-relaxed">
								O <span className="text-foreground font-semibold">Grupo Inácios</span>, com o intuito de poder oferecer um janeiro diferente às famílias que passam dificuldades, tirando o conceito de janeiro o mês da Fome, criou o projecto anual o <span className="text-foreground font-semibold">Janeiro Solidário</span>.
							</p>
							<p className="text-xl text-muted-foreground leading-relaxed mt-4">
								Este projecto visa ajudar famílias mais necessitadas, pois bem sabemos que por mais que seja um mês da fome, tem sempre alguém disposto a ajudar. O projeto nasceu em 2024 e executou suas ações em 2025 para combater a vulnerabilidade extrema no bairro <span className="text-primary font-medium">Mayé-Mayé</span>, Distrito Urbano do Sequele.
							</p>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className="bg-card/50 backdrop-blur-sm border border-border/50 p-10 rounded-[2.5rem] relative overflow-hidden group"
							>
								<div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
									<Target className="h-32 w-32" />
								</div>
								<div className="relative z-10">
									<div className="p-4 bg-primary/10 rounded-2xl inline-block mb-6">
										<Target className="h-8 w-8 text-primary" />
									</div>
									<h3 className="text-2xl font-bold mb-4">Nosso Objetivo</h3>
									<p className="text-muted-foreground leading-relaxed">
										Criar dignidade, acesso e oportunidade para comunidades desassistidas, transformando realidades através da ação direta.
									</p>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className="bg-card/50 backdrop-blur-sm border border-border/50 p-10 rounded-[2.5rem] relative overflow-hidden group"
							>
								<div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
									<Milestone className="h-32 w-32" />
								</div>
								<div className="relative z-10">
									<div className="p-4 bg-primary/10 rounded-2xl inline-block mb-6">
										<MapPin className="h-8 w-8 text-primary" />
									</div>
									<h3 className="text-2xl font-bold mb-4">Localização</h3>
									<p className="text-muted-foreground leading-relaxed">
										Bairro Mayé-Mayé, Distrito Urbano do Sequele. Um compromisso com aqueles que mais precisam de nós.
									</p>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-24 bg-secondary/30">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Impacto Visual</span>
						<h2 className="text-4xl font-bold tracking-tight">Galeria da Campanha</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[imgAction1, imgAction2, imgAction3, imgAction4, imgAction5].map((img, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="relative h-80 rounded-3xl overflow-hidden group"
							>
								<img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Ação ${index + 1}`} />
								<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Grupo Inácios Branding */}
			<section className="py-24 border-t border-border/50">
				<div className="container mx-auto px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl font-bold mb-8">Grupo Inácios</h2>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
							Agregado de empresas que eternizam momentos, posicionam marcas e contribuem com responsabilidade social.
						</p>

						<div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-foreground/70 uppercase tracking-widest mb-12">
							<span>Inácio Photos</span>
							<span className="text-primary">•</span>
							<span>I.M Produções</span>
							<span className="text-primary">•</span>
							<span>I Media</span>
							<span className="text-primary">•</span>
							<span>I Eventos</span>
							<span className="text-primary">•</span>
							<span>I Acadmy</span>
							<span className="text-primary">•</span>
							<span>I Tech</span>
						</div>

						<div className="inline-flex p-8 bg-card border border-border rounded-[2rem] text-left max-w-2xl mx-auto group hover:border-primary/30 transition-all">
							<div className="mr-6 p-4 bg-primary/10 rounded-2xl self-start group-hover:scale-110 transition-transform">
								<Heart className="h-6 w-6 text-primary" />
							</div>
							<div>
								<h4 className="text-xl font-bold mb-2">Missão Social</h4>
								<p className="text-muted-foreground">Impulsionar marcas, registrar histórias e transformar comunidades.</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default SocialAction;
