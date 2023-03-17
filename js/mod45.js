
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