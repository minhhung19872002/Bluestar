import "./css/styles.css";
import "./css/bootstrap.css";
import "./css/fontawesome-all.css";
import "./css/swiper.css";
import "./css/magnific-popup.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		document.title = "BlueStar - IT Outsourcing Services";
		document
			.querySelector('meta[name="description"]')
			?.setAttribute(
				"content",
				"BlueStar offers IT consulting and software services to clients worldwide."
			);
		document
			.querySelector('meta[name="keywords"]')
			?.setAttribute(
				"content",
				"IT outsourcing, software services, consulting, BlueStar, business growth"
			);
	}, []);

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
						alt="alternative"
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
					aria-label="Toggle navigation"
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
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link page-scroll"
								href="#services"
							>
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link page-scroll" href="#pricing">
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link page-scroll" href="#request">
								Request
							</a>
						</li>

						<li className="nav-item dropdown">
							<a
								className="nav-link  page-scroll"
								href="#about"
								role="button"
								aria-haspopup="true"
								aria-expanded="false"
							>
								About
							</a>
							{/* <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">Terms Conditions</span></a>
                        <div className="dropdown-items-divide-hr"></div>
                        <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">Privacy Policy</span></a>
                    </div> */}
						</li>

						<li className="nav-item">
							<a className="nav-link page-scroll" href="#contact">
								Contact
							</a>
						</li>
					</ul>
					<span className="nav-item social-icons">
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
									<h1> About Us</h1>
									<p className="p-large">
										BLUESTAR , an IT outsourcing company
										with over 10 years of experience,
										provides consulting and software
										services and technology solutions to
										various clients across North America,
										Australia, Korea, Japan, Singapore and
										Vietnam. At BLUESTAR, we have over 100
										experts who specialize in technological
										advancements and innovations. We provide
										our products and services to meet the
										needs of Information Technology and keep
										up with technological developments. We
										pride ourselves on our ability to adapt,
										adjust, modify and tailor our expertise
										to various industries.
									</p>
									<a
										className="btn-solid-lg page-scroll"
										href="#"
									>
										DISCOVER
									</a>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="image-container">
									<img
										className="img-fluid"
										src="images/header-teamwork.svg"
										alt="alternative"
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
							<h2>Business Growth Services</h2>
							<p className="p-heading p-large">
								We serve small and medium sized companies in all
								tech related industries with high quality growth
								services which are presented below
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<img
									className="card-image"
									src="images/services-icon-1.svg"
									alt="alternative"
								/>
								<div className="card-body">
									<h4 className="card-title">
										Market Analysis
									</h4>
									<p>
										Our team of enthusiastic marketers will
										analyse and evaluate how your company
										stacks against the closest competitors
									</p>
								</div>
							</div>

							<div className="card">
								<img
									className="card-image"
									src="images/services-icon-2.svg"
									alt="alternative"
								/>
								<div className="card-body">
									<h4 className="card-title">
										Opportunity Scan
									</h4>
									<p>
										Once the market analysis process is
										completed our staff will search for
										opportunities that are in reach
									</p>
								</div>
							</div>

							<div className="card">
								<img
									className="card-image"
									src="images/services-icon-3.svg"
									alt="alternative"
								/>
								<div className="card-body">
									<h4 className="card-title">Action Plan</h4>
									<p>
										With all the information in place you
										will be presented with an action plan
										that your company needs to follow
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
									Design And Plan Your Business Growth Steps
								</h2>
								<p>
									Use our staff and our expertise to design
									and plan your business growth strategy.
									Evolo team is eager to advise you on the
									best opportunities that you should look into
								</p>
								<a
									className="btn-solid-reg popup-with-move-anim"
									href="#details-lightbox-1"
								>
									LIGHTBOX
								</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="image-container">
								<img
									className="img-fluid"
									src="images/details-1-office-worker.svg"
									alt="alternative"
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
									alt="alternative"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="text-container">
								<h2>
									Search For Optimization Wherever Is Possible
								</h2>
								<ul className="list-unstyled li-space-lg">
									<li className="media">
										<i className="fas fa-check"></i>
										<div className="media-body">
											Basically well teach you step by
											step what you need to do
										</div>
									</li>
									<li className="media">
										<i className="fas fa-check"></i>
										<div className="media-body">
											In order to develop your company and
											reach new heights
										</div>
									</li>
									<li className="media">
										<i className="fas fa-check"></i>
										<div className="media-body">
											Everyone will be pleased from
											stakeholders to employees
										</div>
									</li>
								</ul>
								<a
									className="btn-solid-reg popup-with-move-anim"
									href="#details-lightbox-2"
								>
									LIGHTBOX
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
							title="Close (Esc)"
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
									alt="alternative"
								/>
							</div>
						</div>
						<div className="col-lg-4">
							<h3>Design And Plan</h3>
							<hr />
							<h5>Core feature</h5>
							<p>
								The emailing module basically will speed up your
								email marketing operations while offering more
								subscriber control.
							</p>
							<p>
								Do you need to build lists for your email
								campaigns? It just got easier with Evolo.
							</p>
							<ul className="list-unstyled li-space-lg">
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										List building framework
									</div>
								</li>
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										Easy database browsing
									</div>
								</li>
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										User administration
									</div>
								</li>
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										Automate user signup
									</div>
								</li>
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										Quick formatting tools
									</div>
								</li>
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										Fast email checking
									</div>
								</li>
							</ul>
							<a
								className="btn-solid-reg mfp-close page-scroll"
								href="#request"
							>
								REQUEST
							</a>{" "}
							<a
								className="btn-outline-reg mfp-close as-button"
								href="#screenshots"
							>
								BACK
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
							title="Close (Esc)"
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
									alt="alternative"
								/>
							</div>
						</div>
						<div className="col-lg-4">
							<h3>Search To Optimize</h3>
							<hr />
							<h5>Core feature</h5>
							<p>
								The emailing module basically will speed up your
								email marketing operations while offering more
								subscriber control.
							</p>
							<p>
								Do you need to build lists for your email
								campaigns? It just got easier with Evolo.
							</p>
							<ul className="list-unstyled li-space-lg">
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										List building framework
									</div>
								</li>
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										Easy database browsing
									</div>
								</li>
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										User administration
									</div>
								</li>
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										Automate user signup
									</div>
								</li>
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										Quick formatting tools
									</div>
								</li>
								<li className="media">
									<i className="fas fa-check"></i>
									<div className="media-body">
										Fast email checking
									</div>
								</li>
							</ul>
							<a
								className="btn-solid-reg mfp-close page-scroll"
								href="#request"
							>
								REQUEST
							</a>{" "}
							<a
								className="btn-outline-reg mfp-close as-button"
								href="#screenshots"
							>
								BACK
							</a>
						</div>
					</div>
				</div>
			</div>

			<div id="pricing" className="cards-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Multiple Pricing Options</h2>
							<p className="p-heading p-large">
								Weve prepared pricing plans for all budgets so
								you can get started right away. Theyre great for
								small companies and large organizations
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="card-title">STARTER</div>
									<div className="card-subtitle">
										Just to see what can be achieved
									</div>
									<hr className="cell-divide-hr" />
									<div className="price">
										<span className="currency">$</span>
										<span className="value">199</span>
										<div className="frequency">monthly</div>
									</div>
									<hr className="cell-divide-hr" />
									<ul className="list-unstyled li-space-lg">
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												Improve Your Email Marketing
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												User And Admin Rights Control
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												List Building And Cleaning
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												Collected Data Management
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												More Planning And Evaluation
											</div>
										</li>
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="#request"
										>
											REQUEST
										</a>
									</div>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<div className="card-title">MEDIUM</div>
									<div className="card-subtitle">
										Very appropriate for the short term
									</div>
									<hr className="cell-divide-hr" />
									<div className="price">
										<span className="currency">$</span>
										<span className="value">299</span>
										<div className="frequency">monthly</div>
									</div>
									<hr className="cell-divide-hr" />
									<ul className="list-unstyled li-space-lg">
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												Improve Your Email Marketing
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												User And Admin Rights Control
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												List Building And Cleaning
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												Collected Data Management
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												More Planning And Evaluation
											</div>
										</li>
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="#request"
										>
											REQUEST
										</a>
									</div>
								</div>
							</div>

							<div className="card">
								<div className="label">
									<p className="best-value">Best Value</p>
								</div>
								<div className="card-body">
									<div className="card-title">COMPLETE</div>
									<div className="card-subtitle">
										Must have for large companies
									</div>
									<hr className="cell-divide-hr" />
									<div className="price">
										<span className="currency">$</span>
										<span className="value">399</span>
										<div className="frequency">monthly</div>
									</div>
									<hr className="cell-divide-hr" />
									<ul className="list-unstyled li-space-lg">
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												Improve Your Email Marketing
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												User And Admin Rights Control
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												List Building And Cleaning
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												Collected Data Management
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												More Planning And Evaluation
											</div>
										</li>
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="#request"
										>
											REQUEST
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
									Fill The Following Form To Request A Meeting
								</h2>
								<p>
									Evolo is one of the easiest and feature
									packed marketing automation apps in the
									market. Discover what it can do for your
									business organization right away.
								</p>
								<ul className="list-unstyled li-space-lg">
									<li className="media">
										<i className="fas fa-check"></i>
										<div className="media-body">
											<strong className="blue">
												Automate your marketing
											</strong>{" "}
											activities and get results today
										</div>
									</li>
									<li className="media">
										<i className="fas fa-check"></i>
										<div className="media-body">
											<strong className="blue">
												Interact with all your
											</strong>{" "}
											targeted customers at a personal
											level
										</div>
									</li>
									<li className="media">
										<i className="fas fa-check"></i>
										<div className="media-body">
											<strong className="blue">
												Convince them to buy
											</strong>{" "}
											your companys awesome products
										</div>
									</li>
									<li className="media">
										<i className="fas fa-check"></i>
										<div className="media-body">
											<strong className="blue">
												Save precious time
											</strong>{" "}
											and invest it where you need it the
											most
										</div>
									</li>
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
											Full name
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
											Email
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
											Phone
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
												Interested in...
											</option>
											<option
												className="select-option"
												value="Personal Loan"
											>
												Starter
											</option>
											<option
												className="select-option"
												value="Car Loan"
											>
												Medium
											</option>
											<option
												className="select-option"
												value="House Loan"
											>
												Complete
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
										I agree with Evolos stated{" "}
										<a href="privacy-policy.html">
											Privacy Policy
										</a>{" "}
										and{" "}
										<a href="terms-conditions.html">
											Terms & Conditions
										</a>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<button
											type="submit"
											className="form-control-submit-button"
										>
											REQUEST
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
							<h2>Check Out The Video</h2>
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
											alt="alternative"
										/>
										<span className="video-play-button">
											<span></span>
										</span>
									</a>
								</div>
							</div>

							<p>
								This video will show you a case study for one of
								our <strong>Major Customers</strong> and will
								help you understand why your startup needs Evolo
								in this highly competitive market
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
									alt="alternative"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<h2>Testimonials</h2>

							<div className="slider-container">
								<div className="swiper-container card-slider">
									<div className="swiper-wrapper">
										<div className="swiper-slide">
											<div className="card">
												<img
													className="card-image"
													src="images/testimonial-1.svg"
													alt="alternative"
												/>
												<div className="card-body">
													<p className="testimonial-text">
														I just finished my trial
														period and was so amazed
														with the support and
														results that I purchased
														Evolo right away at the
														special price.
													</p>
													<p className="testimonial-author">
														Jude Thorn - Designer
													</p>
												</div>
											</div>
										</div>

										<div className="swiper-slide">
											<div className="card">
												<img
													className="card-image"
													src="images/testimonial-2.svg"
													alt="alternative"
												/>
												<div className="card-body">
													<p className="testimonial-text">
														Evolo has always helped
														or startup to position
														itself in the highly
														competitive market of
														mobile applications. You
														will not regret using
														it!
													</p>
													<p className="testimonial-author">
														Marsha Singer -
														Developer
													</p>
												</div>
											</div>
										</div>

										<div className="swiper-slide">
											<div className="card">
												<img
													className="card-image"
													src="images/testimonial-3.svg"
													alt="alternative"
												/>
												<div className="card-body">
													<p className="testimonial-text">
														Love their services and
														was so amazed with the
														support and results that
														I purchased Evolo for
														two years in a row. They
														are awesome.
													</p>
													<p className="testimonial-author">
														Roy Smith - Marketer
													</p>
												</div>
											</div>
										</div>
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
							<h2>About The Team</h2>
							<p className="p-heading p-large">
								Meat our team of specialized marketers and
								business developers which will help you research
								new products and launch them in new emerging
								markets
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="team-member">
								<div className="image-wrapper">
									<img
										className="img-fluid"
										src="images/team-member-1.svg"
										alt="alternative"
									/>
								</div>
								<p className="p-large">
									<strong>Lacy Whitelong</strong>
								</p>
								<p className="job-title">Business Developer</p>
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

							<div className="team-member">
								<div className="image-wrapper">
									<img
										className="img-fluid"
										src="images/team-member-2.svg"
										alt="alternative"
									/>
								</div>
								<p className="p-large">
									<strong>Chris Brown</strong>
								</p>
								<p className="job-title">Online Marketer</p>
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

							<div className="team-member">
								<div className="image-wrapper">
									<img
										className="img-fluid"
										src="images/team-member-3.svg"
										alt="alternative"
									/>
								</div>
								<p className="p-large">
									<strong>Sheila Zimerman</strong>
								</p>
								<p className="job-title">Software Engineer</p>
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

							<div className="team-member">
								<div className="image-wrapper">
									<img
										className="img-fluid"
										src="images/team-member-4.svg"
										alt="alternative"
									/>
								</div>
								<p className="p-large">
									<strong>Mary Villalonga</strong>
								</p>
								<p className="job-title">Product Manager</p>
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
						</div>
					</div>
				</div>
			</div>

			<div id="contact" className="form-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Contact Information</h2>
							<ul className="list-unstyled li-space-lg">
								<li className="address">
									Dont hesitate to give us a call or send us a
									contact form message
								</li>
								<li>
									<i className="fas fa-map-marker-alt"></i>236
									Thai Phien Ward 8, District 11, Ho Chi
									Minh,VN
								</li>
								<li>
									<i className="fas fa-phone"></i>
									<a
										className="turquoise"
										href="tel:003024630820"
									>
										+84935486712
									</a>
								</li>
								<li>
									<i className="fas fa-envelope"></i>
									<a
										className="turquoise"
										href="mailto:office@evolo.com"
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
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sro!4v1498231462606"
									allowfullscreen
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
										Name
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
										Email
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
										Your message
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
									I have read and agree with Evolos stated{" "}
									<a href="privacy-policy.html">
										Privacy Policy
									</a>{" "}
									and{" "}
									<a href="terms-conditions.html">
										Terms Conditions
									</a>
									<div className="help-block with-errors"></div>
								</div>
								<div className="form-group">
									<button
										type="submit"
										className="form-control-submit-button"
									>
										SUBMIT MESSAGE
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
								<h4>About BlueStar</h4>
								<p>
									Were passionate about offering some of the
									best business growth services for startups
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="footer-col middle">
								<h4>Important Links</h4>
								{/* <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Our business partners <a className="turquoise" href="#your-link">startupguide.com</a></div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Read our <a className="turquoise" href="terms-conditions.html">Terms & Conditions</a>, <a className="turquoise" href="privacy-policy.html">Privacy Policy</a></div>
                            </li>
                        </ul> */}
							</div>
						</div>
						<div className="col-md-4">
							<div className="footer-col last">
								<h4>Social Media</h4>
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
								Copyright © 2020{" "}
								<a href="https://inovatik.com">Inovatik</a> -
								All rights reserved
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
