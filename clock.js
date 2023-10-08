//some variable declaration
let display = document.getElementById("clock");
const audio = new Audio("assets/mixkit-retro-game-emergency-alarm-1000.wav");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;
//digital clock functioning
function updateTime() {
   const date = new Date();
   const hours = formatTime(date.getHours());
   const minutes = formatTime(date.getMinutes());
   const seconds = formatTime(date.getSeconds());
   display.innerText = hours + ":" + minutes + ":" + seconds ;
}
function formatTime(time){
    if(time < 10) 
      return "0" + time;
      return time;
}
setInterval(updateTime,1000);

//set alarm functioning
function setAlarmTime(value){
   alarmTime = value;

}
function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const Timetoalarm = new Date(alarmTime);
        

      if(Timetoalarm >  current){
        const timeout = Timetoalarm.getTime() - current.getTime();
        alarmTimeout = setTimeout(function() {
          audio.play();
          }, timeout);
     }
  }
}
//clear alarm functioning
function clearAlarm() {
    audio.pause();

    if(alarmTimeout){
        clearTimeout(alarmTimeout);
       
    }
}



