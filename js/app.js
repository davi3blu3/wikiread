(function(){
	var app = angular.module('store', []);	

	// controller is attached to app - must contain word controller
	app.controller('StoreController', function(){
		this.products = gems;
	});

	// controller for panel tab selection
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	// variable definding all products
	var gems = [
	  {
		name: 'Ruby',
		price: 495,
		description: 'this beautiful blood-red stone has historical connections to the Maharaja of Travancore family of India.',
		images: {
		  	full: 'img/ruby-full.png',
		  	thumb: 'img/ruby-thumb.png'
		  },
		reviews: [
		  {
		  	stars: 5,
		  	body: "I love this product!",
		  	author: "joe@diggit.com"
		  },
		  {
		  	stars: 1,
		  	body: "Friggen terrible!",
		  	author: "mike@hater.com"
		  }
		],
		canPurchase: true,
		soldOut: false,
	  },
	  {
		name: 'Emerald',
		price: 595,
		description: 'the last remaining stone from a beautiful city once constructed to honor the wonder wizard of Oz.',
		images: {
		  	full: 'img/emerald-full.png',
		  	thumb: 'img/emerald-thumb.png'
		  },
		reviews: [
		  {
		  	stars: 4,
		  	body: "I endorse this ad!",
		  	author: "mary@diggit.com"
		  },
		  {
		  	stars: 2,
		  	body: "Really smelly!",
		  	author: "peter@hater.com"
		  }
		],
		canPurchase: true,
		soldOut: false,
	  },
	  {
		name: 'Sapphire',
		price: 285,
		description: 'Owned by railroad mogul James J. Hill in the late 19th century, this 22.66-carat sapphire surrounded by diamonds is a perfect example of a Kashmir sapphire with its velvety luster.',
		images: {
		  	full: 'img/sapphire-full.png',
		  	thumb: 'img/sapphire-thumb.png'
		  },
		reviews: [
		  {
		  	stars: 5,
		  	body: "I love your mom!",
		  	author: "paul@diggit.com"
		  },
		  {
		  	stars: 2,
		  	body: "Fuggin' crap!",
		  	author: "susan@hater.com"
		  }
		],
		canPurchase: false,
		soldOut: false,
	  },
	  {
		name: 'Diamond',
		price: 1295,
		description: 'the Cullinan I or Star Africa diamond is the largest cut diamond in the world. Pear shaped, with 74 facets, it is set in the Royal Scepter (kept with the other Crown Jewels in the Tower of London).',
		images: {
		  	full: 'img/diamond-full.png',
		  	thumb: 'img/diamond-thumb.png'
		  },
		reviews: [
		  {
		  	stars: 5,
		  	body: "I married this eggplant!",
		  	author: "vivian@diggit.com"
		  },
		  {
		  	stars: 1,
		  	body: "Friggen deplorable!",
		  	author: "sammy@hater.com"
		  }
		],
		canPurchase: true,
		soldOut: false,
	  },	  
	];
})();

