import { getHighscore, putHighscore } from "./handlescore";

//const img = document.createElement('img');
//document.body.append(img);

//URL (relativePath, module Url)
//const imgUrl = new URL('../media/rpsimg.jpg', import.meta.url);
//img.src = imgUrl.href;

let playerScore =0;
let playerName = "";
document.getElementById("rockBtn").onclick=() => RoPaSci("rock");
document.getElementById("paperBtn").onclick=() => RoPaSci("paper");
document.getElementById("scissorsBtn").onclick=() => RoPaSci("scissors");

getHighscore();

function RoPaSci(clickedChoice){

    let userChoice= clickedChoice;
    playerName = document.getElementById("playernameinput").value;

    if (playerName != "") {
        
    document.getElementById('theplayername').innerHTML = playerName + ": " + userChoice;

    let computerChoice = Math.random(); 
    if (computerChoice < 0.34) {
	    computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
	    computerChoice = "paper";
    } else {computerChoice = "scissors";} 
    document.getElementById('computername').innerHTML = "Computer: " + computerChoice;

    document.getElementById('result').innerHTML = compare(userChoice,computerChoice);
    document.getElementById('pscore').innerHTML = playerName + "'s current score: " + playerScore;

    
    } else {
        window.alert("Please enter a name!");
    }
}
function compare(choice1, choice2){
if (choice1 == choice2){
    return "The result is a tie!";    
} else if (choice1 == "rock") {
    if (choice2 == "scissors"){
    	playerScore++;
        return "rock beats scissors. " + playerName + " wins!";
    } else {
    	putHighscore(playerName, playerScore);
        playerScore = 0;
        getHighscore();
        return "paper beats rock. " + playerName + " loses!";
    }
} else if (choice1 == "paper") {
    if (choice2 == "rock"){
    	playerScore++;
        return "paper beats rock. " + playerName + " wins!";
    } else {
        putHighscore(playerName, playerScore);
        playerScore = 0;
        getHighscore();
    	return "scissors beats paper. " + playerName + " loses!";
    }
} else if (choice1 == "scissors") {
    if (choice2 == "paper"){
    	playerScore++;
        return "scissor beats paper. " + playerName + " wins!";
    } else {
        putHighscore(playerName, playerScore);
        playerScore = 0;
        getHighscore();
    	return "rock beats paper. " + playerName + " loses!"; 
    }
}
}
