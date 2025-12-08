import { useLanguage } from "../LanguageContext";
import { Icon } from "@iconify/react";

const Hero = () => {
	const { t } = useLanguage();

	return (
		<section id="home" className="relative h-screen overflow-hidden">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0">
				<img
					src="/images/background-1280.webp"
					srcSet="
						/images/background-768.webp 768w,
						/images/background-1280.webp 1280w,
						/images/background-1600.webp 1600w
					"
					sizes="100vw"
					alt="Technology background"
					className="w-full h-full object-cover"
					loading="eager"
					// eslint-disable-next-line react/no-unknown-property
					fetchpriority="high"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
				<div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
			</div>

			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
			</div>

			{/* Content */}
			<div className="relative z-10 h-full flex items-center justify-center w-full">
				<div className="section-container pt-24 md:pt-24 lg:pt-28 pb-16">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Content */}
						<div className="text-white max-w-2xl">
							{/* Heading */}
							<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] mb-4 md:mb-6">
								{t.hero.heading1}
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-yellow-400">
									{t.hero.heading2}
								</span>
								<span className="block text-white/90">
									{t.hero.heading3}
								</span>
							</h1>

							{/* Description */}
							<p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-6 md:mb-10 max-w-xl">
								{t.header.description}
							</p>

							{/* CTA Buttons */}
							<div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 md:mb-12">
								<a
									href="#contact"
									className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent-orange to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
								>
									<span>{t.hero.ctaPrimary}</span>
									<Icon
										icon="solar:arrow-right-linear"
										className="w-5 h-5 group-hover:translate-x-1 transition-transform"
									/>
								</a>
								<a
									href="#services"
									className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300"
								>
									<Icon
										icon="solar:play-circle-linear"
										className="w-5 h-5"
									/>
									<span>{t.hero.ctaSecondary}</span>
								</a>
							</div>

							{/* Stats */}
							<div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
								<div className="text-center">
									<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
										10
										<span className="text-accent-orange">
											+
										</span>
									</div>
									<div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">
										{t.hero.stats.years}
									</div>
								</div>
								<div className="text-center">
									<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
										20
										<span className="text-accent-orange">
											+
										</span>
									</div>
									<div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">
										{t.hero.stats.projects}
									</div>
								</div>
								<div className="text-center">
									<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
										100
										<span className="text-accent-orange">
											%
										</span>
									</div>
									<div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">
										{t.hero.stats.onTime}
									</div>
								</div>
							</div>
						</div>

						{/* Right Side - Feature Cards */}
						<div className="hidden lg:block relative">
							{/* Main Feature Card */}
							<div className="relative bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-white/20 shadow-2xl">
								<div className="space-y-3 md:space-y-4 lg:space-y-6">
									{/* Feature 1 */}
									<div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl hover:bg-white/10 transition-colors">
										<div className="w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
											<Icon
												icon="solar:shield-check-linear"
												className="w-5 h-5 md:w-6 lg:w-7 md:h-6 lg:h-7 text-white"
											/>
										</div>
										<div>
											<h3 className="text-white font-semibold text-sm md:text-base lg:text-lg">
												{t.hero.features.safety.title}
											</h3>
											<p className="text-white/60 text-xs md:text-sm hidden lg:block">
												{
													t.hero.features.safety
														.description
												}
											</p>
										</div>
									</div>

									{/* Feature 2 */}
									<div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl hover:bg-white/10 transition-colors">
										<div className="w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
											<Icon
												icon="solar:global-linear"
												className="w-5 h-5 md:w-6 lg:w-7 md:h-6 lg:h-7 text-white"
											/>
										</div>
										<div>
											<h3 className="text-white font-semibold text-sm md:text-base lg:text-lg">
												{t.hero.features.global.title}
											</h3>
											<p className="text-white/60 text-xs md:text-sm hidden lg:block">
												{
													t.hero.features.global
														.description
												}
											</p>
										</div>
									</div>

									{/* Feature 3 */}
									<div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl hover:bg-white/10 transition-colors">
										<div className="w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
											<Icon
												icon="solar:clock-circle-linear"
												className="w-5 h-5 md:w-6 lg:w-7 md:h-6 lg:h-7 text-white"
											/>
										</div>
										<div>
											<h3 className="text-white font-semibold text-sm md:text-base lg:text-lg">
												{t.hero.features.delivery.title}
											</h3>
											<p className="text-white/60 text-xs md:text-sm hidden lg:block">
												{
													t.hero.features.delivery
														.description
												}
											</p>
										</div>
									</div>

									{/* Feature 4 */}
									<div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl hover:bg-white/10 transition-colors">
										<div className="w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 bg-gradient-to-br from-accent-orange to-yellow-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
											<Icon
												icon="solar:star-shine-linear"
												className="w-5 h-5 md:w-6 lg:w-7 md:h-6 lg:h-7 text-white"
											/>
										</div>
										<div>
											<h3 className="text-white font-semibold text-sm md:text-base lg:text-lg">
												{t.hero.features.support.title}
											</h3>
											<p className="text-white/60 text-xs md:text-sm hidden lg:block">
												{
													t.hero.features.support
														.description
												}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<a
				href="#services"
				className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer group"
			>
				<div className="flex flex-col items-center gap-2 text-white/50 group-hover:text-white/80 transition-colors">
					<span className="hidden md:block text-xs font-medium tracking-[0.2em] uppercase">
						Scroll
					</span>
					<div className="w-6 h-10 border-2 border-white/30 group-hover:border-white/60 rounded-full flex items-start justify-center p-1.5 transition-colors">
						<div className="w-1.5 h-3 bg-white/60 group-hover:bg-white rounded-full animate-bounce" />
					</div>
				</div>
			</a>
		</section>
	);
};

export default Hero;
