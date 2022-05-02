import App from './App.svelte';

const app = new App({

	target: document.body,
	props: {
		name: 'world',
		artists: [
			{
				name : 'Arthur Baude', 
				nomination: "Designer Maker",
				imgUrl: 'https://www.aht.li/3160494/avatar.jpg',
				bio: "Issu d'une formation multimédia puis arts appliqués, j’ai découvert le milieu maker à la fin de mes études où j’ai pu me former en autodidacte à l'électronique interactive et à la fabrication numérique.Passionné par ces différents univers, je les intègre en permanence dans mon travail en mélangeant design, création artistique et fabrication numérique. Après 3 ans passé chez nod-A en tant que designer / maker / facilitateur, je travaille désormais en freelance. Depuis 2016, je consacre une grande part de mon temps professionnel à concevoir et donner des formations à la fabrication numérique et au monde maker dans sa globalité.",
				social : [
					{name: "instagram", url:"https://twitter.com/arthur_baude"},
					{name: "facebook", url:"https://twitter.com/arthur_baude"},
					{name: "twitch", url:"https://twitter.com/arthur_baude"}
				]
			},
			{
				name : 'Makio135', 
				nomination: "Generative Artist",
				imgUrl: 'https://images.squarespace-cdn.com/content/v1/5ed6306308e08b2bda7645bf/1617275774364-UWXUN83QQ8YC0NQBYY1N/QmYqaCmnERMTdEqnCkoeBtGcBE8DSzwBjbEvYs74vepGr1.gif?format=2500w',
				bio: "",
				social : [
					{name: "instagram", url:"https://twitter.com/arthur_baude"},

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
				name : 'Martial Geoffre-Rouland', 
				nomination: "Studio Screen Club",
				imgUrl: 'https://avatars.githubusercontent.com/u/157709?v=4',
				bio: "",
				social : [
					{name: "instagram", url:"https://twitter.com/arthur_baude"},
					{name: "facebook", url:"https://twitter.com/arthur_baude"},
					{name: "twitch", url:"https://twitter.com/arthur_baude"}
				]
			},
		]
	}
});

export default app;