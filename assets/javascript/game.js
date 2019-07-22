$(document).ready(function(){

// computer pick random numbers from 20 to 60.
var computerNumber = Math.floor(Math.random()* 50) + 20;

var numberOptions = [3, 6, 9, 12];

var totalScore;

var wins = 0;

var losses = 0;

$("#match-number").text(computerNumber);

for  (var i = 0; i <numberOptions.length; i++) {
    $("#crystal").attr(numberOptions[i]);

}

$("#crystal").on("click", function(){
    var crystalValue = parseInt(crystalValue);

    totalScore += crystalValue;

    $("#total-score").text(totalScore);

    if (totalScore === computerNumber) {
        wins++;
    }   

    else if (totalScore >= computerNumber) {
        losses++;
    }

    
})

$()
});