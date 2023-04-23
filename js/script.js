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
  
  function shake() {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById("answer").innerHTML = randomAnswer;
    document.getElementById("question-input").value = "";
    document.getElementById("question-input").placeholder = "Type your question here...";
  }
  