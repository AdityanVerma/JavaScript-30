let counterDisplay = document.getElementById('display');

let counterDown = document.getElementById('counter-down');
let counterReset = document.getElementById('reset');
let counterUp = document.getElementById('counter-up');

counterDown.addEventListener('click', () => {
    counterDisplay.innerHTML--;
});

counterReset.addEventListener('click', () => {
    counterDisplay.innerHTML = `0`;
});

counterUp.addEventListener('click', () => {
    counterDisplay.innerHTML++;
});
