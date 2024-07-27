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

/***/ "./node_modules/lil-framework/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/lil-framework/dist/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lilComponent: () => (/* reexport safe */ _lilComponent__WEBPACK_IMPORTED_MODULE_0__.lilComponent)\n/* harmony export */ });\n/* harmony import */ var _lilComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lilComponent */ \"./node_modules/lil-framework/dist/lilComponent.js\");\n\n\n//# sourceURL=webpack://frontend/./node_modules/lil-framework/dist/index.js?");

/***/ }),

/***/ "./node_modules/lil-framework/dist/lilComponent.js":
/*!*********************************************************!*\
  !*** ./node_modules/lil-framework/dist/lilComponent.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lilComponent: () => (/* binding */ lilComponent)\n/* harmony export */ });\n/* harmony import */ var _stateObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateObject */ \"./node_modules/lil-framework/dist/stateObject.js\");\n/* harmony import */ var _parseTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseTemplate */ \"./node_modules/lil-framework/dist/parseTemplate.js\");\nfunction lilComponent({name:t,template:e,data:i={},hooks:s={},handlers:a={}}){getImplicitVariables(e,s).forEach(t=>{i[t]=null!=(t=i[t])?t:\"\"}),i.mounted||(i.mounted=\"false\"),i._stateVars=Object.keys(i),e=(0,_parseTemplate__WEBPACK_IMPORTED_MODULE_1__.parseTemplate)(e,i);var r=class extends HTMLElement{constructor(){super()}static get observedAttributes(){return i._stateVars.map(t=>t.toLowerCase())}connectedCallback(){this.innerHTML=e,this.addListeners(),this.dependencyTree=this.parseDependencies();var t=Object.assign(Object.assign({},s),this.getRenderHooks({data:i,hooks:s}));this.state=(0,_stateObject__WEBPACK_IMPORTED_MODULE_0__.stateObject)(this,{data:i,hooks:t}),this.handlers=a;try{this.state._stateVars.forEach(t=>{(this.hasAttribute(t)||\"mounted\"===t)&&this.state&&(this.state[t]=\"mounted\"!==t?this.getAttribute(t):\"true\")})}catch(t){}}attributeChangedCallback(e,t,s){var a;this.state&&(a=i._stateVars.find(t=>t.toLowerCase()===e),this.state[a]=s)}parseDependencies(){const r={};return this.querySelectorAll(\"[has-lfdeps]\").forEach(a=>{a.getAttributeNames().filter(t=>t.startsWith(\"lfdep\")).forEach(t=>{let[,e,s]=t.split(\"-\");(s=i._stateVars.find(t=>t.toLowerCase()===s))&&(r[s]||(r[s]=[]),r[s].push({el:a,attribute:e,innerText:!e}))})}),r}getRenderHooks({data:t,hooks:s}){return Object.keys(t).reduce((t,e)=>(t[e]=s[e]||[],t[e].push(s=>{var t;this.dependencyTree&&null!=(t=this.dependencyTree[e])&&t.forEach(({el:t,attribute:e})=>{e?t.setAttribute(e,s):t.innerText=s})}),t),{})}addListeners(){this.querySelectorAll(\"[lfbind]\").forEach(t=>{const[e,s]=t.getAttribute(\"lfbind\").split(\":\");t.addEventListener(s,t=>{this.state[e]=t.detail||t.target.value})}),this.querySelectorAll(\"[lfhandle]\").forEach(t=>{const[e,s]=t.getAttribute(\"lfhandle\").split(\":\");t.addEventListener(s,t=>{this.handlers[e].call(this,t),t.stopImmediatePropagation()})})}};window.customElements.define(t,r)}function getImplicitVariables(t,e){const s=new Set;return null!=(t=t.match(/{{([^}}]*)}}/gm))&&t.forEach(t=>{t=t.replace(\"{{\",\"\").replace(\"}}\",\"\");s.add(t)}),Object.keys(e).forEach(t=>s.add(t)),Array.from(s)}\n\n//# sourceURL=webpack://frontend/./node_modules/lil-framework/dist/lilComponent.js?");

/***/ }),

/***/ "./node_modules/lil-framework/dist/parseTemplate.js":
/*!**********************************************************!*\
  !*** ./node_modules/lil-framework/dist/parseTemplate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseTemplate: () => (/* binding */ parseTemplate)\n/* harmony export */ });\nfunction parseTemplate(e,p){var a;let r=e;null!=(a=e.match(/[a-zA-Z-]*=\"{{[^}}]*}}\"/gm))&&a.forEach(e=>{var[a,l]=e.split(\"=\"),l=l.replace('\"{{',\"\").replace('}}\"',\"\"),l=`has-lfdeps lfdep-${a}-${l} ${a}=\"${null!=(a=p[l])?a:\"\"}\"`;r=r.replace(e,l)});return null!=(a=e.match(/{{[^}}]*}}/gm))&&a.forEach(e=>{var a=e.replace(\"{{\",\"\").replace(\"}}\",\"\"),a=`<span has-lfdeps lfdep--${a}>${null!=(a=p[a])?a:\"\"}</span>`;r=r.replace(e,a)}),r}\n\n//# sourceURL=webpack://frontend/./node_modules/lil-framework/dist/parseTemplate.js?");

/***/ }),

/***/ "./node_modules/lil-framework/dist/stateObject.js":
/*!********************************************************!*\
  !*** ./node_modules/lil-framework/dist/stateObject.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stateObject: () => (/* binding */ stateObject)\n/* harmony export */ });\nfunction stateObject(n,t){const{data:e={},hooks:r={}}=t;return new Proxy(e,{get(t,e){return\"addHook\"===e?(t,e)=>{r[t]||(r[t]=[]),r[t].push(e)}:Reflect.get(t,e)},set(t,e,o){const c=t[e];return Reflect.set(t,e,o),null!=(t=r[e])&&t.forEach(t=>t.call(n,o,c)),o}})}\n\n//# sourceURL=webpack://frontend/./node_modules/lil-framework/dist/stateObject.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontend/./src/styles/main.scss?");

/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/components */ \"./src/scripts/ui/components/index.ts\");\n/* harmony import */ var _ui_views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/views */ \"./src/scripts/ui/views/index.ts\");\n\n\nconsole.log(\"In the main script\");\n\n\n//# sourceURL=webpack://frontend/./src/scripts/main.ts?");

/***/ }),

/***/ "./src/scripts/state/globalState.ts":
/*!******************************************!*\
  !*** ./src/scripts/state/globalState.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   globalState: () => (/* binding */ globalState)\n/* harmony export */ });\n/* harmony import */ var lil_framework_dist_stateObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework/dist/stateObject */ \"./node_modules/lil-framework/dist/stateObject.js\");\n// @ts-ignore\n\nconst globalContext = {};\nconst globalState = (0,lil_framework_dist_stateObject__WEBPACK_IMPORTED_MODULE_0__.stateObject)(globalContext, {\n    data: {\n        socket: createSocket.call(globalContext),\n    },\n});\nfunction createSocket() {\n    // Initialize WebSocket connection to localhost:3210\n    const socket = new WebSocket(\"ws://localhost:3210\");\n    this.messages || (this.messages = []);\n    // Event listener for when a message is received\n    socket.onmessage = (event) => {\n        console.log(\"got a message\");\n        // Append received message to this.messages\n        this.messages = [...this.messages, event];\n    };\n    // Event listener for WebSocket connection errors\n    socket.onerror = (error) => {\n        console.error(\"WebSocket Error:\", error);\n    };\n    // Event listener for when the WebSocket connection is closed\n    socket.onclose = (event) => {\n        console.log(\"WebSocket connection closed:\", event);\n    };\n    // Event listener for when the WebSocket connection is established\n    socket.onopen = () => {\n        console.log(\"WebSocket connection established\");\n    };\n    // Return the WebSocket instance\n    return socket;\n}\n\n\n//# sourceURL=webpack://frontend/./src/scripts/state/globalState.ts?");

/***/ }),

/***/ "./src/scripts/ui/components/ain-input.ts":
/*!************************************************!*\
  !*** ./src/scripts/ui/components/ain-input.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n\nconst name = \"ain-input\";\nconst template = /*html*/ `\n<style>\n  ain-input {\n    position: relative;\n  }\n  ain-input textarea {\n    width: 600px;\n    height: 300px;\n    padding: 10px;\n    font-size: 1.2em;\n  }\n  ain-input button {\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n    font-size: 1.2em;\n    padding: 3px 6px;\n    cursor: pointer;\n  }\n</style>\n<textarea lfhandle=\"checkEnter:keyup\" lfbind=\"textAreaValue:input\"></textarea>\n<button lfhandle=\"submitText:click\">✨</button>\n`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    data: {\n        buttonDisabled: true,\n    },\n    hooks: {\n        mounted: [function () {\n                this.textarea = this.querySelector(\"textarea\");\n                this.textarea.addEventListener(\"keydown\", (event) => {\n                    if (event.key === \"Shift\") {\n                        this.state.shiftDown = true;\n                    }\n                });\n            }]\n    },\n    handlers: {\n        checkEnter(event) {\n            if (event.key === \"Shift\") {\n                this.state.shiftDown = false;\n            }\n            else if (event.key === \"Enter\" && !this.state.shiftDown && this.state.textAreaValue) {\n                console.log(\"dispatching event\");\n                this.dispatchEvent(new CustomEvent(\"submitText\", { detail: this.state.textAreaValue }));\n                this.textarea.value = \"\";\n            }\n        },\n        submitText() {\n            console.log(\"dispatching event\", this.state.textAreaValue);\n            if (!this.state.textAreaValue) {\n                return;\n            }\n            this.dispatchEvent(new CustomEvent(\"submitText\", { detail: this.state.textAreaValue }));\n            console.log(this.querySelector(\"textarea\"));\n            this.textarea.value = \"\";\n        }\n    }\n});\n\n\n//# sourceURL=webpack://frontend/./src/scripts/ui/components/ain-input.ts?");

/***/ }),

/***/ "./src/scripts/ui/components/index.ts":
/*!********************************************!*\
  !*** ./src/scripts/ui/components/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ain_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ain-input */ \"./src/scripts/ui/components/ain-input.ts\");\n\n\n\n//# sourceURL=webpack://frontend/./src/scripts/ui/components/index.ts?");

/***/ }),

/***/ "./src/scripts/ui/views/index.ts":
/*!***************************************!*\
  !*** ./src/scripts/ui/views/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _write_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./write-view */ \"./src/scripts/ui/views/write-view.ts\");\n\n\n\n//# sourceURL=webpack://frontend/./src/scripts/ui/views/index.ts?");

/***/ }),

/***/ "./src/scripts/ui/views/write-view.ts":
/*!********************************************!*\
  !*** ./src/scripts/ui/views/write-view.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n/* harmony import */ var _state_globalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/globalState */ \"./src/scripts/state/globalState.ts\");\n\n\nconst name = \"write-view\";\nconst template = /*html*/ `\n<style>\n  write-view {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n</style>\n<ain-input lfhandle=\"submitText:submitText\"></ain-input>`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    handlers: {\n        submitText({ detail: text }) {\n            console.log(\"sending\", _state_globalState__WEBPACK_IMPORTED_MODULE_1__.globalState.socket, text);\n            const socket = _state_globalState__WEBPACK_IMPORTED_MODULE_1__.globalState.socket;\n            socket.send(text);\n        }\n    }\n});\n\n\n//# sourceURL=webpack://frontend/./src/scripts/ui/views/write-view.ts?");

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
/******/ 	__webpack_require__("./src/scripts/main.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/main.scss");
/******/ 	
/******/ })()
;