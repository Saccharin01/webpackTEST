/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz */ \"./src/quiz.ts\");\n\r\ndocument.body.innerHTML = \"\\n<div id=\\\"quiz\\\">\\n    <h1>\\uD034\\uC988 \\uC571</h1>\\n    <div id=\\\"question\\\"></div>\\n    <div id=\\\"choices\\\"></div>\\n  </div>\\n\";\r\n(0,_quiz__WEBPACK_IMPORTED_MODULE_0__.startQuiz)();\r\n\n\n//# sourceURL=webpack://my-spa-project/./src/index.ts?");

/***/ }),

/***/ "./src/questions.ts":
/*!**************************!*\
  !*** ./src/questions.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   questions: () => (/* binding */ questions)\n/* harmony export */ });\nvar questions = [\r\n    {\r\n        question: \"프랑스의 수도는 어디인가요?\",\r\n        choices: [\"베를린\", \"마드리드\", \"파리\", \"로마\"],\r\n        answer: \"파리\"\r\n    },\r\n    {\r\n        question: \"붉은 행성으로 알려진 행성은 무엇인가요?\",\r\n        choices: [\"지구\", \"화성\", \"목성\", \"토성\"],\r\n        answer: \"화성\"\r\n    },\r\n    {\r\n        question: \"지구에서 가장 큰 바다는 무엇인가요?\",\r\n        choices: [\"대서양\", \"인도양\", \"남극해\", \"태평양\"],\r\n        answer: \"태평양\"\r\n    }\r\n];\r\n\n\n//# sourceURL=webpack://my-spa-project/./src/questions.ts?");

/***/ }),

/***/ "./src/quiz.ts":
/*!*********************!*\
  !*** ./src/quiz.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startQuiz: () => (/* binding */ startQuiz)\n/* harmony export */ });\n/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions */ \"./src/questions.ts\");\n\r\nvar currentQuestionIndex = 0;\r\nvar score = 0;\r\nfunction startQuiz() {\r\n    showQuestion(currentQuestionIndex);\r\n}\r\nfunction showQuestion(index) {\r\n    var questionElement = document.getElementById('question');\r\n    var choicesElement = document.getElementById('choices');\r\n    if (questionElement && choicesElement) {\r\n        questionElement.innerHTML = _questions__WEBPACK_IMPORTED_MODULE_0__.questions[index].question;\r\n        choicesElement.innerHTML = '';\r\n        _questions__WEBPACK_IMPORTED_MODULE_0__.questions[index].choices.forEach(function (choice) {\r\n            var button = document.createElement('button');\r\n            button.innerHTML = choice;\r\n            button.addEventListener('click', function () { return selectAnswer(choice); });\r\n            choicesElement.appendChild(button);\r\n        });\r\n    }\r\n}\r\nfunction selectAnswer(choice) {\r\n    var correctAnswer = _questions__WEBPACK_IMPORTED_MODULE_0__.questions[currentQuestionIndex].answer;\r\n    if (choice === correctAnswer) {\r\n        score++;\r\n    }\r\n    currentQuestionIndex++;\r\n    if (currentQuestionIndex < _questions__WEBPACK_IMPORTED_MODULE_0__.questions.length) {\r\n        showQuestion(currentQuestionIndex);\r\n    }\r\n    else {\r\n        showResult();\r\n    }\r\n}\r\nfunction showResult() {\r\n    var quizElement = document.getElementById('quiz');\r\n    if (quizElement) {\r\n        quizElement.innerHTML = \"<h2>\\uC810\\uC218:\".concat(score, \"/\").concat(_questions__WEBPACK_IMPORTED_MODULE_0__.questions.length, \"</h2>\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://my-spa-project/./src/quiz.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;