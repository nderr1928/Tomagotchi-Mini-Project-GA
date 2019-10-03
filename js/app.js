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
console.log($('#image-container').css('background-image'));

$nameSubmit.on('click', (e) => {
	if($($nameInput).val() !== ""){
		//$('main').empty();
		console.log($($nameInput).val());
		$('h1').text($($nameInput).val());
		currentTomagotchi = $($nameInput).val();
		$($nameInput).val('');
		current = new Tomagotchi(currentTomagotchi);
		current.babyImageRandomizer();
		current.tomagotchiLife();
	}
});

$feedButton.on('click', (e) => {
	console.log('feed');
	if(current.hunger > 1){
		current.hunger--;
		$($hunger).text(current.hunger);
	}
});

$playButton.on('click', (e) => {
	console.log('play');
	if(current.boredom > 1){
		current.boredom--;
		$($boredom).text(current.boredom);
	}
});

$sleepButton.on('click', (e) => {
	console.log('sleep');
		if(current.sleepiness > 1){
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
			if(this.age === 5){
				this.childImageRandomizer();
			}
			if(this.age === 10){
				this.adultImageRandomizer();
			}
			if(this.age === 15){
				this.elderImageRandomizer();
			}
			if(current.failureConditions() === true){
				clearInterval(ageCounter);
				clearInterval(hungerCounter);
				clearInterval(boredomCounter);
				clearInterval(sleepinessCounter);
			}
		}, 6000);
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
			alert(`${this.name} has lived a good life and passed due to old age. You should be proud of yourself for keeping them alive so long!`);
			$('#image-container').css('background-image', 'url(Images/death.gif)');
			this.animation();
			return true;
		} else if(this.hunger >= 10){
			alert(`${this.name} has starved to death. You should be ashamed at the neglect to feed your friend.`);
			$('#image-container').css('background-image', 'url(Images/death.gif)');
			this.animation();
			return true;
		} else if(this.boredom >= 10){
			alert(`${this.name} was so bored that it died. They literally DIED of boredom. You're not fun to be around..`);
			$('#image-container').css('background-image', 'url(Images/death.gif)');
			this.animation();
			return true;
		} else if(this.sleepiness >= 10){
			alert(`${this.name} was so exhuasted that they fell into a permanent coma. Way to go, sport.`);
			$('#image-container').css('background-image', 'url(Images/death.gif)');
			this.animation();
			return true;
		}  else {
			return false;
		}
	}
	babyImageRandomizer(){
		//alert('Say hello to your tomagotchi baby!');
		const randomIndex = Math.floor(Math.random()*4);
		let imageURL = "";
		if(randomIndex === 0){
			imageURL = 'url(Images/baby/baby1.png)';
		} else if(randomIndex === 1){
			imageURL = 'url(Images/baby/baby2.png)';
		} else if(randomIndex === 2){
			imageURL = 'url(Images/baby/baby3.png)';
		} else{
			imageURL = 'url(Images/baby/baby4.png)';
		}
		console.log(imageURL);
		$('#stage').text('Baby');
		$('#image-container').css('background-image', imageURL);
		$('#image-container').css('height', "100px");
		$('#image-container').css('width', "100px");
		this.animationBaby();
	}
	childImageRandomizer(){
		//alert(`${this.name} has grown to a child!`);
		const randomIndex = Math.floor(Math.random()*4);
		let imageURL = "";
		if(randomIndex === 0){
			imageURL = "url(Images/child/child1.png)";
		} else if(randomIndex === 1){
			imageURL = "url(Images/child/child2.png)";
		} else if(randomIndex === 2){
			imageURL = "url(Images/child/child3.png)";;
		} else{
			imageURL = "url(Images/child/child4.png)";;
		}
		console.log(imageURL);
		$('#stage').text('Child');
		$('#image-container').css('background-image', imageURL);
		$('#image-container').css('height', "200px");
		$('#image-container').css('width', "200px");
		this.animationChild();
	}
	adultImageRandomizer(){
		//alert(`${this.name} is now an adult!`);
		const randomIndex = Math.floor(Math.random()*4);
		let imageURL = "";
		if(randomIndex === 0){
			imageURL = "url(Images/adult/adult1.png)";
		} else if(randomIndex === 1){
			imageURL = "url(Images/adult/adult2.png)";
		} else if(randomIndex === 2){
			imageURL = "url(Images/adult/adult3.png)";;
		} else{
			imageURL = "url(Images/adult/adult4.png)";;
		}
		console.log(imageURL);
		$('#stage').text('Adult');
		$('#image-container').css('background-image', imageURL);
		$('#image-container').css('height', "300px");
		$('#image-container').css('width', "300px");
		this.animationAdult();
	}
	elderImageRandomizer(){
		//alert(`From an adult, ${this.name} is now an elder!`);
		const randomIndex = Math.floor(Math.random()*4);
		let imageURL = "";
		if(randomIndex === 0){
			imageURL = "url(Images/elder/elder1.png)";
		} else if(randomIndex === 1){
			imageURL = "url(Images/elder/elder2.png)";
		} else if(randomIndex === 2){
			imageURL = "url(Images/elder/elder3.png)";;
		} else{
			imageURL = "url(Images/elder/elder4.png)";;
		}
		console.log(imageURL);
		$('#stage').text('Elder');
		$('#image-container').css('background-image', imageURL);
		$('#image-container').css('height', "200px");
		$('#image-container').css('width', "200px");
		this.animationElder();
	}
	animationBaby(){
		$('#image-container').animate({left: '600%'}, 2000)
		$('#image-container').animate({bottom: '200%'}, 2000)
		$('#image-container').animate({left: '-700%'}, 6000)
		$('#image-container').animate({bottom: '-300%'}, 4000)
		$('#image-container').animate({left: '500%'}, 4000)
		$('#image-container').animate({left: '-500%'}, 4000)
		$('#image-container').animate({bottom: '-200%'}, 2000)
		$('#image-container').animate({left: '0%'}, 2000)
		$('#image-container').animate({bottom: '0%'}, 2000)
	}
	animationChild(){
		$('#image-container').animate({left: '-200%'}, 2000)
		$('#image-container').animate({top: '100%'}, 2000)
		$('#image-container').animate({left: '200%'}, 6000)
		$('#image-container').animate({top: '-200%'}, 4000)
		$('#image-container').animate({left: '-300%'}, 4000)
		$('#image-container').animate({left: '300%'}, 4000)
		$('#image-container').animate({top: '-100%'}, 2000)
		$('#image-container').animate({left: '0%'}, 2000)
		$('#image-container').animate({top: '0%'}, 2000)
	}
	animationAdult(){
		$('#image-container').animate({left: '-50%'}, 1000)
		$('#image-container').animate({left: '-100%'}, 1000)
		$('#image-container').animate({left: '-200%'}, 2000)
		$('#image-container').animate({left: '200%'}, 8000)
		$('#image-container').animate({left: '100%'}, 2000)
		$('#image-container').animate({left: '50%'}, 1000)
		$('#image-container').animate({left: '0%'}, 1000)
		$('#image-container').animate({top: '-100%'}, 1000)
		$('#image-container').animate({top: '100%'}, 1000)
		$('#image-container').animate({top: '0%'}, 1000)
	}
	animationElder(){
		$('#image-container').animate({left: '300%'}, 6000)
		$('#image-container').animate({left: '-300%'}, 12000)
		$('#image-container').animate({left: '0%'}, 6000)
	}
	animation(){
		$('#image-container').animate({left: '500%'}, 2000)
		$('#image-container').animate({left: '-500%'}, 4000)
		$('#image-container').animate({left: '0%'}, 2000)	
	}
};

