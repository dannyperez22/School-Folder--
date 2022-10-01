// countdown
// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

// countDown(4);
// // 3
// // 2
// // 1
// // "DONE!"

function countdown(num){
    let startNum = num;
  
    let fn = function(){
      startNum--; //I dont understand any of this. This was not explained in the previous videos 
  
      if(startNum === 0){
        clearInterval(timerId); // This was also not explained in the previous video. 
        console.log("DONE!");//From what I gather, 
      } else (
        console.log(startNum)
      )
  }
  
    const timerId = setInterval(
       fn , 1000);
  
}
//This code works but ends up freezing the console when using anything higher than a 6. Why?  

