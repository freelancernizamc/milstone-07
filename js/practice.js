
const myAlert = () =>{
let userInput = prompt("Enter a number:");
let number = parseInt(userInput);
let result = number + 200;
alert(result);
}
myAlert();





const seeWebsite = () =>{
    const result = confirm('Do you want to see the location of this website?')
    console.log(result);
    if(result === true){
        window.location = "https://www.nizam2020.com";
    }
    else{
        console.log('Ok Good buy')
    }

}
seeWebsite();

// if (confirm("Do you want to see the location of this website?")) {
//     let href ="https://www.nizam2020.com";
//     console.log(window.location.href);
//   }
  