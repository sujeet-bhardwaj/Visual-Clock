const btnClock=document.querySelector(".btnClock");
const btnAlarm=document.querySelector(".btnAlarm");
const btnStopwatch=document.querySelector(".btnStopwatch");
const btnTimer=document.querySelector(".btnTimer");
btnClock.addEventListener("click",()=>{
   window.location.href = "./clockproject/Visualclock.html";
})
btnAlarm.addEventListener("click",()=>{
   window.location.href = "./clockproject/Alarm.html";
})
btnStopwatch.addEventListener("click",()=>{
   window.location.href = "./clockproject/Stopwatch.html";
})
btnTimer.addEventListener("click",()=>{
   window.location.href = "./clockproject/Timer.html";
})