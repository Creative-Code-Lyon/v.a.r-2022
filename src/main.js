import App from './App.svelte';

const app = new App({

	target: document.body,
	props: {
		name: 'world',
		artists: [
			{
				name : 'Makio135', 
				nomination: "Generative Artist",
				imgUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a0f43662-d69d-47ab-8e90-9c779e5cdae3/Makio_135.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220518T140127Z&X-Amz-Expires=86400&X-Amz-Signature=d32e9c2f14920fe120b9b7ed6b8813dd1ca824e056b0d64a2945d58511a96811&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Makio%2520135.png%22&x-id=GetObject',
				bio: "Classic generative weirdo.",
				social : [
					{name: "Site", url:"http://makio135.com"},
					{name: "instagram", url:"https://www.instagram.com/makio135/"}
				]
			},
			{
				name : 'Elisalien', 
				nomination: "VJ",
				imgUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84c9ee30-5318-44b1-a48f-c5b0e05a3873/Elisalien.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220518T133623Z&X-Amz-Expires=86400&X-Amz-Signature=6ea98a88f56c13cf2e6fd42c59d7ce35ee33a48c97b7f1d55516ca1221e6585a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Elisalien.jpg%22&x-id=GetObject',
				bio: "D’abord dessinatrice, Elisalien trouve son bonheur dans les pratiques multimédias (Motion Design, 3D) qui sont pour elle des outils aux possibilités infinies. Elle découvre le VJ chez Exoria en 2017 et travaille aujourd'hui avec Neon. Elle mêle visuels génératifs, créations personnelles et extraits de films et anime dans un VJing coloré et psychédélique.",
				social : [
					{name: "Site", url:"https://www.elisalien.com/"},
					{name: "Instagram", url:"https://www.instagram.com/elisalien/"}
				]
			},
			{
				name : 'Arthur Baude', 
				nomination: "Designer / Maker / VJ",
				imgUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bdd19b3e-089b-471b-97c5-2c5232ced63a/Arthur_Baude.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220518T134830Z&X-Amz-Expires=86400&X-Amz-Signature=6937eb02966143ccd056f1dba6ded870c0d08a3b5627414a7e66d676d1a8f8f2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Arthur%2520Baude.jpg%22&x-id=GetObject',
				bio: "Issu d'une formation multimédia puis arts appliqués, il a découvert le milieu 'maker' à la fin de ses études où il a pu se former en autodidacte à l'électronique interactive et à la fabrication numérique.Passionné par ces différents univers, il les intègre en permanence dans son travail en mélangeant design, création artistique et fabrication numérique. Après 3 ans passés chez nod-A en tant que designer / maker / facilitateur, il travaille désormais en freelance. Depuis 2016, il consacre une grande part de son temps professionnel à concevoir et donner des formations à la fabrication numérique et au monde maker dans sa globalité.",
				social : [
					{name: "instagram", url:"https://www.instagram.com/le_robota/"},
					{name: "site", url:"http://www.arthurbaude.com/"}
				]
			},
			{
				name : 'Emiliano Germain', 
				nomination: "Playtronica",
				imgUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2d38b41-3825-46d5-83da-e40274295113/Emiliano.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220518T134119Z&X-Amz-Expires=86400&X-Amz-Signature=506ee936fcf786f0c27366a55d07e37c3ff4031c9a06da4c9f1a9729ad56f626&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Emiliano.png%22&x-id=GetObject',
				bio: "Emiliano Germain est musicien et artiste intervenant auprès du jeune public. membre du Séquenceur et de Playtronica, sont travail d'intervenant se centre sur les nouvelles technologies comme vectrices d'initiation à la pratique musicale. Également DJ, il est membre du collectif lyonnais Bon Public et se produit régulièrement sur scène avec ses divers projets.",
				social : [
					{name: "SITE", url:"https://www.grame.fr/artistes-chercheurs-partenaires/emiliano-germain"},
				]
			},
			{
				name : 'Paul Ycorne', 
				nomination: "Playtronica",
				imgUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8f5b2326-37ed-4731-b899-576ce9ad3e90/Pauline_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220518T134327Z&X-Amz-Expires=86400&X-Amz-Signature=e83431f0d056ae872bc77b8998b29bd738125f66eb8b69d6d83ea25c8db975a0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Pauline%2520%281%29.png%22&x-id=GetObject',
				bio: "Fascinée par les images et les salles obscures depuis le plus jeune âge, Pauline Millet a fait ses armes en tant que VJ aux côtés du collectif lyonnais l’Octopus depuis 2017, en parallèle de ses études dans l’audiovisuel et le cinéma. Ainsi, elle a pu performer dans de nombreuses SMAC de France, des parcs d’expositions, dans un Planétarium … Grâce notamment à l'association AADN qui oeuvre pour la promotion des arts numériques, elle transmet sa passion par des ateliers depuis maintenant 2 ans, auprès d’ados et d’adultes.",
				social : [
					{name: "instagram", url:"https://www.instagram.com/paul_icorne/"},
				]
			},
			{
				name : 'Acqtäz', 
				nomination: "Musician",
				imgUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7fcff6b4-c849-4e68-aa21-2e69160eb859/Romain.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220518T134543Z&X-Amz-Expires=86400&X-Amz-Signature=c1d83afdcd38ca7e9e57979c2e346aa2e88f77e6a90b2371985434c3fc25a481&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Romain.png%22&x-id=GetObject',
				bio: "Acqtäz fait du bruit, pour les gens qui aiment le bruit",
				social : [
					{name: "site", url:"https://www.grame.fr/artistes-chercheurs-partenaires/romain-darracq"},
					{name: "facebook", url:"https://www.facebook.com/acqtaz"}
				]
			},
			{
				name : 'VFG', 
				nomination: "Live Viual Artist",
				imgUrl: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dba73d48-ee8a-4ee0-9f2d-fb105e67469f/VFGTV.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220518T135634Z&X-Amz-Expires=86400&X-Amz-Signature=2b253f9842c529fdec5f41749ba796ce53ed3cd5c6a7bebfff3d8f8143c7224b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22VFGTV.png%22&x-id=GetObject",
				bio: "Artiste numérique et créateur de bons moments, VFG s'efforce d'allier visuels, effets et technologies diverses pour créer toujours plus d'expériences uniques afin de sublimer la performance audiovisuelle des artistes et de la scène. \
				De Gandalf LSD aux fractales, de concret à abstrait, de calme à violent, de la webcam au joystick, on se retrouve pendant les kicks !",
				social : [
					{name: "instagram", url:"https://www.instagram.com/vfgarts/"},
					{name: "facebook", url:"https://www.facebook.com/vfgtv"},
					{name: "twitch", url:"https://www.twitch.tv/vfgtv"}
				]
			},
			{
				name : 'Arthur Saunier', 
				nomination: "Instrument Maker",
				imgUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea2bde63-822a-4b6c-9c68-3aa1699de1ef/Arthur_Saunier.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220518T134625Z&X-Amz-Expires=86400&X-Amz-Signature=e7a3362cde15d168164bad3c873ae3642d883a702d96dfd411cdbd12ab384197&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Arthur%2520Saunier.png%22&x-id=GetObject',
				bio: "La bidouille c'est cool, la bidouille qui fait du son c'est mieux. Autodidacte et pas musicien pour 3 sous 😁",
				social : [
					{name: "github", url:"https://github.com/arthursaunier/Synth"},
				]
			},
			{
				name : 'Pierre - WSK', 
				nomination: "VJ / Scénographe",
				imgUrl: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e746417-91e6-4068-87e3-519769d941d1/WSK.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220518T135126Z&X-Amz-Expires=86400&X-Amz-Signature=1a275fe182d185ad2e72abc26034c21a27f95d5f5679acb9481aec52e6e9443e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22WSK.png%22&x-id=GetObject',
				bio: "WSK est un collectif d’artistes composé de 3 personnes oeuvrant dans les arts visuels et numériques. Actifs depuis 2007, les membres se sont spécialisés dans le VJing, la scénographie et le mapping. Domaines dans lesquels, ils animent régulièrement des workshops et/ou ateliers à l'intention des scolaires, des amateurs et des professionnels. Ils ont \
				également développé une activité de régie générale et \
				audiovisuelle (Régie vidéo du festival Nuits Sonores, \
				du Planétarium de Vaulx en Velin, régie technique \
				pour Erasme [métropole de Lyon], mais aussi sur des \
				projets de portée internationale comme le régie générale \
				des expositions de Adrien M et Claire B).",
				social : [
					{name: "site", url:"https://www.wskvj.com/"},
					{name:"instagram", url:"https://www.instagram.com/wsk_vj/"}
				]
			}
		]
	}
});

export default app;