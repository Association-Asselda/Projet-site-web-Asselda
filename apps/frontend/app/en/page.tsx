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
					<h1 className={styles.title}>Together, let's build a sustainable future for our villages</h1>

					<p className={`${styles.arabicTitle} font-noto-kufi`} lang="ar">
						معًا نبني مستقبلًا مستدامًا لقرانا
					</p>

					<p className={styles.subtitle}>
						The Asselda Association has been working since 1996 for the environment, rural development and
						the well-being of families in the Asni region, Al Haouz.
					</p>

					<div className={styles.buttons}>
						<Link href={`${usePathname()}/projets`} className={styles.primaryBtn}>
							Discover our projects
						</Link>

						<Link href={`${usePathname()}/rejoindre`} className={styles.secondaryBtn}>
							Join us
						</Link>
					</div>
				</div>
			</section>

			<section className={styles.stats_section}>
				<div className={styles.stats_container}>
					<AnimatedCounter endValue={250} label="Completed Projects" />
					<AnimatedCounter endValue={10000} label="Beneficiaries" />
					<AnimatedCounter endValue={15} label="Years in Operation" />
					<AnimatedCounter endValue={45} label="Partners" />
				</div>
			</section>

			<section className={styles.domainsSection + " fg-hero"}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>Our areas of expertise</h2>
					<h3 className={styles.sectionSubtitle}>Three key areas for lasting impact</h3>

					<div className={styles.cards}>
						<div className={styles.card}>
							<div className={styles.cardEmoji}>
								<FaLeaf />
							</div>
							<h4 className={styles.cardTitle}>Environment</h4>
							<p className={styles.cardText}>
								Protecting biodiversity and raising awareness of environmental issues for a sustainable
								future.
							</p>
						</div>

						<div className={styles.card}>
							<div className={styles.cardEmoji}>
								<MdLightbulbCircle />
							</div>
							<h4 className={styles.cardTitle}>Development</h4>
							<p className={styles.cardText}>
								Access to drinking water, infrastructure and support for communities for equitable
								development.
							</p>
						</div>

						<div className={styles.card}>
							<div className={styles.cardEmoji}>
								<MdFamilyRestroom />
							</div>
							<h4 className={styles.cardTitle}>Family</h4>
							<p className={styles.cardText}>
								Supporting families, educating children and strengthening intergenerational bonds.
							</p>
						</div>
					</div>
				</div>
			</section>
			{ProjetsSection("en")}
			<section className={styles.news_section}>
				<div className={styles.news_container}>
					<h2 className={styles.news_title}>News & Events</h2>

					<div className={styles.news_grid}>
						<article className={styles.news_card}>
							<h3 className={styles.news_card_title}>
								Association Board Renewal – General Assembly of February 3, 2025
							</h3>
							<p className={styles.news_card_text}>
								During the Extraordinary General Assembly on February 3, 2025, members elected the new
								executive board for a five-year term, with Mr. Samir Ahram as president.
							</p>
						</article>

						<article className={styles.news_card}>
							<h3 className={styles.news_card_title}>
								One Year After the Earthquake: A Review of Solidarity and Reconstruction Prospects
							</h3>
							<p className={styles.news_card_text}>
								A look back at the actions undertaken by the association since the devastating
								earthquake of September 8, 2023: aid distribution, tent erection, psychological support,
								and monitoring of the reconstruction.
							</p>
						</article>

						<article className={styles.news_card}>
							<h3 className={styles.news_card_title}>
								Results of the Awrach 2022 Program: The Alleyways of Douar Asselda Renovated
							</h3>
							<p className={styles.news_card_text}>
								The national Awrach 2022 program enabled the complete paving of the alleyways and public
								squares in the three villages, significantly improving the living conditions of the
								residents.
							</p>
						</article>
					</div>

					<div className={styles.news_footer}>
						<Link href={`${usePathname()}/actualites`} className={styles.news_btn}>
							See all news →
						</Link>
					</div>
				</div>
			</section>
			<section className={styles.partners_section}>
				<div className={styles.partners_container}>
					<h2 className={styles.partners_title}>Our Partners</h2>

					<p className={styles.partners_subtitle}>
						The association works in collaboration with national and international institutions
					</p>

					<div className={styles.partners_slider}>
						<div className={styles.partners_track}>
							<div className={styles.partner_item}>
								<img src="/Images/partners/amsed.png" alt="AMSED" className={styles.partner_logo} />
							</div>
							<div className={styles.partner_item}>
								<img
									src="/Images/partners/commune-asni.png"
									alt="Asni Commune"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/province-alhaouz.png"
									alt="Al Haouz Province"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/region-marrakech.png"
									alt="Region of Marrakech"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/ministere-interieur.png"
									alt="Ministry of the Interior"
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
									alt="Asni Commune"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/province-alhaouz.png"
									alt="Al Haouz Province"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/region-marrakech.png"
									alt="Region of Marrakech"
									className={styles.partner_logo}
								/>
							</div>
							<div className={styles.partner_item}>
								<img
									src="Images/partners/ministere-interieur.png"
									alt="Ministry of the Interior"
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
					<h2 className={styles.cta_title}>Join the movement for sustainable development.</h2>

					<p className={styles.cta_subtitle}>
						Become a member, volunteer, or support our projects with a donation. Every gesture counts.
					</p>

					<div className={styles.cta_buttons}>
						<Link href={`${usePathname()}/rejoindre`} className={`${styles.cta_button} ${styles.join}`}>
							Become a member →
						</Link>

						<Link href={`${usePathname()}/rejoindre`} className={`${styles.cta_button} ${styles.donate}`}>
							Donate →
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
