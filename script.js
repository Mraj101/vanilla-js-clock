let seconds;
let minutes;
let hours;
let livetime;
let time = document.querySelector("#times");
setInterval(()=>{
a=new Date();
hours=a.getHours();
minutes=a.getMinutes();
seconds=a.getSeconds();
if(hours>12)
{
    hours=hours-12;
}
time.innerHTML=hours+":"+minutes+":"+seconds;
},1000);