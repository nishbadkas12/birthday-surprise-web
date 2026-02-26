// =======================================
// GLOBAL BACKGROUND SYSTEM
// Works on ALL pages
// Butterflies + Multiple Hearts
// Permanent infinite animation
// =======================================


// SETTINGS

const butterflyCount = 12;
const heartSpawnRate = 400;
const butterflySpawnRate = 900;


// HEART TYPES

const hearts = ["💙","🤍","💜","💖","💕"];


// CREATE CONTAINER

let bg = document.createElement("div");

bg.id = "global-background";

document.body.appendChild(bg);


// BUTTERFLY FUNCTION WITH SPECIAL EFFECTS

function createButterfly(){

let b = document.createElement("div");

b.className = "butterfly";


// 20% chance special butterfly
let special = Math.random() < 0.2;

b.innerHTML = special ? "🦋✨" : "🦋";


// Random position
b.style.left = Math.random() * window.innerWidth + "px";
b.style.top = Math.random() * window.innerHeight + "px";


// Random movement
let moveX = (Math.random()*1000 - 500) + "px";
let moveY = (Math.random()*600 - 300) + "px";

b.style.setProperty("--x", moveX);
b.style.setProperty("--y", moveY);


// Random size
let size = 18 + Math.random()*25;
b.style.fontSize = size + "px";


// Random speed
b.style.animationDuration =
(10 + Math.random()*12) + "s";


// Glow effect for special butterfly
if(special){

b.style.filter =
"drop-shadow(0 0 10px #6bb6ff) drop-shadow(0 0 20px #aee2ff)";

}


// Add sparkle trail
createSparkleTrail(b);


document.getElementById("global-background").appendChild(b);


setTimeout(()=>{
b.remove();
},22000);

}
function createSparkleTrail(butterfly){

let trail = setInterval(()=>{

let sparkle = document.createElement("div");

sparkle.className = "sparkle";

sparkle.innerHTML = "✨";

sparkle.style.left = butterfly.offsetLeft + "px";
sparkle.style.top = butterfly.offsetTop + "px";

sparkle.style.fontSize =
(8 + Math.random()*10) + "px";

document.getElementById("global-background").appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},1000);

},200);


setTimeout(()=>{
clearInterval(trail);
},20000);

}


// HEART FUNCTION

function createHeart(){

let h = document.createElement("div");

h.className = "heart";


// Random heart type
h.innerHTML =
hearts[Math.floor(Math.random()*hearts.length)];


// Random position
h.style.left =
Math.random()*window.innerWidth + "px";


// Random size
h.style.fontSize =
(14 + Math.random()*18) + "px";


// Random speed
h.style.animationDuration =
(5 + Math.random()*8) + "s";


bg.appendChild(h);


setTimeout(()=>{
h.remove();
},15000);

}



// INITIAL BUTTERFLIES

for(let i=0;i<butterflyCount;i++){

setTimeout(createButterfly, i*300);

}



// PERMANENT LOOPS

setInterval(createButterfly, butterflySpawnRate);

setInterval(createHeart, heartSpawnRate);