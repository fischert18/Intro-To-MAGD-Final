let gameEnd = false
let deck = [];
let suit = 'unknown';
let rank = 0;
let value = 0;
let playerScore = 0;
let dealerScore = 0;
let playerX = 50;
let dealerX = 50;

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
  }
  
  //prints all cards to console
  printDeck() {
    
    print(`${this.rank} ${this.suit} ${this.value}`);
  }
  
  //player hits
  pHit() {
  drawCard(playerX, 350, this.rank, this.suit, this.value);
  playerScore += this.value;
  playerX += 90
  //print(`${playerScore}`);
  }
  
  dHit() {
    drawCard(dealerX, 50, this.rank, this.suit, this.value);
    dealerScore += this.value;
    dealerX += 90;
    //print(`${dealerScore}`)
  }
}

//pushes 52 cards into deck
function deckCreate() {
   for (let size = 1; size <= 52; size++) {
    rankCheck(size);
    valueCheck();
    let card = new Card(rank, suit, value);
    deck.push(card);
  }
   for (let card of deck){
    card.printDeck();
  }
}


function setup() {
  colorMode (RGB, 255, 255, 255, 1);
  createCanvas(500, 500);
  textAlign(CENTER);
  deckCreate();
  noLoop();
}

//creates card visual
function drawCard(x, y, rank, suit, value) {
  push();
  translate(x, y);
  rect(0, 0, 80, 120);
  text(suit, 40, 40);
  translate(0,10);
  text(value, 40, 40);
  pop();
}

//gives card instance approrpriate suit based on value
//1-13 heart, 14-26 diamond, 27-39 club, 40-52 spade
function suitCheck(card){
  if (card >= 0 && card <= 13) {
    suit = 'heart';
  }
  else if (card <=26) {
    suit = 'diamond';
  }
  else if (card <= 39) {
    suit = 'club';
  }
  else {
    suit = 'spade';
  }
}

//gives card instance appropriate rank based on suit
function rankCheck(num) {
  suitCheck(num);
  if (suit === 'heart') {
    rank = num;
  }
  else if (suit === 'diamond') {
    rank = num - 13;
  }
  else if (suit === 'club') {
    rank = num - 26;
  }
  else {
    rank = num - 39;
  }
}

//assigns card score value based on rank
function valueCheck() {
  if (rank >= 1 && rank <= 10) {
    value = rank;
  }
  else {
    value = 10;
  }
}

//hits card on double click
function doubleClicked() {
 if (gameEnd === false) {
  hit(0);
  if (playerScore > 21) {
    dStand();
  }
 }
}

//stands on mouse drag
function mouseDragged() {
  pStand();
}
function pStand() {
  if (playerScore > 21){
  dStand();
  }
  else {
  while (dealerScore <= 16) {
    hit(1);
  }
  dStand();
  }
}

function winMessage() {
  push();
  translate(250, 250);
  textSize(100);
  text("You Win!", 0, 0);
  pop();
}

function loseMessage() {
  push();
  translate(250, 250);
  textSize(100);
  text("You Lose :(", 0, 0);
  pop();
}

//ends game
function dStand() {
  if (playerScore > 21) {
    loseMessage();
  }
  else if (dealerScore > 21) {
    winMessage();
  }
  else if (dealerScore < playerScore) {
    winMessage();
  }
  else if (dealerScore > playerScore) {
    loseMessage();
  }
  else {
  push();
  translate(250, 250);
  textSize(100);
  text("Push", 0, 0);
  pop();
  }
  gameEnd = true
}
 
//input rank and suit of card, and return the index of card in deck
function deckIndexLoop(rank, suit){
  let length = deck.length;
  let i = 0;
  while (i < length) {
    let card = deck[i];
    if (card.rank === rank && card.suit === suit) {
      return i;
    }
    else {
      i++
    }
  }
  
}

//if per = 0 hits for player
function hit(per) {
  let drawnCard = random(deck);
  if (per === 0) {
    drawnCard.pHit();
  }
  else {
    drawnCard.dHit();
  }
  deck.splice(deckIndexLoop(drawnCard.rank, drawnCard.suit), 1);
}

//colors background and draws initial cards for dealer and player
function draw() {
  background(30, 145, 50);
  
  for (i = 0; i < 2; i ++){
  hit(0);
  }
  
  hit(1);
}
