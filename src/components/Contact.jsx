import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import { Icon } from "@iconify/react";

const Contact = () => {
	const { t } = useLanguage();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		phone: "",
		service: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Auto hide snackbar after 5 seconds
	useEffect(() => {
		if (submitStatus) {
			const timer = setTimeout(() => {
				setSubmitStatus(null);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [submitStatus]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
					subject: `[Bluestar] Yêu cầu tư vấn từ ${formData.name}`,
					from_name: "Bluestar Website",
					name: formData.name,
					email: formData.email,
					company: formData.company || "Không cung cấp",
					phone: formData.phone || "Không cung cấp",
					service: formData.service || "Chưa chọn",
					message: formData.message,
				}),
			});

			const result = await response.json();

			if (result.success) {
				setSubmitStatus("success");
				setFormData({
					name: "",
					email: "",
					company: "",
					phone: "",
					service: "",
					message: "",
				});
			} else {
				setSubmitStatus("error");
			}
		} catch (error) {
			console.error("Form submission error:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			id="contact"
			className="pt-16 pb-24 bg-gray-50 relative overflow-hidden"
		>
			{/* Background Decorations */}
			<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-navy-100/50 to-transparent rounded-full blur-3xl" />
			<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-orange/10 to-transparent rounded-full blur-3xl" />

			<div className="section-container relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
					<span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-navy-100 text-navy-800 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
						<Icon
							icon="solar:letter-linear"
							className="w-3.5 h-3.5 sm:w-4 sm:h-4"
						/>
						{t.contact.badge}
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4 sm:mb-6">
						{t.contact.title}
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600">
						{t.contact.subtitle}
					</p>
				</div>

				<div className="grid lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16">
					{/* Left - Info */}
					<div className="lg:col-span-2 space-y-6 sm:space-y-8">
						{/* Contact Info Cards */}
						<div className="space-y-3 sm:space-y-4">
							<div className="group flex items-start gap-3 sm:gap-5 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1">
								<div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
									<Icon
										icon="solar:map-point-linear"
										className="w-5 h-5 sm:w-6 sm:h-6"
									/>
								</div>
								<div>
									<h4 className="font-bold text-navy-900 text-base sm:text-lg mb-0.5 sm:mb-1">
										{t.contact.officeAddress}
									</h4>
									<p className="text-sm sm:text-base text-gray-600 leading-relaxed">
										{t.contact.address}
									</p>
								</div>
							</div>

							<div className="group flex items-start gap-3 sm:gap-5 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1">
								<div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-orange to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform">
									<Icon
										icon="solar:letter-linear"
										className="w-5 h-5 sm:w-6 sm:h-6"
									/>
								</div>
								<div>
									<h4 className="font-bold text-navy-900 text-base sm:text-lg mb-0.5 sm:mb-1">
										{t.contact.emailUs}
									</h4>
									<a
										href="mailto:info@bluestar.com.vn"
										className="text-sm sm:text-base text-navy-700 hover:text-accent-orange transition-colors font-medium"
									>
										info@bluestar.com.vn
									</a>
								</div>
							</div>

							<div className="group flex items-start gap-3 sm:gap-5 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1">
								<div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform">
									<Icon
										icon="solar:phone-linear"
										className="w-5 h-5 sm:w-6 sm:h-6"
									/>
								</div>
								<div>
									<h4 className="font-bold text-navy-900 text-base sm:text-lg mb-0.5 sm:mb-1">
										{t.contact.callUs}
									</h4>
									<a
										href="tel:+84927394039"
										className="text-sm sm:text-base text-navy-700 hover:text-accent-orange transition-colors font-medium"
									>
										+84 927 394 039
									</a>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
							<p className="font-semibold text-navy-900 mb-3 sm:mb-4 text-sm sm:text-base">
								{t.contact.connectWithUs}
							</p>
							<div className="flex gap-2 sm:gap-3">
								<a
									href="#"
									className="group w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-all duration-300"
								>
									<Icon
										icon="mdi:facebook"
										className="w-4 h-4 sm:w-5 sm:h-5"
									/>
								</a>
								<a
									href="#"
									className="group w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
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
									className="group w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-600 hover:bg-[#0068FF] hover:text-white transition-all duration-300"
								>
									<Icon
										icon="simple-icons:zalo"
										className="w-4 h-4 sm:w-5 sm:h-5"
									/>
								</a>
							</div>
						</div>

						{/* Google Map */}
						<div className="h-[180px] sm:h-[200px] bg-navy-100 rounded-xl sm:rounded-2xl overflow-hidden relative">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197956!2d106.68006807583857!3d10.778789559303886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9a8c124d%3A0x8f7d3f8a8a8a8a8a!2s666%2F10%2F1-3-5%20Ba%20Th%C3%A1ng%20Hai%2C%20Ph%C6%B0%E1%BB%9Dng%2014%2C%20Qu%E1%BA%ADn%2010%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2svn!4v1701777600000!5m2!1svi!2svn"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Bluestar Office Location"
								className="rounded-xl sm:rounded-2xl"
							/>
						</div>
					</div>

					{/* Right - Form */}
					<div className="lg:col-span-3">
						<div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 lg:p-8 xl:p-10 border border-gray-100 relative overflow-hidden">
							{/* Form Decoration */}
							<div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-bl from-accent-orange/10 to-transparent rounded-bl-full" />
							<div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tr from-navy-100/50 to-transparent rounded-tr-full" />

							<div className="relative">
								<div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
									<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-orange to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center">
										<Icon
											icon="solar:chat-round-dots-linear"
											className="w-5 h-5 sm:w-6 sm:h-6 text-white"
										/>
									</div>
									<div>
										<h3 className="text-xl sm:text-2xl font-bold text-navy-900">
											{t.contact.formTitle}
										</h3>
										<p className="text-sm sm:text-base text-gray-500">
											{t.contact.formSubtitle}
										</p>
									</div>
								</div>

								<form
									onSubmit={handleSubmit}
									className="space-y-4 sm:space-y-6"
								>
									<div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
										<div>
											<label className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5 sm:mb-2">
												{t.contact.name} *
											</label>
											<input
												type="text"
												name="name"
												required
												value={formData.name}
												onChange={handleChange}
												className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-navy-500 transition-colors bg-gray-50 focus:bg-white text-sm sm:text-base"
												placeholder="John Doe"
											/>
										</div>
										<div>
											<label className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5 sm:mb-2">
												{t.contact.email} *
											</label>
											<input
												type="email"
												name="email"
												required
												value={formData.email}
												onChange={handleChange}
												className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-navy-500 transition-colors bg-gray-50 focus:bg-white text-sm sm:text-base"
												placeholder="john@company.com"
											/>
										</div>
									</div>

									<div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
										<div>
											<label className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5 sm:mb-2">
												{t.contact.company}
											</label>
											<input
												type="text"
												name="company"
												value={formData.company}
												onChange={handleChange}
												className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-navy-500 transition-colors bg-gray-50 focus:bg-white text-sm sm:text-base"
												placeholder={
													t.contact.companyPlaceholder
												}
											/>
										</div>
										<div>
											<label className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5 sm:mb-2">
												{t.contact.phone}
											</label>
											<input
												type="tel"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-navy-500 transition-colors bg-gray-50 focus:bg-white text-sm sm:text-base"
												placeholder={
													t.contact.phonePlaceholder
												}
											/>
										</div>
									</div>

									<div>
										<label className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5 sm:mb-2">
											{t.contact.serviceInterested}
										</label>
										<select
											name="service"
											value={formData.service}
											onChange={handleChange}
											className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-navy-500 transition-colors bg-gray-50 focus:bg-white appearance-none text-sm sm:text-base"
											style={{
												backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
												backgroundPosition:
													"right 1rem center",
												backgroundRepeat: "no-repeat",
												backgroundSize: "1.5em 1.5em",
											}}
										>
											<option value="">
												{t.contact.selectService}
											</option>
											<option value="custom-software">
												{
													t.contact.services
														.customSoftware
												}
											</option>
											<option value="it-outsourcing">
												{
													t.contact.services
														.itOutsourcing
												}
											</option>
											<option value="system-integration">
												{
													t.contact.services
														.systemIntegration
												}
											</option>
											<option value="cloud-solutions">
												{
													t.contact.services
														.cloudSolutions
												}
											</option>
											<option value="maintenance">
												{t.contact.services.maintenance}
											</option>
											<option value="consulting">
												{t.contact.services.consulting}
											</option>
										</select>
									</div>

									<div>
										<label className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5 sm:mb-2">
											{t.contact.message} *
										</label>
										<textarea
											name="message"
											required
											rows={4}
											value={formData.message}
											onChange={handleChange}
											className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-navy-500 transition-colors bg-gray-50 focus:bg-white resize-none text-sm sm:text-base"
											placeholder={
												t.contact.messagePlaceholder
											}
										/>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full bg-gradient-to-r from-navy-800 to-navy-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-navy-900/25 hover:shadow-navy-900/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
									>
										{isSubmitting ? (
											<>
												<Icon
													icon="solar:refresh-linear"
													className="w-5 h-5 animate-spin"
												/>
												<span>
													{t.contact.sending ||
														"Đang gửi..."}
												</span>
											</>
										) : (
											<>
												<span>
													{t.contact.submitBtn}
												</span>
												<Icon
													icon="solar:arrow-right-linear"
													className="w-5 h-5 group-hover:translate-x-1 transition-transform"
												/>
											</>
										)}
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Snackbar Toast Notification - Top */}
			<div
				className={`fixed top-4 sm:top-6 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto z-50 transition-all duration-500 ease-out ${
					submitStatus
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-4 pointer-events-none"
				}`}
			>
				{submitStatus === "success" && (
					<div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-green-100">
						<div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30 flex-shrink-0">
							<Icon
								icon="solar:check-circle-bold"
								className="w-4 h-4 sm:w-5 sm:h-5 text-white"
							/>
						</div>
						<div>
							<p className="font-bold text-navy-900 text-sm sm:text-base">
								{t.contact.successTitle || "Gửi thành công!"}
							</p>
							<p className="text-xs sm:text-sm text-gray-500">
								{t.contact.thankYou ||
									"Chúng tôi sẽ liên hệ sớm nhất có thể."}
							</p>
						</div>
						<button
							onClick={() => setSubmitStatus(null)}
							className="ml-1 sm:ml-2 p-1 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
						>
							<Icon
								icon="solar:close-circle-linear"
								className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
							/>
						</button>
					</div>
				)}

				{submitStatus === "error" && (
					<div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-red-100">
						<div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-400 to-rose-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30 flex-shrink-0">
							<Icon
								icon="solar:close-circle-bold"
								className="w-4 h-4 sm:w-5 sm:h-5 text-white"
							/>
						</div>
						<div>
							<p className="font-bold text-navy-900 text-sm sm:text-base">
								{t.contact.errorTitle || "Có lỗi xảy ra!"}
							</p>
							<p className="text-xs sm:text-sm text-gray-500">
								{t.contact.errorMessage ||
									"Vui lòng thử lại hoặc liên hệ trực tiếp."}
							</p>
						</div>
						<button
							onClick={() => setSubmitStatus(null)}
							className="ml-1 sm:ml-2 p-1 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
						>
							<Icon
								icon="solar:close-circle-linear"
								className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
							/>
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Contact;
