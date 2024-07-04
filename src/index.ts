import { startQuiz } from "./quiz";

document.body.innerHTML=`
<div id="quiz">
    <h1>퀴즈 앱</h1>
    <div id="question"></div>
    <div id="choices"></div>
  </div>
`;

startQuiz();