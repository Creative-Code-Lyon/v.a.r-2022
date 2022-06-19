import App from './App.svelte';

const app = new App({

	target: document.body,
	props: {
		name: 'world',
		artists: [
			{
				name : 'Makio135', 
				nomination: "Generative Artist",
				imgUrl: 'https://i.imgur.com/T90Xdcd.jpg',
				bio: "Classic generative weirdo.",
				social : [
					{name: "Site", url:"http://makio135.com"},
					{name: "instagram", url:"https://www.instagram.com/makio135/"}
				]
			},
			{
				name : 'Elisalien', 
				nomination: "VJ",
				imgUrl: 'https://i.imgur.com/1qfqGTE.jpg',
				bio: "D’abord dessinatrice, Elisalien trouve son bonheur dans les pratiques multimédias (Motion Design, 3D) qui sont pour elle des outils aux possibilités infinies. Elle découvre le VJ chez Exoria en 2017 et travaille aujourd'hui avec Neon. Elle mêle visuels génératifs, créations personnelles et extraits de films et anime dans un VJing coloré et psychédélique.",
				social : [
					{name: "Site", url:"https://www.elisalien.com/"},
					{name: "Instagram", url:"https://www.instagram.com/elisalien/"}
				]
			},
			{
				name : 'Arthur Baude', 
				nomination: "Designer / Maker / VJ",
				imgUrl: 'https://i.imgur.com/OEqVBuK.jpg',
				bio: "Issu d'une formation multimédia puis arts appliqués, il a découvert le milieu 'maker' à la fin de ses études où il a pu se former en autodidacte à l'électronique interactive et à la fabrication numérique.Passionné par ces différents univers, il les intègre en permanence dans son travail en mélangeant design, création artistique et fabrication numérique. Après 3 ans passés chez nod-A en tant que designer / maker / facilitateur, il travaille désormais en freelance. Depuis 2016, il consacre une grande part de son temps professionnel à concevoir et donner des formations à la fabrication numérique et au monde maker dans sa globalité.",
				social : [
					{name: "instagram", url:"https://www.instagram.com/le_robota/"},
					{name: "site", url:"http://www.arthurbaude.com/"}
				]
			},
			{
				name : 'Emiliano Germain', 
				nomination: "Playtronica",
				imgUrl: 'https://i.imgur.com/FOFqduy.jpg',
				bio: "Emiliano Germain est musicien et artiste intervenant auprès du jeune public. membre du Séquenceur et de Playtronica, sont travail d'intervenant se centre sur les nouvelles technologies comme vectrices d'initiation à la pratique musicale. Également DJ, il est membre du collectif lyonnais Bon Public et se produit régulièrement sur scène avec ses divers projets.",
				social : [
					{name: "SITE", url:"https://www.grame.fr/artistes-chercheurs-partenaires/emiliano-germain"},
					{name: "SC", url:"https://soundcloud.com/keithlimbomusic"},
				]
			},
			{
				name : 'Paul Ycorne', 
				nomination: "Playtronica",
				imgUrl: 'https://i.imgur.com/NiedDos.jpg',
				bio: "Fascinée par les images et les salles obscures depuis le plus jeune âge, Pauline Millet a fait ses armes en tant que VJ aux côtés du collectif lyonnais l’Octopus depuis 2017, en parallèle de ses études dans l’audiovisuel et le cinéma. Ainsi, elle a pu performer dans de nombreuses SMAC de France, des parcs d’expositions, dans un Planétarium … Grâce notamment à l'association AADN qui oeuvre pour la promotion des arts numériques, elle transmet sa passion par des ateliers depuis maintenant 2 ans, auprès d’ados et d’adultes.",
				social : [
					{name: "instagram", url:"https://www.instagram.com/paul_icorne/"},
					{name: "vimeo", url:"https://vimeo.com/392215527"},
				]
			},
			{
				name : 'Acqtäz', 
				nomination: "Musician",
				imgUrl: 'https://i.imgur.com/gPnEShM.jpg',
				bio: "Acqtäz fait du bruit, pour les gens qui aiment le bruit",
				social : [
					{name: "", url:"https://acqz.bandcamp.com/"},
					{name: "site", url:"https://www.grame.fr/artistes-chercheurs-partenaires/romain-darracq"},
					{name: "facebook", url:"https://www.facebook.com/acqtaz"}
				]
			},
			{
				name : 'VFG', 
				nomination: "Live Viual Artist",
				imgUrl: "https://i.imgur.com/ROr113O.jpg",
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
				imgUrl: 'https://i.imgur.com/XMtlxhv.jpg',
				bio: "La bidouille c'est cool, la bidouille qui fait du son c'est mieux. Autodidacte et pas musicien pour 3 sous 😁",
				social : [
					{name: "github", url:"https://github.com/arthursaunier/Synth"},
				]
			},
			{
				name : 'Pierre - WSK', 
				nomination: "VJ / Scénographe",
				imgUrl: 'https://i.imgur.com/AsqFuBA.jpg',
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
		],
		team:  [
			{
				name : 'Yassin Siouda', 
				nomination: "Caffeined Hacker",
				imgUrl: 'https://i.imgur.com/ysuvk79.jpg',
				bio: "yassin Siouda is a digital caffeined hacker who has been making a name for herself in the hacking community for her creative and innovative approach to hacking. She has been involved in a number of high-profile hacks, including the now infamous Starbucks hack, which saw her stealing over $100,000 worth of Starbucks gift cards.\
					yassin is a self-taught hacker who has been honing her skills for years. She is constantly looking for new ways to exploit digital systems and is always one step ahead of the security teams trying to stop her. Her creative approach to hacking has made her a formidable opponent for anyone who tries to stand in her way.",
				social : [
					{name: "Site", url:"https://yassin.siouda.com/"},
					{name: "instagram", url:"https://www.instagram.com/makio135/"}
				]
			},
			{
				name : 'Marc Charton', 
				nomination: "Creative Thinker",
				imgUrl: 'https://i.imgur.com/Ek8bBPv.jpg',
				bio: "Marc Charton is a creative thinker and music enthusiast from France. He has a passion for music and creative coding, and is a member of several musical collectives and hacking groups. He is also active in the makers community, and is always looking for new and innovative ways to create and share his work with others.",
				social : [
					{name: "Site", url:"https://marc-charton.fr"},
					{name: "facebook", url:"https://www.facebook.com/narcomarch"},
					{name: "github", url:"https://github.com/marccharton"},
				]
			},
		]
	}
});

export default app;
