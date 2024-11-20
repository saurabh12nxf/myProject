document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const welcomePage = document.getElementById("welcome-page");
    const gamePage = document.getElementById("game-page");

    startButton.addEventListener("click", function() {
        welcomePage.style.display = "none";
        gamePage.style.display = "block";
    });
});





let num = Math.floor(Math.random()*(100-1))+1;
let attempt =0;
let attemptData = document.getElementById("attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resbtn = document.getElementById("resBtn");
let message = document.getElementById("msg");


function check(){
    let usernum = parseInt(userinp.value);
    if(usernum==num){
        message.innerHTML="Congratulations!! You have guessed the Number";
        message.style.color="green";
        resbtn.addEventListener("click",restart);
    }
    else if(usernum>num){
        message.innerHTML="Too High!! Try Again";
        message.style.color="red";
        resbtn.style.display="block";
    }
    else{
        message.innerHTML="Too Low!! Try Again";
        message.style.color="red";
    }
    attempt++;
    attemptData.innerHTML=attempt;
    setTimeout(()=>{
        userinp.value="";
        message.innerHTML="";
    },1000);

}
function restart(){
    num = Math.floor(Math.random()*(100-1))+1;
    attempt =0;
    attemptData.innerHTML=attempt;
}

subBtn.addEventListener("click",check);
resbtn.addEventListener("click",restart);


4
