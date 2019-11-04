var formParent = document.querySelector(".player-input-form");
var playerOneInput = document.querySelector(".player-one-name");
var playerTwoInput = document.querySelector(".player-two-name");
var playGameBtn = document.querySelector(".play-game-btn");
var playerInputForm = document.querySelector(".player-input-form");
var welcomeSection = document.querySelector(".welcome-instructions");
var emptyInputMessage = document.querySelector(".empty-input-message");

formParent.addEventListener('click', onFormParentClick);
playerOneInput.addEventListener('keyup', onInputEntry);
playerTwoInput.addEventListener('keyup', onInputEntry);

function onFormParentClick() {
  if (event.target.classList.contains("enable-play-game-btn")) {
    storePlayerNames();
  } else if (event.target.className === "play-game-btn") {
    emptyInputMessage.innerText = "Both Player Names Need to be Entered to Continue";
  }
}

function onInputEntry() {
  emptyInputMessage.innerText = "";
  if (playerOneInput.value && playerTwoInput.value) {
    playGameBtn.classList.add("enable-play-game-btn");
  } else {
    playGameBtn.classList.remove("enable-play-game-btn");
  }
}

function storePlayerNames() {
  localStorage.setItem("playerOneName", playerOneInput.value);
  localStorage.setItem("playerTwoName", playerTwoInput.value);
  document.getElementById("player-one-name").innerText = playerOneInput.value;
  document.getElementById("player-two-name").innerText = playerTwoInput.value;
  playerInputForm.style.display = "none";
  welcomeSection.style.display = "flex";
}
