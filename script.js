// Get a random quote from the API
async function getQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data;
  }
  
  // Update the quote and author text on the page
  function updateQuote() {
    getQuote().then(data => {
      const quoteText = document.getElementById('text');
      const quoteAuthor = document.getElementById('author');
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `— ${data.author}`;
    });
  }
  
  // On load, display a random quote
  document.addEventListener('DOMContentLoaded', () => {
    updateQuote();
  });
  
  // Add an event listener to the new quote button
  const newQuoteButton = document.getElementById('new-quote');
  newQuoteButton.addEventListener('click', () => {
    updateQuote();
  });
  
  // Add an event listener to the tweet button
  const tweetButton = document.getElementById('tweet-quote');
  tweetButton.addEventListener('click', () => {
    const quoteText = document.getElementById('text').textContent;
    const quoteAuthor = document.getElementById('author').textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quoteText}" ${quoteAuthor}`)}`;
    window.open(tweetUrl, '_blank');
  });
  
  // Add an event listener to the tumblr button
  const tumblrButton = document.getElementById('tumblr-quote');
  tumblrButton.addEventListener('click', () => {
    const quoteText = document.getElementById('text').textContent;
    const quoteAuthor = document.getElementById('author').textContent;
    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(quoteAuthor)}&content=${encodeURIComponent(quoteText)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    window.open(tumblrUrl, '_blank');
  });
  