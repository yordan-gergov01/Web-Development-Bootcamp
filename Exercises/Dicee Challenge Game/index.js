let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "images/dice" + randomNumber1 + ".png";

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let secondRandomImage = "images/dice" + randomNumber2 + ".png";

let leftDice = document.querySelectorAll('img')[0];
leftDice.setAttribute('src', randomDiceImage);

let rightDice = document.querySelectorAll('img')[1];
rightDice.setAttribute('src', secondRandomImage);

let display = document.querySelector('h1');

if(randomNumber1 > randomNumber2){
    display.innerHTML = 'Player 1 Wins!';
}else if(randomNumber2 > randomNumber1){
    display.innerHTML = 'Player 2 Wins!';
}else{
    display.innerHTML = 'Draw!';
}

