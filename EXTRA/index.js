//Recipe name and ingredientes:

console.log("\nSpaghetti alla Carbonara Recipe:\n")

let spaghetti = 400;
let guanciale = 250;
let eggs = 6;
let chese = 50;
let pepper = 4;

console.log("Ingredients for 4 persons:\n");
console.log("Spaghetti", spaghetti);
console.log("Guanciale", guanciale);
console.log("Very fresh egg yolks", eggs);
console.log("Aged grated pecorino romano chese", eggs);
console.log("Raw back pepper", pepper);

//Recipe:
//To make classic carbonara, first cut the guanciale into 1cm layers, then into long strips.

let guancialeStrips = guanciale / 20;

//Combine the egg yolks with the finely grated Pecorino Romano.

let mixture = eggs + chese;

//Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and chees mixture, set aside the rest.

let smallAmmountPepper = pepper / 4; //We define an small ammount of pepper.
let remainingPepper = pepper - smallAmmountPepper; //We define the remaining pepper.

mixture += smallAmmountPepper;

//Brown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.

let coockedGuanciale = guanciale * 0.9; //Guanciale coocked without some grease.
let grease = guanciale - coockedGuanciale; //Remaning grease.

//Cook the pasta with a pinch of salt in the water (guanciale is already very salty);
let water = 4000 // 1 liter per 100g pasta.
let salt = 64 // 16g per 100g pasta.

let pasta = spaghetti + water + salt;

//set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.

let pastaWater = water + salt - spaghetti;

pasta += -water - salt;

//Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:
//this will create a creamy sauce with the pasta starch contained in that water.

let spoon = 1.5 //Acording to internet 1 spoon is 15ml water.

coockedGuanciale += spoon * 2;

//TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together.

let carbonara = pasta + coockedGuanciale + grease;

//Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.
//It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs.

carbonara += mixture - spoon * 2; //I will reduce the 2 spoons contain as part of the evaporation of the water.

//Add the remaining roasted black pepper and serve immediately.

carbonara += remainingPepper;
console.log("\nCarbonara", carbonara);

//Enjoy...