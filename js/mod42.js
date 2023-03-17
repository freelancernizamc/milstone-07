// alert('How are you')
const showAlert = () =>{
    alert('Dosto, taka ase dhar dite parbi, just 500?')
}

const landMoney = () =>{
    const result = confirm('Will you lend me 500 taka?')
    console.log(result);
    if(result === true){
        alert("Tui amar jan er dosto!!!")
    }
    else{
        console.log('DGM....... toke ajke e block maira dimu.')
    }

}

const getInfo = () => {
    // alert
    // confirm
    const name = prompt('Tell me your name');
    console.log(name);
    if(name === null){
        alert('Naam na dile kaam nai!! Ja foooot')

    }
    else{
        console.log('Welcome to this world')
    }
}


// local storage
const hello = localStorage.getItem('hello')
console.log(hello);

const setAge = () =>{
    // window.localStorage.setItem('age', 31);  OR
    localStorage.setItem('age', 31);
}


// Add Product
const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value ='';
    quantityField.value ='';
    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart ={};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart)

    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    console.log(cartStringified);
    localStorage.setItem('cart', cartStringified);

}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}

displayProductsFromLocalStorage();


// slider

const images = [
    'images/nizam.png',
    'images/nizam2.png',
    'images/md-nizamuddin (1).jpeg',
    ]
    let imgIndex = 0;
    const imgE1 = document.getElementById('banner-img');
    setInterval(() =>{
    if(imgIndex === images.length){
    imgIndex =0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgIndex, imgUrl);
    
    imgE1.setAttribute('src', imgUrl)
    imgIndex++;
    } , 1000)