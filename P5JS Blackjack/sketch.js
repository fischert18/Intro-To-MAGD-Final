let deck = [];
let suit = 'unknown';
let rank = 0;

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
  
  printDeck() {
    print(`${this.rank} ${this.suit}`)
  }
  
  pHit() {
  drawCard(50, 100, this.rank, this.suit);
  }
  
}

function deckCreate() {
   for (let i = 1; i <= 52; i++) {
    cardCheck(i);
    let card = new Card(rank, suit);
    deck.push(card);
  }
}


function setup() {
  colorMode (RGB, 255, 255, 255, 1);
  createCanvas(500, 500);
  deckCreate();
  noLoop();
}

//creates card visual
function drawCard(x, y, rank, suit) {
  push();
  translate(x, y);
  rect(0, 0, 80, 120);
  translate(0 , 30);
  text(rank, 40, 40);
  translate(0, 10);
  text(suit, 40, 40);
  pop();
}

//gives card approrpriate suit based on value
//1-13 heart, 14-26 diamond, 27-39 club, 40-52 spade
function suitCheck(card){
  if (card >= 0 && card <= 13) {
    suit = 'heart'
  }
  else if (card <=26) {
    suit = 'diamond'
  }
  else if (card <= 39) {
    suit = 'club'
  }
  else {
    suit = 'spade'
  }
}

//gives card appropriate rank based on suit
function cardCheck(value) {
  suitCheck(value);
  if (suit == 'heart') {
    rank = value;
  }
  else if (suit == 'diamond') {
    rank = value - 13;
  }
  else if (suit == 'club') {
    rank = value - 26;
  }
  else {
    rank = value - 39;
  }
}

function pStand() {
  
}

function dHit() {
  
}

function dStand() {
  
}

function draw() {
  background(30, 145, 50);
  hitCard = random(deck)
  for (let card of deck){
    card.printDeck();
  }
  hitCard.pHit();
}
