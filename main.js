var formParent = document.querySelector(".player-input-form");
var playerOneInput = document.querySelector(".player-one-name");
var playerTwoInput = document.querySelector(".player-two-name");
var playGameBtn = document.querySelector(".play-game-btn");
var playerInputForm = document.querySelector(".player-input-form");
var welcomeSection = document.querySelector(".welcome-instructions");
var emptyInputMessage = document.querySelector(".empty-input-message");
var instructionsSectionParent = document.querySelector(".welcome-instructions");
var winnerScreenSectionParent = document.querySelector(".winner-screen");
var gameBoardSectionParent = document.querySelector(".card-table");

formParent.addEventListener('click', onFormParentClick);
instructionsSectionParent.addEventListener('click', onInstructionsSectionParentClick);
gameBoardSectionParent.addEventListener('click', flipCard);
playerOneInput.addEventListener('keyup', onInputEntry);
playerTwoInput.addEventListener('keyup', onInputEntry);

function onFormParentClick() {
  if (event.target.classList.contains("enable-play-game-btn")) {
    storePlayerNames();
  } else if (event.target.className === "play-game-btn") {
    emptyInputMessage.innerText = "Both Player Names Need to be Entered to Continue";
  }
}

function onInstructionsSectionParentClick() {
  console.log(event.target.classList.contains("welcome-btn"));
  if (event.target.classList.contains("welcome-btn")) {
    welcomeSection.style.display = "none";
    setupGame();
    gameBoardSectionParent.style.display = "flex";
  }
}

function setupGame() {

}

function onInputEntry() {
  if (playerOneInput.value && playerTwoInput.value) {
    emptyInputMessage.innerText = "";
    playGameBtn.classList.add("enable-play-game-btn");
  } else {
    playGameBtn.classList.remove("enable-play-game-btn");
  }
}

function storePlayerNames() {
  localStorage.setItem("playerOneName", playerOneInput.value);
  localStorage.setItem("playerTwoName", playerTwoInput.value);
  setPlayerNames();
  playerInputForm.style.display = "none";
  welcomeSection.style.display = "flex";
}

function setPlayerNames() {
  document.getElementById("player-one-name").innerText = playerOneInput.value;
  document.getElementById("player-two-name").innerText = playerTwoInput.value;
  document.querySelector(".match-player-one-name").innerText = playerOneInput.value;
  document.querySelector(".match-player-two-name").innerText = playerTwoInput.value;
}

function flipCard() {
  if (event.target.classList.contains("card__face--front")) {
    var card = event.target.closest(".card");
    card.classList.toggle('is-flipped');
    card.style.background = "none";
  }
}
