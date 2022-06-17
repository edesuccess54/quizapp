// CREATE A QUIZ CLASS 

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionsIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionsIndex];
    }

    quess(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionsIndex++;
    }
    isEnded() {
        return this.questionsIndex === this.questions.length;
    }
}

// CREATE A QUESTION CLASS 

class question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer =answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// DISPLAY QUESTION 
function displayQuestion() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        // SHOW QUESTIONS 
        let questionElement = document.getElementById('question');
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // SHOW OPTIONS 
        let choice = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choice.length; i++) {
            let choiceElement = document.getElementById('choice'+i);
            choiceElement.innerHTML = choice[i];
            quess("btn" +i, choice[i]);
        }

        showProgress();
    }
};

// QUESS FUNCTION 
function quess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.quess(guess);
        displayQuestion();
    }
}

// SHOW QUIZ PROGRESS 
function showProgress() {
    let currentQuestionNumber = quiz.questionsIndex + 1
    let progressElement = document.getElementById('progress');
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// SHOW SCORE 
function showScores() {
    let quizEndHTML = 
    `
        <h1>Quiz Completed</h1>
        <h2 id="score"> you score: ${quiz.score} of ${quiz.questions.length}<h2>
        <div class="quiz-repeat">
            <a href="index.html">Take Quiz Again</a>
        </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}

// CREATE QUIZ QUESTIONS 
let questions = [
    new question(
        "Hyper Text markup Language Stands for?", ['Jquery', 'XHTML', 'CSS', 'HTML'], "HTML"
    ),
    new question(
        "Cascading style sheet Stands for?", ['CSS', 'XML', 'Bootstrap', 'Ajax'], "CSS"
    ),
    new question(
        "Which is a JavaScript Framework?", ['Ajax', 'Laravel', 'React', 'Sass'], "React"
    ),
    new question(
        "Which is a backend language?", ['Vue', 'HTML', 'React', 'PHP'], "PHP"
    ),
    new question(
        "Which is best for Artificial intelligence?", ['React', 'Laravel', 'Python', 'Sass'], "Python"
    ),
    new question(
        "Which is a JavaScript Framework?", ['AWS', 'Laravel', 'Django', 'React'], "React"
    ),
    new question(
        "Which is a backend language?", ['Nodejs', 'HTML', 'React', 'Vue'], "Nodejs"
    ),
    new question(
        "Hyper Text markup Language Stands for?", ['Jquery', 'XHTML', 'CSS', 'HTML'], "HTML"
    ),
];

let quiz = new Quiz(questions);

// DISPLAY QUESTIONS 

displayQuestion();

// ALL A COUNTDOWN
let time = 5;
let quizTimeInMinute = time * 60 * 60;
quizTime = quizTimeInMinute / 60;

let counting = document.getElementById("count-down");

function startCounDown() {
    let quizTimer = setInterval(function() {
        if(quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}

startCounDown();