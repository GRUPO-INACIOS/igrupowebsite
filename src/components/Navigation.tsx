import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import icon from "../assets/images/icon.png"
import icon2 from "../assets/images/icon2.png"

const navItems = [
	{ name: "Início", href: "/", isExternal: false },
	{ name: "Sobre", href: "/#sobre", isExternal: false },
	{ name: "Empresas", href: "/#empresas", isExternal: false },
	{ name: "Valores", href: "/#valores", isExternal: false },
	{ name: "Serviços", href: "/#servicos", isExternal: false },
	{ name: "Galeria", href: "/#galeria", isExternal: false },
	{ name: "Contato", href: "/#contato", isExternal: false },
	{ name: "Ação Social", href: "/acao-social", isExternal: true },
];

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (item: typeof navItems[0]) => {
		setIsMobileMenuOpen(false);

		if (item.isExternal) {
			navigate(item.href);
			return;
		}

		if (location.pathname !== "/") {
			navigate(item.href);
			// After navigation, the browser might need a moment to render before scrolling
			setTimeout(() => {
				const targetId = item.href.split("#")[1];
				if (targetId) {
					const element = document.getElementById(targetId);
					element?.scrollIntoView({ behavior: "smooth" });
				}
			}, 100);
			return;
		}

		const targetId = item.href.split("#")[1];
		if (!targetId) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			const element = document.getElementById(targetId);
			element?.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
					? "bg-background/95 backdrop-blur-lg border-b border-border shadow-medium"
					: "bg-transparent"
					}`}
			>
				<div className="container mx-auto px-6">
					<div className="flex items-center justify-between h-20">
						{/* Logo */}
						<Link
							to="/"
							onClick={() => handleNavClick(navItems[0])}
							className={`text-2xl font-bold hover:opacity-80 transition-all ${isScrolled || isMobileMenuOpen ? "text-black" : "text-white"}`}
						>
							<img src={isScrolled || isMobileMenuOpen ? icon : icon2} width={150} alt="Logo" />
						</Link>

						<div className="hidden md:flex items-center gap-8">
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={() => handleNavClick(item)}
									className={item.isExternal
										? `px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ml-2 group/btn active:scale-95 shadow-medium ${isScrolled || isMobileMenuOpen
											? "bg-black text-white hover:bg-black/90"
											: "bg-white text-black hover:bg-gray-50"
										}`
										: `text-sm font-medium transition-all relative group ${isScrolled || isMobileMenuOpen ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-200'}`
									}
								>
									<span className="flex items-center gap-1.5">
										{item.isExternal && (
											<Heart className={`h-3.5 w-3.5 fill-current animate-pulse ${isScrolled || isMobileMenuOpen ? "text-white" : "text-primary"
												}`} />
										)}
										{item.name}
									</span>
									{!item.isExternal && (
										<span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'}`} />
									)}
								</button>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className={`md:hidden transition-colors ${isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white'}`}
							aria-label="Toggle menu"
						>
							{isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className="fixed inset-0 z-40 bg-background pt-20 md:hidden"
				>
					<div className="container mx-auto px-6 py-8">
						<div className="flex flex-col gap-6">
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={() => handleNavClick(item)}
									className={item.isExternal
										? "w-full p-4 rounded-2xl bg-primary text-white font-bold text-center flex items-center justify-center gap-3 mt-4 active:scale-95 transition-all"
										: "text-2xl font-semibold transition-all text-left w-fit text-black hover:text-gray-700"
									}
								>
									<span className="flex items-center gap-2">
										{item.isExternal && <Heart className="h-5 w-5 fill-current text-primary animate-pulse" />}
										{item.name}
									</span>
								</button>
							))}
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
};

export default Navigation;
