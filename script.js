const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = [];

// Show new Quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl ='https://zenquotes.io/api/today';
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