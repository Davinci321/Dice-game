let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;
const Pic1 = document.getElementById('img1');
const Pic2 = document.getElementById('img2');
const textEl = document.querySelector('h1');

Pic1.setAttribute('src', `./dice${randomNumber1}.png`);
Pic2.setAttribute('src', `./dice${randomNumber2}.png`);

if(randomNumber2 > randomNumber1){
    textEl.textContent = "Player 2 Wins!"
}else if( randomNumber2 < randomNumber1 ){
    textEl.textContent = "Player 1 wins!"
}else if(randomNumber2 = randomNumber1){
    textEl.textContent = "Draw!"
}