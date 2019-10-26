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
        answers: ["Madonna", "Tom Cruise", "Scarlett Johansson", "Ariana Grande"],
        correctAnswer: "Scarlett Johansson"
    },
    {
        question: "What is the general incidence of twins in the United States among spontaneous pregnancies?",
        answers: ["1 in 25 pregnancies", "1 in 50 pregnancies", "1 in 80 pregnancies", "1 in 150 pregnancies"],
        correctAnswer: "1 in 80 pregnancies"
    },
];

var answerGifs = [
    "assets/images/sneeze.gif",
    "assets/images/surprised.gif",
    "assets/images/fall.gif",
    "assets/images/spiderman.gif",
    "assets/images/olsen.gif",
    "assets/images/pacifier.gif",
]

var timeRemaining = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var timeRemainingLoc = $('<span></span>');
var currentQuestion = 0;

$("#start-button").click(function () {

    $("#time-remaining").append(timeRemainingLoc)

    showQuestion(questionnaire[currentQuestion])
    startQuestion(questionnaire[currentQuestion])

})


function showQuestion(quizObj) {
    $("#quiz-content").empty()

    var question = $('<div></div>')
    var optionOne = $('<button></button>')
    var optionTwo = $('<button></button>')
    var optionThree = $('<button></button>')
    var optionFour = $('<button></button>')

    optionOne.addClass('answer btn btn-info')
    optionTwo.addClass('answer btn btn-info')
    optionThree.addClass('answer btn btn-info')
    optionFour.addClass('answer btn btn-info')

    question.text(quizObj.question)
    optionOne.text(quizObj.answers[0])
    optionTwo.text(quizObj.answers[1])
    optionThree.text(quizObj.answers[2])
    optionFour.text(quizObj.answers[3])

    $("#quiz-content").append(question)
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
            unanswered++
            clearInterval(countdown)
            timeout(quizObj)
        }
    }, 1000)

    $('.answer').click(function () {
        clearInterval(countdown)
        var userAnswer = $(this).text()
        if (userAnswer === quizObj.correctAnswer) {
            correctAnswers++
            rightAnswer()

        } else {
            incorrectAnswers++
            wrongAnswer(quizObj)
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
    gifImage.attr('src', answerGifs[currentQuestion])

    nextQuestion()
}

function rightAnswer() {
    $("#quiz-content").empty()
    var validation = $('<div></div>')
    var gifImage = $('<img></img>')

    $("#quiz-content").append(validation)
    $("#quiz-content").append(gifImage)

    validation.text("Correct!")
    gifImage.attr('src', answerGifs[currentQuestion])

    nextQuestion()
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
    gifImage.attr('src', answerGifs[currentQuestion])

    nextQuestion()
}

function nextQuestion() {
    currentQuestion++

    setTimeout(function () {
        if (currentQuestion >= questionnaire.length) {
            showResults()
        } else {
            showQuestion(questionnaire[currentQuestion])
            startQuestion(questionnaire[currentQuestion])
        }
    }, 3000)

}

function showResults() {
    $("#quiz-content").empty()
    var validation = $('<div></div>')
    var totalCorrect = $('<div></div>')
    var totalIncorrect = $('<div></div>')
    var totalUnanswered = $('<div></div>')
    var startOver = $('<button></button>')

    $("#quiz-content").append(validation)
    $("#quiz-content").append(totalCorrect)
    $("#quiz-content").append(totalIncorrect)
    $("#quiz-content").append(totalUnanswered)
    $("#quiz-content").append(startOver)

    validation.text("All done, here's how you did!")
    totalCorrect.text("Correct Answers: " + correctAnswers)
    totalIncorrect.text("Incorrect Answers: " + incorrectAnswers)
    totalUnanswered.text("Unanswered: " + unanswered)
    startOver.text("Start Over?")

    startOver.addClass('btn btn-info')

    $(startOver).click(function () {
        currentQuestion = 0
        correctAnswers = 0
        incorrectAnswers = 0
        unanswered = 0

        $("#time-remaining").append(timeRemainingLoc)
        showQuestion(questionnaire[currentQuestion])
        startQuestion(questionnaire[currentQuestion])
    })
}