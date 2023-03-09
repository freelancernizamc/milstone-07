function isBigger(num){
    if(num > 5){
        return true;
    }
    else{
         return false;
}

 }
const result = isBigger(11);
console.log(result);

//  const sum = a, b => a + b;
const sum = (a, b) => a + b;
const res = sum(3, 5);

const musk = {
    name: 'elon',
    // age: 53 error
    age: 53,
    job: 'tesla'
}
console.log(musk.age);
const numbers = [12, 13, 21, 3, 34, 4, 4,];
for(let i = 0; i< 10; i++){
    // const n = numbers[i; error
    const n = numbers[i];
}

if (numbers.length > 5 && numbers[0] === 5){

}

// Video 40-3 Understand Reference errors and Type errors messages
const numbs = 5;
// numbs.push(45);type error because its not array so we can't push

let address = {city: 'bBaria', postCode: 4302};
// console.log(address.home.building); error
console.log(address?.home?.building);

console.log(add(2, 3));
function add(n1, n2){
    return n1 + n2; 
}
const add2 = (n1, n2) => n1 + n2;

// Video 40-4 Debug and fix syntax error from Shopping list
// 40-5 Fix reference and type errors from shopping list
// Video 40-6 Money Master reference and query selector error ( part 1)

setTimeout(function() {
    console.log("Message after 3.5 seconds");
  }, 3500);
  

//   Event loop
console.log("Start");

setTimeout(function() {
  console.log("Timeout complete");
}, 1000);

console.log("End");

// call back
function multiply(x, y) {
    return x * y;
  }
  
  function square(x) {
    return multiply(x, x);
  }
  
  function printSquare(x) {
    const result = square(x);
    console.log(result);
  }
  
  printSquare(5);
  setTimeout(function() {
    console.log("Async callback");
  }, 0);
  
//   try catch finally 

function divide(x, y) {
    try {
      if (y === 0) {
        throw new Error("Division by zero");
      }
      return x / y;
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("Division complete");
    }
  }
  
  console.log(divide(10, 0));
  console.log(divide(10, 2));
  