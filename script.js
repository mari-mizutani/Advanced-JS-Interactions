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

const image = document.querySelector('.slide-img');


//auto change
let i=0;
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


let currentpic = 0;
let lastpic = slideImages.length-1;

//click and move to the left
const toLeft=document.querySelector(".carousel-btn-left");

toLeft.addEventListener("click",()=>{
    if (currentpic == 0)
    {
        currentpic = 2;
        image.src = slideImages[currentpic];
    }
    else
    {
        currentpic--;
        image.src = slideImages[currentpic];
    };

});

//click and move to the right
const toRight=document.querySelector(".carousel-btn-right");

toRight.addEventListener("click",()=>{
    if (currentpic == lastpic)
    {
        currentpic = 0;
        image.src = slideImages[currentpic];
    }
    else
    {
        currentpic++;
        image.src = slideImages[currentpic];
    }
});
