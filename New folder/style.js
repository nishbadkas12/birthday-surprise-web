// Butterfly generator

function createButterfly(){

let butterfly = document.createElement("div");

butterfly.className = "butterfly";

butterfly.innerHTML = "🦋";

butterfly.style.left = Math.random() * window.innerWidth + "px";

butterfly.style.top = Math.random() * window.innerHeight + "px";

// random direction

let moveX = (Math.random() * 400 - 200) + "px";
let moveY = (Math.random() * 400 - 200) + "px";

butterfly.style.setProperty("--x", moveX);
butterfly.style.setProperty("--y", moveY);

// random speed

butterfly.style.animationDuration =
(4 + Math.random() * 6) + "s";

document.body.appendChild(butterfly);

// remove after animation

setTimeout(()=>{
butterfly.remove();
},8000);

}


// Heart generator

function createHeart(){

let heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = Math.random() > 0.5 ? "💙" : "🤍";

heart.style.left =
Math.random() * window.innerWidth + "px";

heart.style.animationDuration =
(4 + Math.random() * 6) + "s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}


// Loop generators

setInterval(createButterfly, 800);

setInterval(createHeart, 500);