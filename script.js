let apiQuotes = [];

// Show new Quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote);
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl ='https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.jeson();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// On load
getQuotes();