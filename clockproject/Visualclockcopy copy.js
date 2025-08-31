const hrs=document.querySelector("#hrs")
const min=document.querySelector("#min")
const sec=document.querySelector("#sec")
const set=document.querySelector('.setHour')
const AM=document.querySelector('.AM')
console.log(set.innerText)
console.log(typeof set.innerText)
 console.log(hrs)
 let secondtime;
 let thirdtime;
 let fourthtime;
 firsttime=setInterval(() => {
    let now = new Date();
    hrs.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
}, 1000);

set.addEventListener("click",()=>{
   let now = new Date();
  let thr=now.getHours();
//   console.log(thr)
if(set.innerText=="12hour") {
     if(thr>=12){
     clearInterval(firsttime);
     clearInterval(thirdtime);
   secondtime=setInterval(() => {
     now = new Date();
    hrs.innerText =now.getHours()-12;
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
     AM.style.display = "block"; 
     AM.innerText="PM"
    set.innerText="24hour"
}, 1000);
}
    else{
         clearInterval(firsttime);
     clearInterval(thirdtime);
    clearInterval(secondtime)
fourthtime=setInterval(()=>{
 let  now = new Date();
    hrs.innerText =now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
     AM.style.display = "block"; 
   AM.innerText="AM"
   set.innerText="24hour"
},1000) 
    }
}
else if(set.innerText=="24hour"){
    clearInterval(firsttime);
    clearInterval(secondtime);
    clearInterval(fourthtime)
 thirdtime=setInterval(() => {
    let now = new Date();
    hrs.innerText =now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
    AM.style.display = "none"; 
    set.innerText="12hour"
}, 1000);
}
})
