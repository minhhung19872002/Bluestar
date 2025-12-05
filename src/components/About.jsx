import { useLanguage } from "../LanguageContext";
import { Icon } from "@iconify/react";

const featureIcons = [
	"solar:shield-check-linear",
	"solar:clock-circle-linear",
	"solar:users-group-rounded-linear",
	"solar:global-linear",
];

const About = () => {
	const { t } = useLanguage();

	return (
		<section
			id="about"
			className="py-24 bg-navy-900 overflow-hidden relative"
		>
			{/* Background Decorations */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/15 rounded-full blur-[100px]" />
				<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[80px]" />
				{/* Dot Pattern */}
				<div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage:
							"radial-gradient(circle, #ffffff 1px, transparent 1px)",
						backgroundSize: "30px 30px",
					}}
				/>
			</div>

			<div className="section-container relative z-10">
				<div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center">
					{/* Left - Image/Visual */}
					<div className="relative">
						{/* Main Image Container */}
						<div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
							<img
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
								alt="Software development team"
								className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
						</div>

						{/* Floating Stats Cards - Show on sm+ */}
						<div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-5 border border-gray-100 hover:shadow-accent-orange/20 hover:-translate-y-1 transition-all duration-300">
							<div className="flex items-center gap-3 sm:gap-4">
								<div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-orange to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
									<span className="text-sm sm:text-xl font-bold text-white">
										10+
									</span>
								</div>
								<div>
									<div className="font-bold text-navy-900 text-sm sm:text-base">
										{t.about.yearsOf}
									</div>
									<div className="text-gray-500 text-xs sm:text-sm">
										{t.about.excellence}
									</div>
								</div>
							</div>
						</div>

						<div className="hidden sm:block absolute -top-4 sm:-top-6 -left-2 sm:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-5 border border-gray-100 hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300">
							<div className="flex items-center gap-3 sm:gap-4">
								<div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
									<Icon
										icon="solar:check-circle-linear"
										className="w-5 h-5 sm:w-7 sm:h-7 text-white"
									/>
								</div>
								<div>
									<div className="font-bold text-navy-900 text-sm sm:text-base">
										100%
									</div>
									<div className="text-gray-500 text-xs sm:text-sm">
										{t.about.clientSatisfaction}
									</div>
								</div>
							</div>
						</div>

						{/* Decorative Elements */}
						<div className="absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-accent-orange/10 rounded-2xl sm:rounded-3xl -z-10" />
						<div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-navy-100 rounded-xl sm:rounded-2xl -z-10" />
					</div>

					{/* Right - Content */}
					<div>
						<span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white/10">
							<Icon
								icon="solar:info-circle-linear"
								className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-orange"
							/>
							{t.about.badge}
						</span>
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
							{t.about.title}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-orange-500">
								{" "}
								{t.about.titleHighlight}
							</span>
						</h2>
						<p className="text-base sm:text-lg text-white/70 mb-4 sm:mb-6 leading-relaxed">
							{t.header.description}
						</p>
						<p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-10 leading-relaxed">
							{t.about.description2}
						</p>

						{/* Features Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-10">
							{t.about.features.map((feature, index) => (
								<div
									key={index}
									className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 group"
								>
									<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center text-white group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
										<Icon
											icon={featureIcons[index]}
											className="w-5 h-5 sm:w-6 sm:h-6"
										/>
									</div>
									<div>
										<h4 className="font-bold text-white text-sm sm:text-base">
											{feature.title}
										</h4>
										<p className="text-white/60 text-xs sm:text-sm mt-0.5 sm:mt-1">
											{feature.description}
										</p>
									</div>
								</div>
							))}
						</div>

						<a
							href="#contact"
							className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-accent-orange to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
						>
							<span>{t.about.cta}</span>
							<Icon
								icon="solar:arrow-right-linear"
								className="w-5 h-5 group-hover:translate-x-1 transition-transform"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
