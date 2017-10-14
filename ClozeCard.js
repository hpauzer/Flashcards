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
            message: basicQ.front,
            type: "input"
        }]).then(function(answer) {
            if (answer.input === basicQ.back) {
                console.log("Way to go!\r\n------------------------------\r\n");
                console.log(basicQ.fullAnswer + "\r\n------------------------------\r\n");
                runFlashcard();
            } else {
                console.log("Goodbye!")
            };



        })




        askQuestions();
        var card1 = new BasicCard("What is a Quarter-Pounder with cheese called in Paris?",
            "back", "A Royale with Cheese");

        var card2 = new BasicCard("Who said, 'There's no crying in baseball?'",
            "Tom Hank's character, Jimmy, in A League of Their Own.");

        var card3 = new BasicCard("In Billy Madison, who rules?", "O'Doyle Rules");



        module.exports = { ClozeCard }