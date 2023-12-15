const startButton = document.getElementById("beginQuiz")
const questionContainterElement = document.getElementById('questionContainer')
document.addEventListener('click', startGame)




function startGame(){
    console.log("Here we go!")
    // startButton.classList.add('hide')
}

function nextQuestion(){
 //once the question is answered i wan it to alert Correct! or Wrong! and move on to the next question
}

function chooseAnswer() {

}




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

