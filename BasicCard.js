// dependency for inquirer npm package
var inquirer = require("inquirer");


// fs is a core Node package for reading and writing files
var fs = require("fs");


// testing that this file is loaded
console.log('BasicCard is loaded');


module.exports = BasicCard;


// Returns if a string has only whitespace
String.prototype.isEmpty = function() {
        return (this.length === 0 || !this.trim());
    };


/*
    This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;

    The constructor should accept two arguments: front and back.

    The constructed object should have a front property that contains the text on the front of the card.

    The constructed object should have a back property that contains the text on the back of the card.

    */


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


// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    name: "question",
    message: "Type the full text of your question."
  }, {
    name: "answer",
    message: "Type in your answer."
  }
]).then(function(answers) {
  // initializes the variable newCard to be a BasicCard object which will take
  // in all of the user's answers to their questions above
  var newCard = new BasicCard(answers.question, answers.answer);
  // printInfo method is run to show that the newCard object was successfully created and filled
  newCard.display(0);
  console.log(newCard.display(0));
});

/* Read the external JSON file containing the questions object, then parse/break up the questions object (which is an array) into the new card array.
fs.readFile("BasicCard.json", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    var questionsData = JSON.parse(data).questions;
    // We will then print the contents of data
    // console.log(questionsData[3]);

	var cards = [];

	for(i=0; i<questionsData.length; i++) {
		cards.push(new BasicCard(questionsData[i].question, questionsData[i].answer));

		inquirer.prompt([
  			{
    			name: "thingy",
    			message: cards[i].display(0)
  			}
		]);
	};
	// console.log(cards[0].display(0));
  });

*/




