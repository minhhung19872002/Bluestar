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

		// Update canonical URL based on language
		const baseUrl = "https://bluestar.com.vn";
		const canonicalUrl = language === "vi" ? `${baseUrl}/` : `${baseUrl}/?lang=en`;
		updateLinkTag("canonical", canonicalUrl);

		// Update hreflang tags dynamically
		updateLinkTag("alternate", `${baseUrl}/`, "vi");
		updateLinkTag("alternate", `${baseUrl}/?lang=en`, "en");
		updateLinkTag("alternate", `${baseUrl}/`, "x-default");

		// Update og:url for social sharing
		updateMetaProperty("og:url", canonicalUrl);
		updateMetaProperty("twitter:url", canonicalUrl);
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

	const updateLinkTag = (rel, href, hreflang = null) => {
		let selector = `link[rel="${rel}"]`;
		if (hreflang) {
			selector = `link[rel="${rel}"][hreflang="${hreflang}"]`;
		}
		let element = document.querySelector(selector);
		if (element) {
			element.setAttribute("href", href);
		}
	};

	return null; // This component doesn't render anything
};

export default SEO;
