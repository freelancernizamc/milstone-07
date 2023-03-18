// 1. How to declare a variable using let and const
// const fatherName = 'Arnold';
// let season = 'rainy';
// season = 'winter';
// // 6 basic conditions: >, <, ===, !==, <=, >=
// // multiple conditions: &&,  ||

// if(fatherName === 'arnold'){

// }
// else if(fatherName === 'Arnold'){

// }
// else{

// }
// 3. array declare
// index, length, push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;
// 4. for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[1];
    console.log(number);
}
// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);
console.log(output);

// 6. object
const student = {
    name: 'Sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const myVariable = 'age';
console.log(student.age);         // direct by property
console.log(student['age']);      //access via property name string
console.log(student[myVariable]);   //access via property variable


// Video 44-2 template string, arrow function, spread operator

// 1. template string
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);
// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
doMath(20, 30);

// spread operator
const newNumbers2 = [...numbers];
const newNumbers = numbers;
numbers.push(99);
newNumbers.push(500);

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 100, 200];
console.log(numbers);
console.log(newNumbers2);
console.log(currentNumbers);

// Video 44-3 Array methods map filter find forEach

const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'laptop', price: 9000, brand: 'canon', color: 'gray' },
];

const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(p => p.price);
console.log(prices);

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

});

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);

//. find
const special = products.find(p => p.name.includes('n'));
console.log(special);

// Video 44-4 Array and object Destructuring
// 1. array destructuring
const numbers2 = [42, 65];
// const x = numbers2[0];
// const y = numbers2[1];
// const [x, y] = [42, 65]
// const [x, y] = numbers2;
// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = boxify[90, 34];
console.log(boxify(90, 34));
const [firstMovie, secondMovie] = student.movies;

// object destructring
const { name, age } = { id: 12, name: 'alu', salary: 34000, age: 14 }
const employee = {
    ide: 'Vs Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'Kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;
console.log(brand);

// Video 44-5 JSON, Fetch, keys, values, array add or remove using dots.
// 1. JSON => strigify, parse

const studentJSON = JSON.stringify(student);
console.log(studentJSON);
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(values);
console.log(keys);

// for
const numbers3 = [23, 54, 67, 87, 23, 78];
numbers3.forEach(num => console.log(num));
const result = numbers3.map(num => num * 2);
console.log(result);

// for of on array like object
// loop on an object using for in
// add or remove from an array

const newProduct = { name: 'webcam', price: 700, brand: 'lal' };
// copy products array and add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);

// Video 44-6 (advanced) truthy, false Ternary operator, shortcut and or

// falsy= '', 0, false, null, undefine
// truthy= 'almas', 5, true, {}, []
let myVar = 5;
// check truthy
if (myVar) {

    myVar = myVar * 100;
}
else {
    myVar = 0;
}
let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}

const money = 800;
let food;
if (money > 100) {
    food = 'biriyani';
}
else {
    food = 'cha biscuit';
}
// ternary
let food1 = money > 100 ? 'biriyani' : 'cha biscuit';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);
// number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
//  string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);

// const isActive = true;
const isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();
// toggle boolean
// isActive = !isActive;

// Video 44-7 Explore Localstorage and session storage with JSON

// localStorage.setItem('userId', 87952214);
const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    // 
    if (id && value) {

        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}

localStorage.setItem('friend', [45, 78, 78]);
localStorage.setItem('friend', JSON.stringify([45, 78, 78]));
// const pen = {price: 10, color: 'black'};
// localStorage.setItem('pen', JSON.stringify(pen));
const pen = { price: 50, color: 'red' }
// const penObj = JSON.parse(pen);
localStorage.setItem('pen', JSON.stringify(pen));
pen.price = 70;
localStorage.setItem('pen', JSON.stringify(pen));

// Video 44-8 dot vs bracket notation

const person = {
    name: 'Lal Nil Holud mia',
    profession: 'Traffic surgeon',
    age: 39,
    25: 'Summer',
    'son-name': 'sunny',
    address: 'Shahabag'
}
// dot notation
const prof1 = person.profession;
// bracket notation
const prof2 = person['profession'];
console.log(prof2);
const pName = 'profession';
const prof3 = person[pName];
console.log(prof3);

const season = person[25];
console.log(season);
const son = person['son-name'];
console.log(son);

// Video 44-9 Module summary
const x = 50;
const y = 100;
const obj = {
    x: x,
    y: y
};
// Shortcut
const obj1 = { x, y };
console.log(obj1);
const name2 = 'Solimullah';
const area = 'Dhaka';
const nobab = {
    name2: name2,
    area: area
}
const nobab2 = { name2, area };
console.log(nobab2);

// slider 

const images = [
    'images/nizam.png',
    'images/nizam2.png',
    'images/Nizam bd.jpg',
    'images/md-nizamuddin (1).jpeg',
]
let imgIndex = 0;
const imgE1 = document.getElementById('banner-img');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgIndex, imgUrl);

    imgE1.setAttribute('src', imgUrl)
    imgIndex++;
}, 1000)