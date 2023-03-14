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
for (let i = 0; i<numbers.length; i++){
    const number = numbers[1];
    console.log(number);
}
// 5. function
function multiply(num1, num2){
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
const addThree = (x, y, z) => x+ y+ z;
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
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'laptop', price: 9000, brand: 'canon', color: 'gray'},
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

function boxify (num1, num2){
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = boxify[90, 34];
console.log(boxify(90, 34));
const [firstMovie, secondMovie] = student.movies;

// object destructring
const {name, age} = { id: 12, name: 'alu', salary: 34000, age: 14}
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

const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee?.specification?.watch;
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
const result = numbers3.map(num => num *2);
console.log(result);

// for of on array like object
// loop on an object using for in
// add or remove from an array

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};
// copy products array and add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);