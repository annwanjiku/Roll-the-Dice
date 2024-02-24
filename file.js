document.addEventListener("DOMContentLoaded",()=>{

let number;

let getNumber = document.getElementById("times");
getNumber.addEventListener("change",()=>{
  number = getNumber.value;
})

let values = [];
let player1 =document.querySelector("#player1-values")
let player2 =document.querySelector("#player2-values")
let x1;
let x2;
let message;
let result = document.querySelector("#Message")
let selectPlayer = document.getElementById("select-player");
let currentPlayer;
let scores;
let hidden = document.querySelector(".hidden")
let times;


selectPlayer.addEventListener("change", function() {
    currentPlayer = selectPlayer.value;
    var options = selectPlayer.querySelectorAll('option');
    options.forEach(function(option) {
        option.style.display = 'none';
    });
  

    })


let button1 = document.getElementById("mybutton")

button1.addEventListener("click",()=>{

    times = number*2;
    for(let i=0;i<times;i++){
        let value = Math.ceil(Math.random()*5)+1
        values.push(value)
        
    }
    number= 0;
    
    


  x1 = values.slice(0,(values.length/2))
  x2 = values.slice((values.length/2),)
  
  player1.textContent="Player 1: "+x1
  player2.textContent="Player 2: "+x2

  var options = selectPlayer.querySelectorAll('option');
  options.forEach(function(option) {
  option.style.display = 'none';
  });

});



let button2 = document.getElementById("winner")

button2.addEventListener("click",function(){

let sumPlayer1 = x1.reduce((acc,init)=>{
  return acc+init
})
let sumPlayer2 = x2.reduce((acc,init)=>{
  return acc+init
})

  if(sumPlayer1>sumPlayer2 && currentPlayer=="player1"){
    message="You, Player 1 win"
  }
  else if(sumPlayer2>sumPlayer1 && currentPlayer=="player2"){
    message="You ,Player 2 win"
  }
  else if(sumPlayer1===sumPlayer2){
    message="It is a tie"
  }
  else if(sumPlayer1>sumPlayer2 && currentPlayer=="player2"){
    message="You lose"+" You were "+currentPlayer
  }
  else if(sumPlayer2>sumPlayer1 && currentPlayer=="player1"){
    message="You lose"+" You were "+currentPlayer
  }
  else if(sumPlayer1>sumPlayer2 ){
    message="Player 1 wins"
  }
  else if(sumPlayer2>sumPlayer1 ){
    message="Player 2 wins"
  }
  else if(sumPlayer2===sumPlayer1 ){
    message="It is a tie"
  }
  
  result.textContent = message;
  scores = document.getElementById("display-message")
  scores.textContent = "Player1 scores : "+sumPlayer1+"  "+"and"+"  "+"Player2 scores : "+
    sumPlayer2;
  
});




let button3 = document.getElementById("clear-button")

button3.addEventListener("click",function(){
values;
document.querySelector("#player1-values").textContent = "Player 1:"
document.querySelector("#player2-values").textContent= "Player 2: "
x1;
x2;
message;
document.querySelector("#Message").textContent = " ";
document.getElementById("display-message").textContent = " ";
document.getElementById("select-player").textContent= hidden;
number;
currentPlayer;
  
});



let button4 = document.getElementById("play-again")
button4.addEventListener("click",function() {
    window.location.reload();
});




})

