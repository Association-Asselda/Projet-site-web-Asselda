// Translations for the website
export type Language = "fr" | "ar" | "en";

export type PageKey =
	| "home"
	| "about"
	| "news"
	| "projects"
	| "activities"
	| "gallery"
	| "partners"
	| "contact"
	| "join";

export const languages: Language[] = ["fr", "ar", "en"];

export const languageLabel: Map<Language, string> = new Map([
	["fr", "Français"],
	["ar", "العربية"],
	["en", "English"],
]);
// {  };

export const translations = {
	fr: {
		pages: {
			home: {
				title: "Association Asselda",
				description: "Pour l'environnement, le développement et la famille – depuis 1996",
				keywords: [
					"Association Asselda",
					"Accueil",
					"Environnement",
					"Développement",
					"Famille",
					"Al Haouz",
					"Asni",
				],
				carouselNextProjectLabel: "Projet suivant",
				carouselPrevProjectLabel: "Projet précédent",
				carouselSeeProject: "Voir le projet",
				carouselSeeAllProjects: "Voir tous les projets",
			},
			about: {
				title: "À Propos - Association Asselda",
				description:
					"Page à-propos donnant plus d'informations sur l'association Asselda contenant toutes les informations sur celle-ci et tous ces projets réalisés",
				keywords: ["Asselda", "Association", "a-propos", "developpement", "rural", "al-houz"],
			},
			news: {
				title: "Actualités - Association Asselda",
				description:
					"Restez informé des dernières nouvelles de l'Association Asselda, y compris les projets, événements, communiqués et initiatives de solidarité.",
				keywords: ["actualités", "événements", "projets", "communiqués", "solidarité"],
				readMore: "Lire la suite →",
				categories: {
					news: "Actualités",
					event: "Événements",
					project: "Projets",
					solidarity: "Solidarité",
				},
				noArticles: "Aucun article trouvé",
			},
			projects: {
				title: "Projets - Association Asselda",
				description:
					"Découvrez les projets réalisés et en cours de l'Association Asselda, visant à améliorer les conditions de vie des habitants de Douar Asselda à travers des initiatives durables dans les domaines de l'environnement, du rural, du social et de l'éducation.",
				keywords: [
					"projets",
					"association asselda",
					"douar asselda",
					"environnement",
					"rural",
					"social",
					"éducation",
				],
				statuses: {
					inProgress: "En Cours",
					done: "Terminé",
					operational: "Opérationnel",
					planned: "Planifié",
				},
				domains: {
					environment: "Environnement",
					sanitation: "Eau & Assainissement",
					infrastructure: "Infrastructure & Rural",
					social: "Social & Famille",
				},
				budgetLabel: "Budget",
				partnerLabel: "Partenaire principal",
				resultsLabel: "Résultats :",
				noProjects: "Aucun projet ne correspond à cette sélection.",
			},
			activities: {
				title: "Activités - Association Asselda",
				description:
					"Découvrez les projets et initiatives de l'Association Asselda pour le développement durable et le bien-être des habitants de la région d'Asni, Al Haouz.",
				keywords: [
					"Association Asselda",
					"Activités",
					"Projets",
					"Développement durable",
					"Environnement",
					"Rural",
					"Social",
				],
				domains: {
					environment: "Environnement",
					infrastructure: "Infrastructure & Rural",
					social: "Social & Famille",
					formation: "Formation & Éducation",
				},
				noActivities: "Aucune activité trouvée",
			},
			gallery: {
				title: "Galerie - Association Asselda",
				description:
					"Découvrez les photos et vidéos des actions et événements de l'Association Asselda, mettant en lumière la vie quotidienne, les projets et les initiatives des habitants de Douar Asselda.",
				keywords: [
					"Association Asselda",
					"Galerie",
					"Photos",
					"Vidéos",
					"Projets",
					"Événements",
					"Douar Asselda",
				],
				allAlbums: "Tous les albums",
				noAlbums: "Aucun album trouvé",
			},
			partners: {
				title: "Partenaires - Association Asselda",
				description: "Découvrez nos partenaires et collaborateurs dans la mission de l'Association Asselda.",
				keywords: ["partenaires", "collaborateurs", "association", "solidarité"],
				categories: {
					international: "Internationaux",
					institutional: "Institutionnels",
					national: "Nationaux",
				},
			},
			contact: {
				title: "Contact - Association Asselda",
				description: "Contactez l'Association Asselda pour plus d'informations sur nos projets et initiatives.",
				keywords: ["Association Asselda", "Contact", "Projets", "Initiatives", "Douar Asselda"],
				subjectOptions: {
					general: "Information générale",
					partnership: "Partenariat",
					donation: "Don",
					membership: "Adhésion",
					volunteering: "Bénévolat",
					press: "Presse",
					other: "Autre",
				},
			},
			join: {
				title: "Nous Rejoindre - Association Asselda",
				description:
					"Rejoignez l'Association Asselda pour contribuer à nos projets et initiatives en faveur de l'environnement, du développement rural, du social et de l'éducation à Douar Asselda.",
				keywords: ["Association Asselda", "Nous Rejoindre", "Projets", "Initiatives", "Douar Asselda"],
				domains: {
					environment: "Environnement",
					infrastructure: "Infrastructure",
					social: "Social",
					education: "Éducation",
				},
				engagementTypes: {
					active: "Membre actif",
					support: "Membre soutien",
					occasional: "Bénévole occasionnel",
				},
			},
		},
		footer: {
			tagline: "Pour l'environnement, le développement et la famille – depuis 1996",
			navigation: "Navigation",
			home: "Accueil",
			about: "À Propos",
			activities: "Activités",
			projects: "Projets",
			news: "Actualités",
			gallery: "Galerie",
			partners: "Partenaires",
			join: "Nous Rejoindre",
			contact: "Contact",
			info: "Informations",
			location: "Douar Asselda, Asni",
			emailLabel: "Email :",
			email: "associationasselda@gmail.com",
			phoneLabel: "Téléphone :",
			phone: "06 60 01 57 30",
			social: "Réseaux Sociaux",
			followUs: "Suivez-nous",
			copyright:
				"© 2025 Association Asselda pour l'Environnement, le Développement Rural et la Famille. Tous droits réservés.",
			legal: "Mentions légales",
			privacy: "Politique de confidentialité",
			credits:
				"Site réalisé par Ikram Aboutayeb, Adam El Hajjami, Djamilatou Keita, Djelika Tiemtoré – ENSET Mohammedia – 2026",
		},
		header: {
			name: "Association Asselda",
			home: "Accueil",
			about: "À Propos",
			activities: "Activités",
			projects: "Projets",
			news: "Actualités",
			gallery: "Galerie",
			partners: "Partenaires",
			join: "Nous Rejoindre",
			contact: "Contact",
			openNavMenuLabel: "Ouvrir le menu de navigation",
			changeLanguageLabel: "Changer la langue",
		},
	},
	en: {
		pages: {
			home: {
				title: "Asselda Association",
				description: "For the environment, development, and family – since 1996",
				keywords: ["Asselda Association", "Home", "Environment", "Development", "Family", "Al Haouz", "Asni"],
				carouselNextProjectLabel: "Next Project",
				carouselPrevProjectLabel: "Previous Project",
				carouselSeeProject: "See Project",
				carouselSeeAllProjects: "See All Projects",
			},
			about: {
				title: "About - Asselda Association",
				description:
					"About page providing more information about the Asselda Association, including details about the organization and all its completed projects",
				keywords: ["Asselda", "Association", "about", "development", "rural", "al-houz"],
			},
			news: {
				title: "News - Asselda Association",
				description:
					"Stay informed about the latest news from the Asselda Association, including projects, events, press releases, and solidarity initiatives.",
				keywords: ["news", "events", "projects", "press releases", "solidarity"],
				readMore: "Read more →",
				categories: {
					news: "News",
					event: "Events",
					project: "Projects",
					solidarity: "Solidarity",
				},
				noArticles: "No articles found",
			},
			projects: {
				title: "Projects - Asselda Association",
				description:
					"Discover the completed and ongoing projects of the Asselda Association, aimed at improving the living conditions of the residents of Douar Asselda through sustainable initiatives in the areas of the environment, rural development, social welfare, and education.",
				keywords: [
					"projects",
					"asselda association",
					"douar asselda",
					"environment",
					"rural",
					"social",
					"education",
				],
				statuses: {
					inProgress: "Ongoing",
					done: "Done",
					operational: "Operational",
					planned: "Planned",
				},
				domains: {
					environment: "Environment",
					sanitation: "Water & Sanitation",
					infrastructure: "Infrastructure & Rural",
					social: "Social & Family",
				},
				budgetLabel: "Budget",
				partnerLabel: "Main Partner",
				resultsLabel: "Results:",
				noProjects: "No projects match this selection.",
			},
			activities: {
				title: "Activities - Asselda Association",
				description:
					"Discover the projects and initiatives of the Asselda Association for the sustainable development and well-being of the residents of the Asni region, Al Haouz.",
				keywords: [
					"Asselda Association",
					"Activities",
					"Projects",
					"sustainable development",
					"Environment",
					"Rural",
					"Social",
				],
				domains: {
					environment: "Environment",
					infrastructure: "Infrastructure & Rural",
					social: "Social & Family",
					formation: "Training & Education",
				},
				noActivities: "No activities found",
			},
			gallery: {
				title: "Gallery - Asselda Association",
				description:
					"View photos and videos of the Asselda Association's activities and events, highlighting the daily lives, projects, and initiatives of the residents of Douar Asselda.",
				keywords: ["Asselda Association", "Gallery", "Photos", "Videos", "Projects", "Events", "Douar Asselda"],
				allAlbums: "All albums",
				noAlbums: "No albums found",
			},
			partners: {
				title: "Partners - Asselda Association",
				description: "Discover our partners and collaborators in the Asselda Association's mission.",
				keywords: ["partners", "collaborators", "association", "solidarity"],
				categories: {
					international: "International",
					institutional: "Institutional",
					national: "National",
				},
			},
			contact: {
				title: "Contact - Asselda Association",
				description: "Contact the Asselda Association for more information about our projects and initiatives.",
				keywords: ["Association Asselda", "Contact", "Projects", "Initiatives", "Douar Asselda"],
				subjectOptions: {
					general: "General Information",
					partnership: "Partnership",
					donation: "Donation",
					membership: "Membership",
					volunteering: "Volunteering",
					press: "Press",
					other: "Other",
				},
			},
			join: {
				title: "Join Us - Asselda Association",
				description:
					"Join the Asselda Association to contribute to our projects and initiatives supporting the environment, rural development, social welfare, and education in Douar Asselda.",
				keywords: ["Association Asselda", "Join Us", "Projects", "Initiatives", "Douar Asselda"],
				domains: {
					environment: "Environment",
					infrastructure: "Infrastructure",
					social: "Social",
					education: "Education",
				},
				engagementTypes: {
					active: "Active member",
					support: "Support member",
					occasional: "Occasional volunteer",
				},
			},
		},
		footer: {
			tagline: "For the environment, development, and family – since 1996",
			navigation: "Navigation",
			home: "Home",
			about: "About",
			activities: "Activities",
			projects: "Projects",
			news: "News",
			gallery: "Gallery",
			partners: "Partners",
			join: "Join Us",
			contact: "Contact",
			info: "Information",
			location: "Douar Asselda, Asni",
			emailLabel: "Email:",
			email: "associationasselda@gmail.com",
			phoneLabel: "Phone:",
			phone: "06 60 01 57 30",
			social: "Socials",
			followUs: "Follows Us",
			copyright: "© 2025 Asselda Association for the Environment, Development, and Family. All rights reserved.",
			legal: "Legal Notices",
			privacy: "Privacy Policy",
			credits:
				"Website made by Ikram Aboutayeb, Adam El Hajjami, Djamilatou Keita, Djelika Tiemtoré – ENSET Mohammedia – 2026",
		},
		header: {
			name: "Asselda Association",
			home: "Home",
			about: "About",
			activities: "Activities",
			projects: "Projects",
			news: "News",
			gallery: "Gallery",
			partners: "Partners",
			join: "Join Us",
			contact: "Contact",
			openNavMenuLabel: "Open navigation menu",
			changeLanguageLabel: "Change language",
		},
	},
	ar: {
		pages: {
			home: {
				title: "جمعية أسلدة",
				description: "من أجل البيئة والتنمية والعائلة – منذ 1996",
				keywords: ["جمعية أسلدة", "الرئيسية", "البيئة", "التنمية", "العائلة", "الحوز", "أسني"],
				carouselNextProjectLabel: "المشروع التالي",
				carouselPrevProjectLabel: "المشروع السابق",
				carouselSeeProject: "عرض المشروع",
				carouselSeeAllProjects: "عرض جميع المشاريع",
			},
			about: {
				title: "من نحن - جمعية أسلدة",
				description:
					"صفحة من نحن التي تقدم المزيد من المعلومات حول جمعية أسلدة تحتوي على جميع المعلومات حولها وجميع مشاريعها المنجزة",
				keywords: ["أسلدة", "جمعية", "من نحن", "تطوير", "قروية", "الحوز"],
			},
			news: {
				title: "الأخبار - جمعية أسلدة",
				description:
					"ابق على اطلاع بأحدث أخبار جمعية أسلدة، بما في ذلك المشاريع، الأحداث، البيانات الصحفية والمبادرات التضامنية.",
				keywords: ["أخبار", "أحداث", "مشاريع", "بيانات صحفية", "تضامن"],
				readMore: "اقرأ المزيد →",
				categories: {
					news: "أخبار",
					event: "فعاليات",
					project: "مشاريع",
					solidarity: "تضامن",
				},
				noArticles: "لم يتم العثور على أي مقالات",
			},
			projects: {
				title: "المشاريع - جمعية أسلدة",
				description:
					"اكتشف المشاريع المنجزة والجارية لجمعية أسلدة، التي تهدف إلى تحسين ظروف حياة سكان دوار أسلدة من خلال مبادرات مستدامة في مجالات البيئة والتنمية القروية والشؤون الاجتماعية والتعليم.",
				keywords: ["مشاريع", "جمعية أسلدة", "دوار أسلدة", "بيئة", "تنمية قروية", "شؤون اجتماعية", "تعليم"],
				statuses: {
					inProgress: "جارٍ",
					done: "منجز",
					operational: "مشغّل",
					planned: "مبرمج",
				},
				domains: {
					environment: "بيئة",
					sanitation: "الماء والصرف الصحي",
					infrastructure: "البنية التحتية والتنمية القروية",
					social: "الشؤون الاجتماعية والعائلة",
				},
				budgetLabel: "الميزانية",
				partnerLabel: "الشريك الرئيسي",
				resultsLabel: "النتائج :",
				noProjects: "لا يوجد مشاريع تطابق هذا الاختيار.",
			},
			activities: {
				title: "الأنشطة - جمعية أسلدة",
				description:
					"اكتشف المشاريع والمبادرات التابعة لجمعية أسلدة من أجل التنمية المستدامة وسعادة سكان منطقة أسني بالحوز.",
				keywords: ["جمعية أسلدة", "أنشطة", "مشاريع", "تنمية مستدامة", "بيئة", "تنمية قروية", "شؤون اجتماعية"],
				domains: {
					environment: "البيئة",
					infrastructure: "البنية التحتية والتنمية القروية",
					social: "الشؤون الاجتماعية والعائلة",
					formation: "التكوين والتعليم",
				},
				noActivities: "لم يتم العثور على أنشطة",
			},
			gallery: {
				title: "المعرض - جمعية أسلدة",
				description:
					"اكتشف الصور ومقاطع الفيديو الخاصة بأنشطة وفعاليات جمعية أسلدة، مما يسلط الضوء على الحياة اليومية والمشاريع والمبادرات لسكان دوار أسلدة.",
				keywords: ["جمعية أسلدة", "معرض", "صور", "فيديوهات", "مشاريع", "فعاليات", "دوار أسلدة"],
				allAlbums: "جميع الألبومات",
				noAlbums: "لم يتم العثور على ألبومات",
			},
			partners: {
				title: "الشركاء - جمعية أسلدة",
				description: "اكتشف شركاءنا والمتعاونين معنا في مهمة جمعية أسلدة.",
				keywords: ["شركاء", "متعاونين", "جمعية", "تضامن"],
				categories: {
					international: "دولي",
					institutional: "مؤسساتي",
					national: "وطني",
				},
			},
			contact: {
				title: "اتصل بنا - جمعية أسلدة",
				description: "اتصل بجمعية أسلدة للحصول على معلومات إضافية حول مشاريعنا ومبادراتنا.",
				keywords: ["جمعية أسلدة", "اتصل بنا", "مشاريع", "مبادرات", "دوار أسلدة"],
				subjectOptions: {
					general: "معلومات عامة",
					partnership: "شراكة",
					donation: "تبرع",
					membership: "انضمام",
					volunteering: "تطوع",
					press: "صحافة",
					other: "أخرى",
				},
			},
			join: {
				title: "انضم إلينا - جمعية أسلدة",
				description: "انضم إلينا لمساهمة في مشاريعنا ومبادراتنا لخدمة البيئة والتنمية والمجتمع في دوار أسلدة.",
				keywords: ["جمعية أسلدة", "انضم إلينا", "مشاريع", "مبادرات", "دوار أسلدة"],
				domains: {
					environment: "البيئة",
					infrastructure: "البنية التحتية",
					social: "الشأن الاجتماعي",
					education: "التعليم",
				},
				engagementTypes: {
					active: "عضو فاعل",
					support: "عضو داعم",
					occasional: "متطوع عرضي",
				},
			},
		},
		footer: {
			tagline: "من أجل البيئة والتنمية والعائلة - منذ 1996",
			navigation: "التنقل",
			home: "الرئيسية",
			about: "من نحن",
			activities: "الأنشطة",
			projects: "المشاريع",
			news: "الأخبار",
			gallery: "المعرض",
			partners: "الشركاء",
			join: "انضم إلينا",
			contact: "اتصل بنا",
			info: "معلومات",
			location: "دوار أسلدة، أسني",
			emailLabel: "البريد الإلكتروني :",
			email: "associationasselda@gmail.com",
			phoneLabel: "الهاتف :",
			phone: "0660015730",
			social: "وسائل التواصل الاجتماعي",
			followUs: "تابعنا",
			copyright: "© 2025 جمعية أسلدة للبيئة والتنمية القروية والأسرة. جميع الحقوق محفوظة.",
			legal: "الشروط القانونية",
			privacy: "سياسة الخصوصية",
			credits:
				"الموقع من تصميم إكرام أبوطيب، آدم الحجامي، دجاميلا كيتا، دجيليكا تيمتوري - ENSET Mohammedia - 2026",
		},
		header: {
			name: "جمعية أسلدة",
			home: "الرئيسية",
			about: "من نحن",
			activities: "الأنشطة",
			projects: "المشاريع",
			news: "الأخبار",
			gallery: "المعرض",
			partners: "الشركاء",
			join: "انضم إلينا",
			contact: "اتصل بنا",
			openNavMenuLabel: "فتح قائمة التصفح",
			changeLanguageLabel: "تغيير اللغة",
		},
	},
};

export const getTranslation = (lang: Language | string, key: string): string => {
	const safeLang = (languages.includes(lang as Language) ? lang : "fr") as Language;
	const keys = key.split(".");
	let value: any = translations[safeLang];

	for (const k of keys) {
		if (value && typeof value === "object" && k in value) {
			value = value[k];
		} else {
			return key; // Return the key if translation not found
		}
	}

	return typeof value === "string" ? value : key;
};

/**
 * Get page metadata (title, description, keywords) from translations
 * @param lang - Language code (fr, ar)
 * @param page - Page key (home, projects, activities, gallery, contact, join)
 */
export function getPageMetadata(lang: Language | string, page: PageKey) {
	const safeLang = (languages.includes(lang as Language) ? lang : "fr") as Language;
	const pageTranslations = translations[safeLang].pages[page];

	return {
		title: pageTranslations.title,
		description: pageTranslations.description,
		keywords: (pageTranslations as any).keywords || [],
	};
}
