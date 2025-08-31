const minutesInput=document.querySelector("#minutes-input");
const tstart=document.querySelector('.tstart')
const tstop=document.querySelector('.tstop')
const treset=document.querySelector('.treset')
const tmin=document.querySelector('#tmin')
const tsec=document.querySelector('#tsec')
const secondsInput=document.querySelector("#seconds-input");
let id;


if(localStorage.getItem("timertime")){
    let savedata = JSON.parse(localStorage.getItem("timertime"));
tmin.innerText = savedata.minutedata;
tsec.innerText = savedata.secondsdata;
}

minutesInput.addEventListener("input",(event)=>{   
       let data=event.target.value
       localStorage.setItem("timertime",JSON.stringify({
        minutedata:data
       }))    

   tmin.innerText=`${data}`;   
})
secondsInput.addEventListener("input",(event)=>{   
  let data=event.target.value
let solve = JSON.parse(localStorage.getItem("timertime"));
solve["secondsdata"] = data;
localStorage.setItem("timertime", JSON.stringify(solve));
   tsec.innerText=`${data}`;   
})  
tstart.addEventListener("click",()=>{
      minutesInput.value="";
    secondsInput.value="";
  
      let solve = JSON.parse(localStorage.getItem("timertime")); 
      clearInterval(id);
     if(tsec.innerText=="00"){
solve["secondsdata"] = "0";
localStorage.setItem("timertime", JSON.stringify(solve));
     }     
     if(parseInt(tmin.innerText) !== 0 || parseInt(tsec.innerText) !== 0){      
           minutesInput.disabled="true"; 
     secondsInput.disabled="true"; 
    id=setInterval(()=>{  
         tsec.innerText=parseInt(tsec.innerText)-1;
         solve.secondsdata= tsec.innerText; 
         console.log(solve.secondsdata)      
     if(parseInt(tsec.innerText)<0){
        tsec.innerText=59;
         solve.secondsdata= tsec.innerText;
        tmin.innerText=parseInt(tmin.innerText)-1;
          solve.minutedata=tmin.innerText; 
     }
     localStorage.setItem("timertime", JSON.stringify(solve));
       if (parseInt(tmin.innerText) == 0 && parseInt(tsec.innerText) == 0) {
        alert("Completed TimeInterval")
            clearInterval(id);
            tmin.innerText = "00";
            tsec.innerText = "00";
            localStorage.removeItem("timertime")
        }   
    },1000);
}
})
tstop.addEventListener("click",()=>{
      clearInterval(id);
})
treset.addEventListener("click",()=>{    
   minutesInput.disabled = false;
  secondsInput.disabled = false;
  clearInterval(id);
tmin.innerText="00"
tsec.innerText="00"
localStorage.removeItem("timertime")
})
