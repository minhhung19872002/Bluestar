import { useLanguage } from "../LanguageContext";
import { Icon } from "@iconify/react";

const iconNames = [
	"solar:verified-check-linear",
	"solar:clock-circle-linear",
	"solar:graph-up-linear",
	"solar:chat-round-dots-linear",
];

const WhyChooseUs = () => {
	const { t } = useLanguage();

	return (
		<section className="pt-24 pb-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
			{/* Background Decorations */}
			<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-navy-100/30 to-transparent rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-orange/10 to-transparent rounded-full blur-3xl" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-navy-50/50 to-transparent rounded-full blur-3xl" />

			{/* Subtle Grid Pattern */}
			<div
				className="absolute inset-0 opacity-[0.02]"
				style={{
					backgroundImage:
						"linear-gradient(to right, #1e3a5f 1px, transparent 1px), linear-gradient(to bottom, #1e3a5f 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

			<div className="section-container relative z-10">
				{/* Header */}
				<div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
					<span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-navy-100 text-navy-800 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
						<Icon
							icon="solar:verified-check-bold"
							className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-orange"
						/>
						{t.whyChooseUs.badge}
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4 sm:mb-6 leading-tight">
						{t.whyChooseUs.title}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-orange-400">
							{" "}
							{t.whyChooseUs.titleHighlight}
						</span>
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
						{t.whyChooseUs.subtitle}
					</p>
				</div>

				{/* Reasons Grid */}
				<div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
					{t.whyChooseUs.reasons.map((reason, index) => (
						<div
							key={index}
							className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 xl:p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
						>
							{/* Left Accent Border */}
							<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-accent-orange via-orange-400 to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

							{/* Background Glow on Hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-accent-orange/0 to-orange-50/0 group-hover:from-orange-50/50 group-hover:to-accent-orange/5 transition-all duration-500" />

							<div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
								{/* Icon & Number Container */}
								<div className="shrink-0">
									<div className="relative">
										<div className="w-12 h-12 sm:w-14 lg:w-16 sm:h-14 lg:h-16 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:shadow-navy-900/30 group-hover:scale-110 transition-all duration-300">
											<Icon
												icon={iconNames[index]}
												className="w-6 h-6 sm:w-7 lg:w-8 sm:h-7 lg:h-8"
											/>
										</div>
										{/* Number Badge */}
										<div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-accent-orange to-orange-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg shadow-accent-orange/30">
											<span className="text-[10px] sm:text-xs font-bold text-white">
												0{index + 1}
											</span>
										</div>
									</div>
								</div>

								{/* Content */}
								<div className="flex-1">
									<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-navy-900 mb-2 sm:mb-3 group-hover:text-accent-orange transition-colors">
										{reason.title}
									</h3>
									<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
										{reason.description}
									</p>
								</div>
							</div>

							{/* Decorative Corner */}
							<div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-tl from-navy-100/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						</div>
					))}
				</div>

				{/* Stats Row */}
				<div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
					{[
						{
							value: "500+",
							labelKey: "projects",
							icon: "solar:box-linear",
							color: "from-blue-400 to-indigo-500",
						},
						{
							value: "50+",
							labelKey: "engineers",
							icon: "solar:users-group-rounded-linear",
							color: "from-green-400 to-emerald-500",
						},
						{
							value: "10+",
							labelKey: "years",
							icon: "solar:cup-star-linear",
							color: "from-yellow-400 to-orange-500",
						},
						{
							value: "99%",
							labelKey: "satisfaction",
							icon: "solar:star-shine-linear",
							color: "from-accent-orange to-pink-500",
						},
					].map((stat, index) => (
						<div
							key={index}
							className="group text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-accent-orange/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
						>
							{/* Glow Effect */}
							<div className="absolute inset-0 bg-gradient-to-t from-accent-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							<div className="relative">
								<div
									className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
								>
									<Icon
										icon={stat.icon}
										className="w-5 h-5 sm:w-6 sm:h-6 text-white"
									/>
								</div>
								<div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-orange-400 mb-1 sm:mb-2">
									{stat.value}
								</div>
								<div className="text-white/80 text-xs sm:text-sm font-medium">
									{t.whyChooseUs.stats[stat.labelKey]}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center mt-10 sm:mt-12 lg:mt-16">
					<a
						href="#contact"
						className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-accent-orange to-orange-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl shadow-accent-orange/25 hover:shadow-2xl hover:shadow-accent-orange/40 hover:scale-105 transition-all duration-300 relative overflow-hidden"
					>
						{/* Shine Effect */}
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
						<span className="relative">{t.whyChooseUs.cta}</span>
						<Icon
							icon="solar:arrow-right-linear"
							className="w-6 h-6 relative group-hover:translate-x-1 transition-transform"
						/>
					</a>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
