var questionnaire = [
    {
        question: "Which is the correct term for Identical Twins?",
        answers: ["Monochorionic", "Monozygotic", "Dizygotic", "Polyzygotic"],
        correctAnswer: "Monozygotic"
    },
    {
        question: "How many twins are born each year in the US?",
        answers: ["33.4 per 1,000 live births", "41.3 per 1,000 live births", "29.6 per 1,000 live births", "23.9 per 1,000 live births"],
        correctAnswer: "33.4 per 1,000 live births"
    },
    {
        question: "Which state has the highest rate of twin births in the US?",
        answers: ["Illinois", "California", "New York", "Connecticut"],
        correctAnswer: "Connecticut"
    },
    {
        question: "What is the origin of the word 'twin'?",
        answers: ["German", "Greek", "Latin", "Unknown"],
        correctAnswer: "German"
    },
    {
        question: "Which celebrity has a twin sibling?",
        answerOptions: ["Madonna", "Tom Cruise", "Scarlett Johansson", "Ariana Grande"],
        correctAnswer: "Scarlett Johansson"
    }
];

var timeRemaining = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var timeRemainingLoc = $('<span></span>')

$("#start-button").click(function () {

    $("#time-remaining").append(timeRemainingLoc)
    
    showQuestion(questionnaire[0])
    startQuestion(questionnaire[0])

})


function showQuestion(quizObj) {
    $("#quiz-content").empty()

    var currentQuestion = $('<div></div>')
    var optionOne = $('<div></div>')
    var optionTwo = $('<div></div>')
    var optionThree = $('<div></div>')
    var optionFour = $('<div></div>')

    optionOne.addClass('answer')
    optionTwo.addClass('answer')
    optionThree.addClass('answer')
    optionFour.addClass('answer')

    currentQuestion.text(quizObj.question)
    optionOne.text(quizObj.answers[0])
    optionTwo.text(quizObj.answers[1])
    optionThree.text(quizObj.answers[2])
    optionFour.text(quizObj.answers[3])

    $("#quiz-content").append(currentQuestion)
    $("#quiz-content").append(optionOne)
    $("#quiz-content").append(optionTwo)
    $("#quiz-content").append(optionThree)
    $("#quiz-content").append(optionFour)
}

function startQuestion(quizObj) {
    timeRemaining = 30
    timeRemainingLoc.text("Time remaining: " + timeRemaining)
    
    var countdown = setInterval(function () {
        timeRemaining--;
        timeRemainingLoc.text("Time remaining: " + timeRemaining)
        if (timeRemaining === 0) {
            clearInterval(countdown)
            timeout(quizObj)
        }
    }, 1000)

    $('.answer').click(function () {
        clearInterval(countdown)
        var userAnswer = $(this).text()
        if (userAnswer === quizObj.correctAnswer) {
            rightAnswer()
            correctAnswers++
        } else {
            wrongAnswer(quizObj)
            incorrectAnswers++
        }
    })
}

function wrongAnswer(quizObj) {
    $("#quiz-content").empty()
    var validation = $('<div></div>')
    var displayAnswer = $('<div></div>')
    var gifImage = $('<img></img>')

    $("#quiz-content").append(validation)
    $("#quiz-content").append(displayAnswer)
    $("#quiz-content").append(gifImage)

    validation.text("Nope!")
    displayAnswer.text("The correct answer was: " + quizObj.correctAnswer)
    gifImage.attr('src', 'assets/images/olsen_nod.gif')

    setTimeout(function () {
        showQuestion(questionnaire[1])
        startQuestion(questionnaire[1])
    }, 3000)
}

function rightAnswer() {
    $("#quiz-content").empty()
    var validation = $('<div></div>')
    var gifImage = $('<img></img>')

    $("#quiz-content").append(validation)
    $("#quiz-content").append(gifImage)

    validation.text("Correct!")
    gifImage.attr('src', 'assets/images/olsen_nod.gif')

    setTimeout(function () {
        showQuestion(questionnaire[1])
        startQuestion(questionnaire[1])
    }, 3000)
}

function timeout(quizObj) {
    $("#quiz-content").empty()
    var validation = $('<div></div>')
    var displayAnswer = $('<div></div>')
    var gifImage = $('<img></img>')

    $("#quiz-content").append(validation)
    $("#quiz-content").append(displayAnswer)
    $("#quiz-content").append(gifImage)

    validation.text("Out of time!")
    displayAnswer.text("The correct answer was: " + quizObj.correctAnswer)
    gifImage.attr('src', 'assets/images/surprised.gif')

    setTimeout(function () {
        showQuestion(questionnaire[1])
        startQuestion(questionnaire[1])
    }, 3000)
}