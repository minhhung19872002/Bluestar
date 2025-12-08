import { useLanguage } from "../LanguageContext";
import { Icon } from "@iconify/react";

const Footer = () => {
	const { t } = useLanguage();

	const quickLinks = [
		{ label: t.nav.home, href: "#home" },
		{ label: t.nav.services, href: "#services" },
		{ label: t.nav.about, href: "#about" },
		{ label: t.nav.contact, href: "#contact" },
	];

	return (
		<footer className="bg-navy-900 text-white relative overflow-hidden">
			{/* Background Decorations */}
			<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-orange/5 rounded-full blur-[120px]" />
			<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />

			{/* Top CTA Section */}
			<div className="relative border-b border-white/10">
				<div className="section-container py-10 sm:py-12 lg:py-16">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-accent-orange to-orange-500 shadow-2xl shadow-accent-orange/25">
						<div className="text-center lg:text-left">
							<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1.5 sm:mb-2">
								{t.footer.ctaTitle}
							</h3>
							<p className="text-white/80 text-sm sm:text-base lg:text-lg">
								{t.footer.ctaSubtitle}
							</p>
						</div>
						<a
							href="#contact"
							className="group inline-flex items-center gap-2 sm:gap-3 bg-white text-navy-900 px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg shadow-lg hover:bg-navy-900 hover:text-white transition-all duration-300"
						>
							<span>{t.footer.ctaButton}</span>
							<Icon
								icon="solar:arrow-right-linear"
								className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
							/>
						</a>
					</div>
				</div>
			</div>

			{/* Main Footer */}
			<div className="section-container py-12 sm:py-16 lg:py-20 relative z-10">
				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
					{/* Company Info */}
					<div className="col-span-2 md:col-span-2 lg:col-span-1">
						<div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
							<div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center p-1">
								<img
									src="/images/logostar-nobg.png"
									alt="Bluestar Logo"
									className="w-full h-full object-contain"
								/>
							</div>
							<div>
								<span className="font-bold text-xl sm:text-2xl tracking-tight">
									BLUESTAR
								</span>
								<span className="block text-xs sm:text-sm text-white/60">
									Software Company
								</span>
							</div>
						</div>
						<p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6 sm:mb-8">
							{t.footer.aboutText}
						</p>
						{/* Social Links */}
						<div className="flex gap-2 sm:gap-3">
							<a
								href="#"
								className="group w-9 h-9 sm:w-11 sm:h-11 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 hover:scale-110"
							>
								<Icon
									icon="mdi:facebook"
									className="w-4 h-4 sm:w-5 sm:h-5"
								/>
							</a>
							<a
								href="#"
								className="group w-9 h-9 sm:w-11 sm:h-11 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110"
							>
								<Icon
									icon="mdi:linkedin"
									className="w-4 h-4 sm:w-5 sm:h-5"
								/>
							</a>
							<a
								href="https://zalo.me/0927394039"
								target="_blank"
								rel="noopener noreferrer"
								className="group w-9 h-9 sm:w-11 sm:h-11 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-[#0068FF] transition-all duration-300 hover:scale-110"
							>
								<Icon
									icon="simple-icons:zalo"
									className="w-4 h-4 sm:w-5 sm:h-5"
								/>
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-bold text-sm sm:text-base lg:text-lg text-white mb-4 sm:mb-6 flex items-center gap-2">
							<div className="w-1 h-5 sm:h-6 bg-accent-orange rounded-full" />
							{t.footer.linksTitle}
						</h4>
						<ul className="space-y-3 sm:space-y-4">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="group text-sm sm:text-base text-white/60 hover:text-white transition-colors flex items-center gap-2"
									>
										<Icon
											icon="solar:alt-arrow-right-linear"
											className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
										/>
										<span className="group-hover:translate-x-1 transition-transform">
											{link.label}
										</span>
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="font-bold text-sm sm:text-base lg:text-lg text-white mb-4 sm:mb-6 flex items-center gap-2">
							<div className="w-1 h-5 sm:h-6 bg-accent-orange rounded-full" />
							{t.footer.servicesTitle}
						</h4>
						<ul className="space-y-3 sm:space-y-4">
							{t.footer.services.map((service, index) => (
								<li key={index}>
									<a
										href="#services"
										className="group text-sm sm:text-base text-white/60 hover:text-white transition-colors flex items-center gap-2"
									>
										<Icon
											icon="solar:alt-arrow-right-linear"
											className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
										/>
										<span className="group-hover:translate-x-1 transition-transform">
											{service}
										</span>
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div className="col-span-2 sm:col-span-1">
						<h4 className="font-bold text-sm sm:text-base lg:text-lg text-white mb-4 sm:mb-6 flex items-center gap-2">
							<div className="w-1 h-5 sm:h-6 bg-accent-orange rounded-full" />
							{t.footer.contactTitle}
						</h4>
						<ul className="space-y-4 sm:space-y-5">
							<li className="flex items-start gap-3 sm:gap-4 group">
								<div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-orange transition-colors">
									<Icon
										icon="solar:map-point-linear"
										className="w-4 h-4 sm:w-5 sm:h-5 text-accent-orange group-hover:text-white transition-colors"
									/>
								</div>
								<span className="text-white/60 text-xs sm:text-sm leading-relaxed">
									{t.contact.address}
								</span>
							</li>
							<li className="flex items-center gap-3 sm:gap-4 group">
								<div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-orange transition-colors">
									<Icon
										icon="solar:letter-linear"
										className="w-4 h-4 sm:w-5 sm:h-5 text-accent-orange group-hover:text-white transition-colors"
									/>
								</div>
								<a
									href="mailto:info@bluestar.com.vn"
									className="text-xs sm:text-sm text-white/60 hover:text-accent-orange transition-colors"
								>
									info@bluestar.com.vn
								</a>
							</li>
							<li className="flex items-center gap-3 sm:gap-4 group">
								<div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-orange transition-colors">
									<Icon
										icon="solar:phone-linear"
										className="w-4 h-4 sm:w-5 sm:h-5 text-accent-orange group-hover:text-white transition-colors"
									/>
								</div>
								<a
									href="tel:+84927394039"
									className="text-xs sm:text-sm text-white/60 hover:text-accent-orange transition-colors"
								>
									+84 927 394 039
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-white/10 relative z-10">
				<div className="section-container py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
					<p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
						{t.footer.copyright} Bluestar Software Company.{" "}
						{t.footer.allRightsReserved}
					</p>
					<div className="flex gap-4 sm:gap-8">
						<a
							href="#privacy-policy"
							className="text-white/50 hover:text-accent-orange transition-colors text-xs sm:text-sm"
						>
							{t.footer.privacyPolicy}
						</a>
						<a
							href="#terms-of-service"
							className="text-white/50 hover:text-accent-orange transition-colors text-xs sm:text-sm"
						>
							{t.footer.termsOfService}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
