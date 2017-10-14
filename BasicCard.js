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

module.exports = { BasicCard };