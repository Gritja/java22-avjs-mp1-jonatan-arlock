import { getHighscore, putHighscore } from "./handlescore";

//const img = document.createElement('img');
//document.body.append(img);

//URL (relativePath, module Url)
//const imgUrl = new URL('../media/rpsimg.jpg', import.meta.url);
//img.src = imgUrl.href;

var playerScore =0;
var comscore =0;
var playerName = "";
document.getElementById("rockBtn").onclick=() => RoPaSci("rock");
document.getElementById("paperBtn").onclick=() => RoPaSci("paper");
document.getElementById("scissorsBtn").onclick=() => RoPaSci("scissors");

getHighscore();


function RoPaSci(clickedChoice){
    var userChoice= clickedChoice;
    //kräv namn på spelaren
    playerName = document.getElementById("playernameinput").value;
    //kräv rock/paper/scissors

    if (playerName != "") {
        
    document.getElementById('theplayername').innerHTML = playerName + ": " + userChoice;

    var computerChoice = Math.random(); 
    if (computerChoice < 0.34) {
	    computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
    } else {computerChoice = "scissors";} 
    document.getElementById('computername').innerHTML = "Computer: " + computerChoice;


    document.getElementById('result').innerHTML = compare(userChoice,computerChoice);

    document.getElementById('pscore').innerHTML = playerName + ": " + playerScore;
    document.getElementById('cscore').innerHTML = "Computer : "  + comscore;

    putHighscore(playerName, playerScore);

    } else {
        window.alert("Please enter a name!");
    }
}
function compare(choice1, choice2){
if (choice1 == choice2){
    return "The result is a tie!";    
} else if (choice1 == "rock") {
    if (choice2 == "scissors"){
    	playerScore = playerScore+1;
        return "rock wins";
        
    } else {
    	comscore = comscore+1;
        return "paper wins";
    }
} else if (choice1 == "paper") {
    if (choice2 == "rock"){
    	playerScore = playerScore+1;
        return "paper wins";
    } else {
    	comscore = comscore+1;
        return "scissors wins";
    }
} else if (choice1 == "scissors") {
    if (choice2 == "rock"){
    	playerScore = playerScore+1;
        return "rock wins";
    } else {
    	comscore = comscore+1;
        return "scissors wins";
    }
}
}
