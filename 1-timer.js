import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-BbbuE1sJ.js";let r;const s=document.querySelector("input#datetime-picker"),n=document.querySelector("button"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]"),C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(m.error({backgroundColor:"#ef4040",progressBarColor:"#b51b1b",overlayColor:"#ffbebe",iconColor:"#ffffff",icon:"fas fa-times",titleColor:"#ffffff",title:"Error",messageColor:"#ffffff",theme:"dark",position:"topRight",message:"Please choose a date in the future"}),n.disabled=!0):(r=e[0],n.disabled=!1)}};l(s,C);n.addEventListener("click",()=>{r&&(s.disabled=!0,n.disabled=!0,setInterval(()=>{const e=r-new Date;if(e<=0){s.disabled=!1;return}const t=S(e);g(t)},1e3))});function S(e){const u=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:c,minutes:d,seconds:f}}function o(e){return String(e).padStart(2,"0")}function g({days:e,hours:t,minutes:a,seconds:i}){h.textContent=o(e),y.textContent=o(t),p.textContent=o(a),b.textContent=o(i)}
//# sourceMappingURL=1-timer.js.map
