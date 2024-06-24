// Math.floor(Math.random() * 10);
var generateButton = document.getElementById("generateButton");
var quoteElement = document.getElementById("quote");


var quotes = [
    "So many books, so little time. ― Frank Zappa",
 "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. ― Marilyn Monroe",
 "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ― Albert Einstein",
 "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . . ― C.S. Lewis, The Four Loves",
 "SI've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ― Maya Angelou",
 "A friend is someone who knows all about you and still loves you. ― Elbert Hubbard",
 "To live is the rarest thing in the world. Most people exist, that is all. ― Oscar Wilde",
 "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do ― Steve Jobs",
 "It is better to be hated for what you are than to be loved for what you are not. ― Andre Gide, Autumn Leaves"
];





function generateQuote() {
 var randomIndex = Math.floor(Math.random() * quotes.length);
 quoteElement.textContent = quotes[randomIndex];
}

generateButton.addEventListener("click", generateQuote);