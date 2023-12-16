window.onload = function () {


    var intervalId
    var timer = 10;
    var questionArray = [{

            question: 'Who recorded the original version of the song "Hound Dog"?',
            answers: ['Willa Mae "Big Mama" Thornton', 'Elvis Presley', 'Carl Perkins', 'Chuck Berry', 'Miley Cyrus'],
            correctAnswer: 'Willa Mae "Big Mama" Thornton',
}, {

            question: 'Who was marketed by her record company as the "female Elvis"?',
            answers: ['Wanda Jackson', 'Janis Martin', 'Patsy Cline', 'Diana Ross', 'Miley Cyrus'],
            correctAnswer: 'Janis Martin',
}, {

            question: 'Who sang the 1957 song Whole Lotta Shakin Goin On?',
            answers: ['Elvis Presley', 'Jerry Lee Lewis', 'Gene Vincent', 'Buddy Holly', 'Miley Cyrus'],
            correctAnswer: 'Jerry Lee Lewis',
}, {

            question: '"Rebel-Rouser", "Cannonball", and "Because They Are Young" were all hits by which artist?',
            answers: ['The Big Bopper', 'Jerry Lee Lewis', 'Gene Vincent', 'Duane Eddy', 'Miley Cyrus'],
            correctAnswer: 'Duane Eddy',
},
{

    question: 'Who spent three weeks at No.1 in 1957 with “That’ll be the Day”?',
    answers: ['Buddy Holly', 'June Carter', 'Little Richard', 'Fats Domino', 'Miley Cyrus'],
    correctAnswer: 'Buddy Holly',
}];





//Start  button starts game
//clearing the content works.  Do not touch it. 
$("#startGame").on("click", function () {
$("#startGame").replaceWith();
startTimer();
decrement();
firstQuestion();
//renderButtons();
})

//this is your timer.  It is working.  Do not touch it. 
function startTimer() {
intervalId = setInterval(decrement, 1000);
}
function decrement() {
    timer--;
    $("#countdown").html("<span>" + timer + "<span>");

    if (timer === 0) {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(intervalId);
    nextQuestion();

}

function firstQuestion() {
    var randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
    $("#question-display").html(JSON.stringify(randomQuestion.question));
    renderButtons(randomQuestion);
}

function renderButtons(randomQuestion) {
    //Cleared button div of any newly created buttons
    $("#answer-display").empty();
    //dynamically generates buttons for each answer
    for (var i = 0; i < randomQuestion.answers.length; i++) {
        var a = $("<button>");
        //adds class to the button
        a.addClass("btn-answer");
        //adds a data attribute
        a.attr("data-name", randomQuestion.answers[i]);
        //labels button
        a.text(randomQuestion.answers[i]);
        //adds button to the button view div
        $("#answer-display").append(a);
    }

}

$("#answer-display").on("click", function(){
    console.log("clicked");


    });   


};
javascriptif-statement