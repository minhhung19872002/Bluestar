import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../LanguageContext";

const Header = () => {
	const { t, language, toggleLanguage } = useLanguage();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ label: t.nav.home, href: "#home" },
		{ label: t.nav.services, href: "#services" },
		{ label: t.nav.about, href: "#about" },
		{ label: t.nav.contact, href: "#contact" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isScrolled
					? "bg-white/95 backdrop-blur-xl shadow-lg shadow-navy-900/5"
					: "bg-transparent"
			}`}
		>
			<div className="section-container">
				<div className="flex items-center justify-between h-20 lg:h-24">
					{/* Logo */}
					<a href="#home" className="group flex items-center gap-3">
						<div
							className={`w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
								isScrolled
									? "bg-white shadow-lg"
									: "bg-white/90 backdrop-blur-sm"
							}`}
						>
							<img
								src="/images/logostar-nobg.png"
								alt="Bluestar Logo"
								className="w-10 h-10 object-contain"
							/>
						</div>
						<div className="hidden sm:block">
							<span
								className={`font-bold text-xl tracking-tight transition-colors ${
									isScrolled ? "text-navy-900" : "text-white"
								}`}
							>
								BLUESTAR
							</span>
							<span
								className={`block text-xs transition-colors ${
									isScrolled
										? "text-gray-500"
										: "text-white/70"
								}`}
							>
								Software Company
							</span>
						</div>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-1">
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl group ${
									isScrolled
										? "text-gray-600 hover:text-navy-900 hover:bg-gray-100"
										: "text-white/80 hover:text-white hover:bg-white/10"
								}`}
							>
								{item.label}
								<span
									className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-orange rounded-full transition-all duration-300 group-hover:w-6`}
								/>
							</a>
						))}
					</nav>

					{/* Right Side */}
					<div className="flex items-center gap-3">
						{/* Language Switcher */}
						<button
							onClick={toggleLanguage}
							className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
								isScrolled
									? "bg-gray-100 text-gray-700 hover:bg-gray-200"
									: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
							}`}
						>
							<img
								src={
									language === "vi"
										? "https://flagcdn.com/w20/us.png"
										: "https://flagcdn.com/w20/vn.png"
								}
								alt={
									language === "vi" ? "English" : "Tiếng Việt"
								}
								className="w-5 h-3.5 object-cover rounded-sm"
							/>
							<span>{language === "vi" ? "EN" : "VI"}</span>
						</button>

						{/* CTA Button */}
						<a
							href="#contact"
							className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-accent-orange to-orange-500 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-accent-orange/30 hover:shadow-accent-orange/50 hover:scale-105 transition-all duration-300"
						>
							<span>{t.nav.contact}</span>
							<Icon
								icon="solar:arrow-right-linear"
								className="w-4 h-4"
							/>
						</a>

						{/* Mobile Menu Button */}
						<button
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
								isScrolled
									? "text-gray-700 hover:bg-gray-100"
									: "text-white hover:bg-white/10"
							}`}
						>
							{isMobileMenuOpen ? (
								<Icon
									icon="solar:close-circle-linear"
									className="w-6 h-6"
								/>
							) : (
								<Icon
									icon="solar:hamburger-menu-linear"
									className="w-6 h-6"
								/>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`lg:hidden overflow-hidden transition-all duration-500 ${
						isMobileMenuOpen ? "max-h-[500px] pb-6" : "max-h-0"
					}`}
				>
					<nav
						className={`flex flex-col gap-2 pt-4 mt-2 rounded-2xl ${
							isScrolled
								? "border-t border-gray-200"
								: "bg-white/95 backdrop-blur-xl shadow-xl p-4"
						}`}
					>
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className="px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-100 hover:text-navy-900 transition-colors flex items-center gap-3"
							>
								<div className="w-2 h-2 bg-accent-orange rounded-full" />
								{item.label}
							</a>
						))}
						<a
							href="#contact"
							onClick={() => setIsMobileMenuOpen(false)}
							className="mt-2 bg-gradient-to-r from-accent-orange to-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-center shadow-lg"
						>
							{t.nav.contact}
						</a>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
