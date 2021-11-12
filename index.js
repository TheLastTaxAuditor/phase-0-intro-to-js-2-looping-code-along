const thankYouCards = []

function writeCards(thankYouCards, event) {
  for (let i = 0; i < thankYouCards.length; i++) {
        
      thankYouCards.splice(i, 1, `Thank you, ${thankYouCards[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}

writeCards(["Ada", "Brendan", "Ali"], "birthday")


function countDown(x){
    while (x >= 0) {
        console.log(x);
        x--
    }
}