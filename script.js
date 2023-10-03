const quizData = [
  {
    question: "What do you understand by HTML?",
    a: "HTML describes the structure of a webpage",
    b: "HTML is the standard markup language mainly used to create web pages",
    c: "HTML consists of a set of elements that helps the browser how to view the content",
    d: "All of the above",
    correct: "d",
  },

  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Correcting Style Sheet",
    correct: "b",
  },

  {
    question: "Who is the father of HTML?",
    a: "Rasmus Lerdorf",
    b: "Tim Berners-Lee",
    c: "Brendan Eich",
    d: "Sergey Brin",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  c_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `<h2>You answers correctly at ${score}/${quizData.length}</h2>
            <button onclick = "location.reload()">Reload</button>
            `
    }
  }
});
