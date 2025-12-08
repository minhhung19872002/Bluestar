import { useLanguage } from "../LanguageContext";
import { Icon } from "@iconify/react";

const NotFound = () => {
	const { t } = useLanguage();

	const handleNavigate = (href) => {
		if (href.startsWith("#")) {
			window.location.href = "/" + href;
		} else {
			window.location.href = href;
		}
	};

	return (
		<div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-16">
			<div className="max-w-2xl mx-auto text-center">
				{/* 404 Visual */}
				<div className="mb-8 relative">
					<div className="text-[180px] font-bold text-navy/10 leading-none select-none">
						404
					</div>
					<div className="absolute inset-0 flex items-center justify-center">
						<Icon
							icon="solar:ghost-smile-bold-duotone"
							className="w-32 h-32 text-navy/20"
						/>
					</div>
				</div>

				{/* Content */}
				<h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
					{t.notFound.heading}
				</h1>
				<p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
					{t.notFound.description}
				</p>

				{/* Primary Actions */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
					<button
						onClick={() => handleNavigate("/")}
						className="px-8 py-3 bg-navy text-white rounded-lg font-medium hover:bg-navy/90 transition-all duration-300 flex items-center justify-center gap-2"
					>
						<Icon icon="solar:home-2-bold" className="w-5 h-5" />
						{t.notFound.btnHome}
					</button>
					<button
						onClick={() => handleNavigate("#services")}
						className="px-8 py-3 border-2 border-navy text-navy rounded-lg font-medium hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
					>
						<Icon icon="solar:widget-5-bold" className="w-5 h-5" />
						{t.notFound.btnServices}
					</button>
				</div>

				{/* Help Links */}
				<div className="bg-white rounded-xl shadow-lg p-8">
					<h2 className="text-xl font-semibold text-navy mb-6">
						{t.notFound.helpTitle}
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{t.notFound.helpLinks.map((link, index) => (
							<button
								key={index}
								onClick={() => handleNavigate(link.href)}
								className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
							>
								<div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-all duration-300">
									<Icon
										icon={link.icon}
										className="w-6 h-6"
									/>
								</div>
								<span className="text-sm font-medium text-gray-700 group-hover:text-navy">
									{link.title}
								</span>
							</button>
						))}
					</div>
				</div>

				{/* Contact CTA */}
				<div className="mt-8 p-6 bg-linear-to-r from-navy/5 to-orange/5 rounded-lg">
					<p className="text-gray-700 mb-4">
						{t.notFound.helpMessage}
					</p>
					<button
						onClick={() => handleNavigate("#contact")}
						className="px-6 py-2 bg-orange text-white rounded-lg font-medium hover:bg-orange/90 transition-all duration-300 inline-flex items-center gap-2"
					>
						<Icon
							icon="solar:chat-round-call-bold"
							className="w-5 h-5"
						/>
						{t.notFound.btnContact}
					</button>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
