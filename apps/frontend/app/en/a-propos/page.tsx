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
						<h1 className="hero-title">About</h1>
						{/* <p className="hero-copy">HOME – ABOUT US</p> */}
					</div>
				</section>

				{/* Definition Section */}
				<section className="bg-white py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-5xl font-bold text-gray-900 text-center mb-12">
							About The Asselda Associtaion
						</h2>

						<div className="flex flex-col lg:flex-row gap-8 ">
							<div className="flex-1 flex flex-col gap-3">
								<p className="text-lime-700 text-lg text-justify font-bold leading-relaxed mbe-6">
									Since 1996, the Asselda Association has been working daily to improve the living
									conditions of the residents of Douar Asselda and the municipality of Asni, with a
									vision of integrated sustainable development.
								</p>

								<p className="text-foreground text-base text-justify leading-relaxed font-semibold">
									The Asselda Association for the Environment, Rural Development, and Family
									(abbreviated as "Association Asselda" or "AAEDRF") is a civil society organization
									founded in 1996, headquartered in Douar Asselda, Asni municipality, Al Haouz
									province, Marrakech, Morocco.
								</p>

								<p className="text-foreground text-base text-justify leading-relaxed font-semibold">
									Officially recognized and registered with the local authorities (final registration
									receipt signed by the Caïd of Asni on March 11, 2025), the association operates in
									full compliance with Dahir No. 1-58-376 of November 15, 1958, regulating the right
									of association, as amended and supplemented.
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
						<h2 className="text-4xl font-bold text-white text-center mb-12">Our Vision and Mission</h2>

						<div className="grid md:grid-cols-2 gap-8">
							{/* Vision Card */}
							<div className="bg-white rounded-lg overflow-hidden shadow-lg">
								<div className="bg-[#3b6428] px-8 py-6 text-center">
									<FiTarget className="w-8 h-8 text-white mx-auto mb-3" />
									<h3 className="text-2xl font-bold text-white">Our Vision</h3>
								</div>
								<div className="p-8">
									<p className="text-gray-800 text-justify leading-relaxed">
										To contribute to the development of rural areas and the improvement of living
										conditions for the rural population, through environmental, social, and
										educational approaches, and sustainable development based on partnership, good
										governance, and the strengthening of the values ​​of solidarity and
										responsibility.
									</p>
								</div>
							</div>

							{/* Mission Card */}
							<div className="bg-white rounded-lg overflow-hidden shadow-lg">
								<div className="bg-[#3b6428] px-8 py-6 text-center">
									<FaClipboardList className="w-8 h-8 text-white mx-auto mb-3" />
									<h3 className="text-2xl font-bold text-white">Our Mission</h3>
								</div>
								<div className="p-8">
									<p className="text-gray-800 text-justify leading-relaxed">
										To implement environmental, development, and social service projects for the
										benefit of the inhabitants of Douar Asselda, with a focus on providing drinking
										water, sanitation, household waste collection, rural rehabilitation, and
										encouraging community initiatives and volunteer work.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Goals Section */}
				<section className="bg-white py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-[#3b6428] text-center mb-12">Our Goals</h2>

						<div className="grid md:grid-cols-2 gap-6">
							{[
								{
									num: "01",
									title: "Participation in Programs",
									icon: FaLeaf,
									text: "CContribute to all social, economic, cultural, sports, and health programs, and encourage environmental projects.",
								},
								{
									num: "02",
									title: "Rural Social Services",
									icon: FaUsers,
									text: "Improve social services related to rural areas and work towards the region's development in all aspects, for integrated and sustainable human-centered development.",
								},
								{
									num: "03",
									title: "Women and Children",
									icon: FaHeart,
									text: "Pay particular attention to women, children, and people with specific needs. Support literacy, vocational training, and income-generating activities.",
								},
								{
									num: "04",
									title: "Participatory Democracy",
									icon: FaGlobe,
									text: "Contribute as an active force in participatory approaches during the development and evaluation of projects and decisions made by communities and authorities.",
								},
								{
									num: "05",
									title: "Institutional Coordination",
									icon: FaShieldAlt,
									text: "Coordinate with local and regional authorities and NGOs to implement joint development projects within the framework of partnership agreements.",
								},
								{
									num: "06",
									title: "National Initiative",
									icon: FaLeaf,
									text: "Contribute to the implementation of the National Initiative for Human Development (INDH) at the local level.",
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
						<h2 className="text-4xl font-bold text-white text-center mb-8">Executive Board (Term 2025)</h2>

						<p className="text-white/90 text-center mb-12 text-lg">
							List of members elected at the General Assembly on February 3, 2025.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{[
								{ nameFr: "Samir Ahram", nameAr: "سمير أهرام", role: "President" },
								{
									nameFr: "Moulay Lahcen Maroi",
									nameAr: "مولاي لحسن مروة",
									role: "1st Vice-President",
								},
								{ nameFr: "Yassine Baouti", nameAr: "ياسين باوتي", role: "2nd Vice-President" },
								{
									nameFr: "Abderrahim Darrih",
									nameAr: "عبد الرحيم الضارح",
									role: "Association Writer",
								},
								{
									nameFr: "Abdelaziz Benzaina",
									nameAr: "عبد العزيز بنزينة",
									role: "Asst. Association Writer",
								},
								{ nameFr: "Mohamed Baouti", nameAr: "محمد باوتي", role: "Tresurer" },
								{ nameFr: "Youssef Id Braim", nameAr: "يوسف إد برايم", role: "Assistant Tresurer" },
								{ nameFr: "Hassan ait elmokef", nameAr: "حسن أيت موقف", role: "Advisor" },
								{ nameFr: "Lahcen ouarbane", nameAr: "لحسن واعربان", role: "Advisor" },
								{ nameFr: "Rachid id abdellah", nameAr: "رشيد إد عبد الله", role: "Advisor" },
								{ nameFr: "Abderrahim agzoul", nameAr: "عبد الرحيم أكزول", role: "Advisor" },
								{ nameFr: "Hamid Iznagen", nameAr: "حميد إزناكن", role: "Advisor" },
								{ nameFr: "Abdellah amadid", nameAr: "عبد الله أمديد", role: "Advisor" },
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
						<h2 className="text-4xl font-bold text-[#3b6428] text-center mb-12">Our Values</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{
									title: "Solidarity",
									icon: FaUsers,
									text: "Acting together, supporting the most vulnerable, and strengthening the social fabric of our communities.",
								},
								{
									title: "Sustainability",
									icon: FaLeaf,
									text: "Designing environmentally friendly projects that are viable in the long term and beneficial to future generations.",
								},
								{
									title: "Transparency",
									icon: FaShieldAlt,
									text: "Managing resources honestly, being accountable for our actions, and maintaining clear governance.",
								},
								{
									title: "Participation",
									icon: FaGlobe,
									text: "Involving residents in all decisions that affect them, valuing their knowledge and initiatives.",
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
						<h2 className="text-4xl font-bold text-white text-center mb-12">Downloadable Documents</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{[
								{
									title: "Filing Receipt (PDF)",
									description: "Final Receipt issued by the Caïd of Asni – March 11, 2025",
									href: "/documents/recepisse-depot.pdf",
								},
								{
									title: "Minutes of the General Meeting (PDF)",
									description: "Report of the General Meeting of February 3, 2025",
									href: "/documents/proces-verbal-ag.pdf",
								},
								{
									title: "Association Bylaws (PDF)",
									description:
										"Full text of the internal regulations and the founding document – ​​2025 version",
									href: "/documents/statuts-association.pdf",
								},
								{
									title: "Technical Sheet (PDF)",
									description: "Institutional Summary: objectives, areas of intervention, contacts",
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
