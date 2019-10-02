const $nameSubmit = $('.name-submit');
const $age = $('#age');
const $hunger = $('#feed');
const $boredom = $('#play')
const $sleepiness = $('#sleep');
const $feedButton = $('.action_feed');
const $playButton = $('.action_play');
const $sleepButton = $('.action_sleep');
const $nameInput = $('.tomagotchi-name')
let currentTomagotchi = "";
let current;

$nameSubmit.on('click', (e) => {
	//console.log($(e.target).text());
	if($($nameInput).val() !== ""){
		$('main').empty();
		console.log($($nameInput).val());
		$('h1').text($($nameInput).val());
		currentTomagotchi = $($nameInput).val();
		$($nameInput).val('');
		current = new Tomagotchi(currentTomagotchi);
		current.tomagotchiLife();
	}
});

$feedButton.on('click', (e) => {
	console.log('feed');
	if(current.hunger > 0){
		current.hunger--;
		$($hunger).text(current.hunger);
	}
});

$playButton.on('click', (e) => {
	console.log('play');
	if(current.boredom > 0){
		current.boredom--;
		$($boredom).text(current.boredom);
	}
});

$sleepButton.on('click', (e) => {
	console.log('sleep');
		if(current.sleepiness > 0){
		current.sleepiness--;
		$($sleepiness).text(current.sleepiness);
	}
});







class Tomagotchi {
	constructor(name){
		this.name = name;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 0;
	}
	tomagotchiLife(){
		console.log(`${this.name} has been born`);
		$($age).text(this.age);
		$($hunger).text(this.hunger);
		$($boredom).text(this.boredom);
		$($sleepiness).text(this.sleepiness);
		const ageCounter = setInterval(() => {
			this.age++;
			$($age).text(this.age);
			if(current.failureConditions() === true){
				clearInterval(ageCounter);
				clearInterval(hungerCounter);
				clearInterval(boredomCounter);
				clearInterval(sleepinessCounter);
			}
		}, 9000);
		const hungerCounter = setInterval(() => {
			this.hunger++;
			$($hunger).text(this.hunger);
			if(current.failureConditions() === true){
				clearInterval(ageCounter);
				clearInterval(hungerCounter);
				clearInterval(boredomCounter);
				clearInterval(sleepinessCounter);
			}
		}, 6000);
		const boredomCounter = setInterval(() => {
			this.boredom++;
			$($boredom).text(this.boredom);
			if(current.failureConditions() === true){
				clearInterval(ageCounter);
				clearInterval(hungerCounter);
				clearInterval(boredomCounter);
				clearInterval(sleepinessCounter);
			}
		}, 5500);	
		const sleepinessCounter = setInterval(() => {
			this.sleepiness++;
			$($sleepiness).text(this.sleepiness);
			if(current.failureConditions() === true){
				clearInterval(ageCounter);
				clearInterval(hungerCounter);
				clearInterval(boredomCounter);
				clearInterval(sleepinessCounter);
			}
		}, 5000);
	}
	failureConditions(){
		if(this.age >= 20){
			alert(`${this.name} has lived a good life and passed due to old age. You should be priud of yourself for keeping them alive so long!`);
			return true;
		} else if(this.hunger >= 10){
			alert(`${this.name} has starved to death. You should be ashamed at the neglect to feed your friend.`);
			return true;
		} else if(this.boredom >= 10){
			alert(`${this.name} was so bored that it ran away. Don't try and find em', they'd probably enjoy themselves more away from you.`);
			return true;
		} else if(this.sleepiness >= 10){
			alert(`${this.name} was so exhuasted that they fell into a permanent coma. Way to go, sport.`);
			return true;
		}  else {
			return false;
		}
	}
	babyImageRandomizer(){
		const randomIndex = Math.floor(Math.random()*4);
		let imageURL = "";
		if()
	}
	// removeTomagotchiInformation(){
	// 	this.
	// }
};

