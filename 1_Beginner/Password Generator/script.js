"use strict";

// -----> password display block refrences
const generate_password_display = document.getElementById("password");
const copy_button = document.getElementById("copy-btn");

// -----> password manipulation block refrences
const range_slider = document.getElementById("range");
const range_display = document.getElementById("range-display");
const number_check = document.getElementById("numbers");
const symbols_check = document.getElementById("symbols");

// -----> CODE LOGIC: -
// ...
const alphabet_lower = "abcdefghijklmnopqrstuvwxyz";
const alphabet_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]:;<>,.?/";

let password_length = range_slider.value;
let numbers_include = false;
let symbols_include = false;

let range = alphabet_lower + alphabet_upper;

// ---> function for slider length
range_slider.addEventListener("input", function () {
    password_length = range_slider.value;
    range_display.textContent = range_slider.value;
    generate_password();
});

// ---> function generating random password
function generate_password() {
    // password container
    let password = "";

    // HERE: generating password
    for (let i = 0; i < password_length; i++) {
        password += range[Math.floor(Math.random() * range.length)];
    }

    // password display manipulation
    generate_password_display.value = password;
}
generate_password();
