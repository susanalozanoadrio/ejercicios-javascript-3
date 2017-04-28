//ejercicio1 colocar la baraja en su caja
var suits = ["r", "t", "c", "p"];
var deck = [];
for (var i = 0; i < suits.length; i = i + 1) {
    for (var j = 1; j <= 13; j = j + 1) {
        var card = {
            palo: suits[i],
            valor: j
        };
        deck[deck.length] = card;
        console.log(card);
    }
}

//ejercicio2 separar rojas de negras

var red = [];
var black = [];
for (var i = 0; i < deck.length; i++) {
  var current = deck[i];
  var isRed = current.palo === "c" || current.palo === "r";
  if (isRed) {
    red[red.length] = current;
  } else {
    black[black.length] = current;
  }
}
console.log(red);
console.log(black);

//ejercicio3 dejar solo pares rojas

var redPair = [];
for (var i = 0; i < red.length; i++) {
  var isRedPair = (red[i].valor % 2 === 0);
  if (isRedPair) {
    redPair[redPair.length] = red[i];
    console.log(redPair);
  }
}
console.log(redPair);
