
// Function to get currency excange rates by calling API
// using XMLHttpRequest using Promses: -

const getRatesFetchAPI = async function(baseCurrency = null) {

    // -----> API endpoint to fetch data
    const requestURL = baseCurrency === null
            ? "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
            : `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;

    
    // -----> Fetching Data from API
    const response = await fetch(requestURL);

    if(!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
    }

    return response.json();
};

export default getRatesFetchAPI;
