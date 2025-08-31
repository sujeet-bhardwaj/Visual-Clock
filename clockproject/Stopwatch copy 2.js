const display=document.querySelector("#display");
const start=document.querySelector('.start')
const stop=document.querySelector('.stop')
const reset=document.querySelector('.reset')
  let millisecond=0;
  let seconds = 0;
  let minutes = 0;
  let time;
if(localStorage.getItem("stopwatchtime")){
    let savedata = JSON.parse(localStorage.getItem("stopwatchtime"));
  millisecond=savedata.millisecond
 seconds=savedata.seconds
 minutes=savedata.minutes
 updatedisplay()
}
 function  updatedisplay(){
localStorage.setItem("stopwatchtime", JSON.stringify({
        millisecond: millisecond,
        seconds: seconds,
        minutes: minutes
    }));
 let milli=millisecond<10?"0"+millisecond:millisecond
  let mints=minutes<10?"0"+minutes:minutes
  let sec=seconds<10?"0"+seconds:seconds
  display.innerText=`${mints}:${sec}:${milli}`
 }
start.addEventListener("click",()=>{
     if(!time){
 time=setInterval(()=>{
       millisecond+=10;
    if(millisecond==1000){
        seconds++;
        millisecond=0;
         console.log("first second")
    }
    if(seconds==60){
         minutes+=1;
         seconds=0;
         console.log("first minute")
    }
   updatedisplay();
   },10)
     }
})
stop.addEventListener("click",()=>{   
clearInterval(time);
time=null;
})
reset.addEventListener("click",()=>{
    clearInterval(time);
    seconds=0;
    minutes=0;
    millisecond=0;
      localStorage.removeItem("stopwatchtime");
updatedisplay();
})