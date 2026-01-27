
import getRatesXMLCallback from "./xml_api_request_callback.js";

// --------------------------- Refrencing Items ---------------------------
const value_entered = document.getElementById("value-entered");
const value_evaluated = document.getElementById("value-evaluated");

const selector_from = document.getElementById("currency-from");
const selector_to = document.getElementById("currency-to");

const btn_swap = document.getElementById("btn-swap");
const btn_convert = document.getElementById("btn-convert");

// --------------------------- Convertion Func() ---------------------------
function getConversionRate(base_currency)
{
    return base_currency[selector_to.value];
}

function getRate(data)
{
    const base_currency = data[selector_from.value];

    const conversion_rate = getConversionRate(base_currency);
    
    const result = value_entered.value * conversion_rate;
    value_evaluated.value = result.toFixed(3);
}

// ---------------------------- Buttons Handler ----------------------------
/*
    click
      → API request
        → callback fires later
          → rate extracted
            → calculation
              → UI update
*/
btn_convert.addEventListener("click", function (){

    // --------> API Call (Getting Data from Server)
    getRatesXMLCallback(selector_from.value, getRate);          // using XMLHttpRequest using Callback
});

btn_swap.addEventListener('click', function () {
    const temp = selector_from.value;
    selector_from.value = selector_to.value;
    selector_to.value = temp;
});

// ---------------------------- Initial Loading State ----------------------------
function createOption(currency) {

    const option = document.createElement('option');

    option.value = currency;
    option.textContent = `${currency}`;

    return option;
}

function initialDataLoader(data) {
    
    Object.keys(data).forEach(currency => {
        
        selector_from.appendChild(createOption(currency));
        selector_to.appendChild(createOption(currency));
    });

    selector_from.value = "usd";
    selector_to.value = "inr";
}

getRatesXMLCallback(null, initialDataLoader);          // using XMLHttpRequest using Callback
