const answers = [
    "It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes, definitely",
    "It is decidedly so",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to yes",
    "Reply hazy try again",
    "Better not tell you now",
    "Ask again later",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful",
    "My reply is no",
  ];

const negativeAnswers = [
    "No",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Don't count on it",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Reply hazy, try again",
    "Ask again later",
    "I have a headache",
    "It's hard to say",
    "I don't know",
    "I don't care",
    "I don't want to know",
    "It doesn't look good",
    "It's a no",
    "It's a negative",
    "It's a no-go",
    "It's a definite no",
    "It's a hard no",
  ];
  
// Script for 'normal' 8-ball settings
function shake() {
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  document.getElementById("answer").innerHTML = randomAnswer;
  document.getElementById("question-input").value = "";
  document.getElementById("question-input").placeholder = "Type your question here...";
  document.getElementById("audio").play();
}

// 8-Ball generates a new answer when user presses 'Enter' in the question-input
document.getElementById("question-input").addEventListener("keypress", function(event) {
  if (event.key == "Enter" && document.getElementById("question-input").value != "") {
    shake();
  }
});
  