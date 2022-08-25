function initData() {
    
    const quizData = [
        {
            question: "Quand je ne suis pas prioritaire sur une intersection je dois regarder si possible en premier les véhicules arrivant de :",
            a: "La droite.",
            b: "La gauche.",
            c: "",
            d: "",
            correct: "b",
        },
        {
            question: "La ligne transversale pour un stop est :",
            a: "Continue.",
            b: "En pointillée.",
            c: "",
            d: "",
            correct: "a",
        },
        {
            question: "Si à un feu rouge il y a la présence d'une flèche jaune clignotante à droite :",
            a: "Je dois m'arrêter au feu rouge même si je tourne à droite.",
            b: "Je peux m'engager à droite sans céder le passage.",
            c: "Je peux m'engager à droite en cédant le passage aux piétons et véhicules circulant sur la voie abordée.",
            d: "",
            correct: "c",
        },
        {
            question: "Si il n'y a aucune signalisation au niveau d'une intersection:",
            a: "Je dois la priorité à droite.",
            b: "Je serai prioritaire.",
            c: "Je dois la priorité à droite et à gauche.",
            d: "",
            correct: "a",
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
               <h2 style="padding: 20px">You answered ${score}/${quizData.length} questions correctly</h2>
    
               <button onclick="location.reload()">Reload</button>
               `
           }
        }
    })


}



