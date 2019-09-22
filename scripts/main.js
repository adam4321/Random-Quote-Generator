
// 2D array holding quotes and authors

let myArray = new Array(
['Don\'t cry because it\'s over, smile because it happened.', 'Dr.Seuss'],
['There is a natural aristocracy among men. The grounds of this are virtue and talents.', 'Thomas Jefferson'],
['Be yourself; everyone else is already taken.', 'Oscar Wilde'],
['Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 'Albert Einstein'],
['No one can make you feel inferior without your consent.', 'Eleanor Roosevelt'],
['Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.', 'Marilyn Monroe'], 
['Always forgive your enemies; nothing annoys them so much.', 'Oscar Wilde'], 
['Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).', 'Mark Twain'], 
['The fool doth think he is wise, but the wise man knows himself to be a fool.', 'William Shakespeare'], 
['I have not failed. I\'ve just found 10,000 ways that won\'t work.', 'Thomas A. Edison'], 
['Outside of a dog, a book is man\'s best friend. Inside of a dog it\'s too dark to read.', 'Groucho Marx'], 
['A day without sunshine is like, you know, night.', 'Steve Martin'], 
['Never put off till tomorrow what may be done day after tomorrow just as well.', 'Mark Twain'], 
['It is never too late to be what you might have been.', 'George Eliot'], 
['If you can\'t explain it to a six year old, you don\'t understand it yourself.', 'Albert Einstein'], 
['I\'m not afraid of death; I just don\'t want to be there when it happens.', 'Woody Allen'], 
['Folks are usually about as happy as they make their minds up to be.', 'Abraham Lincoln'], 
['Do what you can, with what you have, where you are.', 'Theodore Roosevelt'], 
['Life is like riding a bicycle. To keep your balance, you must keep moving.', 'Albert Einstein'], 
['The reason I talk to myself is because I\'m the only one whose answers I accept.', 'George Carlin'], 
['I have never let my schooling interfere with my education.', 'Mark Twain'], 
['The question isn\'t who is going to let me; it\'s who is going to stop me.', 'Ayn Rand'], 
['It is one of the blessings of old friends that you can afford to be stupid with them.', 'Ralph Waldo Emerson'], 
['An eye for an eye will only make the whole world blind.', 'Mahatma Gandhi'], 
['Creativity is knowing how to hide your sources.', 'C.E.M. Joad'], 
['The truth will set you free, but first it will piss you off.', 'Joe Klaas'], 
['It\'s the friends you can call up at 4 a.m. that matter.', 'Marlene Dietrich'], 
['I speak to everyone in the same way, whether he is the garbage man or the president of the university.', 'Albert Einstein'], 
['You can never be overdressed or overeducated.', 'Oscar Wilde'],
['Happiness is when what you think, what you say, and what you do are in harmony.', 'Mahatma Gandhi'], 
['If you don\'t know where you\'re going, any road\'ll take you there.', 'George Harrison'], 
['We\'ll be friends forever, won\'t we, Pooh?\" asked Piglet.\"Even longer,\" Pooh answered.', 'Larry Clemmons'], 
['Maybe our favorite quotations say more about us than about the stories and people we\'re quoting.', 'John Green'], 
['Do what you feel in your heart to be right - for you\'ll be criticized anyway.', 'Eleanor Roosevelt'], 
['There is only one thing that makes a dream impossible to achieve: the fear of failure.', 'Paulo Coelho'], 
['When you\'re in jail, a good friend will be trying to bail you out. A best friend will be in the cell next to you saying, \'Damn, that was fun\'.', 'Groucho Marx'], 
['When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That\'s relativity.', 'Albert Einstein'], 
['Those who believe in telekinetics, raise my hand.', 'Kurt Vonnegut'], 
['Most people are other people. Their thoughts are someone else\'s opinions, their lives a mimicry, their passions a quotation.', 'Oscar Wilde'], 
['Never memorize something that you can look up.', 'Albert Einstein'], 
['A clever person solves a problem. A wise person avoids it.', 'Albert Einstein'], 
['Facts do not cease to exist because they are ignored.', 'Aldous Huxley'], 
['Substitute \'damn\' every time you\'re inclined to write \'very\'; your editor will delete it and the writing will be just as it should be.', 'Mark Twain'], 
['It\'s only after we\'ve lost everything that we\'re free to do anything.', 'Chuck Palahniuk'], 
['If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.', 'J.R.R. Tolkien'], 
['Never go to bed mad. Stay up and fight.', 'Phyllis Diller'], 
['Reality is merely an illusion, albeit a very persistent one.', 'Albert Einstein'], 
['I hope that in this year to come, you make mistakes. Because if you are making mistakes...you\'re Doing Something.', 'Neil Gaiman'], 
['A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.', 'Winston S. Churchill'], 
['I would challenge you to a battle of wits, but I see you are unarmed!', 'William Shakespeare'], 
['If we knew what it was we were doing, it would not be called research, would it?', 'Albert Einstein']);

// Function for calling a random array element

function getValue() {
    let idx = Math.floor(Math.random() * myArray.length);
    let quote = myArray[idx][0];
    let author = myArray[idx][1];

    document.getElementById("text-area").innerHTML = `${quote}<br><br> - ${author}`; 
}

// Initial page load call to the quote randomizing function

getValue();

// Event listener for new quote button

document.getElementById('new-quote-button').addEventListener('click', getValue);


// Function to tweet the current quote on Twitter

function tweetIt() {
    let phrase = document.getElementById('text-area').innerText;
    let tweetUrl = `https://twitter.com/share?text=${encodeURIComponent(phrase)}#quotes`;

    window.open(tweetUrl);
}

// Event listener for tweeting quote

document.getElementById('twit-button').addEventListener('click', tweetIt);

// Function to allow the user to go back without the back button 

function goBack() {
    window.history.back();
}

// Event listener for back function

document.getElementById('back-button').addEventListener('click', goBack);
