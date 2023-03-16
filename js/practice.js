
// const myAlert = () =>{
// let userInput = prompt("Enter a number:");
// let number = parseInt(userInput);
// let result = number + 200;
// alert(result);
// }
// myAlert();





// const seeWebsite = () =>{
//     const result = confirm('Do you want to see the location of this website?')
//     console.log(result);
//     if(result === true){
//         window.location = "https://www.nizam2020.com";
//     }
//     else{
//         console.log('Ok Good buy')
//     }

// }
// seeWebsite();

// if (confirm("Do you want to see the location of this website?")) {
//     let href ="https://www.nizam2020.com";
//     console.log(window.location.href);
//   }
  
// filter:

const numbers = [1, 8, 2, 10, 2];
const twos = numbers.filter((num) => num ===2);
console.log(twos);
const doubleDigits = numbers.filter((num) => num > 9);
console.log(doubleDigits);
const hundreds = numbers.filter((num) => num>100);
console.log(hundreds);

// includes
const fruit = ["apple", "banana", "pear", "orange", "banana"];
const hasBanana = fruit.includes("banana");
console.log(hasBanana);
const hasLemon = fruit.includes("lemon");
console.log(hasLemon);
fruit.push('lemon');
console.log(fruit);

// find
const pets = ["cat", "dog", "bird", "dog"];
const dog = pets.find(pet => pet === "dog");
console.log(dog);
const fish = pets.find(pet => pet ==="fish");
console.log(fish);

// indexOf

const bananaIndex = fruit.indexOf("banana");
console.log(bananaIndex);
const orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);
const pineappleIndex = fruit.indexOf("pineapple");
console.log(pineappleIndex);

// arrow function
const getFifty = () => 50;
console.log(getFifty());
const isEven = x => x % 2 == 0;
console.log(isEven(5));
const student = {name: 'Nizam, age: 40'};
const {name, age} = student;

// ternary operator

let age3 = 11;
let type = age3 >= 18 ? "adult" : age3 < 10 ? "child" : "young";
console.log(type);

// find
let num = [1, 2, 3, , 5, 6, 7];
let result = num.find(function(currentValue){
    return currentValue > 4;
});
console.log(result);