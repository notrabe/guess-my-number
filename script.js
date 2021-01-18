'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1)
document.querySelector('.number').textContent = secretNumber

let score = 20
document.querySelector('.score').textContent = score

console.log(secretNumber)

document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value)
   console.log(guess)

   if(!guess){
        document.querySelector('.message').textContent = '⛔ No number!'
   } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number!'
   } else if(guess > secretNumber){
        document.querySelector('.message').textContent = '😭 Too high!'
        score--;
        document.querySelector('.score').textContent = score
   } else {
        document.querySelector('.message').textContent = '💔 Too low!'
        score--;
        document.querySelector('.score').textContent = score
   }
})
