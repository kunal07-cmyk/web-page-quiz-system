const quizData = [
    { question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language", "Hyperlinks Text Mark"],
      answer: 0 },

    { question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: 2 },

    { question: "Which is not a programming language?",
      options: ["Python", "Java", "HTML", "C++"],
      answer: 2 },

    { question: "Which company developed Java?",
      options: ["Sun Microsystems", "Google", "Microsoft", "IBM"],
      answer: 0 },

    { question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "#", "<!-- -->", "**"],
      answer: 0 },

    { question: "Inside which tag we put JavaScript?",
      options: ["<script>", "<js>", "<javascript>", "<code>"],
      answer: 0 },

    { question: "Which loop runs at least once?",
      options: ["for", "while", "do...while", "foreach"],
      answer: 2 },

    { question: "Which method converts JSON to object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
      answer: 0 },

    { question: "Which property changes text color in CSS?",
      options: ["font-color", "text-color", "color", "background-color"],
      answer: 2 },

    { question: "Which keyword declares variable in JavaScript?",
      options: ["var", "int", "string", "define"],
      answer: 0 }
];

let currentQuestion = 0;
let score = 0;
let userName = "";

function startQuiz() {
    const nameInput = document.getElementById("username").value.trim();
    if (nameInput === "") {
        alert("Please enter your name!");
        return;
    }

    userName = nameInput;
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";

    loadQuestion();
}

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];

    document.getElementById("question-number").textContent =
        "Q" + (currentQuestion + 1);

    document.getElementById("progress").textContent =
        (currentQuestion + 1) + " / " + quizData.length;

    document.getElementById("question").textContent = currentQuiz.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    document.getElementById("message").textContent = "";

    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index, button);
        optionsDiv.appendChild(button);
    });
}

function selectAnswer(selected, button) {
    const correctAnswer = quizData[currentQuestion].answer;
    const buttons = document.querySelectorAll("#options button");

    buttons.forEach(btn => btn.disabled = true);

    if (selected === correctAnswer) {
        button.classList.add("correct");
        document.getElementById("message").textContent = "Correct!";
        score++;
    } else {
        button.classList.add("wrong");
        buttons[correctAnswer].classList.add("correct");
        document.getElementById("message").textContent = "Wrong!";
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";

    document.getElementById("final-message").textContent =
        userName + ", Your Final Score: " + score + " / " + quizData.length;
}
