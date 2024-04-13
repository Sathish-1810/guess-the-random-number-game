let gameresult=document.getElementById("guessResult");
let userinput=document.getElementById("guessField");
let randomnumber=Math.ceil(Math.random()*100);

function checkGuess(){
let Guessnumber=parseInt(userinput.value);
if (Guessnumber > randomnumber){
    gameresult.textContent="Too high ,Try Again";
    gameresult.style.backgroundColor="#a3d1af";
}
else if (Guessnumber < randomnumber){
    gameresult.textContent="Too Low ,Try Again";
    gameresult.style.backgroundColor="#a3d1af";
}
else if(Guessnumber === randomnumber){
    gameresult.textContent="Congratulation! you got it right ,Try Again";
    gameresult.style.backgroundColor="#a3d1af";
}
}