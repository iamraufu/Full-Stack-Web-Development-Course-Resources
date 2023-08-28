document.getElementById("header").innerHTML =
    `
<h1>Motivational Quotes</h1>
`

document.getElementById('container').innerHTML =
    `
<button onClick="getQuote()" id="btn">Click to get Quote</button>
<div id="quotes"></div>
`
function getQuote() {
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = quotes => {
    document.getElementById('btn').style.display = 'none'
    quotes.forEach(quote =>{
        const quotesContainer = document.getElementById('quotes')
        const quotesParagraph = document.createElement('p')
        quotesParagraph.innerHTML = 
        `
        <p>${quote.text}</p>
        <small>- ${quote.author}</small>
        `
        quotesContainer.appendChild(quotesParagraph)
    })
}