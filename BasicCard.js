//identifies necessary packages to run functions
var inquirer = require("inquirer");
var basicQ = require("./basicQ.json");

var BasicCard = function(frontCard, backCard) {
    this.frontCard = frontCard;
    this.backCard = backCard;
};

var runFlashcard = function() {
    inquirer.prompt([{
        name: "question",
        message: basicQ.front,
        type: "input"
    }]).then(function(answer) {
        if (answer.input === basicQ.back) {
            console.log("Way to go!\r\n------------------------------\r\n");
            console.log(basicQ.fullAnswer + "\r\n------------------------------\r\n");
            runFlashcard();
        } else {
            console.log("Goodbye!");
        };
    });
};

model.exports = { BasicCard }