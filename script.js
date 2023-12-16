const startButton = document.getElementById("beginQuiz")
const questionContainterElement = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerButtons')

// Do I want my questions suffled? let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
    console.log("Here we go!")
}

//I want the start button to go away after it is clicked to start the game
    startButton.classList.add('hide')

let countdown = 60;
for (let i=0; i < countdown.length; i++){


//Countdown begins







    let 
    if (response == quesitons [i].answer){
        alert("Correct!");
    } else {
        score--;
        alert ("NOPE!");
    }
}


//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     questionContainterElement.classList.remove('hide')
//     nextQuestion()
// }

 //once the question is answered i wan it to alert Correct! or Wrong! and move on to the next question
// function nextQuestion(){
//     showQuestion(shuffledQuestions[currentQuestionIndex])

// }

// function showQuestion(questions) {
//     questionElement.innerText = questions.questions

// }


// function chooseAnswer() {

// }

let questions =  [
    {
        Question: 'What does HTML stand for?\n(a) How To Make Lasagna\n\(b) Hyper Text Markup Language\n(c) Houses Together Move Left\(d) Harry Told Mommy Lies",
        answer: "b"
        
    },
    {
        question: 'Question 2'

    },
    {
        question: 'Question 3'
    },

    {   question: 'Question 4'

    },
    {   question: 'Question 5'

    }

]




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

