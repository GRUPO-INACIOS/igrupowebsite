import { motion } from "framer-motion";
import { Target, Eye, Award, Lightbulb, Users, Shield } from "lucide-react";
import missao from "@/assets/images/missao.png"
import visao from "@/assets/images/visao.png"

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
		<section id="valores" className="py-32 bg-background relative overflow-hidden">
			{/* Decorative background elements */}
			<div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
			<div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-7xl mx-auto">
					{/* Mission & Vision Grid */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
						{/* Mission */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							<div className="relative group p-10 bg-card/50 backdrop-blur-sm border border-border/50 rounded-[2rem] hover:border-primary/30 transition-all duration-500 h-full overflow-hidden">
								<div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity">
									<img src={missao} alt="" className="h-32 w-32 object-contain" />
								</div>
								<div className="relative z-10">
									<div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
										<img src={missao} alt="Ícone Missão" className="h-8 w-8 object-contain" />
									</div>
									<h3 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Missão</h3>
									<p className="text-lg text-muted-foreground leading-relaxed max-w-md">
										Oferecer soluções integradas e criativas que unem imagem, tecnologia, estratégia,
										educação e experiência, promovendo o crescimento pessoal, profissional e institucional.
									</p>
								</div>
							</div>
						</motion.div>

						{/* Vision */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							<div className="relative group p-10 bg-card/50 backdrop-blur-sm border border-border/50 rounded-[2rem] hover:border-primary/30 transition-all duration-500 h-full overflow-hidden">
								<div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity">
									<img src={visao} alt="" className="h-32 w-32 object-contain" />
								</div>
								<div className="relative z-10">
									<div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
										<img src={visao} alt="Ícone Visão" className="h-8 w-8 object-contain" />
									</div>
									<h3 className="text-3xl font-bold text-foreground mb-6 tracking-tight">Visão</h3>
									<p className="text-lg text-muted-foreground leading-relaxed max-w-md">
										Ser referência nacional em comunicação, tecnologia e eventos, reconhecido por entregar
										resultados impactantes e experiências transformadoras.
									</p>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Values Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true, margin: "-100px" }}
					>
						<div className="text-center mb-12">
							<span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
								Nossos Pilares
							</span>
							<h3 className="text-4xl font-bold text-foreground tracking-tight">Valores fundamentais</h3>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{values.map((value, index) => (
								<motion.div
									key={value.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true, amount: 0.2 }}
									className="group relative p-6 bg-card/40 backdrop-blur-sm border border-border/40 rounded-2xl hover:bg-card hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-default overflow-hidden"
								>
									<div className="flex items-center gap-5 relative z-10">
										<div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
											<value.icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
										</div>
										<p className="font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">{value.title}</p>
									</div>
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
