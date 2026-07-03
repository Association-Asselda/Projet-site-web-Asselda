import { useState } from "react";
import styles from "@/styles/home.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Language, getTranslation } from "@/lib/translations";
import { buildLocalizedLink, useCurrentLanguage } from "@/lib/useLanguage";
import Link from "next/link";

const projects = [
	{
		id: 1,
		fr: {
			title: "Assainissement liquide et traitement des eaux usées",
			summary:
				"Premier projet de ce type dans la région, réalisé en partenariat avec l'AMSED. Budget : 12 000 000 DH. Protège les ressources naturelles et améliore la santé publique.",
			badges: ["Budget : 12 MDH", "Partenaire : AMSED", "Statut : Opérationnel"],
		},
		ar: {
			title: "التطهير السائل ومعالجة المياه العادمة",
			summary:
				"أول مشروع من نوعه في المنطقة، أُنجز بشراكة مع AMSED. الميزانية : 12 مليون درهم. يحمي الموارد الطبيعية ويحسّن الصحة العامة.",
			badges: ["الميزانية : 12 مليون د.م", "الشريك : AMSED", "الحالة : مشغّل"],
		},
		en: {
			title: "Liquid Sanitation and Wastewater Treatment",
			summary:
				"First project of its kind in the region, carried out in partnership with AMSED. Budget: 12,000,000 DH. Protects natural resources and improves public health.",
			badges: ["Budget: 12 million DH", "Partner: AMSED", "Status: Operational"],
		},
		link: "/projets",
	},
	{
		id: 2,
		fr: {
			title: "Eau potable par énergie solaire",
			summary:
				"Réseau d'eau potable alimenté par panneaux solaires, avec réservoirs de stockage, points de distribution et système de facturation transparent.",
			badges: ["Énergie solaire", "Accès à l'eau", "Statut : En service"],
		},
		ar: {
			title: "الماء الشروب بالطاقة الشمسية",
			summary: "شبكة ماء شروب تعمل بالألواح الشمسية، مع خزانات احتياطية ونقاط توزيع ونظام فوترة شفاف.",
			badges: ["الطاقة الشمسية", "الوصول إلى المياه", "الحالة: قيد الخدمة"],
		},
		en: {
			title: "Drinking Water Powered by Solar Energy",
			summary:
				"Drinking water network powered by solar panels, with storage tanks, distribution points, and a transparent billing system.",
			badges: ["Solar Energy", "Access to Water", "Status: In Service"],
		},
		link: "/projets",
	},
	{
		id: 3,
		fr: {
			title: "Réhabilitation des voiries – Programme Awrach 2022",
			summary:
				"Trottoirs et ruelles pavés dans les 3 douars (Asselda 1, 2 et 3). Amélioration esthétique, accessibilité et gestion des eaux pluviales.",
			badges: ["Programme Awrach", "Voirie", "Statut : Terminé"],
		},
		ar: {
			title: "تأهيل الطرق والمسالك – برنامج أوراش 2022",
			summary:
				"تبليط الأزقة والممرات في الدواوير الثلاثة (أسلدة 1 و2 و3). تحسين الجماليات وإمكانية الوصول وصرف مياه الأمطار.",
			badges: ["برنامج أوراش", "الطرق", "الحالة: مُنجز"],
		},
		en: {
			title: "Road Rehabilitation – Awrach 2022 Program",
			summary:
				"Paved sidewalks and alleyways in the 3 villages (Asselda 1, 2, and 3). Improved aesthetics, accessibility, and stormwater management.",
			badges: ["Awrach Program", "Roads", "Status: Completed"],
		},
		link: "/projets",
	},
];

const imageURLs = [
	"/uploads/projet_assainissement_01_a82246aa8d.jpeg",
	"/uploads/projet_eau_02_9e2d06e0b6.jpeg",
	"/uploads/projet_voirie_02_dc21f3ef66.png",
];

export default function ProjectsSection(language?: Language) {
	const currentLanguage = useCurrentLanguage();
	const projectsLink = buildLocalizedLink("/projets", currentLanguage);

	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
	};

	return (
		<section className={styles.projectsSection}>
			<div className={styles.projectsWrapper}>
				<div className={styles.projectsCarousel}>
					<button
						className={styles.carouselBtn}
						onClick={handlePrev}
						aria-label={getTranslation(currentLanguage, "pages.home.carouselPrevProjectLabel")}>
						{currentLanguage === "ar" ? <FaArrowRight /> : <FaArrowLeft />}
					</button>

					<div className={styles.carouselViewport}>
						<div
							className={styles.carouselTrack}
							style={{
								transform: `translateX(${currentLanguage === "ar" ? "" : "-"}${currentIndex * 100}%)`,
							}}>
							{projects.map((project) => (
								<div className={styles.carouselSlide} key={project.id}>
									<div className={styles.projectCard}>
										<img
											src={imageURLs[project.id]}
											alt={project[language || "fr"].title}
											className={styles.projectImage}
										/>

										<div className={styles.projectContent}>
											<h3 className={styles.projectTitle}>{project[language || "fr"].title}</h3>

											<p className={styles.projectSummary}>{project[language || "fr"].summary}</p>

											<div className={styles.projectBadge}>
												{project[language || "fr"].badges.map((badge, index) => (
													<span key={index}>{badge}</span>
												))}
											</div>

											<Link href={projectsLink} className={styles.projectLink}>
												{getTranslation(currentLanguage, "pages.home.carouselSeeProject")}
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<button
						className={styles.carouselBtn}
						onClick={handleNext}
						aria-label={getTranslation(currentLanguage, "pages.home.carouselNextProjectLabel")}>
						{currentLanguage === "ar" ? <FaArrowLeft /> : <FaArrowRight />}
					</button>
				</div>

				<div className={styles.projectsFooter}>
					<Link href={projectsLink} className={styles.globalBtn}>
						{getTranslation(currentLanguage, "pages.home.carouselSeeAllProjects")}
					</Link>
				</div>
			</div>
		</section>
	);
}
