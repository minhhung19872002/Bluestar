import "./css/styles.css";
import "./css/bootstrap.css";
import "./css/fontawesome-all.css";
import "./css/swiper.css";
import "./css/magnific-popup.css";
import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

function App() {
	const { t, language, toggleLanguage, languageNames } = useLanguage();

	useEffect(() => {
		document.title = t.pageTitle;
		document
			.querySelector('meta[name="description"]')
			?.setAttribute("content", t.metaDescription);
		document
			.querySelector('meta[name="keywords"]')
			?.setAttribute("content", t.metaKeywords);
	}, [t]);

	return (
		<div>
			<div className="spinner-wrapper">
				<div className="spinner">
					<div className="bounce1"></div>
					<div className="bounce2"></div>
					<div className="bounce3"></div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
				<a className="navbar-brand logo-image" href="index.html">
					<img
						src="../images/logo.jpg"
						alt="BlueStar Logo"
						style={{ width: "230px", height: "80px" }}
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarsExampleDefault"
					aria-controls="navbarsExampleDefault"
					aria-expanded="false"
					aria-label={t.nav.toggleNav}
				>
					<span className="navbar-toggler-awesome fas fa-bars"></span>
					<span className="navbar-toggler-awesome fas fa-times"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarsExampleDefault"
				>
					<ul
						className="navbar-nav ml-auto"
						style={{
							fontSize: "x-large",
							margin: "auto",
							fontWeight: 700,
							fontFamily: '"Raleway", sans-serif',
						}}
					>
						<li className="nav-item">
							<a className="nav-link page-scroll" href="#header">
								{t.nav.home} <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link page-scroll"
								href="#services"
							>
								{t.nav.services}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link page-scroll" href="#pricing">
								{t.nav.pricing}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link page-scroll" href="#request">
								{t.nav.request}
							</a>
						</li>

						<li className="nav-item dropdown">
							<a
								className="nav-link page-scroll"
								href="#about"
								role="button"
								aria-haspopup="true"
								aria-expanded="false"
							>
								{t.nav.about}
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link page-scroll" href="#contact">
								{t.nav.contact}
							</a>
						</li>

					</ul>
					<span className="nav-item social-icons" style={{ display: "flex", alignItems: "center" }}>
						{/* Language Switcher */}
						<button
							onClick={toggleLanguage}
							style={{
								background: "none",
								border: "none",
								outline: "none",
								cursor: "pointer",
								padding: "0",
								marginRight: "10px",
								display: "flex",
								alignItems: "center",
								boxShadow: "none",
							}}
							title={language === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
						>
							<img
								src={language === "vi"
									? "https://flagcdn.com/w40/us.png"
									: "https://flagcdn.com/w40/vn.png"
								}
								alt={language === "vi" ? "English" : "Tiếng Việt"}
								style={{
									width: "32px",
									height: "22px",
									objectFit: "cover",
									borderRadius: "3px",
									border: "1px solid rgba(255,255,255,0.3)",
								}}
							/>
						</button>
						<span className="fa-stack">
							<a href="https://www.facebook.com/" target="_blank">
								<i className="fas fa-circle fa-stack-2x facebook"></i>
								<i className="fab fa-facebook-f fa-stack-1x"></i>
							</a>
						</span>
						<span className="fa-stack">
							<a href="https://x.com/" target="_blank">
								<i className="fas fa-circle fa-stack-2x twitter"></i>
								<i className="fab fa-twitter fa-stack-1x"></i>
							</a>
						</span>
					</span>
				</div>
			</nav>
			<header id="header" className="header">
				<div className="header-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="text-container">
									<h1>{t.header.title}</h1>
									<p className="p-large">
										{t.header.description}
									</p>
									<a
										className="btn-solid-lg page-scroll"
										href="#"
									>
										{t.header.button}
									</a>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="image-container">
									<img
										className="img-fluid"
										src="images/header-teamwork.svg"
										alt="Teamwork"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div id="services" className="cards-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>{t.services.title}</h2>
							<p className="p-heading p-large">
								{t.services.subtitle}
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<img
									className="card-image"
									src="images/services-icon-1.svg"
									alt="Market Analysis"
								/>
								<div className="card-body">
									<h4 className="card-title">
										{t.services.marketAnalysis.title}
									</h4>
									<p>
										{t.services.marketAnalysis.description}
									</p>
								</div>
							</div>

							<div className="card">
								<img
									className="card-image"
									src="images/services-icon-2.svg"
									alt="Opportunity Scan"
								/>
								<div className="card-body">
									<h4 className="card-title">
										{t.services.opportunityScan.title}
									</h4>
									<p>
										{t.services.opportunityScan.description}
									</p>
								</div>
							</div>

							<div className="card">
								<img
									className="card-image"
									src="images/services-icon-3.svg"
									alt="Action Plan"
								/>
								<div className="card-body">
									<h4 className="card-title">{t.services.actionPlan.title}</h4>
									<p>
										{t.services.actionPlan.description}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="basic-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="text-container">
								<h2>
									{t.basic1.title}
								</h2>
								<p>
									{t.basic1.description}
								</p>
								<a
									className="btn-solid-reg popup-with-move-anim"
									href="#details-lightbox-1"
								>
									{t.basic1.button}
								</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="image-container">
								<img
									className="img-fluid"
									src="images/details-1-office-worker.svg"
									alt="Office worker"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="basic-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="image-container">
								<img
									className="img-fluid"
									src="images/details-2-office-team-work.svg"
									alt="Office team work"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="text-container">
								<h2>
									{t.basic2.title}
								</h2>
								<ul className="list-unstyled li-space-lg">
									{t.basic2.items.map((item, index) => (
										<li className="media" key={index}>
											<i className="fas fa-check"></i>
											<div className="media-body">
												{item}
											</div>
										</li>
									))}
								</ul>
								<a
									className="btn-solid-reg popup-with-move-anim"
									href="#details-lightbox-2"
								>
									{t.basic2.button}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				id="details-lightbox-1"
				className="lightbox-basic zoom-anim-dialog mfp-hide"
			>
				<div className="container">
					<div className="row">
						<button
							title={t.lightbox.close}
							type="button"
							className="mfp-close x-button"
						>
							×
						</button>
						<div className="col-lg-8">
							<div className="image-container">
								<img
									className="img-fluid"
									src="images/details-lightbox-1.svg"
									alt="Design and plan details"
								/>
							</div>
						</div>
						<div className="col-lg-4">
							<h3>{t.lightbox.designPlan.title}</h3>
							<hr />
							<h5>{t.lightbox.designPlan.coreFeature}</h5>
							<p>
								{t.lightbox.designPlan.description1}
							</p>
							<p>
								{t.lightbox.designPlan.description2}
							</p>
							<ul className="list-unstyled li-space-lg">
								{t.lightbox.designPlan.features.map((feature, index) => (
									<li className="media" key={index}>
										<i className="fas fa-check"></i>
										<div className="media-body">
											{feature}
										</div>
									</li>
								))}
							</ul>
							<a
								className="btn-solid-reg mfp-close page-scroll"
								href="#request"
							>
								{t.lightbox.requestBtn}
							</a>{" "}
							<a
								className="btn-outline-reg mfp-close as-button"
								href="#screenshots"
							>
								{t.lightbox.backBtn}
							</a>
						</div>
					</div>
				</div>
			</div>

			<div
				id="details-lightbox-2"
				className="lightbox-basic zoom-anim-dialog mfp-hide"
			>
				<div className="container">
					<div className="row">
						<button
							title={t.lightbox.close}
							type="button"
							className="mfp-close x-button"
						>
							×
						</button>
						<div className="col-lg-8">
							<div className="image-container">
								<img
									className="img-fluid"
									src="images/details-lightbox-2.svg"
									alt="Search to optimize details"
								/>
							</div>
						</div>
						<div className="col-lg-4">
							<h3>{t.lightbox.searchOptimize.title}</h3>
							<hr />
							<h5>{t.lightbox.designPlan.coreFeature}</h5>
							<p>
								{t.lightbox.designPlan.description1}
							</p>
							<p>
								{t.lightbox.designPlan.description2}
							</p>
							<ul className="list-unstyled li-space-lg">
								{t.lightbox.designPlan.features.map((feature, index) => (
									<li className="media" key={index}>
										<i className="fas fa-check"></i>
										<div className="media-body">
											{feature}
										</div>
									</li>
								))}
							</ul>
							<a
								className="btn-solid-reg mfp-close page-scroll"
								href="#request"
							>
								{t.lightbox.requestBtn}
							</a>{" "}
							<a
								className="btn-outline-reg mfp-close as-button"
								href="#screenshots"
							>
								{t.lightbox.backBtn}
							</a>
						</div>
					</div>
				</div>
			</div>

			<div id="pricing" className="cards-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>{t.pricing.title}</h2>
							<p className="p-heading p-large">
								{t.pricing.subtitle}
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="card-title">{t.pricing.plans.starter.name}</div>
									<div className="card-subtitle">
										{t.pricing.plans.starter.subtitle}
									</div>
									<hr className="cell-divide-hr" />
									<div className="price">
										<span className="currency">$</span>
										<span className="value">199</span>
										<div className="frequency">{t.pricing.monthly}</div>
									</div>
									<hr className="cell-divide-hr" />
									<ul className="list-unstyled li-space-lg">
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												{t.pricing.features[0]}
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												{t.pricing.features[1]}
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												{t.pricing.features[2]}
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												{t.pricing.features[3]}
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												{t.pricing.features[4]}
											</div>
										</li>
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="#request"
										>
											{t.pricing.requestBtn}
										</a>
									</div>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<div className="card-title">{t.pricing.plans.medium.name}</div>
									<div className="card-subtitle">
										{t.pricing.plans.medium.subtitle}
									</div>
									<hr className="cell-divide-hr" />
									<div className="price">
										<span className="currency">$</span>
										<span className="value">299</span>
										<div className="frequency">{t.pricing.monthly}</div>
									</div>
									<hr className="cell-divide-hr" />
									<ul className="list-unstyled li-space-lg">
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												{t.pricing.features[0]}
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												{t.pricing.features[1]}
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												{t.pricing.features[2]}
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												{t.pricing.features[3]}
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												{t.pricing.features[4]}
											</div>
										</li>
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="#request"
										>
											{t.pricing.requestBtn}
										</a>
									</div>
								</div>
							</div>

							<div className="card">
								<div className="label">
									<p className="best-value">{t.pricing.bestValue}</p>
								</div>
								<div className="card-body">
									<div className="card-title">{t.pricing.plans.complete.name}</div>
									<div className="card-subtitle">
										{t.pricing.plans.complete.subtitle}
									</div>
									<hr className="cell-divide-hr" />
									<div className="price">
										<span className="currency">$</span>
										<span className="value">399</span>
										<div className="frequency">{t.pricing.monthly}</div>
									</div>
									<hr className="cell-divide-hr" />
									<ul className="list-unstyled li-space-lg">
										{t.pricing.features.map((feature, index) => (
											<li className="media" key={index}>
												<i className="fas fa-check"></i>
												<div className="media-body">
													{feature}
												</div>
											</li>
										))}
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="#request"
										>
											{t.pricing.requestBtn}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="request" className="form-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="text-container">
								<h2>
									{t.requestForm.title}
								</h2>
								<p>
									{t.requestForm.description}
								</p>
								<ul className="list-unstyled li-space-lg">
									{t.requestForm.benefits.map((benefit, index) => (
										<li className="media" key={index}>
											<i className="fas fa-check"></i>
											<div className="media-body">
												<strong className="blue">
													{benefit.bold}
												</strong>{" "}
												{benefit.text}
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-container">
								<form
									id="requestForm"
									data-toggle="validator"
									data-focus="false"
								>
									<div className="form-group">
										<input
											type="text"
											className="form-control-input"
											id="rname"
											name="rname"
											required
										/>
										<label
											className="label-control"
											htmlFor="rname"
										>
											{t.requestForm.fullName}
										</label>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											type="email"
											className="form-control-input"
											id="remail"
											name="remail"
											required
										/>
										<label
											className="label-control"
											htmlFor="remail"
										>
											{t.requestForm.email}
										</label>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control-input"
											id="rphone"
											name="rphone"
											required
										/>
										<label
											className="label-control"
											htmlFor="rphone"
										>
											{t.requestForm.phone}
										</label>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<select
											className="form-control-select"
											id="rselect"
											required
										>
											<option
												className="select-option"
												value=""
												disabled
												selected
											>
												{t.requestForm.interestedIn}
											</option>
											<option
												className="select-option"
												value="Starter"
											>
												{t.requestForm.options.starter}
											</option>
											<option
												className="select-option"
												value="Medium"
											>
												{t.requestForm.options.medium}
											</option>
											<option
												className="select-option"
												value="Complete"
											>
												{t.requestForm.options.complete}
											</option>
										</select>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group checkbox">
										<input
											type="checkbox"
											id="rterms"
											value="Agreed-to-Terms"
											name="rterms"
											required
										/>
										{t.requestForm.agreementText}{" "}
										<a href="privacy-policy.html">
											{t.requestForm.privacyPolicy}
										</a>{" "}
										{t.requestForm.and}{" "}
										<a href="terms-conditions.html">
											{t.requestForm.termsConditions}
										</a>{" "}
										{t.requestForm.ofBlueStar}
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<button
											type="submit"
											className="form-control-submit-button"
										>
											{t.requestForm.submitBtn}
										</button>
									</div>
									<div className="form-message">
										<div
											id="rmsgSubmit"
											className="h3 text-center hidden"
										></div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="basic-3">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>{t.video.title}</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="image-container">
								<div className="video-wrapper">
									<a
										className="popup-youtube"
										href="https://www.youtube.com/watch?v=fLCjQJCekTs"
										data-effect="fadeIn"
									>
										<img
											className="img-fluid"
											src="images/video-frame.svg"
											alt="Video"
										/>
										<span className="video-play-button">
											<span></span>
										</span>
									</a>
								</div>
							</div>

							<p>
								{t.video.description}{" "}
								<strong>{t.video.majorCustomers}</strong>{" "}
								{t.video.description2}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="slider-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="image-container">
								<img
									className="img-fluid"
									src="images/testimonials-2-men-talking.svg"
									alt="Testimonials"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<h2>{t.testimonials.title}</h2>

							<div className="slider-container">
								<div className="swiper-container card-slider">
									<div className="swiper-wrapper">
										{t.testimonials.items.map((testimonial, index) => (
											<div className="swiper-slide" key={index}>
												<div className="card">
													<img
														className="card-image"
														src={`images/testimonial-${index + 1}.svg`}
														alt={testimonial.author}
													/>
													<div className="card-body">
														<p className="testimonial-text">
															{testimonial.text}
														</p>
														<p className="testimonial-author">
															{testimonial.author} - {testimonial.role}
														</p>
													</div>
												</div>
											</div>
										))}
									</div>

									<div className="swiper-button-next"></div>
									<div className="swiper-button-prev"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="about" className="basic-4">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>{t.team.title}</h2>
							<p className="p-heading p-large">
								{t.team.subtitle}
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							{t.team.members.map((member, index) => (
								<div className="team-member" key={index}>
									<div className="image-wrapper">
										<img
											className="img-fluid"
											src={`images/team-member-${index + 1}.svg`}
											alt={member.name}
										/>
									</div>
									<p className="p-large">
										<strong>{member.name}</strong>
									</p>
									<p className="job-title">{member.role}</p>
									<span className="social-icons">
										<span className="fa-stack">
											<a href="#your-link">
												<i className="fas fa-circle fa-stack-2x facebook"></i>
												<i className="fab fa-facebook-f fa-stack-1x"></i>
											</a>
										</span>
										<span className="fa-stack">
											<a href="#your-link">
												<i className="fas fa-circle fa-stack-2x twitter"></i>
												<i className="fab fa-twitter fa-stack-1x"></i>
											</a>
										</span>
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div id="contact" className="form-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>{t.contact.title}</h2>
							<ul className="list-unstyled li-space-lg">
								<li className="address">
									{t.contact.subtitle}
								</li>
								<li>
									<i className="fas fa-map-marker-alt"></i>
									{t.contact.address}
								</li>
								<li>
									<i className="fas fa-phone"></i>
									<a
										className="turquoise"
										href="tel:+84927394039"
									>
										+84927394039
									</a>
								</li>
								<li>
									<i className="fas fa-envelope"></i>
									<a
										className="turquoise"
										href="mailto:office@bluestar.com"
									>
										office@bluestar.com
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="map-responsive">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4!2d106.6679!3d10.7731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38a5c3f5f5%3A0x1234567890abcdef!2zNjY2IEJhIFRow6FuZyBIYWksIFBoxrDhu51uZyAxNCwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2svn!4v1701700000000"
									allowFullScreen
								></iframe>
							</div>
						</div>
						<div className="col-lg-6">
							<form
								id="contactForm"
								data-toggle="validator"
								data-focus="false"
							>
								<div className="form-group">
									<input
										type="text"
										className="form-control-input"
										id="cname"
										required
									/>
									<label
										className="label-control"
										htmlFor="cname"
									>
										{t.contact.name}
									</label>
									<div className="help-block with-errors"></div>
								</div>
								<div className="form-group">
									<input
										type="email"
										className="form-control-input"
										id="cemail"
										required
									/>
									<label
										className="label-control"
										htmlFor="cemail"
									>
										{t.contact.email}
									</label>
									<div className="help-block with-errors"></div>
								</div>
								<div className="form-group">
									<textarea
										className="form-control-textarea"
										id="cmessage"
										required
									></textarea>
									<label
										className="label-control"
										htmlFor="cmessage"
									>
										{t.contact.message}
									</label>
									<div className="help-block with-errors"></div>
								</div>
								<div className="form-group checkbox">
									<input
										type="checkbox"
										id="cterms"
										value="Agreed-to-Terms"
										required
									/>
									{t.contact.agreementText}{" "}
									<a href="privacy-policy.html">
										{t.contact.privacyPolicy}
									</a>{" "}
									{t.contact.and}{" "}
									<a href="terms-conditions.html">
										{t.contact.termsConditions}
									</a>{" "}
									{t.contact.ofBlueStar}
									<div className="help-block with-errors"></div>
								</div>
								<div className="form-group">
									<button
										type="submit"
										className="form-control-submit-button"
									>
										{t.contact.submitBtn}
									</button>
								</div>
								<div className="form-message">
									<div
										id="cmsgSubmit"
										className="h3 text-center hidden"
									></div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="footer-col">
								<h4>{t.footer.aboutTitle}</h4>
								<p>
									{t.footer.aboutText}
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="footer-col middle">
								<h4>{t.footer.linksTitle}</h4>
							</div>
						</div>
						<div className="col-md-4">
							<div className="footer-col last">
								<h4>{t.footer.socialTitle}</h4>
								<span className="fa-stack">
									<a href="#your-link">
										<i className="fas fa-circle fa-stack-2x"></i>
										<i className="fab fa-facebook-f fa-stack-1x"></i>
									</a>
								</span>
								<span className="fa-stack">
									<a href="#your-link">
										<i className="fas fa-circle fa-stack-2x"></i>
										<i className="fab fa-twitter fa-stack-1x"></i>
									</a>
								</span>
								<span className="fa-stack">
									<a href="#your-link">
										<i className="fas fa-circle fa-stack-2x"></i>
										<i className="fab fa-google-plus-g fa-stack-1x"></i>
									</a>
								</span>
								<span className="fa-stack">
									<a href="#your-link">
										<i className="fas fa-circle fa-stack-2x"></i>
										<i className="fab fa-instagram fa-stack-1x"></i>
									</a>
								</span>
								<span className="fa-stack">
									<a href="#your-link">
										<i className="fas fa-circle fa-stack-2x"></i>
										<i className="fab fa-linkedin-in fa-stack-1x"></i>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<p className="p-small">
								{t.footer.copyright}{" "}
								<a href="https://inovatik.com">Inovatik</a>{" "}
								{t.footer.allRightsReserved}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
