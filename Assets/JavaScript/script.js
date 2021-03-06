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
//On the final page text will be displayed letting the user know the quiz is complete
//On the 2nd to last page the user will have a screen displayed letting the user know the quiz is complete
//The user will have an input provided where they will be asked to input their initials
//Once the user users their initials they will have a submit button they will need to click to continue
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
var timerInt;
var quizTimer;

//Variables obtained from html file
var mainpageEl = document.getElementById("mainpage");
var goBtn = document.getElementById("go");
var timeEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var leaderboardEl = document.getElementById("leaderboard");
var finishEl = document.getElementById("finish");
var finalscoreEl = document.getElementById("finalscore");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");
var questionTitle = document.getElementById("quest");
var multchoiceEl = document.getElementById("multiplechoice");
var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")
var listEl = document.getElementById("list");
var track = localStorage.getItem("track");
var highscorePage = document.getElementById("highscorespage");
var goBackBtn = document.getElementById("goback");
var clearBtn = document.getElementById("clear");
var leaderBoardLink = document.getElementById("leaderboard");


//Function that lists all my questions and answers
let questionsIndex = [
    {
        qstn: "DB9 is a model of what car make?",
        a: "Ferrari",
        b: "Bentley",
        c: "Aston Martin",
        d: "Rolls Royce",
        correct: "C"
    },
    {
        qstn: "What is the most expensive American car ever sold?",
        a: "Shelby GT 500",
        b: "Shelby Cobra",
        c: "Shelby Mustang",
        d: "Crown Victoria",
        correct: "B"
    },
    {
        qstn: "How much horsepower is in a Bugatti Veyron?",
        a: "800",
        b: "400",
        c: "1000",
        d: "700",
        correct: "C"
    },
    {
        qstn: "What car in list below is illegal in the USA?",
        a: "Nissan GTR",
        b: "Alfa Romeo",
        c: "McLaren Senna",
        d: "Nissan Skyline",
        correct: "D"
    },
    {
        qstn: "What size engine is in a Bugatti Veyron?",
        a: "8.0L V12",
        b: "8.0L V14",
        c: "10.0L V16",
        d: "8.0L V16",
        correct: "D"
    }
];

//Event listener for the button/s
goBtn.addEventListener("click", quizStarted);

//Function to begin the quiz upon clicking start
function quizStarted () {
    seconds = 60;
    mainpageEl.style.display = "none";
    questionsEl.style.display = "block";
    timeEl.style.display = "block"

    countdown();
    renderQuestions();
}



//Function to render the questions upon clicking the start button
function renderQuestions () {
    if (question === questionsIndex.length) {
        clearInterval(timerInt);
        timeEl.style.display = "none";
        questionsEl.style.display = "none";
        finishEl.style.display = "block";
        question = 0;
    }
    else {
        var collectedQ = questionsIndex[question];
        questionTitle.innerHTML = collectedQ.qstn;
        choiceA.innerHTML = collectedQ.a;
        choiceB.innerHTML = collectedQ.b;
        choiceC.innerHTML = collectedQ.c;
        choiceD.innerHTML = collectedQ.d;
    }
}


//Timer function & variable
function countdown() {
    timerInt = setInterval(function() {
        seconds--;
        timeEl.textContent = "Timer: " + seconds;


        if (seconds <= 0) {
            alert("Times UP!");
            clearInterval(timerInt);
            timeEl.textContent = "Timer: " + seconds;
        }
    }, 1000);
}


//Check answer function
function correctAnswer(answer) {
    if (answer == questionsIndex[question].correct) {
        score += 10;
        question++;
        renderQuestions();

    }
    else {
        seconds = seconds -10;
        question++;
        renderQuestions();
    }
}



//Function to display scorescreen
function scoreSheet () {
    questionsEl.style.display = "none";
    finishEl.style.display = "block";
}


//Add event listener for submit button
submitBtn.addEventListener("click", scorePage);


//Function to add score to local storage
function scorePage () {
    finishEl.style.display = "none";
    highscorePage.style.display = "block";
}



//Function for the go back button
goBackBtn.addEventListener("click", goBack);

//Function to begin the quiz upon clicking start
function goBack () {
    highscorePage.style.display = "none";
    mainpageEl.style.display = "block";
}

//Event listener to clear the scores from the page
clearBtn.addEventListener("click", function(){
    localStorage.clear();
});



//Add event listener for the leaderboard to display the highscores page.
leaderBoardLink.addEventListener("click", displayScores);

//Function to make the link for the leaderboard work upon click
function displayScores () {
    highscorePage.style.display = "block";
    questionsEl.style.display = "none";
    mainpageEl.style.display = "none";
    finishEl.style.display = "none";
}


function getInputValue(){
    var inputVal = document.getElementById("initials").value;

    var p = document.createElement("p");
    p.innerText = inputVal + ' ' + score;
    highscorePage.appendChild(p);
}

// function getInputValue(){
//     var recentScore = {
//         initials: initialsEl.value,
//         score: score,
//     }
//     collectedScore.push
//     localStorage.setItem("collectedScore", JSON.stringify(collectedScore));


//     var inputVal = document.getElementById("initials").value;

//     //Scores function & local storage
//     var collectedScore = JSON.parse(localStorage.getItem("score")) || [];





//     for (var i = 0; i < collectedScore.length; i++) {
//         var p = document.createElement("p");
//         p.innerText = inputVal + score;
//         highscorePage.appendChild(p);
//     }



// }