const quotes = [{
    quote: "When you go through hardships and decide not to surrender, that is strength",
    author: "Arnold Schwarzenegger",
},
{
    quote: "It is kind of fun to do the impossible",
    author: "Walt Disney",
},
{
    quote: "There are better starters than me but I’m a strong finisher",
    author: "Usain Bolt",
},
{
    quote: "Tough times never last, but tough people do",
    author: "Robert H. Schuller",
},
{
    quote: "I’ve failed over and over and over again in my life and that is why I succeed",
    author: "Michael Jordan",
},
{
    quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is",
    author: "Angelina Jolie",
},
{
    quote: "But I know, somehow, that only when it is dark enough can you see the stars",
    author: "Martin Luther King",
},
{
    quote: "Grind Hard, Shine Hard",
    author: "Dwayne Johnson",
},
{
    quote: "I didn’t get there by wishing for it or hoping for it, but by working for it",
    author: "Estée Lauder",
},
{
    quote: "You cannot change what you are, only what you do",
    author: "Philip Pullman",
},
{
    quote: "Lay a firm foundation with the bricks that others throw at you",
    author: "David Brinkley",
}]

const quote = document.querySelector("#quote")

const todayQuote = quotes[Math.round(Math.random() * quotes.length)]

quote.innerText = `${todayQuote.quote} - ${todayQuote.author}`