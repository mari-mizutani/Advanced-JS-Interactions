Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

//----- switch screen mode -----
const screenMode=document.querySelector(".mode");

screenMode.addEventListener("click",function(){
    document.querySelector('body').classList.toggle('darkMode');
});

//----- parallax carousel -----
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const slideSize = slides[0].getBoundingClientRect();//Returns the size of a slide and its position relative to the viewport

//set each images to the next
// slides[0].style.left =0;
// slides[1].style.left =slideSize.width + "px";
// slides[2].style.left =slideSize.width*2 + "px";
slides.forEach((slide,index)=>{
    slide.style.left=(slideSize.width)*index+"px";
})

//click and move to the left
const toLeft=document.querySelector(".carousel-btn-left");
toLeft.addEventListener("click",function(){
    
});

//click and move to the right
const toRight=document.querySelector(".carousel-btn-right");

//click indicator to move to the picture
const indicatorNav=document.querySelector(".carousel-nav");
const indicatorBtn = Array.from(indicatorNav.children);
