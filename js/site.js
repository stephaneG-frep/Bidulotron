(function(){
"use strict";
var d=document;
var t=d.querySelector(".nav-toggle"),n=d.getElementById("site-nav");
if(t&&n){
t.addEventListener("click",function(){var o=n.classList.toggle("open");t.setAttribute("aria-expanded",o?"true":"false");});
n.addEventListener("click",function(e){if(e.target.closest("a")){n.classList.remove("open");t.setAttribute("aria-expanded","false");}});
d.addEventListener("keydown",function(e){if(e.key==="Escape"&&n.classList.contains("open")){n.classList.remove("open");t.setAttribute("aria-expanded","false");t.focus();}});
}
d.querySelectorAll(".ba").forEach(function(b){var r=b.querySelector(".ba-range");if(!r)return;
var u=function(){b.style.setProperty("--pos",r.value+"%");};r.addEventListener("input",u);u();});
var els=d.querySelectorAll(".reveal");
if("IntersectionObserver" in window&&els.length){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{rootMargin:"0px 0px -8% 0px"});
els.forEach(function(e){io.observe(e);});
}else{els.forEach(function(e){e.classList.add("in");});}
window.__nsReady=1;
})();
