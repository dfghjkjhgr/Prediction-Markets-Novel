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
	"gunshot": "gunshot.mp3",
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
    },
	"truth": {
		name: "Mysterious Man",
		color: "#27C8F5",
		sprites: {
		    normal: "Truth-Man.png",
		    shocked: "Truth-Man-Shocked.png",
		    dying: "Truth-Man-Dying.png",
		    dead: "Truth-Man-Dead.png"
		}
	},
	"mafia": {
		name: "Prediction Mafia",
		color: "#FFFFFF",
		sprites: {
			normal: "PM.png"
		}
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
	        "show character truth normal at right with fadeIn",
	    "truth I know the truth about prediction markets! I can't wait to tell you all about it.",
	    "joe You look familiar...",
	    "joe Wait a minute, is it you, my best friend Jeff? I haven't seen you in 6 years! You just disappeared one day!",
	    "joe What happened to your eye? Where have you been all this time?",
	    "truth All in due time, my friend. First, I must answer your question--",
            "show character mafia normal at left with move transtiion 2s",
	    "play sound gunshot",
	    "show character truth shocked at right",
	    "joe WHAAAAT???",
	    "joe WHY DID YOU GUYS DO THAT??!?!?!?",
	    "hide character mafia at left with slideOutLeft",
	    "show character truth dying at right",
	    "truth I was expecting something like this to happen.",
	    "truth There was a prediction market for how many people would go to the Knicks finals game.",
	    "truth I bought a ticket for you as a gift, but the mafia was betting that not many people would go.",
	    "truth The mafia thought that I had bought the ticket for myself, so they killed be to make sure that they would win their bet.",
	    "joe Life just sucks.",
	    "truth Well, bro, this is the end. You're going to have to edutain yourself in this game.",
	    "show character truth dead at right",
	    "joe Don't leave me Jeff! I have so many questions!",
	    "joe NOOOO!!!",
	    "joe I have to do <i>something</i>!",
	    {"Choice": {
		"Revenge": {
		    "Text": "Take revenge on the prediction markets for leading to the death of your friend",
		    "Do": "jump Revenge"
		},
		"Learn": {
		    "Text": "Learn about what is a prediction market first",
		    "Do": "jump Learn"
		}
	    }},
    ],
    "Revenge": [
	"joe I'm going to go to the prediction market headquarters and take my revenge RIGHT NOW!",
	"Joe puts in prediction market headquarters into the GPS of his self-driving Tesla.",
	"However there are multiple predicition markets, including Polymarket and Kalshi.",
	"Due to a bug in the code, it explodes..."
    ],
    "Learn": [
	"joe I'm going to go home and learn about prediction markets. Once I know my enemy, I can take revenge.",
    ]
});
