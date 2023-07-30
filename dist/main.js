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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./util.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/* eslint-disable max-len */\n/* eslint-disable operator-linebreak */\n/* eslint-disable no-plusplus */\n\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard(name, size) {\n    _classCallCheck(this, Gameboard);\n    this.size = size;\n    this.name = name;\n    this.gameboard = this.createBoard();\n    this.occupied = new Set();\n    this.hits = new Set();\n    this.ships = [];\n  }\n  _createClass(Gameboard, [{\n    key: \"createBoard\",\n    value: function createBoard() {\n      var arr = [];\n      for (var i = 0; i < this.size; i++) {\n        arr.push([]);\n        for (var j = 0; j < this.size; j++) {\n          arr[i].push(0);\n        }\n      }\n      return arr;\n    }\n  }, {\n    key: \"moveIsValid\",\n    value: function moveIsValid(row, col, ship) {\n      for (var i = 0; i < ship.len; i++) {\n        if (!ship.isVertical && col + i >= this.size || this.occupied.has(\"\".concat(row, \",\").concat(col + i))) {\n          return false;\n        }\n        if (ship.isVertical && row + i >= this.size || this.occupied.has(\"\".concat(row + i, \",\").concat(col))) {\n          return false;\n        }\n      }\n      return true;\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip(row, col, ship) {\n      for (var i = 0; i < ship.len; i++) {\n        if (!ship.isVertical) {\n          this.gameboard[row][col + i] = \"\".concat(ship.name[0]);\n          this.occupied.add(\"\".concat(row, \",\").concat(col + i));\n        }\n        if (ship.isVertical) {\n          this.gameboard[row + i][col] = \"\".concat(ship.name[0]);\n          this.occupied.add(\"\".concat(row + i, \",\").concat(col));\n        }\n      }\n      return 'ship placed';\n    }\n  }, {\n    key: \"placeRandom\",\n    value: function placeRandom(arr) {\n      var _this = this;\n      arr.forEach(function (ship) {\n        var placed = false;\n        while (!placed) {\n          var position = (0,_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.size);\n          ship.isVertical = Math.random() < 0.5;\n          if (_this.moveIsValid(position.row, position.col, ship)) {\n            _this.placeShip(position.row, position.col, ship);\n            placed = true;\n          }\n        }\n      });\n      return true;\n    }\n  }, {\n    key: \"randomHit\",\n    value: function randomHit() {\n      var hit = false;\n      while (!hit) {\n        var position = (0,_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.size);\n        if (!this.hits.has(\"\".concat(position.row, \",\").concat(position.col))) {\n          // eslint-disable-next-line no-continue\n          this.receveAttack(position.row, position.col);\n          this.hits.add(\"\".concat(position.row, \",\").concat(position.col));\n          hit = true;\n        }\n      }\n      return true;\n    }\n  }, {\n    key: \"receveAttack\",\n    value: function receveAttack(row, col) {\n      if (this.hits.has(\"\".concat(row, \",\").concat(col))) return false;\n      if (this.gameboard[row][col] !== 0) {\n        var shipId = this.gameboard[row][col];\n        var res = this.ships.filter(function (ship) {\n          return ship.id === shipId;\n        });\n        res[0].hit(res[0], true);\n        res[0].destroyed(res[0]);\n        this.hits.add(\"\".concat(row, \",\").concat(col));\n        return true;\n      }\n      return false;\n    }\n  }]);\n  return Gameboard;\n}();\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nvar player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('player');\nvar playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](player.name, 10);\nconsole.log(playerBoard.size);\nvar cpu = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('computer');\nvar cpuBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cpu.name, 10);\nfunction displayBoard() {\n  var container = document.querySelector('.main');\n  for (var row = 0; row < playerBoard.size; row++) {\n    for (var col = 0; col < playerBoard.size; col++) {\n      var cell = document.createElement('div');\n      cell.className = 'cell';\n      cell.dataset.row = row;\n      cell.dataset.col = col;\n      container.appendChild(cell);\n    }\n  }\n}\ndisplayBoard();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Player = /*#__PURE__*/_createClass(function Player(name) {\n  _classCallCheck(this, Player);\n  this.name = name;\n  this.fleet = [new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Carrier', 5), new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Battleship', 4), new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Submarine', 3), new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Destroyer', 3), new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Patrol ship', 2)];\n});\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/* eslint-disable class-methods-use-this */\n/* eslint-disable no-unused-expressions */\nvar Ship = /*#__PURE__*/function () {\n  function Ship(name, len) {\n    _classCallCheck(this, Ship);\n    this.name = name;\n    // eslint-disable-next-line prefer-destructuring\n    this.id = name[0];\n    this.len = len;\n    this.isSunk = false;\n    this.isVertical = false;\n  }\n  _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit(ship) {\n      var isHit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      isHit ? ship.len -= 1 : ship.len;\n      return ship.len;\n    }\n  }, {\n    key: \"destroyed\",\n    value: function destroyed(ship) {\n      ship.len === 0 ? ship.isSunk = true : ship.isSunk = false;\n      return ship.isSunk;\n    }\n  }]);\n  return Ship;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getRandomPosition)\n/* harmony export */ });\nfunction getRandomPosition(size) {\n  return {\n    row: Math.floor(Math.random() * size),\n    col: Math.floor(Math.random() * size)\n  };\n}\n\n//# sourceURL=webpack://battleship/./util.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;