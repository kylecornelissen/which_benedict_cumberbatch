var formParent = document.querySelector(".player-input-form");
var playerOneInput = document.querySelector(".player-one-name");
var playerTwoInput = document.querySelector(".player-two-name");
var playGameBtn = document.querySelector(".play-game-btn");
var playerInputForm = document.querySelector(".player-input-form");
var welcomeSection = document.querySelector(".welcome-instructions");
var emptyInputMessage = document.querySelector(".empty-input-message");
var instructionsSectionParent = document.querySelector(".welcome-instructions");
var winnerScreenSectionParent = document.querySelector(".winner-screen");
var cardTableSectionParent = document.querySelector(".card-table");
var gameBoardSectionParent = document.querySelector(".game-board");

formParent.addEventListener('click', onFormParentClick);
instructionsSectionParent.addEventListener('click', onInstructionsSectionParentClick);
cardTableSectionParent.addEventListener('click', flipCard);
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
  if (event.target.classList.contains("welcome-btn")) {
    welcomeSection.style.display = "none";
    gameBoardSectionParent.style.display = "flex";
    setupGame();
  }
}

function setupGame() {
  var cardDeck = [{id:1, name:"doctor-strange-bc"},
                  {id:2, name:"imitation-game-bc"},
                  {id:3, name:"julian-assange-bc"},
                  {id:4, name:"mustache-bc"},
                  {id:5, name:"louis-wain-bc"},
                  {id:6, name:"osage-county-bc"},
                  {id:7, name:"sherlock-holmes-bc"},
                  {id:8, name:"star-trek-bc"},
                  {id:9, name:"the-hollow-crown-bc"},
                  {id:10, name:"thomas-edison-bc"}];
  var gameDeck = pickFiveCards(cardDeck);
  placeCards(gameDeck);
}

function pickFiveCards(deck) {
  var newDeck = [];
  var card;
  for (var i = 0; i < 5; i++) {
    var randomIndex = Math.floor(Math.random() * deck.length);
    card = new Card((deck.splice(randomIndex, 1))[0])
    newDeck.push(card);
    newDeck.push(card);
  }
  return newDeck
}

function placeCards(deck) {
  var nums = [0,1,2,3,4,5,6,7,8,9]
  for (var i = 0; i < deck.length; i++) {
    var randomCardIndex = nums.splice((Math.floor(Math.random() * nums.length)), 1)
    var image = `<img id="${deck[randomCardIndex[0]].id}" src="./images/${deck[randomCardIndex[0]].name}.jpg" alt="${deck[randomCardIndex[0]].name}" />`
    var card = document.getElementById(`card-${i}`);
    card.insertAdjacentHTML("afterbegin", image);
  }
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
