"use client";
import { FaClipboardList, FaLeaf, FaHeart, FaGlobe, FaShieldAlt, FaUsers, FaDownload } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

export default function About() {
	return (
		<>
			<main>
				{/* Hero Section */}
				<section className="hero-section">
					<div className="max-w-3xl">
						<h1 className="hero-title">À propos</h1>
						{/* <p className="hero-copy">HOME – ABOUT US</p> */}
					</div>
				</section>

				{/* Definition Section */}
				<section className="bg-white py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-5xl font-bold text-gray-900 text-center mb-12">
							À propos de l'association Asselda
						</h2>

						<div className="flex flex-col lg:flex-row gap-8 ">
							<div className="flex-1 flex flex-col gap-3">
								<p className="text-lime-700 text-lg text-justify font-bold leading-relaxed mbe-6">
									Depuis 1996, l'Association Asselda s'engage au quotidien pour améliorer les
									conditions de vie des habitants de Douar Asselda et de la commune d'Asni, avec une
									vision de développement durable intégré.
								</p>

								<p className="text-foreground text-base text-justify leading-relaxed font-semibold">
									L'Association Asselda pour l'Environnement, le Développement Rural et la Famille (en
									abrégé « Association Asselda » ou « AAEDRF ») est une organisation de la société
									civile fondée en 1996, dont le siège social est établi à Douar Asselda, commune
									d'Asni, province d'Al Haouz, Marrakech – Maroc.
								</p>

								<p className="text-foreground text-base text-justify leading-relaxed font-semibold">
									Reconnue officiellement et déposée auprès des autorités locales (récépissé de dépôt
									final signé par le Caïd d'Asni le 11 mars 2025), l'association œuvre en parfaite
									conformité avec le Dahir n° 1-58-376 du 15 novembre 1958 réglementant le droit
									d'association, tel qu'il a été modifié et complété.
								</p>
							</div>

							<div className="aspect-square">
								<img
									src="/images/logo.png"
									alt="logo de l'association Asselda"
									className="aspect-square max-w-xs object-cover rounded-full"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Vision & Mission Section */}
				<section className="bg-[#7cb645] py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-white text-center mb-12">Notre Vision et Mission</h2>

						<div className="grid md:grid-cols-2 gap-8">
							{/* Vision Card */}
							<div className="bg-white rounded-lg overflow-hidden shadow-lg">
								<div className="bg-[#3b6428] px-8 py-6 text-center">
									<FiTarget className="w-8 h-8 text-white mx-auto mb-3" />
									<h3 className="text-2xl font-bold text-white">Notre Vision</h3>
								</div>
								<div className="p-8">
									<p className="text-gray-800 text-justify leading-relaxed">
										Contribuer au développement du milieu rural et à l'amélioration des conditions
										de vie de la population rurale, grâce à des approches environnementales,
										sociales, éducatives et un développement durable fondé sur le partenariat, la
										bonne gouvernance et la consolidation des valeurs de solidarité et de
										responsabilité.
									</p>
								</div>
							</div>

							{/* Mission Card */}
							<div className="bg-white rounded-lg overflow-hidden shadow-lg">
								<div className="bg-[#3b6428] px-8 py-6 text-center">
									<FaClipboardList className="w-8 h-8 text-white mx-auto mb-3" />
									<h3 className="text-2xl font-bold text-white">Notre Mission</h3>
								</div>
								<div className="p-8">
									<p className="text-gray-800 text-justify leading-relaxed">
										Mettre en œuvre des projets environnementaux, de développement et des services
										sociaux au profit des habitants de Douar Asselda, en mettant l'accent sur la
										fourniture d'eau potable, l'assainissement, la collecte des déchets ménagers, la
										réhabilitation des espaces ruraux, l'encouragement des initiatives solidaires et
										du travail bénévole.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Goals Section */}
				<section className="bg-white py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-[#3b6428] text-center mb-12">Nos objectifs</h2>

						<div className="grid md:grid-cols-2 gap-6">
							{[
								{
									num: "01",
									title: "Participation aux programmes",
									icon: FaLeaf,
									text: "Contribuer à tous les programmes sociaux, économiques, culturels, sportifs et de santé, et encourager les projets environnementaux.",
								},
								{
									num: "02",
									title: "Services sociaux ruraux",
									icon: FaUsers,
									text: "Améliorer les services sociaux liés au milieu rural et œuvrer à l'essor de la région sur tous les plans, pour un développement intégré et durable centré sur l'humain.",
								},
								{
									num: "03",
									title: "Femmes et Enfants",
									icon: FaHeart,
									text: "Accorder une attention particulière aux femmes, aux enfants et aux personnes aux besoins spécifiques. Soutenir l'alphabétisation, la formation professionnelle et les activités génératrices de revenus.",
								},
								{
									num: "04",
									title: "Démocratie participative",
									icon: FaGlobe,
									text: "Contribuer en tant que force de proposition active dans le cadre des approches participatives lors de l'élaboration et l'évaluation des projets et décisions des collectivités et autorités.",
								},
								{
									num: "05",
									title: "Coordination institutionnelle",
									icon: FaShieldAlt,
									text: "Coordonner avec les autorités locales, régionales et les ONG pour réaliser des projets de développement communs dans le cadre de conventions de partenariat.",
								},
								{
									num: "06",
									title: "Initiative nationale",
									icon: FaLeaf,
									text: "Contribuer à la mise en œuvre du Programme national d'Initiative nationale pour le développement humain (INDH) au niveau local.",
								},
							].map((goal, index) => {
								const Icon = goal.icon;
								return (
									<div key={index} className="bg-lime-100 rounded-lg p-8 relative overflow-hidden">
										<div className="text-6xl font-bold text-lime-500 absolute inset-bs-4 inset-s-4 opacity-50">
											{goal.num}
										</div>
										<div className="relative z-10">
											<Icon className="w-8 h-8 text-lime-600 mx-auto mb-3" />
											<h3 className="text-2xl text-center font-bold text-[#3b6428] mb-3">
												{goal.title}
											</h3>
											<p className="text-gray-800 text-justify leading-relaxed">{goal.text}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Members Section */}
				<section className="bg-[#7cb645] py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-white text-center mb-8">
							Bureau Exécutif (Mandat 2025)
						</h2>

						<p className="text-white/90 text-center mb-12 text-lg">
							Tableau des membres élus lors de l'AG du 3 février 2025.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{[
								{ nameFr: "Samir Ahram", nameAr: "سمير أهرام", role: "Président" },
								{
									nameFr: "Moulay Lahcen Maroi",
									nameAr: "مولاي لحسن مروة",
									role: "1er Vice-Président",
								},
								{ nameFr: "Yassine Baouti", nameAr: "ياسين باوتي", role: "2e Vice-Président" },
								{
									nameFr: "Abderrahim Darrih",
									nameAr: "عبد الرحيم الضارح",
									role: "Rédacteur de l'association",
								},
								{
									nameFr: "Abdelaziz Benzaina",
									nameAr: "عبد العزيز بنزينة",
									role: "Rédacteur Adj.",
								},
								{ nameFr: "Mohamed Baouti", nameAr: "محمد باوتي", role: "Trésorier" },
								{ nameFr: "Youssef Id Braim", nameAr: "يوسف إد برايم", role: "Trésorier Adjoint" },
								{ nameFr: "Hassan ait elmokef", nameAr: "حسن أيت موقف", role: "Conseiller" },
								{ nameFr: "Lahcen ouarbane", nameAr: "لحسن واعربان", role: "Conseiller" },
								{ nameFr: "Rachid id abdellah", nameAr: "رشيد إد عبد الله", role: "Conseiller" },
								{ nameFr: "Abderrahim agzoul", nameAr: "عبد الرحيم أكزول", role: "Conseiller" },
								{ nameFr: "Hamid Iznagen", nameAr: "حميد إزناكن", role: "Conseiller" },
								{ nameFr: "Abdellah amadid", nameAr: "عبد الله أمديد", role: "Conseiller" },
							].map((member, index) => (
								<div
									key={index}
									className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
									<p className="font-bold text-gray-900 text-base">{member.nameFr}</p>
									<p className="font-bold text-gray-900 mb-3">{member.nameAr}</p>
									<p className="text-[#3b6428] font-bold text-base uppercase">{member.role}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Values Section */}
				<section className="bg-white py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-[#3b6428] text-center mb-12">Nos Valeurs</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{
									title: "Solidarité",
									icon: FaUsers,
									text: "Agir ensemble, soutenir les plus vulnérables et renforcer le tissu social de nos communautés.",
								},
								{
									title: "Durabilité",
									icon: FaLeaf,
									text: "Concevoir des projets respectueux de l'environnement, viables sur le long terme et profitables aux générations futures.",
								},
								{
									title: "Transparence",
									icon: FaShieldAlt,
									text: "Gérer les ressources avec honnêteté, rendre compte de nos actions et maintenir une gouvernance claire.",
								},
								{
									title: "Participation",
									icon: FaGlobe,
									text: "Impliquer les habitants dans toutes les décisions qui les concernent, en valorisant leurs savoirs et leurs initiatives.",
								},
							].map((value, index) => {
								const Icon = value.icon;
								return (
									<div
										key={index}
										className="bg-gradient-to-br from-lime-200 to-lime-200 rounded-lg p-8 text-lime-600 text-center shadow-lg">
										<Icon className="w-8 h-8 mx-auto mb-4" />
										<h3 className="text-2xl font-bold mb-4">{value.title}</h3>
										<p className="text-lime-900 leading-relaxed text-base">{value.text}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Downloads Section */}
				<section className="bg-[#7cb645] py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-white text-center mb-12">Documents téléchargeables</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{[
								{
									title: "Récépissé de dépôt (PDF)",
									description: "Récépissé final délivré par le Caïd d'Asni – 11 mars 2025",
									href: "/documents/recepisse-depot.pdf",
								},
								{
									title: "Procès-verbal de l'AG (PDF)",
									description: "Compte rendu de l'Assemblée Générale du 3 février 2025",
									href: "/documents/proces-verbal-ag.pdf",
								},
								{
									title: "Statuts de l'association (PDF)",
									description:
										"Texte complet du règlement intérieur et de l'acte de fondation – version 2025",
									href: "/documents/statuts-association.pdf",
								},
								{
									title: "Fiche technique (PDF)",
									description: "Résumé institutionnel : objectifs, axes d'intervention, contacts",
									href: "/documents/fiche-technique.pdf",
								},
							].map((doc, index) => (
								<a
									key={index}
									href={doc.href}
									className="bg-lime-200 rounded-full p-8 text-center hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col justify-center">
									<FaDownload className="w-6 h-6 text-[#3b6428] mx-auto mb-4" />
									<h3 className="text-lg font-bold text-[#3b6428] mb-2">{doc.title}</h3>
									<p className="text-gray-700 text-base">{doc.description}</p>
								</a>
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
