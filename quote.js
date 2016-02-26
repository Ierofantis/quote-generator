var aquote = new Array;
aquote[0] = "\"Don't cry because it's over, smile because it happened ― Dr. Seuss.\"";
aquote[1] = "\"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best ― Marilyn Monroe.\"";
aquote[2] = "\"Be yourself; everyone else is already taken ― Oscar Wilde.\"";
aquote[3] = "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe ― Albert Einstein.\"";
aquote[4] = "\"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind ― Bernard M. Baruch.\"";
aquote[5] = "\"You know you're in love when you can't fall asleep because reality is finally better than your dreams ― Dr. Seuss.\"";
aquote[6] = "\"A room without books is like a body without a soul ― Marcus Tullius Cicero.\"";
aquote[7] = "\"So many books, so little time ― Frank Zappa.\"";
aquote[8] = "\"You only live once, but if you do it right, once is enough ― Mae West.\"";
aquote[9] = "\"Be the change that you wish to see in the world ― Mahatma Gandhi.\"";
aquote[10] = "\"In three words I can sum up everything I've learned about life: it goes on ― Robert Frost.\"";
aquote[11] = "\"No one can make you feel inferior without your consent ― Eleanor Roosevelt.\"";
aquote[12] = "\"If you tell the truth, you don't have to remember anything ― Mark Twain.\"";
aquote[13] = "\"A friend is someone who knows all about you and still loves you ― Elbert Hubbard.\"";
aquote[14] = "\"Always forgive your enemies; nothing annoys them so much ― Oscar Wilde.\"";
aquote[15] = "\"Live as if you were to die tomorrow. Learn as if you were to live forever ― Mahatma Gandhi.\"";
aquote[16] = "\"I am so clever that sometimes I don't understand a single word of what I am saying ― Oscar Wilde.\"";
aquote[17] = "\"To live is the rarest thing in the world. Most people exist, that is all ― Oscar Wilde.\"";
aquote[18] = "\"Without music, life would be a mistake ― Friedrich Nietzsche.\"";
aquote[19] = "\"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment ― Ralph Waldo Emerson.\"";
aquote[20] = "\"Insanity is doing the same thing, over and over again, but expecting different results ― Narcotics Anonymous.\"";

var rdmQuote = Math.floor(Math.random() * aquote.length);

function quotes() {
  var rdmQuote = Math.floor(Math.random() * aquote.length);
  document.getElementById("txtbox").value = aquote[rdmQuote];

}

function twitter() {
  tweetThis = 'http://twitter.com/home/?status=' + document.getElementById("txtbox").value;
  // window.location.href = tweetThis;
  window.open(tweetThis, '_blank');
}