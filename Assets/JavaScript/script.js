//TODO:
//Create a variable for countdown timer
//Create a variable to keep track of the leaderboard
//Click START to begin quiz
//Once the start button is clicked the timer will begin and the first question will be prompted
//Each page will have a heading which contains a the question
//Each page will have 4 buttons which will contain answers to the question asked
//If the wrong answer is selected then 10 seconds will be deducted from the countdown timer
//Each correct answer will add 1 point to the users scoresheet
//Right or wrong alert will be displayed when the user selects an answer
//A loop will be created where this will happen 5 times
//On the final page text will be desplayed letting the user know the quiz is complete
//On the 2nd to last page the user will have a screen displayed letting the user know the quiz is complete
//The user will have an input provided where they will be asked to input their initials
//Once the user neters their initials they will have a submit button they will need to click to continue
//The timer will be stopped on the 2nd to last page
//Once the user hits submit button they will be taken to the next page which will display the scores & initials of the the users
//This page will only display the text "Lederboard"
//The user will have 2 buttons they can click on
//One of the buttons is "GO BACK" which will take them to the main page
//The other button they will have as an option to click on is "CLEAR LEADERBOARD"
//Clicking on the "LEADERBOARD" will erase all the users scores & and their initials from the leaderboard



//TODO:--------------------------------------------------------------------

//Variables & indexes
var seconds = 60;
var score = 0;
var mainIndex =0;
var numQuestions = 5;
var countdown;
var question = 0;

//Variables obtained from html file
var mainpageEl = document.getElementById("#mainpage");
var goBtn = document.getElementById("#go");
var timeEl = document.getElementById("#timer");
var questionsEl = document.getElementById("#questions");
var leaderboardEl = document.getElementById("#leaderboard");
var finishEl = document.getElementById("#finish");
var finalscoreEl = document.getElementById("#finalscore");
var submitBtn = document.getElementById("#submit");
var initialsEl = document.getElementById("#initials");
var questionTitle = document.getElementById("#quest");
var multchoiceEl = document.getElementById("#multiplechoice");
var listEl = document.getElementById("#list");


//Function that lists all my questions and answers
let questionsIndex = [
    {
        qstn: "DB9 is a model of what car make?",
        choices: ["Ferrari", "Bentley", "Aston Martin", "Rolls Royce"],
        correct: "C",
    },
    {
        qstn: "What is the most expensive American car ever sold?",
        choices: ["Shelby GT 500", "Shelby Cobra", "Shelby Mustang", "Crown Victoria"],
        correct: "B",
    },
    {
        qstn: "How much horsepower is in a Bugatti Veyron?",
        choices: ["800", "400", "1000", "700"],
        correct: "C"
    },
    {
        qstn: "Which of the following cars are illegal in the USA?",
        choices: ["Nissan GTR", "Alfa Romeo", "McLaren Senna", "Nissan Skyline"],
        correct: "D"
    },
    {
        qstn: "What size engine is in a Bugatti Veyron?",
        choices: ["8.0L V12", "8.0L V14", "10.0L V16", "8.0L V16"],
        correct: "D"
    }
];

//Event listener for the button/s
goBtn.addEventListener("click", quizStarted);

//Function to begin the quiz upon clicking start
function quizStarted () {
    mainpageEl.style.display = "none";
    questionsEl.style.display = "block";

    //Adding the countdown upon clicking start
    countdown();
    renderQuestions();
}


//Timer function
function countdown() {
    var timerInt = setInterval(function() {
        seconds--;
        timeEl.textContent = "Timer " + seconds;

        if (seconds === 0) {
            clearInterval(timerInt);
            // alert("Times UP!");
        }
    }, 1000);
}

countdown();

//Function to render the questions upon clicking the start button
function renderQuestions () {
    
}
