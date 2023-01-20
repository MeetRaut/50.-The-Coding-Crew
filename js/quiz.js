const quizData = [
    {
        question: "Where you able to wake up early today?",
        a: "Not at all",
        b: "kind of late",
        c: "yes",
        d: "no",
        correct: "d",
    },
    {
        question: "Did you have a healthy breakfast today?",
        a: "Not at all",
        b: "kind of",
        c: "yes",
        d: "no",
        correct: "b",
    },
    {
        question: "Did you find anything inspiring today?",
        a: "yes",
        b: "A few things",
        c: "No",
        d: "Nothing",
        correct: "a",
    },
    {
        question: "Where you able to exercise today?",
        a: "Not at all",
        b: "A bit",
        c: "yes",
        d: "Had a good one",
        correct: "b",
    },
    {
        question: "Where you able to complete your task today?",
        a: "Not at all",
        b: "A few things",
        c: "Yes",
        d: "No",
        correct: "b",
    },
    {
        question: "How many glasses of water did you have?",
        a: "A good amount",
        b: "A few",
        c: "Enough",
        d: "Not enough",
        correct: "b",
    },
    {
        question: "Where you able to interact with any new people?",
        a: "Not at all",
        b: "A few times",
        c: "A few times",
        d: "No",
        correct: "b",
    },
    {
        question: "Was there any time when you felt anxious?",
        a: "Not at all",
        b: "A few times",
        c: "More than half of the days",
        d: "Nearly all day",
        correct: "b",
    },
    {
        question: "How did you spent your free time?",
        a: "Alone",
        b: "With friends",
        c: "With family",
        d: "Playing games",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Congratulations on finishing your daily checkup. <br>Here is your reward! <br> Keep it up!</h2>
           <a href="/quote.html"><button onclick="index.html">Proceed</button></a>
           `
       }
    }
})