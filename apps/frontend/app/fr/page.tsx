"use client";
import { MdFamilyRestroom } from "react-icons/md";
import { MdLightbulbCircle } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ProjetsSection from "@/components/ProjectCaroussel";
import AnimatedCounter from "@/components/AnimatedCounter";
import styles from "@/styles/home.module.css";
import { API_URL } from "@/lib/api";

export default function Home() {
	return (
		<main>
			<section
				className={styles.heroBanner}
				style={{ backgroundImage: `url("${API_URL}/uploads/banner_79228a7d13.jpeg")` }}>
				<div className={styles.overlay}></div>

				<div className={styles.content}>
					<h1 className={styles.title}>Ensemble, construisons un avenir durable pour nos villages</h1>

					<p className={`${styles.arabicTitle} font-noto-kufi`} lang="ar">
						معًا نبني مستقبلًا مستدامًا لقرانا
					</p>

					<p className={styles.subtitle}>
						L'Association Asselda œuvre depuis 1996 pour l'environnement, le développement rural et le
						bien-être des familles de la région d'Asni, Al Haouz.
					</p>

					<div className={styles.buttons}>
						<Link href={`${usePathname()}/projets`} className={styles.primaryBtn}>
							Découvrir nos projets
						</Link>

						<Link href={`${usePathname()}/rejoindre`} className={styles.secondaryBtn}>
							Nous soutenir
						</Link>
					</div>
				</div>
			</section>

			<section className={styles.stats_section}>
				<div className={styles.stats_container}>
					<AnimatedCounter endValue={250} label="Projets réalisés" />
					<AnimatedCounter endValue={10000} label="Bénéficiaires" />
					<AnimatedCounter endValue={15} label="Années d'existence" />
					<AnimatedCounter endValue={45} label="Partenaires" />
				</div>
			</section>

			<section className={styles.domainsSection + " fg-hero"}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>Nos domaines d'intervention</h2>
					<h3 className={styles.sectionSubtitle}>Trois axes majeurs pour un impact durable</h3>

					<div className={styles.cards}>
						<div className={styles.card}>
							<div className={styles.cardEmoji}>
								<FaLeaf />
							</div>
							<h4 className={styles.cardTitle}>Environnement</h4>
							<p className={styles.cardText}>
								Protection de la biodiversité et sensibilisation aux enjeux écologiques pour un avenir
								durable.
							</p>
						</div>

						<div className={styles.card}>
							<div className={styles.cardEmoji}>
								<MdLightbulbCircle />
							</div>
							<h4 className={styles.cardTitle}>Développement</h4>
							<p className={styles.cardText}>
								Accès à l'eau potable, infrastructures et soutien aux communautés pour un développement
								équitable.
							</p>
						</div>

						<div className={styles.card}>
							<div className={styles.cardEmoji}>
								<MdFamilyRestroom />
							</div>
							<h4 className={styles.cardTitle}>Famille</h4>
							<p className={styles.cardText}>
								Accompagnement des familles, éducation des enfants et renforcement des liens
								intergénérationnels.
							</p>
						</div>
					</div>
				</div>
			</section>
			{ProjetsSection("fr")}
			<section className={styles.news_section}>
				<div className={styles.news_container}>
					<h2 className={styles.news_title}>Actualités & Événements</h2>

					<div className={styles.news_grid}>
						<article className={styles.news_card}>
							<h3 className={styles.news_card_title}>
								Renouvellement du bureau de l'association – Assemblée Générale du 3 février 2025
							</h3>
							<p className={styles.news_card_text}>
								Lors de l'AG extraordinaire du 3 février 2025, les membres ont élu le nouveau bureau
								exécutif pour un mandat de 5 ans, sous la présidence de M. Samir Ahram.
							</p>
						</article>

						<article className={styles.news_card}>
							<h3 className={styles.news_card_title}>
								Un an après le séisme : bilan de la solidarité et perspectives de reconstruction
							</h3>
							<p className={styles.news_card_text}>
								Retour sur les actions menées par l'association depuis le séisme dévastateur du 8
								septembre 2023 : distribution d'aide, montage de tentes, soutien psychologique et suivi
								de la reconstruction.
							</p>
						</article>

						<article className={styles.news_card}>
							<h3 className={styles.news_card_title}>
								Résultats du programme Awrach 2022 : les ruelles de Douar Asselda rénovées
							</h3>
							<p className={styles.news_card_text}>
								Le programme national Awrach 2022 a permis le pavage complet des ruelles et places
								publiques des trois douars, améliorant significativement le cadre de vie des habitants.
							</p>
						</article>
					</div>

					<div className={styles.news_footer}>
						<Link href={`${usePathname()}/actualites`} className={styles.news_btn}>
							Toutes les actualités →
						</Link>
					</div>
				</div>
			</section>
			<section className={styles.partners_section}>
				<div className={styles.partners_container}>
					<h2 className={styles.partners_title}>Nos Partenaires</h2>

					<p className={styles.partners_subtitle}>
						L'association agit en collaboration avec des institutions nationales et internationales
					</p>

					<div className={styles.partners_slider}>
						<div className={styles.partners_track}>
							<div className={styles.partner_item}>
								<img src="/Images/partners/amsed.png" alt="AMSED" className={styles.partner_logo} />
							</div>
							<div className={styles.partner_item}>
								<img
									src="/Images/partners/commune-asni.png"
									alt="Commune d'Asni"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/province-alhaouz.png"
									alt="Province d'Al Haouz"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/region-marrakech.png"
									alt="Wilaya de Marrakech"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/ministere-interieur.png"
									alt="Ministère de l'Intérieur"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img src="Images/partners/fmps.png" alt="FMPS" className={styles.partner_logo} />
							</div>

							{/* duplication pour boucle infinie */}
							<div className={styles.partner_item}>
								<img src="/Images/partners/amsed.png" alt="AMSED" className={styles.partner_logo} />
							</div>
							<div className={styles.partner_item}>
								<img
									src="/Images/partners/commune-asni.png"
									alt="Commune d'Asni"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/province-alhaouz.png"
									alt="Province d'Al Haouz"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/region-marrakech.png"
									alt="Wilaya de Marrakech"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/ministere-interieur.png"
									alt="Ministère de l'Intérieur"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img src="Images/partners/fmps.png" alt="FMPS" className={styles.partner_logo} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.cta_section}>
				<div className={styles.cta_container}>
					<h2 className={styles.cta_title}>Rejoignez le mouvement pour un développement durable</h2>

					<p className={styles.cta_subtitle}>
						Devenez membre, bénévole, ou soutenez nos projets par un don. Chaque geste compte.
					</p>

					<div className={styles.cta_buttons}>
						<Link href={`${usePathname()}/rejoindre`} className={`${styles.cta_button} ${styles.join}`}>
							Devenir membre →
						</Link>

						<Link href={`${usePathname()}/rejoindre`} className={`${styles.cta_button} ${styles.donate}`}>
							Faire un don →
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
