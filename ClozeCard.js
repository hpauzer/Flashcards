//identifies necessary packages to run functions
var inquirer = require("inquirer");
var basicQ = require("./clozeQ.json");

var clozeCard = function(cloze, partial) {
    this.cloze = cloze;
    this.partial = "_____" + partial;
    this.fullAnswer = fullAnswer;
    this.returnCloze = function() {
        console.log(fullAnswer);

    }
};

var runFlashcard = function() {
    inquirer.prompt([{
        name: "question",
        message: clozeQ.partial,
        type: "input"
    }]).then(function(answer) {
        if (answer.input === clozeQ.cloze) {
            console.log("Way to go!\r\n------------------------------\r\n");
            console.log(clozeQ.fullAnswer + "\r\n------------------------------\r\n");
            runFlashcard();
        } else {
            console.log("Goodbye!")
        };



    })


}

module.exports = { ClozeCard }