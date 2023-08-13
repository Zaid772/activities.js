// Dot Notation:

// ACTIVITY 

for(let i = 0 ; i < 3; i++) {
    console.log("   |   |   ")
}

console.log("-----------")

for(let i = 0 ; i < 3; i++) {
    console.log("   |   |   ")
}

console.log("-----------")

for(let i = 0 ; i < 3; i++) {
    console.log("   |   |   ")
}

//Variables

// Activity 1

let firstName = "Chris"
let age = "29"
let favDrink = "coffee"

console.log('My name is ' + firstName + '. I am ' + age + ' years old and my favourite drink is ' + favDrink);

console.log(`Hi my name is ${firstName}. I am ${age} years old and my favourite drink is ${favDrink}.`)

firstName = "John"
age = "42"
favDrink = "tea"

console.log(`Hi my name is ${firstName}. I am ${age} years old and my favourite drink is ${favDrink}.`)

// Activity 2

let breakfast = "toast"
let lunch = "a sandwich"
let dinner = "roast chicken"

console.log(`Today for breakfast I ate ${breakfast}. For lunch I ate ${lunch} and for dinner I had ${dinner}.`)

breakfast = "cereal"
lunch = "a burger"
dinner = "steak"

console.log(`Today for breakfast I ate ${breakfast}. For lunch I ate ${lunch} and for dinner I had ${dinner}.`)

// Activity 3:

// DISCLAIMER: I kept trying for this but I kept running into loose ends. So i got fed up and i used the help of google for this.

const birthday = new Date(2004, 6, 12)

const today = new Date();

const difference = birthday - today;

const daysDiffference = Math.ceil(difference / (1000 * 60 * 60 * 24));

console.log(`There are ${difference} days from today to your birthday`);

//ACTIVITY 4

let space1 = "X";
let space2 = "O";
let space3 = "X";
let space4 = "O";
let space5 = "X";
let space6 = "O";
let space7 = "X";
let space8 = "O";
let space9 = "X";

console.log("   |   |   ")
console.log(`${space1}  | ${space2} |   `)
console.log("   |   |   ")
console.log("-----------");
console.log("   |   |   ")
console.log(`${space3}  | ${space5} |   `)
console.log("   |   |   ")
console.log("-----------");
console.log("   |   |   ")
console.log(`${space4}  |   |   `)
console.log("   |   |   ")

// IF, ELSE Statements

//ACTIVITY 1

let ageD = 18;
let country = "UK";

if (ageD > 17 && country == "UK") {
    console.log("Yes I can serve you")
}
else {
    console.log("You are'nt old enough")
}

//ACTIVITY 2

let topping = "pineapples";

switch (topping) {
    case "chicken":
    case "olives":
        console.log("These are important ingredients for my pizza");
        break
    case "pepperoni":
    case "peppers":
        console.log(`I dont mind having ${topping} on my pizza`);
        break
    case "pineapples":
        console.log(`${topping} should not be on a pizza!`)
}

// ACTIVITY 3

let password = "abcdefg"

if (password.length < 8){
    console.log("Password is too short. Create new password")
}
else {
    console.log("Password created")
}


let num = 20

if (num % 3 == 0 || num % 5 == 0) {
    console.log("This number is divisible by 3 or 5")
}
else{
    console.log("This number is not divisible by 3 or 5")
}

//ACTIVITY 4

let integer = 15

if (integer % 3 == 0 && integer % 5 == 0) {
    console.log("fizz buzz");
}
else if (integer % 3 == 0) {
    console.log("fizz");
}

else if (integer % 5 == 0) {
    console.log("buzz");
}

else{ (integer % 3 != 0 || integer % 5 != 0) 
    console.log(`${integer}`);
}

// ACTIVITY 6

let time = 7;

if( time === 7){
    console.log("I'm at home")
}

else if (time === 8){
    console.log("I'm commuting")
}

else if (time === 9){
    console.log("I'm at work")

}

//ACTIVITY 7

let a = "a";
let e = "e";
let i = "i";
let o = "o";
let u = "u";

let string = "cjosijocnisanczvzdzsafcvbnaki"

//ACTIVITY 8

let word = "acapella"

if(word.toLowerCase[0] == word.toLowerCase[word.length - 1]){
    console.log(true)
} else{
    console.log(false)
}

//Arrays and Loops


//ACTIVITY 1

let favFilms = [
    "Inception",
    "Dark Knight Rises",
    "Oppenheimer",
    "Rush Hour",
    "Wolf of Wall Street"
];

favFilms.push("Maze Runner")
favFilms.push("Fast and Furious")


for(i = 0; i < favFilms.length; i++){
    console.log(favFilms[i])
}

// // ACTIVITY 2

for(let i = 1; i < 7; i++){
        console.log(Math.floor(Math.random() * 51));
}

// //ACTIVITY 3

for(let i = 9; i > 0; i--){
        console.log(i);
}

// // ACTIVITY 4

let movie = [
        "Home Alone 1",
        "Home Alone 2",
        "Ghostbusters",
        "Home Alone 4",
]

console.log(movie)

for(let i = 3; i < movie.length; i++){
        if(movie[2] == "Ghostbusters"){
                console.log("Yay its Ghostbusters")
        }
        else{
                console.log("Boo! We want Ghostbusters")
        }
}

// //Activity 5

for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 30);
        if(i % 7 == 0){
                console.log("Number is divisble by 7");
        }
        else if(i % 7 != 0){
                console.log("Number is not divisible by 7")
        };
        
}

//Activity 6

let bobsFollowers = [
    "Brian",
    "Brad",
    "Bill",
    "Holly"
]

let hannahsFollowers = [
    "Harriet",
    "Bill",
    "Holly",
    "Heather"
]

for(let i = 0; i < bobsFollowers.length; i++){
    for(let k = 0; k < hannahsFollowers.length; k++){
            if(bobsFollowers[i] == hannahsFollowers[k]){
                    console.log(`Mutual follower: ${bobsFollowers[i]}`);
                    break;
            }       
    
    }
}

//ACTIVITY 7

// do...while loop is similar to while loop, but it ensures the loop body executes at least once before checking the condition eg.

let numberr = 0;
do {
    console.log(numberr);
    numberr++;
} while (numberr < 5);

//Functions

// ACTIVITY 1

const factorial = (n) =>{
    if((n === 0) || (n === 1)){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(6));

// ACTIVITY 2

let orderCount = 1;

const takeOrder = (topping,orderNumb) => {
    console.log(`Pizza with ${topping}. 
    Order number ${orderNumb}`);
}

takeOrder("pineapple", 543)

//ACTIVITY 3

const cashMachine = (pinNum, amountNum) =>{
    console.log(`Enter your pin`)
    if(pinNum = 5679){
        console.log("Your pin is correct")
    } else{
        console.log("Pin is incorrect")
    };
    console.log(`Enter the amount`)
    if (amountNum == 1100 || amountNum < 1100){
        console.log(`£${amountNum} has been dispensed`)
    } else {
        console.log(`Insufficient funds in balance`)
    };
} 

console.log(cashMachine(5679, 1090));

//Objects

//ACTIVITY 1

const person = {
    myName : "Zaid",
    sayHi(){
        return `Hello my name is ${this.myName}`
    }
};

console.log(person.sayHi())

//ACTIVITY 2

let pet = {
    petName: "Bill",
    typeOfPet: "dog",
    agePet: "5 months",
    petColour: "white",
    eating(){
        return `${this.petName} is eating`
    },
    drinking(){
        return `${this.petName} is drinking`
    }
}

console.log(pet.drinking())

// ACTIVITY 3

const coffeeShop = {
    branch: "Whitebirk",
    drinks: [
        "coffee", 1.50,
        "latte", 2.00,
        "coke", 1.00,
    ],
    meals: [
        "sandwich", 2.50,
        "toastie", 3.00,
        "cake", 3.50,
    ],
    drinkOrdered(drinks) {
        for (let i = 0; i < this.drinks.length; i++){
            if (drinks == this.drinks[i]){
                console.log(`You ordered a ${coffeeShop.drinks[i]} and it will cost £${this.drinks [i +1]}`)
            }
        }
    },

    foodOrdered(meals){
        for (let i = 0; i < this.meals.length; i++){
            if (meals == this.meals[i]){
                console.log(`You ordered a ${coffeeShop.meals[i]} and it will cost £${this.meals [i +1]}`)
            }
        }
    },

    totalCosts(meals,drinks){
        
    }
}

coffeeShop.drinkOrdered ("latte")
coffeeShop.foodOrdered ("toastie")