const quizData = [
    {
        question : "Whats the name of monster king in One Punch Man ?",
        a : "Boros",
        b : "Metal Bat",
        c : "Platinum sperm",
        d : "Orochi",
        correct : "d",
    },
    {
        question : "What Happend in the Eclipse in Bersek ?",
        a : "Birth of Grifith ",
        b : "death of Guts",
        c : "Pardon of the apostle",
        d : "Saitama murder investigation",
        correct : "a",
    },
    {
        question : "how did Netero from HxH beat meruem ?",
        a : "Striking Merium hearth ",
        b : "Sealed away",
        c : "Pinned by The Zanpaku",
        d : "Poor's Man Rose",
        correct : "d",
    },
    {
        question : " Name of number 4 in bleach ",
        a : "Owen pallet",
        b : "Kenzo tenma",
        c : "Urukiora Shifā",
        d : "Alucard ",
        correct : "c",
    },
];
const answerEls = document.querySelectorAll(".answer")
const aAnswer = document.getElementById("aText")
const bAnswer = document.getElementById("bText")
const cAnswer = document.getElementById("cText")
const dAnswer = document.getElementById("dText")
const questionEl = document.getElementById("question")
const quiz = document.getElementById("quiz-header")
const submitBtn =document.getElementById("btn")

let currentQuestion = 0;
let counter = 0

loadQuiz()


function loadQuiz(){
    deSelected()
    const currentQuizData = quizData[currentQuestion]
    
    questionEl.innerHTML = currentQuizData.question 
    aAnswer.innerHTML = currentQuizData.a 
    bAnswer.innerHTML = currentQuizData.b
    cAnswer.innerHTML = currentQuizData.c
    dAnswer.innerHTML = currentQuizData.d
}

function deSelected(){
    answerEls.forEach(answerEl => answerEl.checked=false)
}

function selected(){
    let answer 

    answerEls.forEach(answerEl =>{
         if(answerEl.checked){
             answer = answerEl.id
         }
         
    })
    return answer
}


submitBtn.addEventListener("click",()=>{
    const answer = selected()
    if(answer){
    if(answer === quizData[currentQuestion].correct ){
        counter++;
        console.log(counter)
    }

    currentQuestion++

    if( currentQuestion < 4 ){
       loadQuiz()
    }else{
        quiz.innerHTML = `<h2> Jebti ${counter} s7i7a men 2asl ${4} </h2> <button onclick="location.reload()">replay</button> `
        quiz.style.height = "150px"
    }
    }
})