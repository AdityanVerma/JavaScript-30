
// Function to get currency excange rates by calling API
// using XMLHttpRequest using Promses: -

const getRatesXMLPromise = function(baseCurrency = null) {

    // returning a promise if get the data
    return new Promise((resolve, reject) => {

        // -----> API endpoint to fetch data
        let requestURL;
        if (baseCurrency === null) {
            requestURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`;
        } else {
            requestURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;
        }

        // -----> Creating XMLHttpRequest
        const request = new XMLHttpRequest();   // Create a new XMLHttpRequest object
        request.open("GET", requestURL);        // Initialize / Open the request

        request.onreadystatechange = function() {
            
            // When request is fully completed
            if (request.readyState === 4 && request.status === 200) {
                
                // responseText contains the response as a string (JSON here)
                const data = JSON.parse(this.responseText); // Parsing the data into JSON coming from URL
            
                resolve(data);
            }
        };

        request.send();        // Send the request to the server
    });
};

export default getRatesXMLPromise;
