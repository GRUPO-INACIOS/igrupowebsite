import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Mic2, Heart, User, Check, ArrowRight } from "lucide-react";

const packages = [
	{
		icon: Building2,
		title: "Pacotes para Empresas",
		badge: "Corporate",
		description:
			"Soluções completas de branding, marketing digital, eventos corporativos e presença online para empresas de todos os portes.",
		features: ["Identidade Visual", "Marketing Digital", "Eventos Corporativos", "Websites e Sistemas"],
		color: "text-blue-500",
		bg: "bg-blue-500/10"
	},
	{
		icon: Mic2,
		title: "Pacotes para Artistas",
		badge: "Creative",
		description:
			"Produções audiovisuais, gestão de redes sociais, divulgação de trabalhos e cobertura de eventos artísticos.",
		features: ["Clipes e Vídeos Líricos", "Gestão de Redes Sociais", "Fotografia Profissional", "Promoção Digital"],
		color: "text-purple-500",
		bg: "bg-purple-500/10"
	},
	{
		icon: Heart,
		title: "Pacotes para I Média",
		badge: "Memories",
		description:
			"Planejamento completo, cobertura fotográfica e audiovisual, decoração e gestão de eventos especiais.",
		features: ["Casamentos", "Aniversários", "Formaturas", "Eventos Corporativos"],
		color: "text-rose-500",
		bg: "bg-rose-500/10"
	},
	{
		icon: User,
		title: "Pacotes Individuais",
		badge: "Personal",
		description:
			"Ensaios fotográficos, desenvolvimento pessoal, consultoria profissional e criação de portfólios digitais.",
		features: ["Ensaios Fotográficos", "Portfólios Digitais", "Consultoria de Carreira", "Presença Digital"],
		color: "text-emerald-500",
		bg: "bg-emerald-500/10"
	},
];

const Services = () => {
	return (
		<section id="servicos" className="py-24 relative overflow-hidden bg-[#0A0A0B] text-white">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />

			<div className="container mx-auto px-6 relative z-10">
				{/* Título da seção */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-20"
				>
					<span className="text-white font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Planos e Pacotes</span>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
						Soluções sob Medida
					</h2>
					<p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
						Escolha o pacote ideal para impulsionar sua marca ou eternizar seus momentos especiais.
					</p>
				</motion.div>

				{/* Cards de pacotes */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
					{packages.map((pkg, index) => (
						<motion.div
							key={pkg.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true, amount: 0.2 }}
							className="group relative flex flex-col p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-500"
						>
							<div className="flex justify-between items-start mb-8">
								<div className={`p-4 ${pkg.bg} rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
									<pkg.icon className={`h-7 w-7 ${pkg.color}`} />
								</div>
								<span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-white/10 px-3 py-1 rounded-full">
									{pkg.badge}
								</span>
							</div>

							<h3 className="text-2xl font-bold mb-3 tracking-tight text-white">{pkg.title}</h3>
							<p className="text-gray-400 text-sm mb-8 leading-relaxed">
								{pkg.description}
							</p>

							<div className="space-y-4 mb-10 flex-grow">
								{pkg.features.map((feature) => (
									<div
										key={feature}
										className="flex items-center gap-3 text-sm text-gray-300"
									>
										<div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
											<Check className="h-3 w-3 text-green-500" />
										</div>
										{feature}
									</div>
								))}
							</div>

							{/* Botão WhatsApp */}
							<a
								href={`https://wa.me/244933139566?text=${encodeURIComponent(
									`Olá, quero solicitar um orçamento do pacote: ${pkg.title}`
								)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="block mt-auto"
							>
								<Button
									variant="outline"
									className="w-full rounded-2xl py-6 h-auto border-white/10 bg-transparent text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 group/btn"
								>
									Orçamento
									<ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
								</Button>
							</a>

							{/* Hover Glow Effect */}
							<div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
