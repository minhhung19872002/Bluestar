import { useLanguage } from "../LanguageContext";
import { Icon } from "@iconify/react";

const serviceIcons = [
	"solar:code-linear",
	"solar:monitor-linear",
	"solar:server-linear",
	"solar:cloud-linear",
	"solar:settings-linear",
	"solar:lightbulb-linear",
];

const Services = () => {
	const { t } = useLanguage();

	return (
		<section
			id="services"
			className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
		>
			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent-orange/10 rounded-full blur-[100px]" />
				<div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-navy-500/10 rounded-full blur-[80px]" />
				{/* Diagonal lines pattern */}
				<div
					className="absolute inset-0 opacity-[0.02]"
					style={{
						backgroundImage:
							"repeating-linear-gradient(45deg, #102a43 0, #102a43 1px, transparent 0, transparent 50%)",
						backgroundSize: "20px 20px",
					}}
				/>
			</div>

			<div className="section-container relative z-10">
				{/* Header */}
				<div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
					<span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-gradient-to-r from-accent-orange/10 to-orange-500/10 text-accent-orange rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-accent-orange/20">
						<Icon
							icon="solar:bolt-linear"
							className="w-3.5 h-3.5 sm:w-4 sm:h-4"
						/>
						{t.servicesDetail.badge}
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4 sm:mb-6">
						{t.services.title}
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
						{t.services.subtitle}
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
					{t.servicesDetail.items.map((service, index) => (
						<div
							key={index}
							className={`group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-100 overflow-hidden ${
								index === 0
									? "sm:col-span-2 lg:col-span-1 lg:row-span-1"
									: ""
							}`}
							style={{
								animationDelay: `${index * 100}ms`,
							}}
						>
							{/* Hover gradient */}
							<div className="absolute inset-0 bg-gradient-to-br from-accent-orange/0 to-accent-orange/0 group-hover:from-accent-orange/5 group-hover:to-transparent transition-all duration-500" />

							{/* Decorative corner */}
							<div className="absolute top-0 right-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-transparent to-navy-50/50 group-hover:to-accent-orange/10 transition-colors duration-500" />

							{/* Icon */}
							<div className="relative w-12 h-12 sm:w-14 lg:w-16 sm:h-14 lg:h-16 bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-navy-700 mb-4 sm:mb-6 group-hover:scale-110 group-hover:from-accent-orange group-hover:to-orange-500 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-orange-500/30 group-hover:rotate-3">
								<Icon
									icon={serviceIcons[index]}
									className="w-6 h-6 sm:w-7 lg:w-8 sm:h-7 lg:h-8"
								/>
							</div>

							{/* Content */}
							<h3 className="relative text-lg sm:text-xl font-bold text-navy-900 mb-2 sm:mb-3 group-hover:text-accent-orange transition-colors duration-300">
								{service.title}
							</h3>
							<p className="relative text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
								{service.description}
							</p>

							{/* Link */}
							<a
								href="#contact"
								className="relative inline-flex items-center gap-2 text-navy-700 font-semibold text-sm group-hover:text-accent-orange transition-colors"
							>
								<span>{t.servicesDetail.learnMore}</span>
								<Icon
									icon="solar:arrow-right-linear"
									className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
								/>
							</a>

							{/* Number indicator */}
							<div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-100 group-hover:text-accent-orange/20 transition-colors">
								0{index + 1}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
