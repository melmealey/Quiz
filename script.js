//variables
const startButton = document.getElementById('beginQuiz')
const questionContainterElement = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerButtons')
const quizContainer = document.getElementById('quizContainer')
const controls = document.getElementById('controls')
let time = document.getElementById('time')
let clockid = ""
const title = document.getElementById('title')
let answerChoice1 = document.getElementById('choice1')
let answerChoice2 = document.getElementById('choice2')
let answerChoice3 = document.getElementById('choice3')
let answerChoice4 = document.getElementById('choice4')
let initialContainer = document.getElementById('initialContainer')
let userScores = JSON.parse(localStorage.getItem("userScores")) || []
let initialsBtn = document.getElementById('Initials-btn')
let initialInput = document.getElementById('initial-input')
let saveHighScoreContainer = document.getElementById('highScoreContainer')
let scoreList = document.getElementById('scoreList')
let tryAgainBtn = document.getElementById('tryAgain')
let resetHighScores = document.getElementById('resetHighScores')

//Quiz questions array
let questions = [
    {
        question: "What does HTML stand for?",
        answer1: "How To Make Lasagna",
        answer2: "Hyper Text Markup Language",
        answer3: "Houses Together Might Levetate",
        answer4: "Harry Told Mommy Lies",
        correctAnswer: "Hyper Text Markup Language",
    },
    {
        question: "In what year was JavaScript intorduced?",
        answer1: "1970",
        answer2: "1997",
        answer3: "1990",
        answer4: "1995",
        correctAnswer: "1995",
    },
    {
        question: "JavaScript file has an extnesion of:",
        answer1: ".Java",
        answer2: ".javascript",
        answer3: ".js",
        answer4: ".xtml",
        correctAnswer: ".js",
    },
    {
        question: "Which CSS property controls the text size?",
        answer1: "text-style",
        answer2: "font-style",
        answer3: "text-size",
        answer4: "font-size",
        correctAnswer: "font-size",
    },
    {
        question: "Which is the correct HTML element for the largest heading?",
        answer1: "h1",
        answer2: "head",
        answer3: "heading",
        answer4: "h6",
        correctAnswer: "h1",
    },
];

let timeRemaining = questions.length * 15
let index = 0

function showQuestion() {
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i])
    }
}

//Here we go! Start Quiz
function startGame() {
    startButton.style.display = "none"
    console.log("Here we go!")
    //start button hides (and the questions container appears) after it is clicked to start the game
    quizContainer.classList.remove("hide")
    controls.classList.add("hide")
    clockid = setInterval(countdown, 1000)
    showQuestions()
}
function showQuestions() {
    title.textContent = questions[index].question
    answerChoice1.textContent = questions[index].answer1
    answerChoice2.textContent = questions[index].answer2
    answerChoice3.textContent = questions[index].answer3
    answerChoice4.textContent = questions[index].answer4

}
//alerts
function checkAnswer(event) {
    let guess = event.target.textContent
    const answer = questions[index].correctAnswer;
    if (guess === answer) {
        //Display "CORRECT!"
        alert("CORRECT!");
    } else {
        // Display "NOPE!"
        alert("NOPE! -10 seconds!");
        timeRemaining = timeRemaining - 10;

    }
    index++;
    if (index < questions.length) {
        showQuestions();
    }
    else {
        quizContainer.classList.add("hide")
        initialContainer.classList.remove("hide")
        tryAgainBtn.classList.remove("hide")
        resetHighScores.classList.remove("hide")

        stopTimer()
    }
    //Timer ends at 0 seconds
}

function stopTimer() {
    clearInterval(clockid)
}

function countdown() {
    time.textContent = timeRemaining--
    if (time === 0) {
        stopTimer();
    }
}
//Save and display scores
function saveHighScore(score) {
    const user = {
        initial: initialInput.value,
        score: time.textContent
    }
    userScores.push(user)
    localStorage.setItem("userScores", JSON.stringify(userScores));
    initialContainer.classList.add("hide");
    saveHighScoreContainer.classList.remove("hide");
    displayHighScore()
}
function displayHighScore() {
    scoreList.textContent = ""
    for (let i = 0; i < userScores.length; i++) {
        var li = document.createElement("li")
        li.textContent = userScores[i].initial + " - " + userScores[i].score
        scoreList.appendChild(li);

    }
}
tryAgainBtn.addEventListener("click", function () {
    location.reload();
});

resetHighScores.addEventListener("click", function () {
    userScores = [];
    localStorage.removeItem("userScores");
    displayHighScore(); // Update the high score display
});


startButton.addEventListener('click', startGame)
answerChoice1.addEventListener("click", answerChoice1)
answerChoice2.addEventListener("click", answerChoice2)
answerChoice3.addEventListener("click", answerChoice3)
answerChoice4.addEventListener("click", answerChoice4)
answerButtonsElement.addEventListener("click", checkAnswer)
initialsBtn.addEventListener("click", saveHighScore)
tryAgainBtn.addEventListener("click", tryAgainBtn)
resetHighScores.addEventListener("click", resetHighScores)
