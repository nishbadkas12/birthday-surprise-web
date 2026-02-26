// ===============================
// TARGET DATE
// ===============================
let targetDate = new Date().getTime() + 14000;


// ===============================
// CREATE FADE OVERLAY
// ===============================
let fade = document.createElement("div");
fade.className = "fade-overlay";
document.body.appendChild(fade);


// ===============================
// GET ELEMENTS
// ===============================
let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

let card = document.querySelector(".card");


// ===============================
// FLOATING BUTTERFLIES SYSTEM
// ===============================
let floatingInterval;
let floatingActive = true;

function createFloatingButterfly(){

    if(!floatingActive) return;

    let b = document.createElement("div");
    b.innerHTML = "🦋";

    b.style.position = "fixed";
    b.style.left = Math.random() * window.innerWidth + "px";
    b.style.top = window.innerHeight + 20 + "px";

    b.style.fontSize = (16 + Math.random()*20) + "px";
    b.style.pointerEvents = "none";
    b.style.opacity = 0;

    document.body.appendChild(b);

    let drift = (Math.random() - 0.5) * 200;

    b.animate(
    [
        {
            transform:`translate(0,0) rotate(0deg)`,
            opacity:0
        },
        {
            opacity:1,
            offset:0.2
        },
        {
            transform:`translate(${drift}px,-${window.innerHeight+200}px) rotate(${Math.random()*360}deg)`,
            opacity:0
        }
    ],
    {
        duration:8000 + Math.random()*4000,
        easing:"ease-in-out"
    });

    setTimeout(()=>{
        b.remove();
    },12000);
}

function startFloatingButterflies(){
    floatingInterval = setInterval(createFloatingButterfly, 800);
}

function stopFloatingButterflies(){
    floatingActive = false;
    clearInterval(floatingInterval);
}


// ===============================
// GOLD PARTICLE BURST
// ===============================
function goldenBurst(centerX, centerY){

    for(let i=0;i<60;i++){

        let p = document.createElement("div");

        p.style.position="fixed";
        p.style.left=centerX+"px";
        p.style.top=centerY+"px";

        let size = 4 + Math.random()*6;

        p.style.width=size+"px";
        p.style.height=size+"px";

        p.style.background="radial-gradient(circle, gold, orange)";
        p.style.borderRadius="50%";
        p.style.pointerEvents="none";

        document.body.appendChild(p);

        let angle=Math.random()*2*Math.PI;
        let distance=100+Math.random()*500;

        let x=Math.cos(angle)*distance;
        let y=Math.sin(angle)*distance;

        p.animate(
        [
            {
                transform:"translate(0,0) scale(1)",
                opacity:1
            },
            {
                transform:`translate(${x}px,${y}px) scale(0)`,
                opacity:0
            }
        ],
        {
            duration:3000 + Math.random()*2000,
            easing:"cubic-bezier(0.2,0.8,0.2,1)",
            fill:"forwards"
        });

        setTimeout(()=>p.remove(),5000);

    }
}


// ===============================
// CINEMATIC BUTTERFLY EXPLOSION
// ===============================
function cinematicExplosion(){

    let centerX = window.innerWidth/2;
    let centerY = window.innerHeight/2;

    stopFloatingButterflies();

    goldenBurst(centerX, centerY);

    for(let i=0;i<40;i++){

        let b=document.createElement("div");
        b.innerHTML="🦋";

        b.style.position="fixed";
        b.style.left=centerX+"px";
        b.style.top=centerY+"px";

        b.style.fontSize=(18+Math.random()*28)+"px";
        b.style.pointerEvents="none";

        document.body.appendChild(b);

        let angle=Math.random()*2*Math.PI;
        let distance=200+Math.random()*600;

        let x=Math.cos(angle)*distance;
        let y=Math.sin(angle)*distance;

        b.animate(
        [
            {
                transform:"translate(0,0) scale(0.3)",
                opacity:0
            },
            {
                opacity:1,
                offset:0.2
            },
            {
                transform:`translate(${x}px,${y}px) scale(1.8) rotate(${Math.random()*720}deg)`,
                opacity:0
            }
        ],
        {
            duration:4000 + Math.random()*2000,
            easing:"cubic-bezier(0.22,1,0.36,1)",
            fill:"forwards"
        });

        setTimeout(()=>b.remove(),6000);

    }
}


// ===============================
// BUTTERFLY LANDING BEFORE UNLOCK
// ===============================
function butterflyLanding(){

    let b=document.createElement("div");
    b.innerHTML="🦋";

    b.style.position="fixed";
    b.style.left=(window.innerWidth/2-20)+"px";
    b.style.top="-100px";

    b.style.fontSize="32px";

    document.body.appendChild(b);

    b.animate(
    [
        {transform:"translateY(0)",opacity:0},
        {transform:`translateY(${window.innerHeight/2}px)`,opacity:1}
    ],
    {
        duration:2000,
        easing:"ease-out",
        fill:"forwards"
    });
}


// ===============================
// COUNTDOWN ENGINE
// ===============================
function updateCountdown(){

    let now=new Date().getTime();
    let diff=targetDate-now;


    // butterfly landing
    if(diff<=2000 && diff>0 && !window.butterflyLanded){

        window.butterflyLanded=true;
        butterflyLanding();

    }


    // unlock moment
    if(diff<=0){

        card.classList.add("unlock");

        cinematicExplosion();

        setTimeout(()=>{
            fade.classList.add("active");
        },1500);

        setTimeout(()=>{
            window.location.href="index.html";
        },4000);

        return;
    }


    // calculate time
    let days=Math.floor(diff/(1000*60*60*24));
    let hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    let minutes=Math.floor((diff%(1000*60*60))/(1000*60));
    let seconds=Math.floor((diff%(1000*60))/1000);


    // display
    daysEl.innerText=String(days).padStart(2,"0");
    hoursEl.innerText=String(hours).padStart(2,"0");
    minutesEl.innerText=String(minutes).padStart(2,"0");
    secondsEl.innerText=String(seconds).padStart(2,"0");

}


// ===============================
// START SYSTEM
// ===============================
startFloatingButterflies();

updateCountdown();

setInterval(updateCountdown,1000);