const alarmbtn = document.querySelector('.alarm');
const statusid = document.querySelector('#status');
const list = document.querySelector("#list");
const minutealarm = document.querySelector("#minutealarm");
const houralarm = document.querySelector("#houralarm");
const ampm = document.querySelector("#ampm");
const multipleAlarm = document.querySelector(".multipleAlarm");
let alarmid = [];
//  alarm element
function createAlarmElement(hour, minute, ampmValue, shouldSetTimer = true) {
  multipleAlarm.style.display = "block";

  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "myButton";

  let h = hour < 10 ? "0" + hour : hour;
  let m = minute < 10 ? "0" + minute : minute;

  li.append(`${h}:${m}${ampmValue}`, delBtn);
  list.append(li);

  delBtn.addEventListener("click", () => {
    li.remove();

    let index = alarmid.findIndex(a => a.li === li);
    if (index !== -1) {
      clearTimeout(alarmid[index].id);
      alarmid.splice(index, 1);
    }

    let alarms = JSON.parse(localStorage.getItem("alarmtime")) || [];
    alarms.splice(index, 1);
    localStorage.setItem("alarmtime", JSON.stringify(alarms));

    if (document.querySelectorAll("li").length === 0) {
      multipleAlarm.style.display = "none";
    }
  });

  if (shouldSetTimer) {
    let now = new Date();
    let hour24 = parseInt(hour);
    let minuteInt = parseInt(minute);

    if (ampmValue === "PM" && hour24 !== 12) hour24 += 12;
    if (ampmValue === "AM" && hour24 === 12) hour24 = 0;

    let alarmTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour24,
      minuteInt,
      0
    );

    if (alarmTime <= now) {
      alarmTime.setDate(alarmTime.getDate() + 1);
    }

    let timeToAlarm = alarmTime - now;

    let id = setTimeout(() => {
      alert(`Alarm ringing: ${h}:${m}${ampmValue}`);
      statusid.innerText = "Alarm finished.";
    }, timeToAlarm);

    alarmid.push({ id: id, li: li });
  }

  statusid.innerText = "Alarm set!";
}

//call 
if(localStorage.getItem("alarmtime")){
    let savedata = JSON.parse(localStorage.getItem("alarmtime"));

    savedata.forEach((alarm) => {
        createAlarmElement(alarm.hoursdata, alarm.minutedata, alarm.ampmdata, false);
    });
  }
// Set new alarm
alarmbtn.addEventListener("click", () => {
  if (
    minutealarm.value !== "" &&
    houralarm.value !== "" &&
    ampm.value !== ""
  ) {
    const hour = parseInt(houralarm.value);
    const minute = parseInt(minutealarm.value);
    const ampmValue = ampm.value;

    if (hour < 1 || hour > 12 || minute < 0 || minute > 59) {
      alert("Invalid time input!");
      return;
    }

    createAlarmElement(hour, minute, ampmValue);

    let savedAlarms = JSON.parse(localStorage.getItem("alarmtime")) || [];
    savedAlarms.push({
      hoursdata: hour,
      minutedata: minute,
      ampmdata: ampmValue
    });
    localStorage.setItem("alarmtime", JSON.stringify(savedAlarms));

    houralarm.value = "";
    minutealarm.value = "";
    ampm.value = "";
  } else {
    statusid.innerText = "Please enter full alarm details.";
  }
});
