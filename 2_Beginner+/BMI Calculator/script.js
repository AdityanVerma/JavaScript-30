/*
>> Form in HTML, submit in either POST or GET request 

>> By default,
form have submit button, in which
every information enter by user directly
send to server through URL.

>> To stop these default actions,
We have a method on events i.e. 'preventDefault'
which pervent the default behaviours of HTML Forms

*/

const form = document.querySelector('form')

// this 👇 usecase will give you empty result
// const height = parseInt(document.querySelector('#height').values)

form.addEventListener('submit', (e) => {

    // Stops the default behaviour of form
    e.preventDefault();

    // To get values from 'form',
    // we will get values in String data type
    // so we will use parseInt()
    /*
        1>> document.querySelector('#height')                   ## select element
        2>> document.querySelector('#height').value             ## get-values
        3>> parseInt(document.querySelector('#height').value)   ## String --> Int
    */
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')
    results.innerHTML = ""


    // ------------------------------ {{ MAIN LOGIC }} ------------------------------
    // NOTE: isNaN(height) <----> height !== NaN
    
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML += `Please give a valid height ${height}!!!<br>`
        results.style.color = "red"
    } if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML += `Please give a valid weight ${weight}!!!<br>`
        results.style.color = "red"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>BMI = ${bmi} kg/m2</span>`
        if(bmi < 19) results.innerHTML += ` (Underweight)`
        else if(bmi >= 19 && bmi < 25) results.innerHTML += ` (Normal)`
        else if(bmi >= 25 && bmi < 35) results.innerHTML += ` (Overweight)`
        else results.innerHTML += ` (Obesity)`
    }
});
