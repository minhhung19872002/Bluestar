import { createContext, useContext, useState, useEffect } from "react";
import { languages, languageNames } from "./locales";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState(() => {
		// Get saved language from localStorage or default to Vietnamese
		const saved = localStorage.getItem("language");
		return saved && languages[saved] ? saved : "vi";
	});

	const t = languages[language];

	const switchLanguage = (lang) => {
		if (languages[lang]) {
			setLanguage(lang);
			localStorage.setItem("language", lang);
		}
	};

	const toggleLanguage = () => {
		const newLang = language === "vi" ? "en" : "vi";
		switchLanguage(newLang);
	};

	useEffect(() => {
		// Update document language
		document.documentElement.lang = language;
	}, [language]);

	return (
		<LanguageContext.Provider
			value={{
				language,
				t,
				switchLanguage,
				toggleLanguage,
				languageNames,
				availableLanguages: Object.keys(languages),
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}

export default LanguageContext;
