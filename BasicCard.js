// dependency for inquirer npm package
var inquirer = require("inquirer");


// fs is a core Node package for reading and writing files
var fs = require("fs");


// testing that this file is loaded
console.log('BasicCard is loaded');


module.exports = BasicCard;




/*
    This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;

    The constructor should accept two arguments: front and back.

    The constructed object should have a front property that contains the text on the front of the card.

    The constructed object should have a back property that contains the text on the back of the card.

    */

// Returns if a string has only whitespace
String.prototype.isEmpty = function() {
        return (this.length === 0 || !this.trim());
    };

/* FlashCard (Card) container holds a front and back value as arguments */ 
function BasicCard(front, back){
    this.frontVal = front;
    this.backVal = back;

    this.display = function(side){
        if( side === 0 ){
            return this.frontVal;
        }else{
            return this.backVal;
        }
    };
}



fs.readFile("BasicCard.json", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    var questionsData = JSON.parse(data).questions;
    // We will then print the contents of data
    console.log(questionsData[3]);

	// forEach is a shortcut for the usual iteration
	// creating the cards
	var cards = questionsData.forEach({k, v} => new BasicCard(k, v)); 
	console.log(cards[0].display(1));


  });




