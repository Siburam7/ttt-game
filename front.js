let like = document.querySelector(".like");
let disLike = document.querySelector(".non-like");
let love = document.querySelector(".fab-box");
let afterLove = document.querySelector("#love-after");
let gameBtn = document.querySelector(".play-now");



like.addEventListener("click",() => {
    like.classList.toggle("active");
    disLike.classList.remove("active");
});

disLike.addEventListener("click", ()=> {
    disLike.classList.toggle("active");
    like.classList.remove("active");
    
});

love.addEventListener("click", ()=> {
    love.classList.toggle("active");
    afterLove.style.color = "red";
});

gameBtn.addEventListener("click",()=> {
    window.open("game.html");
});







