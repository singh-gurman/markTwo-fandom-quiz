// Dependencies
var readlineSync = require("readline-sync");
const chalk = require("chalk");

// Theme created using Chalk
const wrongAnswer = chalk.red.bold.underline.bgBlack;
const rightAnswer = chalk.green.bold.underline.bgBlack;
const infoTextColor = chalk.cyan.bold.bgBlack;
const impInfoTextColor = chalk.white.bold.bgBlack.underline;
const headingColor = chalk.yellow.bold.bgBlack.underline;
const questionColor = chalk.black.bold.italic.bgCyan.underline;
const scoreLowColor = chalk.black.bold.bgRed.underline;
const scoreHighColor = chalk.black.bold.bgGreen.underline;
const scoreMidColor = chalk.black.bold.bgYellow.underline;

// Section 01
var score = 0;
console.log(
  impInfoTextColor(
    "Hi there!.. This is a Quiz about the FIFA World Cup 2022..."
  )
);

//Welcoming the user
var userName = readlineSync.question(infoTextColor("Please enter your name "));
console.log(headingColor("Welcome", userName.toUpperCase() + "!..."));

//Function to print dots and dashes to give some space
function dotsAndDashes() {
  console.log("...............................");
  console.log("-------------------------------");
}
dotsAndDashes();

//Intro to level-1
console.log(
  impInfoTextColor("The Quiz consists of three Levels - 1 , 2 and 3")
);
console.log(
  infoTextColor(
    "There are a total of 15 questions in this Quiz and you'll get 1 point for each correct answer. "
  )
);
console.log(
  impInfoTextColor("Score 13 or more points to get an extra bonus question!")
);
dotsAndDashes();

console.log(headingColor("Let's get started with Level-1 "));
console.log(impInfoTextColor("Answer these questions in one word..."));

//function to check answers
function game(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(rightAnswer("You're Right!"));
    score++;
    // console.log("Your score is now ", score)
  } else {
    console.log(wrongAnswer("You're Wrong!"));
  }
}

//question set for level-1
var questionSet1 = [
  {
    question: "Which country hosted the World Cup 2022? ",
    answer: "qatar",
  },
  {
    question: "How many teams took part in this edition of the World Cup? ",
    answer: "32",
  },
  {
    question: "Which team won the FIFA World Cup 2022? ",
    answer: "argentina",
  },
  {
    question: "Which team finished as the Runners-up? ",
    answer: "france",
  },
  {
    question: "Which team finished Third in the tournament? ",
    answer: "croatia",
  },
  {
    question: "Who was the player of the tournament at this World Cup? ",
    answer: "messi",
  },
];

//looping through level-1 questions
for (i = 0; i < questionSet1.length; i++) {
  game(questionColor(questionSet1[i].question), questionSet1[i].answer);
}

//checking score and outputting score with appropriate bgColor (high=green , medium=yellow , low=red)
if (score <= 3) {
  console.log(
    impInfoTextColor(
      "Your score after Level-1 is:",
      scoreLowColor(score + "/6")
    )
  );
} else if (score == 6) {
  console.log(
    impInfoTextColor(
      "Your score after Level-1 is:",
      scoreHighColor(score + "/6")
    )
  );
} else {
  console.log(
    impInfoTextColor(
      "Your score after Level-1 is:",
      scoreMidColor(score + "/6")
    )
  );
}
dotsAndDashes();

// Section 02

//Intro to level-2
console.log(headingColor("Level-2 : Answer in YES or NO"));
console.log(infoTextColor("Press Y for YES , N for NO"));

//function for questions where correct answer is YES
function answerY(question) {
  if (readlineSync.keyInYN(question)) {
    console.log(rightAnswer("You're Right!"));
    score++;
  } else {
    console.log(wrongAnswer("You're Wrong!"));
  }
}

//function for questions where correct answer is NO
function answerN(question) {
  if (readlineSync.keyInYN(question)) {
    console.log(wrongAnswer("You're Wrong!"));
  } else {
    console.log(rightAnswer("You're Right!"));
    score++;
  }
}

//question set for questions whose correct answer is YES
var questionSetY = [
  {
    question: "Enzo Fernandez won the Young Player of the tournament award ",
  },
  {
    question: "The final match was decided off in a penalty shoot-out ",
  },
];

//question set for questions whose correct answer is NO
var questionSetN = [
  {
    question: "Messi managed to score a hat-trick in the final ",
  },
  {
    question:
      "Brasil were eliminated at the Semi final stage of the tournament ",
  },
];

//looping through questions of level-2
for (var i = 0; i < questionSetY.length; i++) {
  answerY(questionColor(questionSetY[i].question));
  answerN(questionColor(questionSetN[i].question));
}

//checking the total score after level-2 and consoling it with appropriate bgColor
if (score == 10) {
  console.log(
    impInfoTextColor(
      "Your score after Level-1 and Level-2 is:",
      scoreHighColor(score + "/10")
    )
  );
} else if (score <= 5) {
  console.log(
    impInfoTextColor(
      "Your score after Level-1 and Level-2 is:",
      scoreLowColor(score + "/10")
    )
  );
} else {
  console.log(
    impInfoTextColor(
      "Your score after Level-1 and Level-2 is:",
      scoreMidColor(score + "/10")
    )
  );
}

dotsAndDashes();
// Section 03

//Intro to level-3
console.log(headingColor("Level-3 : Select the correct answer"));

//question set for level-3
var questionSet3 = [
  {
    question: "Which keeper won the Golden Glove at this World Cup? ",
    answer: "Emiliano Martinez",
  },
  {
    question: "Who won the most Man of the Match awards at this World Cup? ",
    answer: "Messi",
  },
  {
    question: "Who won the Golden Boot at this World Cup?",
    answer: "Mbappe",
  },
  {
    question: "Which of these teams finished fourth at this World Cup?",
    answer: "Morocco",
  },
  {
    question:
      "Which of these teams defeated both Spain and Germany at this World Cup?",
    answer: "Japan",
  },
];

//Options for level-3 questions
var options = [
  ["Hugo Lloris", "Emiliano Martinez", "Yassine 'Bono'", "Dominik Livakovic"],
  ["De Bruyne", "Alvarez", "Messi", "Mbappe"],
  ["Messi", "Mbappe", "Alvarez", "Harry Kane"],
  ["Morocco", "Brasil", "Portugal", "Spain"],
  ["Morocco", "Croatia", "France", "Japan"],
];

//function to ask and then check the answer of level-3 questions
function optionsQues(options) {
  console.log(questionColor(questionSet3[i].question));
  userAnswer = readlineSync.keyInSelect(
    options,
    infoTextColor("PRESS ONE OF THE KEYS")
  );
  console.log(impInfoTextColor("You selected " + options[userAnswer]));

  if (options[userAnswer] == questionSet3[i].answer) {
    console.log(rightAnswer("You're Right!"));
    score++;
  } else {
    console.log(wrongAnswer("You're Wrong!"));
  }
}

//looping through level-3 questions
for (var i = 0; i < questionSet3.length; i++) {
  optionsQues(options[i]);
}

//checking the total score after level-3 and consoling it with appropriate bgColor
if (score >= 13) {
  console.log(
    impInfoTextColor("Your final score is: ", scoreHighColor(score + "/15"))
  );
} else if (score <= 7) {
  console.log(
    impInfoTextColor("Your final score is: ", scoreLowColor(score + "/15"))
  );
} else {
  console.log(
    impInfoTextColor("Your final score is: ", scoreMidColor(score + "/15"))
  );
}
dotsAndDashes();

// The Special question ;)

//object containing the special question
questionSpecial = {
  question: "Who is your GOAT? ;) ",
  answer: "Messi",
};
//options for the special question
var Goats = ["Messi", "Ronaldo"];

//Conditional statement to decide whether user will get special question or not based on their score
if (score >= 13) {
  console.log(
    headingColor(
      "Congrats! you've scored",
      scoreHighColor(score),
      "points in the game..."
    )
  );
  console.log(impInfoTextColor("Here's a special bonus question for you!"));
  //asking special question
  console.log(questionColor(questionSpecial.question));
  userGoat = readlineSync.keyInSelect(
    Goats,
    infoTextColor("Your response will be confidential..."),
    {
      hideEchoBack: true,
    }
  );

  //checking the answer for special question (there is no right or wrong answer!)
  if (Goats[userGoat] == questionSpecial.answer) {
    console.log(impInfoTextColor("You really know ball buddy!.. "));
    console.log(headingColor("RESPECT++"));
  } else {
    console.log(impInfoTextColor("I agree to disagree (*_*) "));
  }
  //if user did not meet the condition to get the special question
} else {
  console.log(
    headingColor(
      "Seems like you've missed the bonus question this time, replay the Quiz and try to score 13 points or more to unlock the bonus question!.."
    )
  );
}
dotsAndDashes();

//list of highScorers with their highScores
var highScorerList = [
  {
    name: "Amanjit",
    score: 15,
  },
  {
    name: "Harsh",
    score: 14,
  },
];

//function to print all highScores
function highScores() {
  console.log(infoTextColor("High Scores List:"));
  for (var i = 0; i < highScorerList.length; i++) {
    console.log(
      scoreHighColor(highScorerList[i].name, "-", highScorerList[i].score)
    );
  }
}
//calling the above function
highScores();

dotsAndDashes();

console.log(
  impInfoTextColor(
    "To get your score added to the High Scores List , send a screenshot of your score to me!.."
  )
);

dotsAndDashes();

//The Outro
console.log(infoTextColor("Press RUN to take the Quiz again!"));
console.log(impInfoTextColor(".......THE END......."));
