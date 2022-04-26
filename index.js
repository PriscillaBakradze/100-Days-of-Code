const daysOne = document.getElementById("days");
const hoursOne = document.getElementById("hours");
const minutesOne = document.getElementById("minutes");
const secondsOne = document.getElementById("seconds");

const Christmas = "25 Dec 2022";

function countdown(){
    const christmasDate = new Date(Christmas);
    const currentDate = new Date();

    const totalSeconds = (christmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysOne.innerHTML = days;
    hoursOne.innerHTML = formatTime(hours);
    minutesOne.innerHTML = formatTime(minutes);
    secondsOne.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);
