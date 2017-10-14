//identifies necessary packages to run functions
var inquirer = require("inquirer");
var basicQ = require("./basicQ.json");

var BasicCard = function(frontCard, backCard) {
    this.frontCard = frontCard;
    this.backCard = backCard;
};

var flashcard = function() {
    inquirer.prompt([{
        name: "question",
        message: basicQ.front,
        type: "input"
    }])
}

flashcard();

var card1 = new BasicCard("What is a Quarter-Pounder with cheese called in Paris?",
    "back", "A Royale with Cheese");

var card2 = new BasicCard("Who said, 'There's no crying in baseball?'",
    "Tom Hank's character, Jimmy, in A League of Their Own.");

var card3 = new BasicCard("In Billy Madison, who rules?", "O'Doyle Rules");

module.exports = { BasicCard };