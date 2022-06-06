let player = {
  name: '',
  stage: 0,
  score: 0
}

let username = prompt("Enter name")

function game() {
  player = { ...player, name: username }
  let stage = 1;
  for (; ;) {
    let max = generateRandomNumber(1, stage + 1)
    console.log(max)
    let playerGuess = prompt(`Level ${stage}: Guess a number`)
    if (parseInt(playerGuess) >= 1 && parseInt(playerGuess) <= max) {
      stage++;
      player = { ...player, score: stage, stage }
    } else {
      break;
    }
  }
}

function generateRandomNumber(min=1, max=2) {
  return Math.floor(Math.random() * max) + min;
}

// launch the game
game();
console.log(`${player.name} scored ${player.score} at Level ${player.stage}`)