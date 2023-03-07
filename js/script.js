// Video 39-0 What matters in this milestone
// Video 39-1 What really is JavaScript?
// Video 39-2 JavaScript Engine V8 Internal mechanism
// Video 39-3 JavaScript Execution Context and Call stack
// 39-4 Single-threaded, Asynchronous vs Synchronous


let a = 5;
function add(num1, num2){
    const result = num1 + num2 + a;
    return result;
}

const sum = add(4, 5);
console.log(sum);

// Video 39-4 Single-threaded, Asynchronous vs Synchronous
console.log(1);
console.log(2);
// console.log(3);
doSomething();
setTimeout(() =>{
    console.log('Lazy logged')
}, 4000)
console.log(4);
console.log(5);
console.log(6);
function doSomething(){
    console.log(3);
}

// Video 39-5 Promise, Aync/Await
const getData = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        resolve(5666665)
    }
    else{
        reject('No data available')
    }
    // resolve(5656666);
    // reject('No data available')
})
// console.log(getData);
getData.then(data => console.log(data +22))
.catch(err => console.error('ERROR', err))

// Video 39-6 setInterval and clearInterval with x++ and ++x
// clearTimeout
// clearInterval
console.log(1);
console.log(2);
let num= 0;
const intervalId = setInterval(()=>{
    // console.log(num++)
    console.log(++num)
    if(num ===10){
        clearInterval(intervalId);
    }
}, 1000)


// Even loop:

console.log("syncronous_1");
setTimeout(function timeout(){
    console.log("asyncronous_1");
}, 5000);
console.log("syncronous_2");
setTimeout(function timeout(){
    console.log("asyncronous_1");
}, 10000);
console.log("syncronous_3");


// digital watch
function digitalClock() {
    const date = new Date();
  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    const time = hours + ":" + minutes + ":" + seconds;
  
    document.getElementById("clock").innerText = time;
  
    setTimeout(digitalClock, 1000);
  }
  
  digitalClock();
  

