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
						<h1 className="hero-title">من نحن</h1>
					</div>
				</section>

				{/* Definition Section */}
				<section className="bg-white py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-5xl font-bold text-gray-900 text-center mb-12">من نحن – جمعية أسلدة</h2>

						<div className="flex flex-col lg:flex-row gap-8 ">
							<div className="flex-1 flex flex-col gap-3">
								<p className="text-lime-700 text-lg text-justify font-bold leading-relaxed mbe-6">
									منذ عام 1996، تعمل جمعية أسلدة يومياً على تحسين ظروف حياة سكان دوار أسلدة وجماعة
									أسني، برؤية تنمية دائمة متكاملة.
								</p>

								<p className="text-foreground text-base text-justify leading-relaxed font-semibold">
									جمعية أسلدة للبيئة والتنمية القروية والأسرة (اختصاراً « جمعية أسلدة » أو « AAEDRF »)
									هي منظمة من منظمات المجتمع المدني تأسست عام 1996، ومقرها الاجتماعي بدوار أسلدة،
									جماعة أسني، إقليم الحوز، مراكش – المغرب.
								</p>

								<p className="text-foreground text-base text-justify leading-relaxed font-semibold">
									معترف بها رسمياً وودعت لدى السلطات المحلية (وصل إيداع نهائي موقع من قاضي أسني في 11
									مارس 2025)، تعمل الجمعية في امتثال تام مع الظهير الشقرو رقم 1-58-376 بتاريخ 15
									نوفمبر 1958 المتعلق بحق التجمع، كما تم تعديله وإكماله.
								</p>
							</div>

							<div className="aspect-square">
								<img
									src="/images/logo.png"
									alt="شعار جمعية أسلدة"
									className="aspect-square max-w-xs object-cover rounded-full"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Vision & Mission Section */}
				<section className="bg-[#7cb645] py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-white text-center mb-12">رؤيتنا ورسالتنا</h2>

						<div className="grid md:grid-cols-2 gap-8">
							{/* Vision Card */}
							<div className="bg-white rounded-lg overflow-hidden shadow-lg">
								<div className="bg-[#3b6428] px-8 py-6 text-center">
									<FiTarget className="w-8 h-8 text-white mx-auto mb-3" />
									<h3 className="text-2xl font-bold text-white">رؤيتنا</h3>
								</div>
								<div className="p-8">
									<p className="text-gray-800 text-justify leading-relaxed">
										المساهمة في تنمية البيئة القروية وتحسين ظروف حياة السكان القرويين، من خلال نهج
										بيئية واجتماعية وتعليمية وتنمية مستدامة قائمة على الشراكة والحكامة الجيدة وتعزيز
										قيم التضامن والمسؤولية.
									</p>
								</div>
							</div>

							{/* Mission Card */}
							<div className="bg-white rounded-lg overflow-hidden shadow-lg">
								<div className="bg-[#3b6428] px-8 py-6 text-center">
									<FaClipboardList className="w-8 h-8 text-white mx-auto mb-3" />
									<h3 className="text-2xl font-bold text-white">رسالتنا</h3>
								</div>
								<div className="p-8">
									<p className="text-gray-800 text-justify leading-relaxed">
										تنفيذ مشاريع بيئية وتنموية وخدمات اجتماعية لصالح سكان دوار أسلدة، مع التركيز على
										توفير المياه الصالحة للشرب والصرف الصحي وجمع النفايات المنزلية وإعادة تأهيل
										المساحات القروية وتشجيع المبادرات التضامنية والعمل التطوعي.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Goals Section */}
				<section className="bg-white py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-[#3b6428] text-center mb-12">أهدافنا</h2>

						<div className="grid md:grid-cols-2 gap-6">
							{[
								{
									num: "01",
									title: "المشاركة في البرامج",
									icon: FaLeaf,
									text: "المساهمة في جميع البرامج الاجتماعية والاقتصادية والثقافية والرياضية والصحية، وتشجيع المشاريع البيئية.",
								},
								{
									num: "02",
									title: "الخدمات الاجتماعية القروية",
									icon: FaUsers,
									text: "تحسين الخدمات الاجتماعية المرتبطة بالبيئة القروية والعمل على ازدهار المنطقة على جميع الأصعدة، لتحقيق تنمية متكاملة ومستدامة تركز أساسا على الإنسان.",
								},
								{
									num: "03",
									title: "النساء والأطفال",
									icon: FaHeart,
									text: "إيلاء اهتمام خاص للنساء والأطفال والأشخاص ذوي الاحتياجات الخاصة. دعم محو الأمية والتدريب المهني والأنشطة المدرة للدخل.",
								},
								{
									num: "04",
									title: "الديمقراطية التشاركية",
									icon: FaGlobe,
									text: "المساهمة كقوة اقتراح فعالة في إطار النهج التشاركي عند صياغة وتقييم مشاريع وقرارات الجماعة والسلطات.",
								},
								{
									num: "05",
									title: "التنسيق المؤسسي",
									icon: FaShieldAlt,
									text: "التنسيق مع السلطات المحلية والإقليمية والمنظمات غير الحكومية لتنفيذ مشاريع تنموية مشتركة في إطار اتفاقيات الشراكة.",
								},
								{
									num: "06",
									title: "المبادرة الوطنية",
									icon: FaLeaf,
									text: "المساهمة في تنفيذ البرنامج الوطني للمبادرة الوطنية للتنمية البشرية (INDH) على المستوى المحلي.",
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
							المكتب التنفيذي (الولاية 2025)
						</h2>

						<p className="text-white/90 text-center mb-12 text-lg">
							جدول الأعضاء المنتخبين في الجمعية العامة بتاريخ 3 فبراير 2025.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{[
								{ nameFr: "Samir Ahram", nameAr: "سمير أهرام", role: "الرئيس" },
								{
									nameFr: "Moulay Lahcen Maroi",
									nameAr: "مولاي لحسن مروة",
									role: "نائب الرئيس الأول",
								},
								{ nameFr: "Yassine Baouti", nameAr: "ياسين باوتي", role: "نائب الرئيس الثاني" },
								{
									nameFr: "Abderrahim Darrih",
									nameAr: "عبد الرحيم الضارح",
									role: "كاتب الجمعية",
								},
								{
									nameFr: "Abdelaziz Benzaina",
									nameAr: "عبد العزيز بنزينة",
									role: "نائب كاتب الجمعية",
								},
								{ nameFr: "Mohamed Baouti", nameAr: "محمد باوتي", role: "أمين الصندوق" },
								{ nameFr: "Youssef Id Braim", nameAr: "يوسف إد برايم", role: "نائب أمين الصندوق" },
								{ nameFr: "Hassan ait elmokef", nameAr: "حسن أيت موقف", role: "مستشار" },
								{ nameFr: "Lahcen ouarbane", nameAr: "لحسن واعربان", role: "مستشار" },
								{ nameFr: "Rachid id abdellah", nameAr: "رشيد إد عبد الله", role: "مستشار" },
								{ nameFr: "Abderrahim agzoul", nameAr: "عبد الرحيم أكزول", role: "مستشار" },
								{ nameFr: "Hamid Iznagen", nameAr: "حميد إزناكن", role: "مستشار" },
								{ nameFr: "Abdellah amadid", nameAr: "عبد الله أمديد", role: "مستشار" },
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
						<h2 className="text-4xl font-bold text-[#3b6428] text-center mb-12">قيمنا</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{
									title: "التضامن",
									icon: FaUsers,
									text: "العمل معاً ودعم الأكثر ضعفاً وتعزيز النسيج الاجتماعي لمجتمعاتنا.",
								},
								{
									title: "الاستدامة",
									icon: FaLeaf,
									text: "تصميم مشاريع تحترم البيئة وقابلة للبقاء على المدى الطويل ومفيدة للأجيال القادمة.",
								},
								{
									title: "الشفافية",
									icon: FaShieldAlt,
									text: "إدارة الموارد وتقديم حسابات عن أنشطتنا إعتماداً على الحكامة الجيدة.",
								},
								{
									title: "المشاركة",
									icon: FaGlobe,
									text: "إشراك السكان في جميع القرارات التي تؤثر عليهم، مع تقدير معارفهم ومبادراتهم.",
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
						<h2 className="text-4xl font-bold text-white text-center mb-12">المستندات القابلة للتنزيل</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{[
								{
									title: "وصل الإيداع (PDF)",
									description: "الوصل النهائي الصادر من قاضي أسني – 11 مارس 2025",
									href: "/documents/recepisse-depot.pdf",
								},
								{
									title: "محضر الجمعية العامة (PDF)",
									description: "تقرير الجمعية العامة بتاريخ 3 فبراير 2025",
									href: "/documents/proces-verbal-ag.pdf",
								},
								{
									title: "نظام الجمعية (PDF)",
									description: "النص الكامل للائحة الداخلية وعقد التأسيس – الإصدار 2025",
									href: "/documents/statuts-association.pdf",
								},
								{
									title: "البطاقة الفنية (PDF)",
									description: "ملخص مؤسسي: الأهداف والمحاور الحد الأدنى والجهات المسؤولة",
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
