Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

// switch screen mode
const screenMode=document.querySelector(".mode");

screenMode.addEventListener("click",function(){
    document.querySelector('body').classList.toggle('darkMode');
})
