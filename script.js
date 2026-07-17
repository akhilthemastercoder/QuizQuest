// Quiz Questions
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Rome"],
        correct: 0
    },
    {
        question: "Which language runs in the browser?",
        answers: ["Python", "Java", "JavaScript", "C++"],
        correct: 2
    },
    {
        question: "How many continents are there?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "What does HTML stand for?",
        answers: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which company developed JavaScript?",
        answers: ["Microsoft", "Netscape", "Google", "Apple"],
        correct: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Venus", "Mars", "Jupiter", "Mercury"],
        correct: 1
    },
    {
        question: "What is 8 × 7?",
        answers: ["54", "56", "64", "48"],
        correct: 1
    },
    {
        question: "Which ocean is the largest?",
        answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correct: 2
    },
    {
        question: "What does CSS stand for?",
        answers: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: ["<!-- -->", "//", "#", "/* */"],
        correct: 1
    }
];

// Variables
let currentQuestion = 0;
let score = 0;


// HTML Elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");


// Display a Question
function loadQuestion() {


    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = "";


    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
        answersElement.appendChild(document.createElement("br"));
    });


}


// Check Answer
function checkAnswer(selected) {

    const question = questions[currentQuestion];
    const buttons = answersElement.querySelectorAll("button");

    buttons.forEach((button, index) => {


        button.disabled = true;


        if (index === question.correct) {
            button.style.backgroundColor = "green";
            button.style.color = "white";
        }


        if (index === selected && selected !== question.correct) {
            button.style.backgroundColor = "red";
            button.style.color = "white";
        }


    });


    if (selected === question.correct) {
        score++;
    }


}


// Next Question
nextButton.onclick = function () {


    currentQuestion++;


    if (currentQuestion < questions.length) {


        loadQuestion();


    } else {


        showScore();


    }


};


// Show Final Score
function showScore() {


    questionElement.textContent = "Quiz Finished!";


    answersElement.innerHTML = "";


    scoreElement.textContent =
        `You scored ${score} out of ${questions.length}`;


    nextButton.style.display = "none";


}


// Start the Quiz
loadQuestion();
