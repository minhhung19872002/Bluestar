import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import {
	Header,
	Hero,
	Services,
	About,
	WhyChooseUs,
	Contact,
	Footer,
} from "./components";

function App() {
	const { t } = useLanguage();

	useEffect(() => {
		document.title = t.pageTitle;
		document
			.querySelector('meta[name="description"]')
			?.setAttribute("content", t.metaDescription);
		document
			.querySelector('meta[name="keywords"]')
			?.setAttribute("content", t.metaKeywords);
	}, [t]);

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
			<Header />
			<main>
				<Hero />
				<Services />
				<About />
				<WhyChooseUs />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
