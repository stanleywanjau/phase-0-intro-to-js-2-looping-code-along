// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }

  return gifts;
}

wrapGifts(gifts);

const names=["Charlie", "Samip", "Ali"];
const event=["suprise"]
function writeCards(names,event){
    const message =[]
    for(const name of names){
        message.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return message
}

function countDown(number){
    while(number>=0){
        console.log(number);
        number--;
    }
}
