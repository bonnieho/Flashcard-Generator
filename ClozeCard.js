// dependency for inquirer npm package
var inquirer = require("inquirer");



// testing that this file is loaded
console.log('ClozeCard is loaded');

module.exports = ClozeCard;


/*
        This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;

        The constructor should accept two arguments: text and cloze.

        The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

        The constructed object should have a partial property that contains only the partial text.

        The constructed object should have a fullText property that contains only the full text.

        The constructor should throw or log an error when the cloze deletion does not appear in the input text.

        Use prototypes to attach these methods, wherever possible.

The bulk of this assignment is implementing ClozeCard. If you build a robust ClozeCard implementation, feel free to try your hand at implementing a front-end, as well.
Examples

Your constructors should work as follows.

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

Bonuses

    Write your constructors such that users can call them with or without the new keyword.
        Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.
*/



var capitalAlabama = new BasicCard(
	"What is the capital of Alabama?", "Montgomery");
 

var capitalAlaska = new BasicCard(
	"What is the capital of Alaska?", "Juneau");


var capitalArizona = new BasicCard(
	"What is the capital of Arizona?", "Phoenix");
 

var capitalArkansas = new BasicCard(
	"What is the capital of Arkansas?", "Little Rock");


var capitalCalifornia = new BasicCard(
	"What is the capital of California?", "Sacramento");



var capitalColorado = new BasicCard(
	"What is the capital of Colorado?", "Denver");



var capitalConnecticut = new BasicCard(
	"What is the capital of Connecticut?", "Hartford");

 

var capitalDelaware = new BasicCard(
	"What is the capital of Delaware", "Dover");


var capitalFlorida = new BasicCard(
	"What is the capital of Florida?", "Tallahassee");


var capitalGeorgia = new BasicCard(
	"What is the capital of Georgia?", "Atlanta");


var capitalHawaii = new BasicCard(
	"What is the capital of Hawaii?", "Honolulu");

    

var capitalIdaho = new BasicCard(
	"What is the capital of Idaho?", "Boise");



var capitalIllinois = new BasicCard(
	"What is the capital of Illinois?", "Springfield");



var capitalIndiana = new BasicCard(
	"What is the capital of Indiana?", "Indianpolis");


var capitalIowa = new BasicCard(
	"What is the capital of Iowa?", "Des Moines");


var capitalKansas = new BasicCard(
	"What is the capital of Kansas?", "Topeka");


var capitalKentucky = new BasicCard(
	"What is the capital of Kentucky?", "Frankfort");


var capitalLouisiana = new BasicCard(
	"What is the capital of Louisiana", "Baton Rouge");


var capitalMaine = new BasicCard(
	"What is the capital of Maine?", "Augusta");


var capitalMaryland = new BasicCard(
	"What is the capital of Maryland?", "Annapolis");


var capitalMassachusetts = new BasicCard(
	"What is the capital of Massachusetts?", "Boston");


var capitalMichgan = new BasicCard(
	"What is the capital of Michigan?", "Lansing");


var capitalMinnesota = new BasicCard(
	"What is the capital of Minnesota?", "St. Paul");


var capitalMississippi = new BasicCard(
	"What is the capital of Mississippi?", "Jackson");


var capitalMissouri = new BasicCard(
	"What is the capital of Missouri?", "Jefferson City");





