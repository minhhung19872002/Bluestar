import { useLanguage } from "../LanguageContext";
import { Icon } from "@iconify/react";

const partners = [
	{
		name: "Jobcan",
		logo: "/images/partners/jobcan.svg",
		url: "https://jobcan.vn/",
	},
];

const Partners = () => {
	const { t } = useLanguage();

	return (
		<section
			id="partners"
			className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden"
		>
			{/* Background Decorations */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-navy-50/60 to-transparent blur-3xl pointer-events-none" />

			<div className="section-container relative z-10">
				{/* Header */}
				<div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
					<span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-navy-100 text-navy-800 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
						<Icon
							icon="solar:handshake-bold"
							className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-orange"
						/>
						{t.partners.badge}
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4 sm:mb-6 leading-tight">
						{t.partners.title}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-orange-400">
							{" "}
							{t.partners.titleHighlight}
						</span>
					</h2>
					<p className="text-base sm:text-lg text-gray-600">
						{t.partners.subtitle}
					</p>
				</div>

				{/* Logos */}
				<div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
					{partners.map((partner) => (
						<a
							key={partner.name}
							href={partner.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={partner.name}
							className="group relative w-full sm:w-72 lg:w-80 flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 px-8 py-10 overflow-hidden"
						>
							{/* Hover Glow */}
							<div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-navy-50/0 group-hover:from-orange-50/60 group-hover:to-navy-50/60 transition-all duration-500" />

							<img
								src={partner.logo}
								alt={`${partner.name} logo`}
								className="relative h-12 sm:h-14 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
								loading="lazy"
								width="647"
								height="177"
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partners;
