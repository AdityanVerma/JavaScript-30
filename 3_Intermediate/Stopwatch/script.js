
// --------------- Refrencing Items ---------------
const stopwatchDisplay = document.querySelector('#stopwatch');

const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const resume = document.querySelector('#resume');
const split = document.querySelector('#split');
const reset = document.querySelector('#reset');

const laps_section = document.querySelector('.laps');

let startTime;
let elapsedTime = 0;
let previousTime = 0;

let isRunning; // isRunning to store setInterval() refrence

let lapCount = 0;
let lastLapTimeStamp = 0;

// --------------- Format Time func() ---------------
function formatTime(time) {

    return String(time).padStart(2, "0");
}


// --------------- Update Display func() ---------------
function updateDisplay(hours, minutes, seconds, ms) {

    stopwatchDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatTime(ms)}`;
    // console.log(`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatTime(ms)}`);
}


// --------------- Run StopWatch func() ---------------
function runStopwatch(){

    let currentTime = Date.now();
    elapsedTime = previousTime + (currentTime - startTime);
    
    const ms = Math.floor((elapsedTime % 1000) / 10);
    const secs = Math.floor((elapsedTime / 1000) % 60);
    const mins = Math.floor((elapsedTime / 60000) % 60);
    const hours = Math.floor(elapsedTime / 3600000);
    // Time units should NEVER be rounded.
    // They should be floored.

    updateDisplay(hours, mins, secs, ms);
}


// --------------- Start Button func() ---------------
function startStopwatch() {

    // it will do not let the code run "START" button more than once
    // running start button more than once will override the interval
    // and it will make it impossible to stop the interval loop with "STOP" button 
    if (!isRunning) {
        startTime = Date.now();
        isRunning = setInterval(runStopwatch, 16);
        console.log("STARTED!!");
    }

    // button disable toggle
    start.disabled = true;
    pause.disabled = false;
    split.disabled = false;
    reset.disabled = false;
}


// --------------- Reset Button func() ---------------
function resetStopwatch() {

    clearInterval(isRunning);   // stop the stopwatch
    isRunning = null;           // reset running state

    startTime = undefined;      // clear start time
    elapsedTime = 0;            // reset elapsed time
    previousTime = 0;           // reset previous time

    updateDisplay(0, 0, 0, 0);  // reset UI display
    // button disable toggle
    start.disabled = false;     // enable start button
    pause.disabled = true;      // disable pause button
    resume.disabled = true;     // disable resume button
    split.disabled = true;      // disable split button
    reset.disabled = true;      // disable reset button

    // lap reset
    lapCount = 0;
    lastLapTimeStamp = 0;
    laps_section.innerHTML = ``;

    console.log("RESETTED!!");
}


// --------------- Pause Button func() ---------------
function pauseStopwatch() {

    previousTime = elapsedTime;
    clearInterval(isRunning);   // stop the stopwatch
    isRunning = null;           // reset running state

    // button disable toggle
    start.disabled = true;
    pause.disabled = true;
    resume.disabled = false;
    split.disabled = true;

    console.log("PAUSED!!");
}


// --------------- Resume Button func() ---------------
function resumeStopwatch() {
    
    if (!isRunning) {
        startTime = Date.now();
        isRunning = setInterval(runStopwatch, 16);
        console.log("RESUMED!!");
    }
    
    // button disable toggle
    start.disabled = true;
    resume.disabled = true;
    pause.disabled = false;
    split.disabled = false;
}


// --------------- Split Button func() ---------------
function snapshotTime() {
    
    const li = document.createElement('li');        // for time spliting
    const span = document.createElement('span');    // for time spliting
    const lap_time = document.createElement('time');    // for time spliting
    const total_time = document.createElement('time');    // for time spliting

    lapCount++;

    // ---------> lap index
    span.classList.add('lap-index');
    span.innerHTML = `#${lapCount}`;
    
    // ---------> total time
    total_time.classList.add('total-time');
    total_time.innerHTML = `
        ${formatTime(Math.floor(elapsedTime / 3600000))}:
        ${formatTime(Math.floor((elapsedTime / 60000) % 60))}:
        ${formatTime(Math.floor((elapsedTime / 1000) % 60))}.
        ${formatTime(Math.floor((elapsedTime % 1000) / 10))}
    `;
    
    // ---------> lap time
    let lapDuration = elapsedTime - lastLapTimeStamp;
    lastLapTimeStamp = elapsedTime;
    
    lap_time.classList.add('lap-time');
    lap_time.innerHTML = `
        ${formatTime(Math.floor(lapDuration / 3600000))}:
        ${formatTime(Math.floor((lapDuration / 60000) % 60))}:
        ${formatTime(Math.floor((lapDuration / 1000) % 60))}.
        ${formatTime(Math.floor((lapDuration % 1000) / 10))}
    `;
    
    // ---------> apending child
    li.appendChild(span);
    li.append(lap_time);
    li.append(total_time);

    laps_section.appendChild(li);
}


// --------------- Event Listener ---------------
start.addEventListener('click', startStopwatch);
reset.addEventListener('click', resetStopwatch);
pause.addEventListener('click', pauseStopwatch);
resume.addEventListener('click', resumeStopwatch);
split.addEventListener('click', snapshotTime);
