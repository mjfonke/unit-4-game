$(document).ready(function(){

// computer pic random number between 19-120
var computerNumber;

// declare variables
var yourScore = 0;

var wins = 0;

var losses = 0;

var crystalNum1 = Math.floor(Math.random() * 11) + 1;

var crystalNum2 = Math.floor(Math.random() * 11) + 1;

var crystalNum3 = Math.floor(Math.random() * 11) + 1;

var crystalNum4 = Math.floor(Math.random() * 11) + 1;


function gameStart() {
    computerNumber = Math.floor(Math.random()*101)+19;
    $("#match-number").text(computerNumber);
    $("#gem1").attr("data-crystalvalue", crystalNum1);
    $("#gem2").attr("data-crystalvalue", crystalNum2);
    $("#gem3").attr("data-crystalvalue", crystalNum3);
    $("#gem4").attr("data-crystalvalue", crystalNum4);
    console.log("gem1: " + crystalNum1);
    console.log("gem2: " + crystalNum2);
    console.log("gem3: " + crystalNum3);
    console.log("gem4: " + crystalNum4);
    console.log("Number: " + computerNumber);
}
gameStart();




$("#gem1, #gem2, #gem3, #gem4").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    yourScore += crystalValue;
    $("#total-score").text(yourScore)
    console.log(crystalValue);
    if (yourScore === computerNumber) {
        wins++
        $("#win-text").text(wins);
        yourScore=0;
        
        
    }

    if (yourScore > computerNumber) {
        losses++
        $("#lose-text").text(losses);
        yourScore=0;
       return this;
    }
})
 



    

});