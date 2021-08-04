Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

//----- switch screen mode -----
const screenMode=document.querySelector(".mode");

screenMode.addEventListener("click",()=>{
    document.querySelector('body').classList.toggle('darkMode');
});

//----- parallax carousel -----
let slideImages=[
        "img/carousel1.jpeg",
        "img/carousel2.jpeg",
        "img/carousel3.jpeg"
];

const imageDiv = document.querySelector(".carousel-slide");

var currentpic = 0;
var lastpic = slideImages.length-1;

//click and move to the left
const toLeft=document.querySelector(".carousel-btn-left");

toLeft.addEventListener("click",()=>{
    if (currentpic == lastpic)
    {
        currentpic = 0;
        document.querySelector('.slide-img').src = slideImages[currentpic];
    }
    else
    {
        currentpic--;
        document.querySelector('.slide-img').src = slideImages[currentpic];
    }
});

//click and move to the right
const toRight=document.querySelector(".carousel-btn-right");
toRight.addEventListener("click",()=>{
    if (currentpic == lastpic)
    {
        currentpic = 0;
        document.querySelector('.slide-img').src = slideImages[currentpic];
    }
    else
    {
        currentpic++;
        document.querySelector('.slide-img').src = slideImages[currentpic];
    }
});


//click indicator to move to the picture
// const indicatorNav=document.querySelector(".carousel-nav");
// const indicatorBtn = Array.from(indicatorNav.children);
