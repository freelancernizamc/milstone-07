const images2 = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',

];
let imgIndex2 = 0;
const imgE12 = document.getElementById('slider-img2');
setInterval(() => {
    if (imgIndex2 === images2.length) {
        imgIndex2 = 0;
    }
    const imgUrl = images2[imgIndex];
    console.log(imgIndex2, imgUrl);
    imgE12.setAttribute('src', imgUrl)
    imgIndex2++;
}, 1000)