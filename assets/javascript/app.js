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

$("#start-button").click(function () {
    $("#quiz-content").empty()
    var currentQuestion = $('<div></div>')
    var optionOne = $('<div></div>')
    var optionTwo = $('<div></div>')
    var optionThree = $('<div></div>')
    var optionFour = $('<div></div>')

    currentQuestion.text(questionnaire[0].question)
    optionOne.text(questionnaire[0].answers[0])
    optionTwo.text(questionnaire[0].answers[1])
    optionThree.text(questionnaire[0].answers[2])
    optionFour.text(questionnaire[0].answers[3])

    $("#quiz-content").append(currentQuestion)
    $("#quiz-content").append(optionOne)
    $("#quiz-content").append(optionTwo)
    $("#quiz-content").append(optionThree)
    $("#quiz-content").append(optionFour)
})










