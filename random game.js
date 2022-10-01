// randomGame
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

//select number between 0 and 1. 
//math.random??  console.log number of tries??}
//forEach?? +1 count?
// function randomGame(ranNum){

//     //Math.random(ranNum);

//     //for(let i = 0; i < 0.75(Math.random.ranNum); i++){

//     if(ranNum >= .75){
//         clearInterval(TimerId);
//         setInterval(ranNum, 1000);

//     } else {
//         //forEach +1??
//     }

//     const timerId = setInterval(
//         ranNum, 1000);
// }

//I did my best here. I'm not even sure what questions to ask because I dont understand what exactly this is supposed to be doing. 

function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  }