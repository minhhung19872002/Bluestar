import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../LanguageContext";

const Header = () => {
	const { t, language, toggleLanguage } = useLanguage();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("#home");
	const mobileMenuRef = useRef(null);

	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					setIsScrolled(window.scrollY > 50);
					ticking = false;
				});
				ticking = true;
			}
		};

		// Detect active section using Intersection Observer
		const sections = ["#home", "#services", "#about", "#contact"];
		const observerOptions = {
			rootMargin: "-100px 0px -66%",
			threshold: 0,
		};

		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(`#${entry.target.id}`);
				}
			});
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions
		);

		sections.forEach((sectionId) => {
			const element = document.querySelector(sectionId);
			if (element) {
				observer.observe(element);
			}
		});

		handleScroll(); // Run once on mount
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			observer.disconnect();
		};
	}, []);

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				isMobileMenuOpen &&
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target)
			) {
				setIsMobileMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
	}, [isMobileMenuOpen]);

	const navItems = [
		{ label: t.nav.home, href: "#home" },
		{ label: t.nav.services, href: "#services" },
		{ label: t.nav.about, href: "#about" },
		{ label: t.nav.contact, href: "#contact" },
	];

	return (
		<header
			ref={mobileMenuRef}
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
									activeSection === item.href
										? isScrolled
											? "text-navy-900 bg-gray-100"
											: "text-white bg-white/10"
										: isScrolled
										? "text-gray-600 hover:text-navy-900 hover:bg-gray-100"
										: "text-white/80 hover:text-white hover:bg-white/10"
								}`}
							>
								{item.label}
								<span
									className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-accent-orange rounded-full transition-all duration-300 ${
										activeSection === item.href
											? "w-6"
											: "w-0 group-hover:w-6"
									}`}
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
							aria-label={
								isMobileMenuOpen
									? "Close navigation menu"
									: "Open navigation menu"
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
						isMobileMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
					}`}
				>
					<nav
						className={`flex flex-col gap-2 mt-4 rounded-2xl overflow-hidden ${
							isScrolled
								? "bg-gray-50 p-3"
								: "bg-white/95 backdrop-blur-xl shadow-2xl p-4"
						}`}
					>
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className={`px-4 py-3.5 font-medium rounded-xl transition-all duration-300 flex items-center gap-3 ${
									activeSection === item.href
										? "bg-accent-orange text-white shadow-lg shadow-accent-orange/30"
										: "text-gray-700 hover:bg-white hover:text-navy-900"
								}`}
							>
								<div
									className={`w-2 h-2 rounded-full ${
										activeSection === item.href
											? "bg-white"
											: "bg-accent-orange"
									}`}
								/>
								{item.label}
							</a>
						))}
						<div className="pt-2 mt-1 border-t border-gray-200">
							<a
								href="#contact"
								onClick={() => setIsMobileMenuOpen(false)}
								className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-orange to-orange-500 text-white px-6 py-3.5 rounded-xl font-semibold text-center shadow-lg shadow-accent-orange/30 hover:shadow-accent-orange/50 transition-all duration-300"
							>
								<span>{t.nav.contact}</span>
								<Icon
									icon="solar:arrow-right-linear"
									className="w-4 h-4"
								/>
							</a>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
