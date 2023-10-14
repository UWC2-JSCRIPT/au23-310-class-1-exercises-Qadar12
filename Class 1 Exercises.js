/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const smallPizzaArea = Math.PI * (13 / 2) ** 2;
const largePizzaArea = Math.PI * (17 / 2) ** 2;

console.log(`the area of a 13' pizza is ${smallPizzaArea}`);
console.log(`the area of a 17' pizza is ${largePizzaArea}`);

// 2. What is the cost per square inch of each pizza?

const smallPizzaTrueCost = 16.99 / smallPizzaArea;
const largePizzaTrueCost = 19.99 / largePizzaArea;

console.log(`the cost per square inch of a 13' pizza is ${smallPizzaTrueCost}`);
console.log(`the cost per square inch of a 17' pizza is ${largePizzaTrueCost}`);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const randomNumber = Math.floor(Math.random() * 14);
console.log(randomNumber);

// 4. Draw 3 cards and use Math to determine the highest
// card

const ranCardOne = Math.floor(Math.random() * 14);
const randCardTwo = Math.floor(Math.random() * 14);
const ranCardThree = Math.floor(Math.random() * 14);

const highestCard = Math.max(ranCardOne, randCardTwo, ranCardThree);
console.log(`The highest card is ${highestCard}`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = "Nelson";
const lastName = "Bighetti";
const streetAddress = "5230 Penfield Ave";
const city = "Palo Alto";
const state = "CA";
const zipCode = 94020;

console.log(
  `${firstName} ${lastName}\n${streetAddress}\n${city},${state}\n${zipCode}`
);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
//
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const nameAndInfo = `NelsonBighetti
5230 Penfield Ave
Palo Alto, CA 94020`;

const getName = nameAndInfo.substring(0, 6);
console.log(`The first name in the string is ${getName}`);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00

const firstDate = new Date("01 Jan 2020 00:00:00");
const secondDate = new Date("01 April 2020 00:00:00");

//get time since epoch for both
const firstEpoch = firstDate.valueOf();
const secondEpoch = secondDate.valueOf();

// get the middle of the two values
const middleEpoch = (firstEpoch + secondEpoch) / 2;

//create date object from value
middleDate = new Date(middleEpoch);
console.log(`The middle date is ${middleDate}`);

// Starting hint:
//const endDate = new Date(2019, 3, 1);
