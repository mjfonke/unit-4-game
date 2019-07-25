$(document).ready(function(){

// declare variables

var computerNumber;

var yourScore = 0;

var wins = 0;

var losses = 0;

var crystalNum1;

var crystalNum2;

var crystalNum3;

var crystalNum4;


function gameStart() {

    // computer pic random number between 19-120

    computerNumber = Math.floor(Math.random() * 101) + 19;

    // crystal pick random numbers between 1-12

    crystalNum1 = Math.floor(Math.random() * 11) + 1;

    crystalNum2 = Math.floor(Math.random() * 11) + 1;

    crystalNum3 = Math.floor(Math.random() * 11) + 1;

    crystalNum4 = Math.floor(Math.random() * 11) + 1;

    $("#match-number").text(computerNumber);

    $("#total-score").text("0")

    // assign numbers to each crystal images

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

// when user click crystal, specific amount of number will add up to your total score.

$("#gem1, #gem2, #gem3, #gem4").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));

    crystalValue = parseInt(crystalValue);

    yourScore += crystalValue;

    $("#total-score").text(yourScore)

    console.log(crystalValue);

// if the total score equals to computer number, player win and game reset. 

    if (yourScore === computerNumber) {
        wins++
        $("#win-text").text(wins);
        yourScore=0;
        gameStart();
        $("#win-lose").html("<h2>You Win!!!</h2>")
        
    }
// if the totla score is more than computer number, plater lost and game reset.

    if (yourScore > computerNumber) {
        losses++
        $("#lose-text").text(losses);
        yourScore=0;
        gameStart();
        $("#win-lose").html("<h2>You lost!!!</h2>")
    }
})
 



    

});