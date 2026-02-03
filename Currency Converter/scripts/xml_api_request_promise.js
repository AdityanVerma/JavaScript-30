
// Function to get currency excange rates by calling API
// using XMLHttpRequest using Promses: -

const getRatesXMLPromise = function(baseCurrency = null) {

    // returning a promise if get the data
    return new Promise((resolve, reject) => {

        // -----> API endpoint to fetch data
        const requestURL = baseCurrency === null
            ? "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
            : `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;

        // -----> Creating XMLHttpRequest
        const request = new XMLHttpRequest();   // Create a new XMLHttpRequest object
        request.open("GET", requestURL);        // Initialize / Open the request

        request.onload = function() {
            
            // When request is fully completed
            if (request.status === 200) {
                
                // responseText contains the response as a string (JSON here)
                try {
                    const data = JSON.parse(this.responseText); // Parsing the data into JSON coming from URL
                    resolve(data);
                } catch (parseError) {
                    reject(new Error("Invalid JSON response"));
                }
            } else {
                reject(new Error(`Request failed with status ${request.status}`));
            }
        };

        request.onerror = function () {
            reject(new Error("Network error occurred"));
        };

        request.send();        // Send the request to the server
    });
};

export default getRatesXMLPromise;
