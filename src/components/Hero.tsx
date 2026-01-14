import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.jpg";

const Hero = () => {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0">
				<img
					src={heroBg}
					alt="Hero Background"
					className="w-full h-full object-cover opacity-40"
				/>
				{/* stronger, darker overlay to improve text contrast */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/10" />
			</div>

			{/* Content */}
			<div className="relative z-10 container mx-auto px-6 text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<motion.h1
						className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 tracking-tight"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Transformando ideias em legado.
					</motion.h1>

					<motion.p
						className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto font-light"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						Eternizamos momentos, impulsionamos marcas e criamos experiências memoráveis.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<Button
							variant="hero"
							size="lg"
							onClick={() => scrollToSection("sobre")}
							className="group"
						>
							Saiba Mais
							<ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
				>
					<ChevronDown className="h-8 w-8 text-primary-foreground/60" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
