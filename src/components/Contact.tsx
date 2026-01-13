import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
	const contactInfo = [
		{
			icon: Mail,
			label: "Comunicação",
			text: "contato@grupoinacios.com",
			href: "mailto:contato@grupoinacios.com"
		},
		{
			icon: Mail,
			label: "Comercial",
			text: "depcomercial@grupoinacios.com",
			href: "mailto:depcomercial@grupoinacios.com"
		},
		{
			icon: Phone,
			label: "Telefones",
			text: "+244 933 139 566 / 941 794 016",
			href: "tel:+244933139566"
		},
		{
			icon: MapPin,
			label: "Localização",
			text: "Avenida Universitária Dr. Agostinho Neto, Ulengo Center, Luanda, Angola",
			href: "https://maps.google.com"
		},
	];

	const socialMedia = [
		{ icon: Instagram, href: "https://www.instagram.com/grupoinacios.gi/", label: "Instagram" },
		{ icon: Facebook, href: "https://www.facebook.com/GrupoInacio", label: "Facebook" },
		{ icon: Linkedin, href: "https://www.linkedin.com/company/grupoinacios/posts/?feedView=all", label: "LinkedIn" },
	];

	return (
		<section id="contato" className="py-24 relative overflow-hidden bg-background">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
			<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="flex flex-col lg:flex-row gap-16">
					{/* Left Column: Info */}
					<div className="flex-1">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true, margin: "-100px" }}
							className="mb-12"
						>
							<span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Fala Connosco</span>
							<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
								Vamos construir <br />
								<span className="text-primary text-outline-primary">algo incrível.</span>
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
								Estamos prontos para transformar suas ideias em realidade.
								Entre em contato com a equipe certa para o seu projeto.
							</p>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{contactInfo.map((info, index) => (
								<motion.a
									key={info.text}
									href={info.href}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="group p-6 bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl hover:border-primary/30 transition-all duration-300"
								>
									<div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500">
										<info.icon className="h-6 w-6" />
									</div>
									<p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{info.label}</p>
									<p className="text-sm text-foreground/80 font-medium leading-snug group-hover:text-foreground transition-colors">
										{info.text}
									</p>
								</motion.a>
							))}
						</div>
					</div>

					{/* Right Column: CTA & Social */}
					<div className="flex-1 flex flex-col justify-center">
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="bg-card/40 backdrop-blur-md border border-border/50 p-10 md:p-12 rounded-[3rem] relative overflow-hidden"
						>
							<div className="relative z-10 text-center lg:text-left">
								<div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
									<MessageSquare className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold mb-4">Tem uma pergunta rápida?</h3>
								<p className="text-muted-foreground mb-8 text-lg">
									Nossa equipe está disponível via WhatsApp para atendimento imediato e dúvidas sobre serviços.
								</p>

								<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
									<a href="https://wa.me/244933139566" target="_blank" rel="noopener noreferrer">
										<Button size="lg" className="rounded-full px-8 py-6 h-auto text-base font-bold group">
											Chamar no WhatsApp
											<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
										</Button>
									</a>
								</div>

								<div>
									<p className="text-sm font-bold text-foreground/40 uppercase tracking-[0.2em] mb-6">Siga o Grupo</p>
									<div className="flex gap-4 justify-center lg:justify-start">
										{socialMedia.map((social) => (
											<a
												key={social.label}
												href={social.href}
												aria-label={social.label}
												className="h-14 w-14 flex items-center justify-center bg-card border border-border rounded-2xl hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300"
											>
												<social.icon className="h-6 w-6" />
											</a>
										))}
									</div>
								</div>
							</div>

							{/* Decorative glow */}
							<div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
