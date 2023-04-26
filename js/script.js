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

const answers_chinese = [
  "肯定的",
  "毫无疑问",
  "你可以依靠它",
  "是的，绝对的",
  "它肯定如此",
  "在我看来，是的",
  "很可能",
  "是的",
  "前途光明",
  "迹象表明是的",
  "回答模糊，请再试一次",
  "最好现在不要告诉你",
  "请稍后再问",
  "现在无法预测",
  "集中注意力再问一遍",
  "不要指望",
  "前景不太好",
  "我的消息来源说不",
  "非常怀疑",
  "我的回答是否定的",
  ];
  
const negativeAnswers_chinese = [
"不",
"我的消息来源说不",
"前景不太好",
"非常怀疑",
"不要指望",
"最好现在不要告诉你",
"现在无法预测",
"集中注意力再问一遍",
"回答模糊，请再试一次",
"请稍后再问",
"我头疼",
"很难说",
"我不知道",
"我不在意",
"我不想知道",
"看起来不妙",
"它是否定的",
"这是否定的",
"这是不行的",
"这是肯定不行的",
"这绝对不行",
];


  
// Script for 'normal' 8-ball settings
function shake() {
  const eightBall = document.getElementById("eight-ball-image");
  eightBall.classList.add("shake");

  // wait for the animation to end, then remove the class
  setTimeout(() => eightBall.classList.remove("shake"), 1000);

  // add the code for generating an answer here
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


// Open settings pop-up when settings button is clicked
document.getElementById("settings-btn").addEventListener("click", function() {
  document.getElementById("settings-popup").style.display = "block";
});

// Save language preference when "Save" button is clicked
document.getElementById("save-settings").addEventListener("click", function() {
  var selectedLanguage = document.querySelector('input[name="language"]:checked').value;
  // Save selected language to local storage
  localStorage.setItem("language", selectedLanguage);
  // Apply selected language to application interface
  applyLanguagePreference(selectedLanguage);
  // Close settings pop-up
  document.getElementById("settings-popup").style.display = "none";
});

// Apply user's language preference to application interface
function applyLanguagePreference(language) {
  // Code to change application interface language goes here

  /*Chinese start code*/

if (language === "chinese") {
  const answerDiv = document.getElementById("answer");
  const settingsPopup = document.getElementById("settings-popup");
  
  // Update answers to Chinese
  answers.forEach((answer, i) => {
    answers[i] = answers_chinese[i];
  });
  negativeAnswers.forEach((answer, i) => {
    negativeAnswers[i] = negativeAnswers_chinese[i];
  });
  
  // Update answer div text to Chinese
  answerDiv.textContent = "按下回车键查看答案。";
  
  // Update settings popup text to Chinese
  const chineseLabel = settingsPopup.querySelector("label[for='chinese']");
  const englishLabel = settingsPopup.querySelector("label[for='english']");
  chineseLabel.textContent = "中文";
  englishLabel.textContent = "英文";
  settingsPopup.querySelector("p").textContent = "选择语言：";
  settingsPopup.querySelector("#save-settings").textContent = "保存";
}

/* Chinese end code*/
  
}


  

