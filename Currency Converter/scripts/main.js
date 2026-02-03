
import getRatesXMLCallback from "./xml_api_request_callback.js";
import getRatesXMLPromise from "./xml_api_request_promise.js";
import getRatesFetchAPI from "./fetch_api_request.js";

// --------------------------- Refrencing Items ---------------------------
const value_entered = document.getElementById("value-entered");
const value_evaluated = document.getElementById("value-evaluated");

const selector_from = document.getElementById("currency-from");
const selector_to = document.getElementById("currency-to");

const btn_swap = document.getElementById("btn-swap");
const btn_convert = document.getElementById("btn-convert");

// Storing the Current State
let currentState = {
    base,
    target,
    rate,
    amount
};

// --------------------------- Convertion Func() ---------------------------
function getConversionRate(base_currency, target_currency) {

    return base_currency[target_currency];
}

function getConvertedValue(conversion_amount, conversion_rate) {
 
    return (conversion_amount * conversion_rate).toFixed(3);
}

function setConvertedValue(conversion_amount, conversion_rate) {

    value_evaluated.value =  getConvertedValue(conversion_amount, conversion_rate);
}

function getRate(data) {

    const base_currency = data[selector_from.value];
    const target_currency = selector_to.value;
    
    const conversion_rate = getConversionRate(base_currency, target_currency);
    const conversion_amount = value_entered.value;
    
    setConvertedValue(conversion_amount, conversion_rate);

    currentState.base = base_currency;
    currentState.target = target_currency;
    currentState.rate = conversion_rate;
    currentState.amount = conversion_amount;
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

    
    // if ((selector_from.value === currentState.base) && (value_entered.value === currentState.amount)) {
    //     if (!(value_entered.value === currentState.amount)) {
    //         value_entered.value = getConvertedValue(value_entered.value, currentState.rate);
    //     }
    // } else {
        // --------> API Call (Getting Data from Server)
        // getRatesXMLCallback(selector_from.value, getRate);          // using XMLHttpRequest using Callback
        // getRatesXMLPromise(selector_from.value).then(getRate);      // using XMLHttpRequest using Promises
        getRatesFetchAPI(selector_from.value).then(getRate);      // using XMLHttpRequest using Fetch API
    // }
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

function initApp(data) {
    
    Object.keys(data).forEach(currency => {
        
        selector_from.appendChild(createOption(currency));
        selector_to.appendChild(createOption(currency));
    });

    selector_from.value = "usd";
    selector_to.value = "inr";
}


// --------> API Call (Getting Data from Server) at initial state --- [ Initial Data Loader ]

// getRatesXMLCallback(null, initApp);         // using XMLHttpRequest using Callback
// getRatesXMLPromise(null).then(initApp);     // using XMLHttpRequest using Promises
getRatesFetchAPI(null).then(initApp);     // using XMLHttpRequest using Promises
