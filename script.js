const startButton = document.getElementById('beginQuiz')
const questionContainterElement = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerButtons')
const quizContainer =document.getElementById('quizContainer')
const controls =document.getElementById('controls')
let time=document.getElementById('time')
let clockid =""
const title =document.getElementById('title')
let answerChoice1 =document.getElementById('choice1')
let answerChoice2 =document.getElementById('choice2')
let answerChoice3 =document.getElementById('choice3')
let answerChoice4 =document.getElementById('choice4')

let questions = [
    {
      Question: "What does HTML stand for?",
      answer1: "How To Make Lasagna",
      answer2: "Hyper Text Markup Language",
      answer3: "Houses Together Might Levetate",
      answer4: "Harry Told Mommy Lies",
      correctAnswer: "Hyper Text Maekup Language",
    },
    {
      Question: "In what year was JavaScript intorduced?",
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
      answer1: "<h1>",
      answer2: "<head>",
      answer3: "<heading>",
      answer4: "<h6>",
      correctAnswer: "<h1>",
    },
  ];
  let timeRemaining = questions.length *15 
  let index =0

  function showQuestion() {

  }

  for (let i = 0; i < questions.length; i++) {
    console.log(questions[i])

    }

// Do I want my questions suffled? let shuffledQuestions, currentQuestionIndex
//Here we go!
function startGame(){
    startButton.style.display ="none"
    console.log("Here we go!")
    //I want the start button to hide and the questions container to appear after it is clicked to start the game
    quizContainer.classList.remove("hide")
    controls.classList.add("hide")
    clockid= setInterval(countdown, 1000)
    showQuestions () 
}
function showQuestions () {
title.textContent = questions [index].Question
answerChoice1.textContent =questions [index].answer1
answerChoice2.textContent =questions [index].answer2
answerChoice3.textContent =questions [index].answer3
answerChoice4.textContent =questions [index].answer4 

}

// function showQuestion () {
//     const questions =document.getElementById("questions");
//     questions.textContent = questions[currentQuestion].questions;

// }



function countdown () {
    time.textContent= timeRemaining--
}


startButton.addEventListener('click', startGame)





// document.getElementById(startButton).onclick = function(){
//     let startButton =document.getElementById("startButton");
//     if(startButton.style.display==="none"){
//         startButton.style.display = "block";
//     } else{
//         startButton.style.display = "none";
//     }
// };

// questionContainterElement.classList.show('show')



// let countdown = 60;
// for (let i=0; i < countdown.length; i++){


//Countdown begins







//     let 
//     if (response == quesitons [i].answer){
//         alert("Correct!");
//     } else {
//         score--;
//         alert ("NOPE!");
//     }
// }


//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     questionContainterElement.classList.remove('hide')
//     nextQuestion()
// }

 //once the question is answered i want it to alert Correct! or Wrong! and move on to the next question
// function nextQuestion(){
//     showQuestion(shuffledQuestions[currentQuestionIndex])

// }

// function showQuestion(questions) {
//     questionElement.innerText = questions.questions

// }


// function chooseAnswer() {

// }

    // return questions;

    
  
 
  




// //Random word generator
// let randomIndex = Math.floor(Math.random () * wordBank.length);

// //Start with blanks with correct amount of letters for word
// let start ="";
// for (let i = 0; i < start.length; i++) {
//     start += "_";

// }
// const startingMinutes = 10
// let time = startingMinutes * 60;

// const countdownEl = document.getElementById('countdown');

// setInterval(updateCountdown, 1000);

// function updateCountdown(){
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds <10 ? '0' +seconds : seconds;

//     countdownEl.innerHTML = '${minutes}:${seconds}';
//     time--;

// }

