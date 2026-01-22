let counterDisplay = document.getElementById('display');

let counterDown = document.getElementById('counter-down');
let counterReset = document.getElementById('reset');
let counterUp = document.getElementById('counter-up');

let count = 0;

counterDown.addEventListener('click', () => {
    count--;
    counterDisplay.textContent = count;
});

counterReset.addEventListener('click', () => {
    count = 0;
    counterDisplay.textContent = count;
});

counterUp.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});
