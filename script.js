const greetings = ["Hey", "Hello", "Howdy", "Wazzuuuuup", "Ahoy"];
const nicknames = [
  "Boomer",
  "Sport",
  "Kiddo",
  "Smarty",
  "Boo",
  "Pork Chop",
  "Chubs",
  "Cookie",
  "Bud",
  "Pancake",
];

const messages = [
  "Things will change. Even if it's for the worse.",
  "WAKE UP! Failure awaits you.",
  "Mondays are not the problem. Your life is the problem.",
  "Where there's will, there's a chance of things going wrong.",
  "You do not have limiting beliefs. You ARE a limited person.",
  "If at first you don't succeed then maybe you just suck.",
  "Never allow a motivational message to improve your shitty day.",
  "The path is long but the defeat is a guarantee.",
  "It' never to late to give up.",
  "You can't change your past, but you can screw up your future.",
];

const goodbye = [
  "Have a good one.",
  "See you on the other side.",
  "Stay classy.",
  "Peace out.",
  "Gotta roll.",
  "Happy trails.",
  "Goodbye, don't cry! We won't!",
  "That will do, pig.",
  "Don't let the door hit you on your way out.",
  "Time to go and start your failure journey.",
];

const newQuote = () => {
  let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  let randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)];
  let randomMessage = messages[Math.floor(Math.random() * messages.length)];
  let randomGoodbye = goodbye[Math.floor(Math.random() * goodbye.length)];
  let randomQuote = `${randomGreeting}, ${randomNickname}! ${randomMessage} ${randomGoodbye} `;
  document.getElementById("quote-display").innerHTML = randomQuote;
};
// Function is working. Need to assign function to button element on HTML
