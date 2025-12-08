import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
	Header,
	Hero,
	Services,
	About,
	WhyChooseUs,
	Contact,
	Footer,
	SEO,
	NotFound,
} from "./components";

function App() {
	// Smooth scroll for anchor links
	useEffect(() => {
		const handleAnchorClick = (e) => {
			const target = e.target.closest('a[href^="#"]');
			if (target) {
				e.preventDefault();
				const id = target.getAttribute("href").slice(1);
				const element = document.getElementById(id);
				if (element) {
					const headerOffset = 80;
					const elementPosition = element.getBoundingClientRect().top;
					const offsetPosition =
						elementPosition + window.pageYOffset - headerOffset;

					window.scrollTo({
						top: offsetPosition,
						behavior: "smooth",
					});
				}
			}
		};

		document.addEventListener("click", handleAnchorClick);
		return () => document.removeEventListener("click", handleAnchorClick);
	}, []);

	return (
		<div className="min-h-screen">
			<SEO />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<main>
								<Hero />
								<Services />
								<About />
								<WhyChooseUs />
								<Contact />
							</main>
							<Footer />
						</>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
