const birthDay = " March 2 2022" ;
const DaysEl = document.getElementById("day");
const HoursEl = document.getElementById("hour");
const MinutesEl = document.getElementById("min");
const secondsEl = document.getElementById("sec");

function count() {

    const myBirth = new Date(birthDay) ;
    currentDate = new Date() ;

    const totalsec = (myBirth - currentDate) / 1000 ; 

    const seconds = Math.floor(totalsec)%60 ;
    // console.log(sec)
    const minutes = Math.floor(totalsec / 60 )% 60 ;  
    const months =  Math.floor(totalsec /3600) % 24 ;
    const days = Math.floor(totalsec / 3600 / 24);

    DaysEl.innerHTML= days;
    HoursEl.innerHTML= months;
    MinutesEl.innerHTML= minutes;
    secondsEl.innerHTML = seconds;

}


count();
setInterval(count,1000)
