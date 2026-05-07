let deck = [];
let suit = 'unknown';
let rank = 0;

function setup() {
  colorMode (RGB, 255, 255, 255, 1);
  createCanvas(500, 500);
  for (let i = 0; i < 52; i++) {
    deck.push(i);
  }
  noLoop();
}

function card(x, y, rank, suit) {
  push();
  translate(x, y);
  rect(0, 0, 80, 120)
  translate(0 , 30)
  text(rank, 40, 40);
  pop();
}

function pHit() {
  x = random(deck);
  card(50, 100, x);
  suitCheck(x);
  print(suit);
}

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

function rankCheck(value) {
  
}

function pStand() {
  
}

function dHit() {
  
}

function dStand() {
  
}

function draw() {
  background(30, 145, 50);
  pHit();
}