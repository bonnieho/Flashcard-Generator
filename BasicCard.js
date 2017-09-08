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

/* FlasCard (Card) container holds a front and back value as arguments */ 
function Card(front, back){
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


/*

exports.twitterKeys = {
  consumer_key: '1p0YmNhhPjH7V5gInpTyyukF3',
  consumer_secret: 'JV08mkUkhsJEWmkwWSxj88MYkkJBeSdWLLeXURH8nkyPnQWlg9',
  access_token_key: '899833991691464704-5fsDEdl8QrVBCe4QO2RdpA0xa47lEXJ',
  access_token_secret: 'zfjHCXwo0MES5OgmfOGxmPxQvmmBQeHfDJHmkSg2wntLk',
}


exports.spotifyKeys = {
	id: '4a98a7e0b8314a74a5e7de8af60df353',
	secret: 'e3d5dc6a2a2a4104b7d5461687e932fa',
}

*/