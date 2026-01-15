import { motion } from "framer-motion";
import { Camera, Film, Megaphone, CalendarClock, GraduationCap, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import iphotoImg from "@/assets/images/iphoto/iphoto.jpg";
import imediaImg from "@/assets/images/imedia/imedia.jpg";
import immImg from "@/assets/images/iprod/iprod.jpg";
import isoImg from "@/assets/images/ieventos/ieventos.jpg";
import technologyImg from "@/assets/images/itechsolution/itechsolution.jpg";
import iacademy from "@/assets/images/iacademy/iacademy.jpg"

const companies = [
	{
		name: "Inácio Photos",
		icon: Camera,
		description: "Especializada em capturar histórias e eternizar emoções através de memórias fotográficas que perduram para sempre.",
		services: [
			"Sessões de fotográficas",
			"Cobertura de eventos (casamentos, aniversários e mais.)",
			"Fotogafias comerciais",
		],
		image: iphotoImg,
		instagram: "https://www.instagram.com/inaciophotos.gi?igsh=cDhlMm8ycWNmejJ4",
	},
	{
		name: "I.M Produções",
		icon: Film,
		description: "Produção audiovisual de excelência, focada em vídeos publicitários, clipes musicais e registros cinematográficos.",
		services: [
			"Produção de vídeo",
			"Captação e Gravação",
			"Pós-produção",
		],
		image: immImg,
		instagram: "https://www.instagram.com/improducoes.gi?igsh=MWc5enNoajgxNnZlOQ==",
	},
	{
		name: "I Media",
		icon: Megaphone,
		description: "Agência de marketing digital focada em dar visibilidade estratégica e posicionamento de marcas no mundo digital.",
		services: [
			"Marketing digital estratégico",
			"Gestão de mídias sociais",
			"Branding e posicionamento",
		],
		slogan: "Inovamos para impulsionar o seu futuro.",
		image: imediaImg,
		instagram: "https://www.instagram.com/imedia.gi?igsh=MTV5YXlyaDA4NTE3Nw==",
	},
	{
		name: "I Eventos",
		icon: CalendarClock,
		description: "Planejamento e organização de eventos memoráveis, garantindo profissionalismo e exclusividade em cada detalhe.",
		image: isoImg,
		services: [
			"Organização de eventos sociais e privados",
			"Eventos corporativos e empresariais",
			"Animação e entretenimento",
		],
		instagram: "https://www.instagram.com/ieventos.gi?igsh=aTl2d2w2Y2R6NXJm",
	},
	{
		name: "I Academy",
		icon: GraduationCap,
		description: "Centro de formação profissional dedicado a capacitar líderes e empreendedores através de cursos e mentorias.",
		services: [
			"Formação modular certificada",
			"Foramações para empresas",
			"formação inicial e qualificação profissional",
		],
		image: iacademy,
		instagram: "https://www.instagram.com/iacadmy.gi?igsh=OGE3eWQweG54OWc3",
	},
	{
		name: "I Tech Solutions",
		icon: Code2,
		tagline: "Conectando Ideias à Inovação",
		description: "Desenvolvimento de soluções digitais inteligentes e personalizadas, focadas em inovação e transformação tecnológica.",
		services: [
			"Desenvolvimento de Websites e Portfólios",
			"Automação de Processos Empresariais",
			"Consultoria em Transformação Digital",
		],
		slogan: "Inovamos para impulsionar o seu futuro.",
		image: technologyImg,
		instagram: "https://www.instagram.com/itechsolutions.gi?igsh=MTBlZGxiejBpZXk4YQ==",
	},
];

const CompanyCard = ({ company, index }: { company: typeof companies[0]; index: number }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true, margin: "-100px" }}
			className="group h-full"
		>
			<div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col group/card">
				{/* Image Header */}
				<div className="relative h-56 overflow-hidden bg-muted flex-shrink-0">
					<img
						src={company.image}
						alt={company.name}
						className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
					<div className="absolute bottom-4 left-6 right-6">
						<div className="flex items-center gap-3 mb-2">
							<div className="p-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 group-hover/card:bg-primary/20 group-hover/card:border-primary/40 transition-colors">
								<company.icon className="h-5 w-5 text-white" />
							</div>
							<h3 className="text-xl font-bold text-white tracking-tight leading-tight">{company.name}</h3>
						</div>
						{company.tagline && (
							<p className="text-xs text-white/70 font-medium italic line-clamp-1">{company.tagline}</p>
						)}
					</div>
				</div>

				{/* Content Body */}
				<div className="p-6 flex flex-col flex-grow">
					<p className="text-muted-foreground leading-relaxed mb-6 text-sm line-clamp-3">
						{company.description}
					</p>

					<div className="mt-auto">
						{company.services && (
							<div className="mb-6">
								<h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-4 flex items-center gap-2">
									<span className="w-6 h-px bg-border"></span>
									Serviços
								</h4>
								<ul className="grid grid-cols-1 gap-2.5">
									{company.services.map((service, idx) => (
										<li key={idx} className="flex items-center gap-3 text-xs text-muted-foreground group/item">
											<div className="h-1 w-1 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
											<span className="group-hover/item:text-foreground transition-colors">{service}</span>
										</li>
									))}
								</ul>
							</div>
						)}

						{company.slogan && (
							<div className="relative pt-4 border-t border-border/50">
								<p className="text-[11px] italic text-muted-foreground/60 pl-3 border-l-2 border-primary/20">
									"{company.slogan}"
								</p>
							</div>
						)}

						<div className="mt-6">
							<Button
								variant="outline"
								className="w-full text-xs h-10 group/btn hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
								asChild
							>
								<a href={company.instagram} target="_blank" rel="noopener noreferrer">
									Saiba mais
									<ArrowRight className="ml-2 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

const Companies = () => {
	return (
		<section id="empresas" className="py-32 bg-secondary/50">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
						Nosso Ecossistema
					</span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
						Empresas do Grupo
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						Conheça as marcas que formam o universo do <span className="text-foreground font-semibold">Grupo Inácios</span>.
						Soluções integradas para eternizar seus momentos e impulsionar seus negócios.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
					{companies.map((company, index) => (
						<CompanyCard key={company.name} company={company} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Companies;
