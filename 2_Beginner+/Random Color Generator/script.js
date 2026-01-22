
// --------------- Generating a random HEX Color Code ---------------
// function generateRandomHEX() { return Math.floor((Math.random() * 16)); }

const randomColorHEX = function(){

    const HEX = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += HEX[Math.floor((Math.random() * 16))];
    }
    return color;
}
console.log(randomColorHEX());


// --------------- Genrating a random RGB Color Code ---------------
// function generateRandomRGB() { return parseInt((Math.random() * 256)); }

const randomColorRGB = function(){

    let r = parseInt((Math.random() * 256));
    let g = parseInt((Math.random() * 256));
    let b = parseInt((Math.random() * 256));

    return `rgb(${r}, ${g}, ${b})`;
}
console.log(randomColorRGB());



// --------------- Refrencing Items ---------------
const container = document.body.querySelector('.container')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const textContainer = document.querySelector('.text-cont')
const messageToStop = document.createElement('p')

// --------------- Getting started ---------------
const startChangingColor = function() {

    // changing background color
    container.style.backgroundColor = randomColorRGB();

}

let intervalId; // intervalId to store setInterval() refrence

// --------------- Start Button Function ---------------
start.addEventListener('click', function() {

    // it will do not let the code run "START" button more than once
    // running start button more than once will override the interval
    // and it will make it impossible to stop the interval loop with "STOP" button 
    if (!intervalId) {
        intervalId = setInterval(startChangingColor, 1000);
        console.log("STARTED!!");
    }

    // adding the message
    messageToStop.innerHTML = "Stop will end the continuous changing of Background Color.";
    textContainer.appendChild(messageToStop);
    textContainer.firstElementChild.style.display = "none";

});

// --------------- Stop Button Function ---------------
stop.addEventListener('click', function() {

    clearInterval(intervalId)
    console.log("STOPPED!!");

    intervalId = null; // flushing the intervalId (good practice)

    // making the message default
    messageToStop.remove();
    textContainer.firstElementChild.style.display = "inline";

});
