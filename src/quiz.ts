import { questions } from "./questions";

let currentQuestionIndex =0;
let score=0;

export function startQuiz():void{
    showQuestion(currentQuestionIndex);
}

function showQuestion(index:number):void{
    const questionElement=document.getElementById('question');
    const choicesElement =document.getElementById('choices');

    if(questionElement && choicesElement){
        questionElement.innerHTML =questions[index].question;
        choicesElement.innerHTML='';

        questions[index].choices.forEach(choice=>{
            const button =document.createElement('button');
            button.innerHTML=choice;
            button.addEventListener('click',()=>selectAnswer(choice));
            choicesElement.appendChild(button)
        })
    }
}
function selectAnswer(choice:string):void{
    const correctAnswer =questions[currentQuestionIndex].answer;
    if(choice===correctAnswer){
        score++
    }
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion(currentQuestionIndex);
    }else{
        showResult();
    }
}

function showResult():void{
    const quizElement=document.getElementById('quiz');
    if(quizElement){
        quizElement.innerHTML=`<h2>점수:${score}/${questions.length}</h2>`
    }
}