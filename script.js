Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

//==================== switch screen mode ====================
const screenMode=document.querySelector(".mode");

screenMode.addEventListener("click",()=>{
    document.querySelector('body').classList.toggle('darkMode');
});

//==================== parallax carousel ====================
let slideImages=[
        "img/carousel1.jpeg",
        "img/carousel2.jpeg",
        "img/carousel3.jpeg"
];

const image = document.querySelector('.slide-img');
let i=0;
let lastpic = slideImages.length-1;

//auto change
function changeImg(){
    image.src = slideImages[i];
    if(i<slideImages.length - 1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()",3000);
}
window.onload=changeImg;


//click and move to the left
const toLeft=document.querySelector(".carousel-btn-left");

toLeft.addEventListener("click",()=>{
    if (i == 0)
    {
        i = lastpic;
        image.src = slideImages[i];
    }
    else
    {
        i--;
        image.src = slideImages[i];
    };
});

//click and move to the right
const toRight=document.querySelector(".carousel-btn-right");

toRight.addEventListener("click",()=>{
    if (i == lastpic)
    {
        i = 0;
        image.src = slideImages[i];
    }
    else
    {
        i++;
        image.src = slideImages[i];
    }
});


//==================== collage ====================
const lightboxBg = document.createElement('div');
lightboxBg.id="lightboxBg";
document.body.appendChild(lightboxBg);

const collageImage = document.querySelectorAll('.image');

for (let i = 0; i < collageImage.length; i++) {
collageImage[i].addEventListener("click",() => {

})
};