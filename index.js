var name = "Princess Brunhilda von Nay Nay III";
var age = 8; // Setting age to 8

console.log("My name is " + name + " and I am age " + age);


// Need to find out drinking age
var drinkingAge = 21 - age;

if (age < 21) {

console.log("...and beer in " + drinkingAge + " years");
} else if (age === 21){
	console.log("yeah... celebrate");
} else {
	console.log("leave me alone I am drinking");
}
