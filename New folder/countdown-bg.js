
// PURE BACKGROUND LAYER (NO BOX EFFECT)

let bg = document.createElement("div");

bg.id = "countdown-background";

Object.assign(bg.style, {

position: "fixed",
inset: "0",

width: "100vw",
height: "100vh",

pointerEvents: "none",

zIndex: "-1",   // IMPORTANT: move behind everything

overflow: "hidden",

background: "transparent",   // NO BOX
border: "none",
boxShadow: "none"

});

document.body.appendChild(bg);


// Heart types

const hearts = ["🩷","🩵","💜","🤍","💗","💖","💞"];



// Create butterfly

function createButterfly(){

let b = document.createElement("div");

b.innerHTML = "🦋";

b.style.position = "absolute";


// Random position

b.style.left = Math.random()*window.innerWidth+"px";
b.style.top = Math.random()*window.innerHeight+"px";


// Random size

let size = 20 + Math.random()*25;

b.style.fontSize = size+"px";


// Glow effect

b.style.filter =
"drop-shadow(0 0 10px rgba(100,180,255,0.8))";


// Movement animation

let moveX = (Math.random()*800 - 400);
let moveY = (Math.random()*600 - 300);

let duration = 8000 + Math.random()*8000;


b.animate(

[
{ transform:"translate(0,0)", opacity:0 },

{ transform:"translate("+moveX+"px,"+moveY+"px)", opacity:1 }

],

{
duration:duration,
iterations:1,
easing:"linear"
}

);


bg.appendChild(b);


// Sparkle trail

createSparkle(b);


// Remove

setTimeout(()=>{
b.remove();
},duration);

}



// Create heart

function createHeart(){

let h = document.createElement("div");

h.innerHTML =
hearts[Math.floor(Math.random()*hearts.length)];

h.style.position = "absolute";

h.style.left = Math.random()*window.innerWidth+"px";

h.style.top = "-50px";


// Random size

h.style.fontSize =
(14 + Math.random()*20)+"px";


// Falling animation

let duration = 5000 + Math.random()*6000;


h.animate(

[
{ transform:"translateY(0)", opacity:0 },

{ transform:"translateY("+window.innerHeight+"px)", opacity:1 }

],

{
duration:duration,
iterations:1,
easing:"linear"
}

);


bg.appendChild(h);


setTimeout(()=>{
h.remove();
},duration);

}



// Sparkle effect

function createSparkle(parent){

let trail = setInterval(()=>{

let s = document.createElement("div");

s.innerHTML="✨";

s.style.position="absolute";

s.style.left=parent.offsetLeft+"px";
s.style.top=parent.offsetTop+"px";

s.style.fontSize="10px";

s.animate(

[
{opacity:1, transform:"scale(1)"},

{opacity:0, transform:"scale(0.3)"}

],

{
duration:1000
}

);

bg.appendChild(s);

setTimeout(()=>{
s.remove();
},1000);

},300);


setTimeout(()=>{
clearInterval(trail);
},8000);

}



// Initial spawn

for(let i=0;i<8;i++){

setTimeout(createButterfly,i*400);

}



// Permanent loops

setInterval(createButterfly,1200);

setInterval(createHeart,500);
// magical floating words (smooth version)

// ===============================
// ULTRA CINEMATIC FLOATING WORD SYSTEM
// ===============================

// YOUR WORDS + HEARTS
const words = [
"Kishu🐻","kutti 💖","chudail 🎀",
"Golu🐼","Chiku🐣","Koala🐨",
"💖","💕","💗","🩷","💞","🤍"
];

// BACKGROUND CONTAINER



// ===============================
// CONFIGURATION (CINEMATIC TUNING)
// ===============================

const CONFIG = {

spawnInterval: 180,     // lower = more density
maxElements: 60,        // maximum on screen
minDuration: 6000,      // slow float
maxDuration: 12000,     // ultra slow cinematic
minSize: 14,
maxSize: 28

};

let activeCount = 0;


// ===============================
// CREATE FLOATING ELEMENT
// ===============================
function createFloatingWord(){

if(activeCount >= CONFIG.maxElements) return;

activeCount++;

let w = document.createElement("div");

w.innerText = words[Math.floor(Math.random()*words.length)];


// random horizontal start
let startX = Math.random() * window.innerWidth;

// start slightly below screen
let startY = window.innerHeight + 50;


// PARALLAX DEPTH LAYER
let depth = Math.random();

let scale = 0.6 + depth * 0.8;
let blur = (1 - depth) * 2;
let opacity = 0.4 + depth * 0.6;


// APPLY STYLE
w.style.position = "absolute";
w.style.left = startX + "px";
w.style.top = startY + "px";

w.style.fontSize =
(CONFIG.minSize + Math.random() *
(CONFIG.maxSize - CONFIG.minSize)) + "px";

w.style.fontFamily = "Quicksand, sans-serif";

w.style.pointerEvents = "none";

w.style.zIndex = Math.floor(depth * 10);

w.style.filter = `blur(${blur}px)`;

w.style.opacity = opacity;

w.style.transform = `scale(${scale})`;


// SOFT COLOR VARIATION
const colors = [
"#6bb6ff","#ff77aa","#ffd166",
"#c77dff","#80ed99","#ffffff"
];

w.style.color =
colors[Math.floor(Math.random()*colors.length)];

bg.appendChild(w);


// ===============================
// CINEMATIC FLOAT MOTION
// ===============================

let driftX = (Math.random() - 0.5) * 300;
let driftY = -window.innerHeight - 200;

let rotate = (Math.random() - 0.5) * 180;

let duration =
CONFIG.minDuration +
Math.random() *
(CONFIG.maxDuration - CONFIG.minDuration);


// animate
w.animate(
[
{
transform:
`translate(0px,0px)
 scale(${scale})
 rotate(0deg)`,

opacity:0
},

{
opacity:opacity,
offset:0.1
},

{
transform:
`translate(${driftX}px,${driftY}px)
 scale(${scale})
 rotate(${rotate}deg)`,

opacity:0
}
],
{
duration:duration,
easing:"cubic-bezier(0.22,1,0.36,1)"
}
);


// cleanup
setTimeout(()=>{
w.remove();
activeCount--;
}, duration);

}


// ===============================
// SPAWN ENGINE
// ===============================

// continuous smooth spawning
setInterval(createFloatingWord, CONFIG.spawnInterval);


// initial burst for instant cinematic feel
for(let i=0;i<25;i++){

setTimeout(createFloatingWord, i*120);

}
setInterval(()=>{

let h=document.createElement("div");

h.innerHTML="💙";

h.style.position="fixed";

h.style.left=(window.innerWidth/2 + (Math.random()*200-100))+"px";

h.style.top=(window.innerHeight/2 + (Math.random()*100-50))+"px";

h.style.opacity="0";

document.body.appendChild(h);

h.animate(
[
{transform:"translateY(20px)",opacity:0},
{transform:"translateY(-40px)",opacity:1},
{transform:"translateY(-80px)",opacity:0}
],
{duration:3000}
);

setTimeout(()=>h.remove(),3000);

},1500);