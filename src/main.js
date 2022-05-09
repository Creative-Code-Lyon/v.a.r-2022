import App from './App.svelte';

const app = new App({

	target: document.body,
	props: {
		name: 'world',
		artists: [
			{
				name : 'Arthur Baude', 
				nomination: "Designer / Maker / VJ",
				imgUrl: 'https://www.aht.li/3160494/avatar.jpg',
				bio: "Issu d'une formation multimédia puis arts appliqués, j’ai découvert le milieu maker à la fin de mes études où j’ai pu me former en autodidacte à l'électronique interactive et à la fabrication numérique.Passionné par ces différents univers, je les intègre en permanence dans mon travail en mélangeant design, création artistique et fabrication numérique. Après 3 ans passé chez nod-A en tant que designer / maker / facilitateur, je travaille désormais en freelance. Depuis 2016, je consacre une grande part de mon temps professionnel à concevoir et donner des formations à la fabrication numérique et au monde maker dans sa globalité.",
				social : [
					{name: "instagram", url:"https://twitter.com/arthur_baude"},
					{name: "facebook", url:"https://twitter.com/arthur_baude"},
					{name: "twitch", url:"https://twitter.com/arthur_baude"}
				]
			},
			{
				name : 'Emiliano Germain', 
				nomination: "Generative Artist",
				imgUrl: 'https://i.imgur.com/Uvmb4jx.jpeg',
				bio: "",
				social : [
					{name: "instagram", url:"https://www.grame.fr/artistes-chercheurs-partenaires/emiliano-germain"},
				]
			},
			{
				name : 'Romain Darracq', 
				nomination: "Musician",
				imgUrl: 'https://www.grame.fr/assets/f1920x1200-q85-p1/bcd98a4b/romain_darracq.jpg',
				bio: "",
				social : [
					{name: "instagram", url:"https://twitter.com/arthur_baude"},
					{name: "facebook", url:"https://twitter.com/arthur_baude"},
					{name: "twitch", url:"https://twitter.com/arthur_baude"}
				]
			},
			{
				name : 'Paul Ycorne', 
				nomination: "VJ / Motion Design",
				imgUrl: '',
				bio: "",
				social : [
					{name: "instagram", url:"https://twitter.com/arthur_baude"},
					{name: "facebook", url:"https://twitter.com/arthur_baude"},
					{name: "twitch", url:"https://twitter.com/arthur_baude"}
				]
			},
			{
				name : 'VFG', 
				nomination: "Live Digital Artist",
				imgUrl: "",
				bio: "",
				social : [
					{name: "instagram", url:"https://twitter.com/arthur_baude"},
					{name: "facebook", url:"https://twitter.com/arthur_baude"},
					{name: "twitch", url:"https://twitter.com/arthur_baude"}
				]
			},
			{
				name : 'Arthur Saunier', 
				nomination: "Instrument Maker",
				imgUrl: 'https://scontent-mrs2-1.xx.fbcdn.net/v/t1.6435-9/71217672_2431888100260626_644484465812307968_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=_336yh1TnAQAX_YlzsI&_nc_ht=scontent-mrs2-1.xx&oh=00_AT9YqWJNESzDBDhp8_hRwOCFaice2PbxoYeA3LqN1m_nSA&oe=629DF91C',
				bio: "",
				social : [
					{name: "instagram", url:"https://github.com/arthursaunier/Synth"},
				]
			},
			{
				name : 'Pierre - WSK', 
				nomination: "VJ / Scénographe",
				imgUrl: 'https://visuaal.fr/2017/wordpress/wp-content/uploads/2017/02/WSK-AVE-w-Dunes-@-RUMBLE-Festival-2014-print23-1440x810.jpg',
				bio: "",
				social : [
					{name: "instagram", url:"https://www.wskvj.com/"}
				]
			}
		]
	}
});

export default app;