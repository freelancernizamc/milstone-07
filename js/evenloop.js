//   Video 39-7 JavaScript event loop and concurrency
// function a(){
//     console.log('a')
//     b();
//     console.log('aa');
// }
// function b(){
//     console.log('b');
//     d();
//     console.log('bb');
// }
// function d(){
//     console.log('d');
//     console.log('dd');
// }
// a();

// Video 39-8 Error Handling: try, catch, throw and finally

function chackAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    
    try{
        // console.log(bBaria);
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter a number";
        }
        else if(age < 18){
            throw "bacca kacca not allowed";
        }
        else if(age > 30){
            throw "murobbi ra aikane aishen na";
        }
        errorTag.innerHTML = '';
    }
    catch(err){
        console.log('ERROR:', err)
        errorTag.innerHTML = 'ERROR:' + err;
    }
    finally{
        console.log('All done inside try catch')
    }
    console.log(1211);
}
chackAge();

