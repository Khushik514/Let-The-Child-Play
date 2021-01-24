const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Eating Healthy Food',
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 1,
    },
    {
        question:"Brushing Twice a Day",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 1,
    },
    {
        question: "Biting or Chewing Nails",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 2,
    },
    {
        question: "Sleeping On Time",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 1,
    },
    {
        question: "Pulling of Hair",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 2,
    },
    {
        question: "Sucking of Thumb",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 2,
    },
    {
        question: "Being Responsible With Money",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 1,
    },
    {
        question: 'Playing Outdoors',
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 1,
    },
    {
        question:"Cleaning Up The Room and Toys after playing",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 1,
    },
    {
        question: "Using Bad Abusive Language",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 2,
    },
    {
        question: "Nose Picking",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 2,
    },
    {
        question: "Saying ‘Please’ and ‘Thank You’",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 1,
    },
    {
        question: "Lying",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 2,
    },
    {
        question: "Sharing Things with others",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 1,
    },
    {
        question: "Demanding",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 2,
    },
    {
        question: "Littering public places",
        choice1: 'Good Habit',
        choice2: 'Bad Habit',
        answer: 2,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = questions.length;

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
/*    
    Design adpated from a youtube video tutorial
    All due credits to the owner
    https://www.youtube.com/watch?v=f4fB9Xg2JEY
*/