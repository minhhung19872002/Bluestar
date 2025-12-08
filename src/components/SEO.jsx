import { useEffect } from "react";
import { useLanguage } from "../LanguageContext";

const SEO = () => {
	const { t, language } = useLanguage();

	useEffect(() => {
		// Update document title
		document.title = t.pageTitle;

		// Update meta tags
		updateMetaTag("description", t.metaDescription);
		updateMetaTag("keywords", t.metaKeywords);

		// Update Open Graph tags
		updateMetaProperty("og:title", t.pageTitle);
		updateMetaProperty("og:description", t.metaDescription);
		updateMetaProperty("og:locale", language === "vi" ? "vi_VN" : "en_US");

		// Update Twitter tags
		updateMetaProperty("twitter:title", t.pageTitle);
		updateMetaProperty("twitter:description", t.metaDescription);

		// Update HTML lang attribute
		document.documentElement.lang = language;
	}, [t, language]);

	const updateMetaTag = (name, content) => {
		let element = document.querySelector(`meta[name="${name}"]`);
		if (element) {
			element.setAttribute("content", content);
		}
	};

	const updateMetaProperty = (property, content) => {
		let element = document.querySelector(`meta[property="${property}"]`);
		if (element) {
			element.setAttribute("content", content);
		}
	};

	return null; // This component doesn't render anything
};

export default SEO;
