let seconds = 00;
let tens = 00;
let mins = 00;
let hours = 00;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getmins = document.querySelector('.mins');
let getHours = document.querySelector('.hours');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');

let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 20);
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    mins = '00';
    seconds = '00';
    hours = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getmins.innerHTML = mins;
    getHours.innerHTML = hours;
})

function startTimer()
{
    tens++;
    if (tens < 9){
        getTens.innerHTML = '0' + tens;
    }

    if(tens > 9){
        getTens.innerHTML = tens;
    }

    if(tens > 59){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }

    if(seconds > 9) {
        getSeconds.innerHTML = seconds;   
    }

    if(seconds > 59)
    {
        mins++;
        getmins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9)
    {
        getSeconds.innerHTML = mins;
    }

    if (mins > 59)
    {
        hours++;
        getHours.innerHTML = '0' + hours;
        mins = 0;
        getmins.innerHTML = '0' + mins;
    }
    
    if (hours > 9)
    {
        getHours.innerHTML = hours;
    }
}