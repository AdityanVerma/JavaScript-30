"use strict";

// --------------------------- Refrencing Items ---------------------------
const generate_password_display = document.getElementById("password");
const copy_button = document.getElementById("copy-btn");

const range_slider = document.getElementById("range");
const range_display = document.getElementById("range-display");
const numbers_check = document.getElementById("numbers");
const symbols_check = document.getElementById("symbols");

// Define all character sets here. These act as the source pools from which
// the password characters will be randomly selected.
const alphabet_lower = "abcdefghijklmnopqrstuvwxyz";
const alphabet_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]:;<>,.?/";

let password_length = Number(range_slider.value);   // Typecasting String to Number (for correctness & clarity)
range_display.textContent = range_slider.value;     // dispose slider range value


// --------------------------- Random Char Func() ---------------------------
// This helper function (optional) can be used to
// separate random character generation logic
function getRandomChar(range) {

    return range[Math.floor(Math.random() * range.length)];
}


// -------------------------- Slider Length Func() --------------------------
// Listens for slider movement.
// Updates the password length in real time,
range_slider.addEventListener("input", function () {
    
    password_length = Number(range_slider.value);    // getting the slider value type-cast to Number()
    range_display.textContent = range_slider.value;  // dispose slider range value
    generate_password();                             // generating password with new length
});


// ------------------------- Checkbox Change Func() -------------------------
// This section should listen for checkbox changes
// and trigger password regeneration when toggled.
numbers_check.addEventListener("change", generate_password);
symbols_check.addEventListener("change", generate_password);


// -------------------------- Copy Password Func() --------------------------
copy_button.addEventListener("click", () => {
    navigator.clipboard.writeText(generate_password_display.value);

    const original = copy_button.innerHTML;
    copy_button.innerHTML = "Copied!";

    setTimeout(() => {
        copy_button.innerHTML = original;
    }, 1200);
});


// ------------------------ Generate Password Func() ------------------------
// This function is responsible for:
// 1. Building the allowed character pool
// 2. Generating a random password of selected length
// 3. Updating the password display input
function generate_password()
{
    // checking the availability of characters
    let range = alphabet_lower + alphabet_upper;

    if (numbers_check.checked) {
        range += numbers;
    }
    
    if (symbols_check.checked) {
        range += symbols;
    }

    let password = ""; // password container

    // HERE: generating password
    for (let i = 0; i < password_length; i++) {
        password += getRandomChar(range);
    }

    // password display manipulation
    generate_password_display.value = password;
}
generate_password();