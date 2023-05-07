import { playerName, playerScore } from "./main.js"

let data;
const highscoreTable = document.querySelector("#highscores tbody");

async function getHighscore(){
const res = await fetch('https://ropasci-54fd5-default-rtdb.europe-west1.firebasedatabase.app/highscore.json')
data = await res.json();
if(Array.isArray(data)) {
fillScoreTable(highscoreTable, data);
}

function fillScoreTable(nodeList, values) { // nl -> NodeList, data -> array with objects
    values.forEach((d, i) => {
      let tr = nodeList.insertRow(i);
      Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
        let cell = tr.insertCell(j);
        cell.innerHTML = d[k]; // Assign object values to cells   
      });
      nodeList.appendChild(tr);
    })
    console.log('highscores updated!')
  }

}

async function putHighscore(playerName, playerScore) {
  console.log(data);
    const newHighscore = updateHighscore(playerName, playerScore)
    console.log(newHighscore);
try {
    fetch('https://ropasci-54fd5-default-rtdb.europe-west1.firebasedatabase.app/highscore.json'), {
      method: "PUT",
      body: JSON.stringify(newHighscore),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      }
    }
    }
    catch(err) {
      console.log(err);
    }

}

function updateHighscore(Name, Score) {
    let gameResult = {};
    gameResult = {Name, Score}
    data.push(gameResult);
    data.sort(function(a,b) {return (b.Score - a.Score)});
    if (data.length > 5) {
      data.pop();
    } 
    return data;
}

export { getHighscore, putHighscore }