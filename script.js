// header hide on scroll
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{
let current = window.pageYOffset;

if(current > lastScroll){
header.style.top = "-100px";
}else{
header.style.top = "0";
}

lastScroll = current;
});

// card mouse glow
document.querySelectorAll(".card").forEach(card=>{
card.addEventListener("mousemove",e=>{
let rect = card.getBoundingClientRect();
let x = e.clientX - rect.left;
let y = e.clientY - rect.top;
card.style.background =
`radial-gradient(circle at ${x}px ${y}px, rgba(0,255,0,0.15), #0a0a0a)`;
});

card.addEventListener("mouseleave",()=>{
card.style.background="#0a0a0a";
});
});
