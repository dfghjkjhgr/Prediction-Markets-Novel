/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
    'stinky': "Maduro_Stinky.jpg",
    'fort': "Fort_Bragg_1st_Brigade_barracks.jpg",
    'CNN': "CNN.png",
    "BAR": "BAR.jpg"
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},
    'master': {
	name: 'Master Sgt. Gannon Ken Van Dyke',
	color: '#5bcaff',
	sprites: {
	    evil: "Master-Evil.png",
	    normal: "Master-Bored.png",
	}
	
    },
    "news": {
	name: "News Guy",
	color: "#000000"
    },
    "joe": {
	name: "Joe Everyman",
	color: "#FFFFFF",
	sprites: {
	    withBeer: "Everyman-normal-wbeer.png",
	},
    }
});

monogatari.script ({
	// The game starts here.
	'Start': [
            'show scene fort with fadeIn',
	    'Fort Bragg. December 27th, 2026',
	    //'show character master normal',
	    "show scene stinky with fadeIn",
	    "master Me and my buds in the military just finished making this plan to capture Nicolas Maduro, we're really proud of it!",
	    "show scene #FFFFFF",
	    'show character master evil',
	    "master I just heard of this cool new predicition market called Polymarket. You can bet on whether Maduro will stary in office or not.",
	    "master Wait a minute, I already know that Maduro is going to be captured, so if I bet, it is going to be a guaranteed win!",
	    'master I could make a TON of money betting that Maduro will be out by January 3rd, since I already know that it will happen!',
	    "master I'm gonna be RICH!!!",
	    'show character master normal',
	    "master I better use a VPN to hide my identity.",
	    'show character master evil',
	    "master This plan is FOOLPROOF! They'll never catch me! MUHUHUHAHAHA!",
	    "A few months later...",
	    "show scene CNN with fadeIn",
	    "news Gannon Ken Van Dyke was just arrested for using his classified knowledge to make bets on Polymarket.",
	    "news The FBI arrested him on April 26th, he is being charged with unlawful use of confidential government knowledge for personal gain.",
	    "news This shows how prediction markets can be used by unscrupulous people to make money off of national secrets.",
	    "show scene BAR",
	    "show character joe withBeer",
	    "joe These prediction markets thingamagigs are really concernin' me.",
	    "joe Can people really make money off of classified information with them?",
	    "joe What does this mean for our democracy, and the world at large?",
	    "joe It would be great if there was someone in this bar to come and help explain it to me.",
 	    "end"
	    
		]
});
