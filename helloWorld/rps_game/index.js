//read all the user interactions
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const papper = document.querySelector(".papper");

//geting choices from html in layout two
const player_choice = document.querySelector("#playerChoice");
const computer_choice = document.querySelector("#computerChioce");
const round_winner = document.querySelector("#roundWinner");

//gettign count for both players from the html
const player_count = document.querySelector("#playerCount");
const computer_count = document.querySelector("#computerCount");

//initalize player and computer count values
let _computer_count = 0;
let _player_count = 0;

//add event handling(click) to the options
rock.addEventListener("click", function () {
  handlePlay("rock");
});
scissors.addEventListener("click", function () {
  handlePlay("scissors");
});
papper.addEventListener("click", function () {
  handlePlay("papper");
});

//handle the game pay
function handlePlay(_player_choice) {
  player_choice.textContent = _player_choice.toUpperCase();

  const _computer_choice = computerPlay();
  computer_choice.textContent = _computer_choice.toUpperCase();

  const _winner = winner(_computer_choice, _player_choice);
  console.log(_winner);

  if (_winner == "player") {
    // player won
    round_winner.textContent = "Human Won";
    //incrememnt player count
    _player_count++;
  } else if (_winner == "computer") {
    //computer won
    round_winner.textContent = "Computer Won";

    //increment computer count
    _computer_count++;
  } else {
    round_winner.textContent = "This Round is a Tie";
  }

  //send player count to html
  player_count.textContent = _player_count;
  computer_count.textContent = _computer_count;
}

//get computer choice at random
function computerPlay() {
  const options = ["rock", "scissors", "papper"];
  const genRandom = Math.floor(Math.random() * options.length);
  return options[genRandom];
}

//get winner of round
function winner(computer_choice, player_choice) {
  //compare if both choices are same
  if (player_choice === computer_choice) {
    return null;
  } else if (player_choice == "papper" && computer_choice == "rock") {
    return "player";
  } else if (player_choice == "scissors" && computer_choice == "papper") {
    return "player";
  } else if (player_choice == "rock" && computer_choice == "scissors") {
    return "player";
  } else {
    return "computer";
  }
}
