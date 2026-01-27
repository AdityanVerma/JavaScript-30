
// Function to get currency excange rates by calling API
// using XMLHttpRequest using Callback: -

/*
    XMLHttpRequest readyState values:

    Value | State              | Description
    -----------------------------------------------
    0     | UNSENT             | Object created, open() not called
    1     | OPENED             | open() has been called
    2     | HEADERS_RECEIVED   | send() called, headers received
    3     | LOADING            | Response is downloading (partial data)
    4     | DONE               | Request completed successfully
*/

/*
    1. create request
    2. open connection
    3. send request
    4. listen for state changes
    5. read response
*/

const getRatesXMLCallback = function(baseCurrency = null, callback) {
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // API endpoint to fetch data
    let requestURL;
    if (baseCurrency === null) {
        requestURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`;
    } else {
        requestURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // -----> Create a new XMLHttpRequest object
    // XMLHttpRequest behaves like a class, so we create its instance
    const request = new XMLHttpRequest();
    console.log("UNSENT", request.readyState, "STATUS", request.status); // readyState will be 0

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // -----> Initialize / Open the request
    // GET → HTTP method
    // requestURL → API endpoint
    request.open("GET", requestURL);
    console.log("OPENED", request.readyState, "STATUS", request.status); // readyState will be 1

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // -----> Send / Listen / Read
    request.onreadystatechange = function () {

        // Log current readyState
        console.log("STATE", request.readyState, "STATUS", request.status);

        // When request is fully completed
        if (request.readyState === 4 && request.status === 200) {

            // responseText contains the response as a string (JSON here)
            const data = JSON.parse(this.responseText); // Parsing the data into JSON coming from URL

            // console.log(typeof data);
            // console.log(data);
            // console.log(data.usd);

            callback(data); // Sending data as callback
        }
    };

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // -----> Send the request to the server
    request.send();

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
};

export default getRatesXMLCallback;



/* --------------------------------------------------------- CODE ---------------------------------------------------------

"use strict";

const getRatesXMLCallback = function(baseCurrency, callback) {

    let requestURL;
    if (baseCurrency === null) {
        requestURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`;
    } else {
        requestURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;
    }

    const request = new XMLHttpRequest();

    request.open("GET", requestURL);

    request.onreadystatechange = function() {

        if ((request.readyState === 4) && (request.status === 200)) {

            const data = JSON.parse(this.responseText);
            callback(data);
        }
    };
    request.send();
}

export default getRatesXMLCallback;

*/ //  ------------------------------------------------------- CODE -------------------------------------------------------