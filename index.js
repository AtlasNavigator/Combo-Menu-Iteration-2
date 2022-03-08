const readLine = require('readline-sync');

let totalCost = 0;
let beverage = 0;
let fries = 0;
let order = []; //Begin the tally 

let sandwich = readLine.question('What type of patty would you like on your sandwich? \nChicken - $5.25 \nBeef - $6.25 \nTofu - $5.75 \nEnter your selection here: ').toLowerCase();
order.push(sandwich);
console.log(`You have selected a ${sandwich} sandwich.\n`); //Show sandwich selection

if (sandwich === 'chicken') {
  totalCost += 5.25;
}
else if (sandwich === 'beef') {
  totalCost += 6.25; //List of prices
}
else if (sandwich === 'tofu') {
  totalCost += 5.75;
}

let question = readLine.question('Would you like a beverage? (yes/no): ').toLowerCase() //Ask for drink
if (question === 'yes') {
  beverage = readLine.question('What size beverage would you like? \nSmall - $1.00 \nMedium - $1.75 \nLarge - $2.25 \nEnter your selection here: ').toLowerCase();
  order.push(beverage);
}
if (question === 'yes') {
  let beverageCheck = true;
  console.log(`You have selected a ${beverage} beverage.\n`);
} else {
  let beverageCheck = false;
  console.log('You have selected no beverage.\n');
}

if (beverage === 'small') {
  totalCost += 1.00; //Cost of drinks
}
else if (beverage === 'medium') {
  totalCost += 1.75;
}
else if (beverage === 'large') {
  totalCost += 2.25;
}

let question2 = readLine.question('Would you like french fries? (yes/no): ').toLowerCase(); //Ask if fries
if (question2 === 'yes') {
  fries = readLine.question('What size french fries would you like? \nSmall - $1.00 \nMedium - $1.50 \nLarge - $2.00 \nEnter your selection here: ').toLowerCase();
  order.push(fries);
  let friesCheck = true;
  console.log(`You have selected ${fries} fries.\n`);
} else {
  let friesCheck = false;
  console.log('You have selected no fries.\n');
}

if (fries === 'small') {
  let question3 = readLine.question('Would you like to upgrade to mega-size fries for just $1 more? (yes/no): ').toLowerCase();
  if (question3 === 'yes') {
    order.pop();
    order.push('large');
    totalCost += 2.00;
    // console.log('total cost' + totalCost)
  } else {
    totalCost += 1.00;
    // console.log('total cost' + totalCost)
  }
}
else if (fries === 'medium') {
  totalCost += 1.50;
  // console.log('total cost' + totalCost)
}
else if (fries === 'large') {
  totalCost += 2.00;
  // console.log('total cost' + totalCost)
}

//Condiments
let condiment = readLine.question('\nWhat condiment would you like? (ketchup, mustard, mayonnaise, salt, pepper): ').toLowerCase();
order.push(condiment);
if (condiment === 'ketchup') {
  let num = readLine.question('How many ketchup packets would you like? Enter a number here ($0.25/packet): ');
  let n = num * 0.25;
  totalCost += n;
  order.push(num);
}
if (condiment === 'mustard') {
  let num = readLine.question('How many mustard packets would you like? Enter a number here ($0.30/packet): ');
  let n = num * 0.30;
  totalCost += n;
  order.push(num);
}
if (condiment === 'mayonnaise') {
  let num = readLine.question('How many mayonnaise packets would you like? Enter a number here ($0.35/packet): ');
  let n = num * 0.35;
  totalCost += n;
  order.push(num);
}
if (condiment === 'salt') {
  let num = readLine.question('How many salt packets would you like? Enter a number here ($0.10/packet): ');
  let n = num * 0.10;
  totalCost += n;
  order.push(num);
}
if (condiment === 'pepper') {
  let num = readLine.question('How many pepper packets would you like? Enter a number here ($0.15/packet): ');
  let n = num * 0.15;
  totalCost += n;
  order.push(num);
}

if (order.length === 5) {
  totalCost -= 1.00;
}
if (order.length === 3) {
  console.log(`\nYou have ordered a ${order[0]} sandwich. You have also requested ${order[2]} ${order[1]} packets.`);
}
if (order.length === 4 && beverageCheck === true) {
  console.log(`\nYou have ordered a ${order[0]} sandwich and a ${order[1]} beverage. You have also requested ${order[3]} ${order[2]} packets.`);
}
if (order.length === 4 && friesCheck === true) {
  console.log(`\nYou have ordered a ${order[0]} sandwich and ${order[1]} fries. You have also requested ${order[3]} ${order[2]} packets.`);
}
if (order.length === 5) {
  console.log(`\nYou have ordered a ${order[0]} sandwich, a ${order[1]} beverage, and ${order[2]} fries.\n You have also requested ${order[4]} ${order[3]} packets.`);
} //Show what was ordered

finalCost = totalCost * 1.07; //Calculate with tax
console.log(`\nYour total cost is: $${finalCost.toFixed(2)}.`); //Show total