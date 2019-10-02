const $nameSubmit = $('.name-submit');
const $feed = $('.action_feed');
const $play = $('.action_play');
const $sleep = $('.action_sleep');
const $nameInput = $('.tomagotchi-name')
let currentTomagotchi = "";
let current;

$nameSubmit.on('click', (e) => {
	//console.log($(e.target).text());
	if($($nameInput).val() !== ""){
		console.log($($nameInput).val());
		currentTomagotchi = $($nameInput).val();
		current = new Tomagotchi(currentTomagotchi);
	}
});

class Tomagotchi {
	constructor(name){
		this.name = name;
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
	}
};

